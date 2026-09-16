import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Droplets, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('arun@aquaguard.io');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => { e.preventDefault(); navigate('/dashboard'); };

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 p-12 text-white" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2a4a 60%, #0e3a6e 100%)' }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center">
            <Droplets size={22} className="text-white" />
          </div>
          <div>
            <div className="font-bold text-lg">AquaGuard AI</div>
            <div className="text-sky-300 text-xs">Predictive Pipeline Maintenance</div>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Predict pipeline failures<br />
            <span className="text-sky-400">before they happen.</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            AI-powered predictive maintenance for smarter and safer water distribution.
          </p>

          {/* Illustration */}
          <div className="relative mt-8">
            <svg viewBox="0 0 480 220" className="w-full opacity-80">
              {/* Pipeline */}
              <rect x="20" y="100" width="440" height="20" rx="10" fill="#1e4976" />
              <rect x="20" y="100" width="440" height="20" rx="10" fill="none" stroke="#0ea5e9" strokeWidth="1.5" />
              {/* Flow animation */}
              <rect x="20" y="104" width="60" height="12" rx="6" fill="#0ea5e9" opacity="0.4">
                <animateTransform attributeName="transform" type="translate" values="0,0;380,0;0,0" dur="4s" repeatCount="indefinite" />
              </rect>
              {/* Sensors */}
              {[100, 220, 340].map((x, i) => (
                <g key={i}>
                  <rect x={x - 12} y="70" width="24" height="30" rx="4" fill="#1e4976" stroke="#0ea5e9" strokeWidth="1.5" />
                  <line x1={x} y1="100" x2={x} y2="70" stroke="#0ea5e9" strokeWidth="1.5" />
                  <circle cx={x} cy="60" r="10" fill="#0ea5e9" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur={`${1.5 + i * 0.5}s`} repeatCount="indefinite" />
                  </circle>
                  <text x={x} y="63" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="8" fontWeight="bold">
                    {i === 0 ? 'P' : 'F'}
                  </text>
                </g>
              ))}
              {/* ESP32 */}
              <rect x="190" y="140" width="100" height="50" rx="8" fill="#1e4976" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="240" y="162" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">ESP32</text>
              <text x="240" y="176" textAnchor="middle" fill="#94a3b8" fontSize="8">Gateway</text>
              {/* AI box */}
              <rect x="340" y="140" width="100" height="50" rx="8" fill="#1e4976" stroke="#6366f1" strokeWidth="1.5" />
              <text x="390" y="162" textAnchor="middle" fill="#818cf8" fontSize="9" fontWeight="bold">RF/XGBoost</text>
              <text x="390" y="176" textAnchor="middle" fill="#94a3b8" fontSize="8">AI Model</text>
              {/* Connections */}
              <line x1="290" y1="165" x2="340" y2="165" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 2" />
              <line x1="240" y1="120" x2="240" y2="140" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 2" />
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4">
            {[['Real-time', 'Sensor Monitoring'], ['AI-Powered', 'Leak Prediction'], ['SHAP', 'Explainability']].map(([t, s]) => (
              <div key={t} className="bg-white/5 rounded-xl p-3 border border-white/10">
                <div className="text-sky-400 font-bold text-sm">{t}</div>
                <div className="text-slate-400 text-xs">{s}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-slate-500 text-xs">© 2026 AquaGuard AI — Prototype v1.0 · Mock data only</p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-8 bg-slate-50">
        <div className="w-full max-w-sm">
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
              <Droplets size={18} className="text-white" />
            </div>
            <span className="font-bold text-slate-800">AquaGuard AI</span>
          </div>

          <div className="card shadow-lg">
            <h2 className="text-xl font-bold text-slate-800 mb-1">Welcome back</h2>
            <p className="text-slate-500 text-sm mb-6">Sign in to your monitoring dashboard</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-medium text-slate-600 block mb-1">Email address</label>
                <input type="email" className="input-field" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600 block mb-1">Password</label>
                <div className="relative">
                  <input type={showPw ? 'text' : 'password'} className="input-field pr-10" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" />
                  <button type="button" onClick={() => setShowPw(v => !v)} className="absolute right-3 top-2.5 text-slate-400">
                    {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} className="rounded" />
                Remember me
              </label>
              <button type="submit" className="btn-primary w-full py-2.5 text-base">Sign In</button>
            </form>

            <div className="mt-4 pt-4 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-500 mb-2">Demo Mode</p>
              <button onClick={() => navigate('/dashboard')} className="w-full py-2 rounded-lg border-2 border-dashed border-sky-200 text-sky-600 text-sm font-medium hover:bg-sky-50 transition-colors">
                Continue with Demo Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
