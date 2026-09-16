import { useState } from 'react';
import { Bell, Menu, ChevronDown, X, CheckCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function TopNavbar({ onMenuToggle, title }) {
  const { notifications, markAllRead } = useApp();
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();
  const unread = notifications.filter(n => !n.read).length;
  const now = new Date().toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <header className="bg-white border-b border-slate-100 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <button onClick={onMenuToggle} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500">
          <Menu size={20} />
        </button>
        {title && <h1 className="text-slate-800 font-semibold text-base hidden sm:block">{title}</h1>}
      </div>

      <div className="flex items-center gap-2">
        {/* Demo badge */}
        <span className="hidden sm:inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full" title="Displaying simulated sensor and AI prediction data.">
          DEMO MODE
        </span>

        <span className="text-slate-400 text-xs hidden md:block">{now}</span>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => { setShowNotif(v => !v); setShowProfile(false); }}
            className="relative p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
          >
            <Bell size={20} />
            {unread > 0 && (
              <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                {unread}
              </span>
            )}
          </button>
          {showNotif && (
            <div className="absolute right-0 top-10 w-80 bg-white rounded-xl shadow-xl border border-slate-100 z-50">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                <span className="font-semibold text-sm text-slate-800">Notifications</span>
                <div className="flex items-center gap-2">
                  <button onClick={markAllRead} className="text-xs text-sky-500 hover:underline flex items-center gap-1"><CheckCheck size={12} />Mark all read</button>
                  <button onClick={() => setShowNotif(false)}><X size={16} className="text-slate-400" /></button>
                </div>
              </div>
              <div className="divide-y divide-slate-50 max-h-72 overflow-y-auto">
                {notifications.map(n => (
                  <div key={n.id} className={`px-4 py-3 text-sm ${n.read ? 'opacity-60' : ''}`}>
                    <div className="flex items-start gap-2">
                      {!n.read && <span className="w-2 h-2 rounded-full bg-sky-500 mt-1.5 flex-shrink-0" />}
                      {n.read && <span className="w-2 h-2 mt-1.5 flex-shrink-0" />}
                      <div>
                        <p className="text-slate-700">{n.text}</p>
                        <p className="text-slate-400 text-xs mt-0.5">{n.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => { setShowProfile(v => !v); setShowNotif(false); }}
            className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-lg hover:bg-slate-100"
          >
            <div className="w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center text-white text-xs font-bold">AK</div>
            <ChevronDown size={14} className="text-slate-400 hidden sm:block" />
          </button>
          {showProfile && (
            <div className="absolute right-0 top-10 w-48 bg-white rounded-xl shadow-xl border border-slate-100 z-50 py-1">
              <div className="px-4 py-2 border-b border-slate-100">
                <p className="text-sm font-semibold text-slate-800">Arun Kumar</p>
                <p className="text-xs text-slate-500">Sr. Maintenance Engineer</p>
              </div>
              <button onClick={() => { navigate('/settings'); setShowProfile(false); }} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Settings</button>
              <button onClick={() => navigate('/')} className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-slate-50">Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
