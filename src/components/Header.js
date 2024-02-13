import { IoNotificationsOutline } from "react-icons/io5";
import { NavLink, useParams } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";

export default function Header({ setSignedIn }) {
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
        OpeninApp
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
        <button
          style={{
            backgroundColor: "transparent",
            borderStyle: "none",
            cursor: "pointer",
          }}
          onClick={function () {
            setSignedIn(false);
          }}
        >
          <TbLogout2 style={{ color: "blue", height: "23px", width: "18px" }} />
        </button>

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
