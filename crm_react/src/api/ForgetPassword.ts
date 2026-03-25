import api from "./api";

export const ForgerPassAPI = {
  sendOTP: (email: string) => api.post("/forgot-password", { email }),
};
