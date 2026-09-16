import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, GitBranch, AlertTriangle, Wrench,
  Radio, ClipboardList, Settings2, LogOut, Droplets, User
} from 'lucide-react';

const links = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/pipelines', icon: GitBranch, label: 'Pipeline Monitoring' },
  { to: '/repair-priority', icon: Wrench, label: 'Repair Priority' },
  { to: '/alerts', icon: AlertTriangle, label: 'AI Alerts' },
  { to: '/sensors', icon: Radio, label: 'Sensor Data' },
  { to: '/maintenance', icon: ClipboardList, label: 'Maintenance Logs' },
  { to: '/configuration', icon: Settings2, label: 'Alert Configuration' },
];

export default function Sidebar({ collapsed, onClose }) {
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile overlay */}
      {!collapsed && (
        <div className="fixed inset-0 bg-black/40 z-20 lg:hidden" onClick={onClose} />
      )}
      <aside className={`
        fixed top-0 left-0 h-full z-30 flex flex-col
        bg-navy-900 transition-all duration-300
        ${collapsed ? '-translate-x-full lg:translate-x-0 lg:w-16' : 'translate-x-0 w-64'}
        lg:relative lg:flex-shrink-0
      `}
        style={{ backgroundColor: '#0a1628' }}
      >
        {/* Logo */}
        <div className={`flex items-center gap-3 px-4 py-5 border-b border-white/10 ${collapsed ? 'lg:justify-center lg:px-2' : ''}`}>
          <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center flex-shrink-0">
            <Droplets size={18} className="text-white" />
          </div>
          {!collapsed && (
            <div>
              <div className="text-white font-bold text-sm leading-tight">AquaGuard AI</div>
              <div className="text-slate-400 text-xs">Pipeline Maintenance</div>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {links.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150
                ${isActive
                  ? 'bg-sky-500 text-white'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }
                ${collapsed ? 'lg:justify-center lg:px-2' : ''}`
              }
              title={collapsed ? label : undefined}
            >
              <Icon size={18} className="flex-shrink-0" />
              {!collapsed && <span>{label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Bottom */}
        <div className="border-t border-white/10 p-3 space-y-1">
          <NavLink
            to="/settings"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
              ${isActive ? 'bg-sky-500 text-white' : 'text-slate-300 hover:bg-white/10 hover:text-white'}
              ${collapsed ? 'lg:justify-center lg:px-2' : ''}`
            }
            title={collapsed ? 'Settings' : undefined}
          >
            <User size={18} className="flex-shrink-0" />
            {!collapsed && (
              <div className="min-w-0">
                <div className="text-white text-xs font-semibold truncate">Arun Kumar</div>
                <div className="text-slate-400 text-xs truncate">Sr. Maintenance Engineer</div>
              </div>
            )}
          </NavLink>
          <button
            onClick={() => navigate('/')}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:bg-white/10 hover:text-white text-sm transition-all ${collapsed ? 'lg:justify-center lg:px-2' : ''}`}
            title={collapsed ? 'Logout' : undefined}
          >
            <LogOut size={18} className="flex-shrink-0" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
