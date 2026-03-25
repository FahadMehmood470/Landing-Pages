import { Routes, Route } from 'react-router-dom';
import AdminRoutes from './routes/AdminRoutes';
import AgentRoutes from './routes/AgentRoutes';
import ProtectedRoute from './components/Login/ProtectedRoute';
import Login from './components/Login/Login';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import PublicRoute from './components/Login/PublicRoute';
import AccountDepRoutes from './routes/AccountDepRoutes';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const AUTO_LOGOUT_TIME = 30 * 60 * 1000;  // 30 Minutes
    let timer: any;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("user");
        window.location.href = "/login";
      }, AUTO_LOGOUT_TIME);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);

    resetTimer();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
    };
  }, []);
  return (
    <div>


      <Routes>
        {/* 404 */}
        <Route path="*" element={<PageNotFound />} />
        {/* 404 must be at bottom, not top */}
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />

        <Route path="/" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />

        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowed={["sadmin"]}>
              <AdminRoutes />
            </ProtectedRoute>
          }
        />

        <Route
          path="/agent/*"
          element={
            <ProtectedRoute allowed={["agent"]}>
              <AgentRoutes />
            </ProtectedRoute>
          }
        />

        <Route
          path="/accountdepartment/*"
          element={
            <ProtectedRoute allowed={["accountdepartment"]}>
              <AccountDepRoutes />
            </ProtectedRoute>
          }
        />

      </Routes>
    </div>
  );
};

export default App;
