import { FC, ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Map from "./pages/Map";
import HomePage from "./pages/Home";
import ErrorNotFoundPage from "./pages/ErrorNotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/map" element={<Map />} />
      <Route path="*" element={<ErrorNotFoundPage />} />
    </Routes>
  );
};

interface ProtectedRoutesProps {
  children: ReactNode;
}

const ProtectedRoutes: FC<ProtectedRoutesProps> = ({ children }) => {
  const simulatedLogin: string | null = localStorage.getItem("user");

  if (simulatedLogin) {
    return children;
  }
  return <Navigate to="/" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <AppRoutes></AppRoutes>
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
