import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/User/Home/Home";
import Login from "./pages/Account/Login/Login";
import Register from "./pages/Account/Register/Register";
import RegisterTechnician from "./pages/Account/RegisterTechnician/RegisterTechnician";
import About from "./pages/User/About/About";
import Contact from "./pages/User/Contact/Contact";
import Service from "./pages/User/ServicePage/Service";
import Booking from "./pages/User/Booking/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/*" element={<PageNotFound />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-technician" element={<RegisterTechnician />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
