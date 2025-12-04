export const AUTH = {
  LOGIN: "/auth/login"
};

export const FARMS = {
  LIST: "/farms",
  CREATE: "/farms",
  GET: (id) => `/farms/${id}`,
  UPDATE: (id) => `/farms/${id}`,
  DELETE: (id) => `/farms/${id}`,
};

export const ANALYSIS = {
  RUN: "/analysis/run",
  STATUS: (jobId) => `/analysis/${jobId}`,
};

export const WEATHER = {
  CURRENT: "/weather/current",
  TREND: "/weather/trend",
};

export const ALERTS = {
  LIST: "/alerts",
  TEST: "/alerts/test",
};

export const SETTINGS = {
  GET: "/settings",
  UPDATE: "/settings",
};
