import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div
      style={{
        border: "1px solid yellow",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Outlet />
    </div>
  );
}
