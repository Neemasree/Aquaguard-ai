# 💧 AquaGuard AI

### Explainable Predictive Maintenance for Water Distribution Pipelines

> **Frontend Prototype** — Built with React + Vite + Tailwind CSS + Recharts

---

## 📌 Overview

AquaGuard AI is a professional SaaS-style dashboard prototype for an AI-powered water pipeline predictive maintenance system. It simulates real-time monitoring of pressure and flow sensor data, predicts leak risk using a mock RF/XGBoost model, and explains predictions using SHAP-style feature contributions.

This is a **frontend-only prototype** using realistic mock data. No backend, database, or real ML model is connected.

---

## 🎯 Key Features

| Feature | Description |
|---|---|
| 📊 **Pipeline Health Index (PHI)** | Circular gauge showing overall pipeline health (0–100) |
| 🔴 **Leak Risk Prediction** | AI-predicted leak probability per pipeline segment |
| ⏱️ **Time-to-Failure Estimate** | Estimated hours/days until potential failure |
| 🧠 **SHAP Explainability** | Visual feature contribution chart explaining each prediction |
| 🔧 **Repair Priority Ranking** | AI-ranked maintenance queue by urgency and risk |
| 📡 **Sensor Monitoring** | Real-time pressure & flow sensor status (ESP32 gateway) |
| 📋 **Maintenance Logs** | Log and track maintenance actions with modal form |
| ⚙️ **Alert Configuration** | Configure risk thresholds and notification toggles |
| 🗺️ **Pipeline Network View** | SVG schematic of the pipeline network with live status colors |

---

## 🖥️ Pages

```
/               → Login
/dashboard      → Main Dashboard (KPIs, charts, alerts, network map)
/pipelines      → Pipeline Monitoring (searchable, filterable table)
/pipelines/:id  → Pipeline Details (charts, AI prediction, SHAP, actions)
/alerts         → AI Alerts list
/alerts/:id     → Alert Details (SHAP explanation, action buttons)
/repair-priority → Repair Priority ranking table + bar chart
/sensors        → Sensor Data (ESP32 status, sensor cards, readings table)
/maintenance    → Maintenance Logs (table + add record modal)
/configuration  → Alert Configuration (thresholds + notification toggles)
/settings       → Settings (profile, preferences, system info)
```

---

## 🏗️ System Architecture (Represented in UI)

```
Pressure + Flow Sensors
        ↓
     ESP32 Gateway
        ↓
   Server / Database
        ↓
  RF / XGBoost ML Model
        ↓
   SHAP Explainability
        ↓
      Risk Score
        ↓
  Repair Priority Queue
        ↓
  Maintenance Dashboard
```

---

## 🎨 Design System

- **Primary palette:** Deep navy (`#0a1628`) + Water blue (`#0ea5e9`)
- **Status colors:** Green (Healthy) · Amber (Warning) · Orange (High Risk) · Red (Critical)
- **Typography:** Clean sans-serif, data-focused layout
- **Components:** Rounded cards, subtle shadows, professional charts
- **Style:** Industrial IoT monitoring platform aesthetic

---

## 🧩 Component Structure

```
src/
├── components/
│   ├── Sidebar.jsx          # Persistent left navigation
│   ├── TopNavbar.jsx        # Header with notifications & profile
│   ├── Charts.jsx           # PressureChart, FlowChart, PhiHistoryChart
│   ├── ShapExplanation.jsx  # SHAP-style horizontal bar chart
│   ├── PipelineNetwork.jsx  # SVG pipeline schematic map
│   ├── MaintenanceModal.jsx # Add maintenance record modal
│   ├── Toast.jsx            # Success/error toast notifications
│   └── ui.jsx               # StatusBadge, RiskBadge, PhiGauge, KpiCard
├── context/
│   └── AppContext.jsx       # Global state (logs, toasts, notifications)
├── data/
│   └── mockData.js          # All mock pipelines, alerts, sensors, time-series
├── pages/
│   ├── Login.jsx
│   ├── Layout.jsx
│   ├── Dashboard.jsx
│   ├── PipelineMonitoring.jsx
│   ├── PipelineDetails.jsx
│   ├── Alerts.jsx
│   ├── AlertDetails.jsx
│   ├── RepairPriority.jsx
│   ├── SensorData.jsx
│   ├── MaintenanceLogs.jsx
│   ├── AlertConfiguration.jsx
│   └── Settings.jsx
├── App.jsx                  # React Router routes
└── main.jsx
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Neemasree/Aquaguard-ai.git
cd Aquaguard-ai

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🔐 Demo Login

On the login page, click **"Continue with Demo Account"** to skip authentication and go directly to the dashboard.

Or use any email/password — no real auth is implemented.

---

## 📊 Mock Data

The prototype includes realistic mock data for:

- **12 pipeline segments** (P01–P12) across Central, North, South, East, West zones
- **5 active AI alerts** with risk levels and SHAP explanations
- **5 maintenance log entries**
- **14 sensors** (pressure + flow) with online/offline status
- **Time-series data** generated dynamically for pressure and flow charts
- **Pipeline P04 (North Zone)** is pre-configured as the critical demo pipeline

---

## 🧠 AI Explainability (SHAP Mock)

For each high-risk pipeline, the dashboard shows:

```
AI Prediction → Risk Score → Top Contributing Factors → SHAP Chart → Recommended Action
```

Example feature contributions for P04:

| Feature | Contribution |
|---|---|
| Pressure Drop Rate | +0.38 (↑ increases risk) |
| Flow Anomaly | +0.24 (↑ increases risk) |
| Pressure Variance | +0.16 (↑ increases risk) |
| Recent Fluctuation | +0.09 (↑ increases risk) |
| Temperature | -0.03 (↓ decreases risk) |

> ⚠️ All AI predictions and SHAP values are **simulated mock data** for prototype demonstration purposes only.

---

## 🎬 Demo Flow

Follow this path to showcase the full system:

1. **Login** → Click "Continue with Demo Account"
2. **Dashboard** → See P04 flagged as Critical
3. **Pipeline Monitoring** → Click on P04
4. **Pipeline Details** → View pressure/flow charts showing the drop
5. **AI Prediction** → Leak Risk 82%, Time-to-Failure 18 hours
6. **SHAP Explanation** → See why the model flagged it
7. **Recommended Action** → Click "Log Maintenance Action"
8. **Repair Priority** → P04 appears as #1
9. **Maintenance Logs** → New record appears in the table

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS v3 | Utility-first styling |
| Recharts | Charts (line, bar) |
| React Router v6 | Client-side routing |
| Lucide React | Icon library |

---

## 👤 Target Users

- **Maintenance Engineer** — Monitors pipelines, reviews alerts, logs maintenance actions
- **Utility Dashboard Admin** — Configures thresholds, reviews system health

---

## ⚠️ Disclaimer

This is a **frontend prototype** built for academic/demonstration purposes.

- No real sensors, ESP32 devices, or IoT hardware are connected
- No backend API, database, or authentication system exists
- All AI predictions, SHAP values, and sensor readings are **simulated mock data**
- Do not use for real infrastructure monitoring decisions

---

## 📄 License

MIT License — Free to use for academic and demonstration purposes.

---

<div align="center">
  <strong>AquaGuard AI</strong> · Prototype v1.0 · Built with ❤️ for smarter water infrastructure
</div>
