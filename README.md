# 💧 AquaGuard AI

### Explainable Predictive Maintenance for Water Distribution Pipelines

---

## 📁 Project Structure

```
aquaguard-ai/
├── frontend/          # React + Vite + Tailwind CSS frontend
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   └── pages/
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── backend/           # Backend service (coming soon)
    └── README.md
```

---

## 🚀 Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

Click **"Continue with Demo Account"** to enter the dashboard.

### Backend

Coming soon — will include ML model API, sensor data ingestion, and SHAP explanation service.

---

## 🎯 Key Features

| Feature | Description |
|---|---|
| 📊 **Pipeline Health Index** | Circular gauge showing overall pipeline health (0–100) |
| 🔴 **Leak Risk Prediction** | AI-predicted leak probability per pipeline segment |
| ⏱️ **Time-to-Failure Estimate** | Estimated hours/days until potential failure |
| 🧠 **SHAP Explainability** | Visual feature contribution chart explaining each prediction |
| 🔧 **Repair Priority Ranking** | AI-ranked maintenance queue by urgency and risk |
| 📡 **Sensor Monitoring** | Real-time pressure & flow sensor status |
| 📋 **Maintenance Logs** | Log and track maintenance actions |
| ⚙️ **Alert Configuration** | Configure risk thresholds and notification toggles |
| 🗺️ **Pipeline Network View** | SVG schematic of the pipeline network with live status |

---

## 🖥️ Pages

```
/               → Login
/dashboard      → Main Dashboard
/pipelines      → Pipeline Monitoring
/pipelines/:id  → Pipeline Details
/alerts         → AI Alerts
/alerts/:id     → Alert Details
/repair-priority → Repair Priority
/sensors        → Sensor Data
/maintenance    → Maintenance Logs
/configuration  → Alert Configuration
/settings       → Settings
```

---

## 🏗️ System Architecture

```
Pressure + Flow Sensors
        ↓
     IoT Gateway
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

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS v3 | Utility-first styling |
| Recharts | Charts (line, bar) |
| React Router v6 | Client-side routing |
| Lucide React | Icon library |

### Backend (Planned)
| Technology | Purpose |
|---|---|
| Python / FastAPI | REST API |
| scikit-learn | RF / XGBoost model |
| SHAP | Explainability |
| PostgreSQL | Database |

---

## 🎬 Demo Flow

1. Login → Click "Continue with Demo Account"
2. Dashboard → See P04 flagged as Critical
3. Pipeline Monitoring → Click on P04
4. Pipeline Details → View pressure/flow charts
5. AI Prediction → Leak Risk 82%, Time-to-Failure 18 hours
6. SHAP Explanation → See why the model flagged it
7. Repair Priority → P04 appears as #1
8. Log Maintenance → Record appears in Maintenance Logs

---

## ⚠️ Disclaimer

This is a **frontend prototype** using simulated mock data.
No real sensors, ML models, or databases are connected.

---

## 📄 License

MIT License — Free to use for academic and demonstration purposes.

<div align="center">
  <strong>AquaGuard AI</strong> · Prototype v1.0
</div>
