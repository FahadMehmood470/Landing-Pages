import api from "./api";

export const UsersAPI = {
  list: (page: number, search?: string) =>
    api.get(`/users?page=${page}${search ? `&search=${search}` : ""}`),
  get: (id: number) => api.get(`/users/${id}`),
  create: (data: FormData) => api.post("/users", data),
  update: (id: number, data: FormData) =>
    api.post(`/users/${id}?_method=PUT`, data),
  delete: (id: number) => api.delete(`/users/${id}`),
};


