import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { LuTags } from "react-icons/lu";
import { GoThumbsup } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa6";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";

export default function Dashboard() {
  return (
    <div style={{ height: "1385px" }}>
      <div style={{ display: "flex", gap: "5rem", padding: "40px" }}>
        <div
          style={{
            borderRadius: "14px",
            width: "300px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <div style={{ padding: "12px" }}>
            <LiaMoneyCheckAltSolid
              style={{ height: "40px", width: "40px", color: "green" }}
            />
            <p style={{ marginTop: "1px" }}>Total Revenues</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px",
              marginTop: "-30px",
            }}
          >
            <p>$2,129,430</p>
            <div
              style={{
                backgroundColor: "lightyellow",
                borderRadius: "10px",
                color: "black",
              }}
            >
              +2.5%
            </div>
          </div>
        </div>
        <div
          style={{
            width: "300px",
            backgroundColor: "#FFFFFF",
            borderRadius: "14px",
          }}
        >
          <div style={{ padding: "12px" }}>
            <LuTags
              style={{ height: "40px", width: "40px", color: "burlywood" }}
            />
            <p style={{ marginTop: "1px" }}>Total transactions</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px",
              marginTop: "-30px",
            }}
          >
            <p>1520</p>
            <div
              style={{ backgroundColor: "lightyellow", borderRadius: "10px" }}
            >
              +2.5%
            </div>
          </div>
        </div>
        <div
          style={{
            width: "300px",
            backgroundColor: "#FFFFFF",
            borderRadius: "14px",
          }}
        >
          <div style={{ padding: "12px" }}>
            <GoThumbsup
              style={{
                height: "40px",
                width: "40px",
                color: "lightcoral",
              }}
            />
            <p style={{ marginTop: "1px" }}>Total Likes</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px",
              marginTop: "-30px",
            }}
          >
            <p>9721</p>
            <div
              style={{ backgroundColor: "lightyellow", borderRadius: "10px" }}
            >
              +2.5%
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: "14px",
            width: "300px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <div style={{ padding: "12px" }}>
            <LuUsers
              style={{ height: "40px", width: "40px", color: "purple" }}
            />
            <p style={{ marginTop: "1px" }}>Total users</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px",
              marginTop: "-30px",
            }}
          >
            <p>9721</p>
            <div
              style={{ backgroundColor: "lightyellow", borderRadius: "10px" }}
            >
              +2.5%
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "40px",
          gap: "2rem",
        }}
      >
        <p style={{ fontWeight: "600", fontSize: "25px" }}>We help you</p>
        <div style={{ display: "flex", flexDirection: "row", gap: "8rem" }}>
          <div
            style={{
              height: "250px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "12px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <div>
              <FaLaptopCode
                style={{ color: "#8080ff", height: "80px", width: "80px" }}
              />
            </div>
            <p>Grow</p>
            <p
              style={{ color: "#8080ff", fontWeight: "600", fontSize: "20px" }}
            >
              Audience
            </p>
          </div>
          <div
            style={{
              display: "flex",
              height: "250px",
              width: "200px",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "12px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <div>
              <BsEmojiSmile
                style={{ color: "lightpink", height: "70px", width: "70px" }}
              />
            </div>
            <p>Boost</p>
            <p
              style={{
                color: "lightpink",
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              Engagement
            </p>
          </div>
          <div
            style={{
              height: "250px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "12px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <div>
              <AiOutlineThunderbolt
                style={{ color: "#4d4dff", height: "65px", width: "65px" }}
              />
            </div>
            <p>Go</p>
            <p
              style={{ color: "#4d4dff", fontWeight: "600", fontSize: "20px" }}
            >
              Viral...
            </p>
          </div>
          <div
            style={{
              height: "250px",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "12px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <div>
              <LiaMoneyBillWaveSolid
                style={{ color: "#66ff66", height: "80px", width: "80px " }}
              />
            </div>
            <p>Get</p>
            <p
              style={{ color: "#66ff66", fontWeight: "600", fontSize: "20px" }}
            >
              Brand deals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
