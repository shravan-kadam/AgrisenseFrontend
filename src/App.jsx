import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

import RegisterFarm from "./pages/RegisterFarm";
import CropAnalysis from "./pages/CropAnalysis";
import Weather from "./pages/Weather";
import Alerts from "./pages/Alerts";
import History from "./pages/History";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import Login from "./pages/Auth/Login";

export default function App(){
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 min-h-screen">
        <Header />
        <main className="p-6 md:p-10">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register-farm" element={<RegisterFarm />} />
            <Route path="/crop-analysis" element={<CropAnalysis />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/history" element={<History />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
            <Route path="/" element={<Navigate to="/register-farm" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
