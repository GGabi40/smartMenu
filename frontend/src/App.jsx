import "./styles/app.scss";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";
import EditOrder from "./pages/EditOrder";
import NewOrder from "./pages/NewOrder";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Unauthorized from "./pages/Unauthorized";
import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider>
            <NavBar />

            <Routes>
              <Route path="/login" element={<Login />} />

              {/* Rutas protegidas */}
              <Route
                element={<PrivateRoute allowedRoles={["mozo", "cocina"]} />}
              >
                <Route path="/" element={<Home />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/orders/:id/edit" element={<EditOrder />} />
              </Route>

              <Route element={<PrivateRoute allowedRoles={"mozo"} />}>
                <Route path="/new-order" element={<NewOrder />} />
              </Route>

              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
