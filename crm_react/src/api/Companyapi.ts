import axios from "axios";
// const Base_Upload_Url = import.meta.env.VITE_BASE_UPLOAD_URL;

const Companyapi = axios.create({
  baseURL: import.meta.env.VITE_COMPANY_API_BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

Companyapi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/* RESPONSE (AUTO LOGOUT) */
Companyapi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // 🔥 SESSION EXPIRED
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("user");

      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default Companyapi;
