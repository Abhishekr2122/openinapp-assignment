import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Invoice from "./pages/Invoice";
import Schedule from "./pages/Schedule";
import Calender from "./pages/Calender";
import Notification from "./pages/Notification";
import Settings from "./pages/Settings";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="Dashboard/crrPage" element={<Dashboard />} />
            <Route path="Upload/crr/page" element={<Upload />} />
            <Route path="Invoice/crrPage" element={<Invoice />} />
            <Route path="Schedule/crrPage" element={<Schedule />} />
            <Route path="Calender/crrPage" element={<Calender />} />
            <Route path="Notification/crrPage" element={<Notification />} />
            <Route path="Settings/crrPage" element={<Settings />} />
          </Route>
          <Route path="Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        gutter={24}
        position="top-center"
        toastOptions={{
          success: {
            duration: "120",
          },
          error: {
            duration: "120",
          },
        }}
      />
    </>
  );
}

export default App;
