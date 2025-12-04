import { Routes, Route } from 'react-router-dom';
import AdminRoutes from './routes/AdminRoutes';
import AgentRoutes from './routes/AgentRoutes';
import ProtectedRoute from './components/Login/ProtectedRoute';
import Login from './components/Login/Login';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

const App = () => {
  return (
    <div>
    <Routes>
        <Route path="*" element={<PageNotFound/>}/>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/admin/*"
        element={
          <ProtectedRoute allowed={["admin"]}>
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
    </Routes>
    </div>
  );
};

export default App;
