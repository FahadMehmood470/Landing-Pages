import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  allowed: string[];
}

export default function ProtectedRoute({ children, allowed }: ProtectedRouteProps) {
  const role = localStorage.getItem("role");

  if (!role) return <Navigate to="/login" replace />;

  if (!allowed.includes(role)) {
    if (role === "sadmin") return <Navigate to="/admin" replace />;
    if (role === "agent") return <Navigate to="/agent" replace />;
    if (role === "accountdepartment") return <Navigate to="/accountdepartment" replace />;
  }

  return <>{children}</>;
}
