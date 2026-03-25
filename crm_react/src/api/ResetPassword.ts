import api from "./api";

interface ResetPasswordPayload {
  email: string;
  token: string;
  password: string;
  password_confirmation: string;
}

export const ResetPass = {
  resetPassword: (payload: ResetPasswordPayload) =>
    api.post("/reset-password", payload),
};
