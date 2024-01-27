import { IoNotificationsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div
      style={{
        position: "relative",
        left: "-195px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
        backgroundColor: "#f8faff",
      }}
    >
      <p
        style={{
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "32px",
          marginLeft: "10px",
        }}
      >
        Upload CSV
      </p>
      <div
        style={{
          height: "30px",
          width: "75.61px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavLink to="/notification">
          <IoNotificationsOutline style={{ height: "23px", width: "18px" }} />
        </NavLink>

        <img
          src="/logoimage.jpg"
          alt="no data found"
          style={{ height: "30px", width: "30px", borderRadius: "20px" }}
        />
      </div>
    </div>
  );
}
