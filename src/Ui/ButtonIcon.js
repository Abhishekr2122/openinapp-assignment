import { NavLink } from "react-router-dom";
import "./buttonicon.css";

export default function ButtonIcon({ icon, text }) {
  return (
    <NavLink
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        textDecoration: "none",
        color: "black",
      }}
      to={`/${text}`}
    >
      <div style={{ color: "grey" }}>{icon}</div>
      <p>{text}</p>
    </NavLink>
  );
}
