import { NavLink } from "react-router-dom";
import "./buttonicon.css";

export default function ButtonIcon({ icon, text }) {
  return (
    <NavLink
      style={{
        textDecoration: "none",
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
      to={`/${text}`}
    >
      <div style={{ color: "grey" }}>{icon}</div>
      <p
        style={{
          width: "80px",
          height: "22px",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "21.82px",
          color: "#9A9AA9",
        }}
      >
        {text}
      </p>
    </NavLink>
  );
}
