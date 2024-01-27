import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { LuTags } from "react-icons/lu";
import { GoThumbsup } from "react-icons/go";
import { LuUsers } from "react-icons/lu";

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
    </div>
  );
}
