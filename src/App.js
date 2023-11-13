import Layout1 from "./layouts/Layout1";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Layout1>
        <Routes>
          <Route path="/" element={<Navigate to='/login' replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout1>
      <Toaster />
    </>
  );
}

export default App;
