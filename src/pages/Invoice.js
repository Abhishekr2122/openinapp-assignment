import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Invoice() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "1385px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          position: "absolute",
          top: "15%",
          fontSize: "80px",

          borderRadius: "10px",
          backgroundColor: "#FFFFFF",
        }}
      >
        No invoice found
        <span>
          <IoHome
            style={{ color: "blueviolet", cursor: "pointer", height: "60px" }}
            onClick={function () {
              navigate("/dashboard");
            }}
          />
        </span>
      </p>
    </div>
  );
}
