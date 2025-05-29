import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/User/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/*" element={<PageNotFound />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
