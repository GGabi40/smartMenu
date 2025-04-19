import "./styles/app.scss";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";
import EditOrder from "./pages/EditOrder";
import NewOrder from "./pages/NewOrder";
import Login from "./pages/Login";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:id/edit" element={<EditOrder />} />
            <Route path="/new-order" element={<NewOrder />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
