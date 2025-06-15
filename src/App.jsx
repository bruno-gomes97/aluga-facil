import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import PrivateRoute from "./components/private-route/PrivateRoute";
import CreateAccount from "./page/createAccount/CreateAccount";
import Dashboard from "./page/dashboard/Dashboard";
import Login from "./page/login/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute allowedRoles={["ADMIN"]}>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
