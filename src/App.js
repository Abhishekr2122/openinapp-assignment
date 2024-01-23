import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}></Route>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Upload" element />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
