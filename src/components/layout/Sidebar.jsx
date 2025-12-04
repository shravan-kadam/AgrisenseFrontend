import React from "react";
import { NavLink } from "react-router-dom";

const items = [
  { to: "/register-farm", label: "Register Farm", icon: "grid" },
  { to: "/crop-analysis", label: "Crop Analysis", icon: "leaf" },
  { to: "/weather", label: "Weather", icon: "weather" },
  { to: "/alerts", label: "Alerts", icon: "bell" },
  { to: "/history", label: "History", icon: "clock" },
  { to: "/settings", label: "Settings", icon: "settings" },
  { to: "/help", label: "Help", icon: "help" },
];

function Icon({ name }) {
  const base = "w-5 h-5";
  switch(name){
    case "grid": return <svg className={base} viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor"/></svg>;
    case "leaf": return <svg className={base} viewBox="0 0 24 24" fill="none"><path d="M4 20c6-10 16-10 16-10" stroke="currentColor"/></svg>;
    case "weather": return <svg className={base} viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="currentColor"/></svg>;
    case "bell": return <svg className={base} viewBox="0 0 24 24" fill="none"><path d="M15 17H9l-1-4V9a5 5 0 1110 0v4l-1 4z" stroke="currentColor"/></svg>;
    case "clock": return <svg className={base} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor"/><path d="M12 8v5l3 1" stroke="currentColor"/></svg>;
    case "settings": return <svg className={base} viewBox="0 0 24 24" fill="none"><path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" stroke="currentColor"/></svg>;
    case "help": return <svg className={base} viewBox="0 0 24 24" fill="none"><path d="M9.09 9a3 3 0 115.82 0c0 2-3 2-3 4" stroke="currentColor"/></svg>;
    default: return null;
  }
}

export default function Sidebar(){
  return (
    <aside className="w-64 bg-white border-r border-gray-100 hidden md:block">
      <div className="px-6 py-6">
        <img src="/src/assets/logo.svg" alt="AgriSense 360" className="h-8"/>
      </div>
      <nav className="px-3">
        {items.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({isActive}) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 mb-2 text-gray-700 ${isActive ? 'bg-emerald-100 text-emerald-800' : 'hover:bg-gray-50'}`
            }
          >
            <div className="p-2 rounded">
              <Icon name={item.icon} />
            </div>
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
