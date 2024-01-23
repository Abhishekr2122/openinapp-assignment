import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div style={{ border: "1px solid yellow" }}>
      <Outlet />
    </div>
  );
}
