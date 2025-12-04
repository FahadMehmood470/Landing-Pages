import { Navigate } from "react-router-dom";
import type { ReactNode } from "react"; // ← type-only import

interface ProtectedRouteProps {
  children: ReactNode;
  allowed: string[];
}

export default function ProtectedRoute({ children, allowed }: ProtectedRouteProps) {
  const role = localStorage.getItem("role");

  if (!role) return <Navigate to="/login" />;

  if (!allowed.includes(role)) return <Navigate to="/login" />;

  return <>{children}</>;
}
