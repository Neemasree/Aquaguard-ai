"""
Mock AI Prediction Service for AquaGuard AI.

This module is the ONLY place that produces risk predictions.
When the real ML model (Random Forest / XGBoost + SHAP) is ready,
replace the body of `predict_pipeline_risk()` without touching any route or schema.

Expected interface (must be preserved when swapping to real ML):
    Input:  pipeline_id, pressure (MPa), flow (L/min), + optional extra features
    Output: PredictionResult dict (see TypedDict below)
"""

import random
from typing import TypedDict, List


# ---------------------------------------------------------------------------
# Output contract — keep this stable so routes never need to change
# ---------------------------------------------------------------------------

class ShapFeatureDict(TypedDict):
    feature: str
    impact: float


class PredictionResult(TypedDict):
    pipeline_id: str
    risk_score: float          # 0–100
    risk_level: str            # Low | Medium | High | Critical
    time_to_failure: str       # human-readable estimate
    confidence: float          # 0–100
    shap_explanation: List[ShapFeatureDict]


# ---------------------------------------------------------------------------
# Risk classification helpers
# ---------------------------------------------------------------------------

def _classify_risk(score: float) -> str:
    if score >= 81:
        return "Critical"
    if score >= 61:
        return "High"
    if score >= 31:
        return "Medium"
    return "Low"


def _estimate_time_to_failure(risk_score: float) -> str:
    """Rule-based TTF estimate. Replace with ML regression output later."""
    if risk_score >= 81:
        return "18 hours"
    if risk_score >= 61:
        return "3 days"
    if risk_score >= 31:
        return "7 days"
    return "30+ days"


# ---------------------------------------------------------------------------
# SHAP mock — returns plausible feature attributions that sum to ~1.0
# ---------------------------------------------------------------------------

_SHAP_FEATURES = [
    "Pressure Drop Rate",
    "Flow Anomaly",
    "Pressure Variance",
    "Recent Fluctuation",
    "Historical Fault Rate",
    "Zone Risk Factor",
]


def _mock_shap(risk_score: float) -> List[ShapFeatureDict]:
    """
    Generate mock SHAP values proportional to risk score.
    Higher risk → larger impact values.
    Replace this with real shap.Explainer output when ML is ready.
    """
    rng = random.Random(int(risk_score * 100))   # deterministic per risk score
    weights = sorted([rng.random() for _ in _SHAP_FEATURES], reverse=True)
    total = sum(weights)
    scale = (risk_score / 100) * 0.9             # scale so impacts feel realistic

    features = rng.sample(_SHAP_FEATURES, k=4)  # pick 4 most relevant features
    impacts = [round((w / total) * scale, 3) for w in weights[:4]]

    return [{"feature": f, "impact": i} for f, i in zip(features, impacts)]


# ---------------------------------------------------------------------------
# Per-pipeline mock overrides (mirrors the seed data so /docs demo looks good)
# ---------------------------------------------------------------------------

_MOCK_OVERRIDES: dict[str, dict] = {
    "P04": {"risk_score": 82, "confidence": 91},
    "P11": {"risk_score": 61, "confidence": 84},
    "P07": {"risk_score": 54, "confidence": 78},
    "P09": {"risk_score": 38, "confidence": 72},
    "P05": {"risk_score": 31, "confidence": 69},
    "P06": {"risk_score": 18, "confidence": 88},
    "P10": {"risk_score": 65, "confidence": 82},
    "P03": {"risk_score": 22, "confidence": 90},
    "P08": {"risk_score": 14, "confidence": 86},
    "P02": {"risk_score": 9,  "confidence": 93},
    "P12": {"risk_score": 28, "confidence": 75},
    "P01": {"risk_score": 11, "confidence": 91},
}


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------

def predict_pipeline_risk(
    pipeline_id: str,
    pressure: float,
    flow: float,
    **extra_features,          # future: temperature, vibration, soil_moisture, etc.
) -> PredictionResult:
    """
    Return a risk prediction for a pipeline segment.

    Currently returns MOCK data keyed to pipeline_id.
    Future: pass pressure, flow, and extra_features into a trained model,
    then call shap.Explainer to generate real SHAP values.

    Parameters
    ----------
    pipeline_id : str
        Identifier, e.g. "P04".
    pressure : float
        Latest pressure reading in MPa.
    flow : float
        Latest flow reading in L/min.
    **extra_features
        Reserved for future ML feature expansion.

    Returns
    -------
    PredictionResult
        Dictionary with risk_score, risk_level, time_to_failure,
        confidence, and shap_explanation.
    """
    override = _MOCK_OVERRIDES.get(pipeline_id)

    if override:
        risk_score = float(override["risk_score"])
        confidence = float(override["confidence"])
    else:
        # For unknown pipelines derive a plausible score from readings
        # Pressure anomaly: ideal ~1.0 MPa; deviation raises risk
        pressure_factor = min(abs(1.0 - pressure) * 80, 60)
        # Flow anomaly: ideal ~40 L/min
        flow_factor = min(abs(40.0 - flow) / 40.0 * 40, 40)
        risk_score = round(min(pressure_factor + flow_factor, 100), 1)
        confidence = round(random.uniform(65, 88), 1)

    return PredictionResult(
        pipeline_id=pipeline_id,
        risk_score=risk_score,
        risk_level=_classify_risk(risk_score),
        time_to_failure=_estimate_time_to_failure(risk_score),
        confidence=confidence,
        shap_explanation=_mock_shap(risk_score),
    )
