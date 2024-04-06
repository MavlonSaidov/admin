import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reception from "./pages/Reception";
import Services from "./pages/Services";
// #9055fd

function App() {
  return (
    <div className="flex gap-4">
      <div className="w-1/6 ">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col  pt-20">
        <Header />

        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Dashboard} />
            <Route path="/reception" Component={Reception} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
