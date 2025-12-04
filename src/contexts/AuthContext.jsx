import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem("as_user");
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  });
  const navigate = useNavigate();

  useEffect(() => {
    // optional: validate token with backend on mount
  }, []);

  function signIn(payload) {
    // payload = { token, user }
    localStorage.setItem("as_token", payload.token);
    localStorage.setItem("as_user", JSON.stringify(payload.user));
    setUser(payload.user);
  }

  function signOut() {
    localStorage.removeItem("as_token");
    localStorage.removeItem("as_user");
    setUser(null);
    navigate("/login");
  }

  const value = { user, signIn, signOut, isAuthenticated: !!user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
