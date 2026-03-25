import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface PublicRouteProps {
  children: ReactNode;
}

export default function PublicRoute({ children }: PublicRouteProps) {
  
  const role = localStorage.getItem("role");

  if (role === "sadmin") return <Navigate to="/admin" replace />;
  if (role === "agent") return <Navigate to="/agent" replace />;
  if (role === "accountdepartment") return <Navigate to="/accountdepartment" replace />;

  return <>{children}</>;
}
