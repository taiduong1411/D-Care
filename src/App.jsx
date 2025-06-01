import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/User/Home/Home";
import Login from "./pages/Account/Login/Login";
import Register from "./pages/Account/Register/Register";
import RegisterTechnician from "./pages/Account/RegisterTechnician/RegisterTechnician";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/*" element={<PageNotFound />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-technician" element={<RegisterTechnician />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
