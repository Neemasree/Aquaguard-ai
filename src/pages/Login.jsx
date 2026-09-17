import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Droplets, Eye, EyeOff, ShieldCheck, Activity, BarChart3, Zap } from 'lucide-react';

const features = [
  { icon: Activity, title: 'Real-time Monitoring', desc: 'Continuous pressure & flow tracking across all pipeline segments' },
  { icon: ShieldCheck, title: 'Leak Risk Prediction', desc: 'AI model predicts failure probability before it occurs' },
  { icon: BarChart3, title: 'Explainable AI', desc: 'SHAP-based explanations show exactly why a risk was flagged' },
  { icon: Zap, title: 'Repair Prioritization', desc: 'Automatically ranks pipelines by urgency and predicted impact' },
];

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('arun@aquaguard.io');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => { e.preventDefault(); navigate('/dashboard'); };

  return (
    <div className="min-h-screen flex">

      {/* ── Left Panel ─────────────────────────────────── */}
      <div
        className="hidden lg:flex flex-col justify-between w-[55%] p-14 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(145deg, #0a1628 0%, #0c2040 50%, #0a1e3d 100%)' }}
      >
        {/* Background decorative circles */}
        <div className="absolute top-[-80px] right-[-80px] w-72 h-72 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #0ea5e9, transparent)' }} />
        <div className="absolute bottom-[-60px] left-[-60px] w-56 h-56 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />

        {/* Logo */}
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center shadow-lg">
            <Droplets size={22} className="text-white" />
          </div>
          <div>
            <div className="font-bold text-lg tracking-tight">AquaGuard AI</div>
            <div className="text-sky-400 text-xs">Predictive Pipeline Maintenance</div>
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-8 relative z-10">
          {/* Headline */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-300 text-xs font-medium">AI-Powered Infrastructure Monitoring</span>
            </div>
            <h1 className="text-5xl font-bold leading-tight tracking-tight">
              Predict pipeline<br />
              failures <span className="text-sky-400">before</span><br />
              they happen.
            </h1>
            <p className="text-slate-400 text-base leading-relaxed max-w-md">
              Intelligent predictive maintenance for water distribution networks —
              combining real-time data analysis with explainable AI to keep infrastructure safe.
            </p>
          </div>

          {/* Central SVG illustration — pipeline schematic, no hardware names */}
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
            <svg viewBox="0 0 500 180" className="w-full">
              {/* Main horizontal pipe */}
              <rect x="30" y="82" width="440" height="16" rx="8" fill="#1e3a5f" stroke="#1e6fa8" strokeWidth="1" />

              {/* Animated flow inside pipe */}
              <rect x="30" y="85" width="55" height="10" rx="5" fill="#0ea5e9" opacity="0.35">
                <animateTransform attributeName="transform" type="translate" values="0,0;390,0;0,0" dur="5s" repeatCount="indefinite" />
              </rect>

              {/* Vertical branch pipes */}
              <rect x="118" y="40" width="8" height="42" rx="4" fill="#1e3a5f" stroke="#1e6fa8" strokeWidth="1" />
              <rect x="238" y="40" width="8" height="42" rx="4" fill="#1e3a5f" stroke="#1e6fa8" strokeWidth="1" />
              <rect x="358" y="40" width="8" height="42" rx="4" fill="#1e3a5f" stroke="#1e6fa8" strokeWidth="1" />

              {/* Sensor nodes — just circles, no labels */}
              {[122, 242, 362].map((cx, i) => (
                <g key={i}>
                  <circle cx={cx} cy="28" r="14" fill="#0f2744" stroke="#0ea5e9" strokeWidth="1.5" />
                  <circle cx={cx} cy="28" r="7" fill="#0ea5e9" opacity="0.9">
                    <animate attributeName="opacity" values="0.9;0.4;0.9" dur={`${1.8 + i * 0.6}s`} repeatCount="indefinite" />
                  </circle>
                  {/* Pulse ring */}
                  <circle cx={cx} cy="28" r="14" fill="none" stroke="#0ea5e9" strokeWidth="1" opacity="0.4">
                    <animate attributeName="r" values="14;22;14" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0;0.4" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
                  </circle>
                </g>
              ))}

              {/* Data flow arrows going down from pipe */}
              <line x1="242" y1="98" x2="242" y2="128" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3">
                <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
              </line>

              {/* Central AI analysis box */}
              <rect x="170" y="128" width="144" height="42" rx="10" fill="#0f2744" stroke="#6366f1" strokeWidth="1.5" />
              <text x="242" y="146" textAnchor="middle" fill="#818cf8" fontSize="10" fontWeight="bold">AI Analysis</text>
              <text x="242" y="160" textAnchor="middle" fill="#64748b" fontSize="9">Risk · Prediction · Explanation</text>

              {/* Side output boxes */}
              <rect x="30" y="135" width="110" height="30" rx="8" fill="#0f2744" stroke="#10b981" strokeWidth="1" />
              <text x="85" y="148" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">Risk Score</text>
              <text x="85" y="159" textAnchor="middle" fill="#64748b" fontSize="8">0 – 100%</text>

              <rect x="360" y="135" width="110" height="30" rx="8" fill="#0f2744" stroke="#f59e0b" strokeWidth="1" />
              <text x="415" y="148" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">Priority Queue</text>
              <text x="415" y="159" textAnchor="middle" fill="#64748b" fontSize="8">Ranked Actions</text>

              {/* Connecting lines to side boxes */}
              <line x1="170" y1="149" x2="140" y2="149" stroke="#10b981" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
              <line x1="314" y1="149" x2="360" y2="149" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
            </svg>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-2 gap-3">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3 bg-white/4 border border-white/8 rounded-xl p-3.5 hover:bg-white/6 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-sky-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={15} className="text-sky-400" />
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">{title}</div>
                  <div className="text-slate-500 text-xs mt-0.5 leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between relative z-10">
          <p className="text-slate-600 text-xs">© 2026 AquaGuard AI · Prototype v1.0</p>
          <span className="text-xs text-slate-600 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            Simulated data only
          </span>
        </div>
      </div>

      {/* ── Right Panel ────────────────────────────────── */}
      <div className="flex-1 flex items-center justify-center p-8 bg-slate-50">
        <div className="w-full max-w-sm">

          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
              <Droplets size={18} className="text-white" />
            </div>
            <span className="font-bold text-slate-800">AquaGuard AI</span>
          </div>

          {/* Login card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Welcome back</h2>
              <p className="text-slate-500 text-sm mt-1">Sign in to your monitoring dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1.5 uppercase tracking-wide">
                  Email address
                </label>
                <input
                  type="email"
                  className="input-field"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1.5 uppercase tracking-wide">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPw ? 'text' : 'password'}
                    className="input-field pr-10"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(v => !v)}
                    className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                  >
                    {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={e => setRemember(e.target.checked)}
                    className="rounded border-slate-300"
                  />
                  Remember me
                </label>
                <button type="button" className="text-xs text-sky-500 hover:underline">
                  Forgot password?
                </button>
              </div>

              <button type="submit" className="btn-primary w-full py-3 text-sm font-semibold mt-2">
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-slate-100" />
              <span className="text-xs text-slate-400">or</span>
              <div className="flex-1 h-px bg-slate-100" />
            </div>

            {/* Demo button */}
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full py-3 rounded-xl border-2 border-dashed border-sky-200 text-sky-600 text-sm font-semibold hover:bg-sky-50 transition-colors flex items-center justify-center gap-2"
            >
              <Droplets size={16} />
              Continue with Demo Account
            </button>

            <p className="text-center text-xs text-slate-400 mt-4">
              Demo mode · All data is simulated
            </p>
          </div>

          {/* Stats below card */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {[['24', 'Pipelines'], ['94%', 'Uptime'], ['5', 'Active Alerts']].map(([val, label]) => (
              <div key={label} className="bg-white rounded-xl border border-slate-100 p-3 text-center shadow-sm">
                <div className="text-lg font-bold text-slate-800">{val}</div>
                <div className="text-xs text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
