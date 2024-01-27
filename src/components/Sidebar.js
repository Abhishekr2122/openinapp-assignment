import ButtonIcon from "../Ui/ButtonIcon";
import Logo from "../Ui/Logo";
import { RxDashboard } from "react-icons/rx";
import { IoStatsChartOutline } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import { LuCalendarDays } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

export default function Sidebar() {
  return (
    <div
      style={{
        gridRow: "1/-1",
        border: "1px solid yellow",
        height: "1047px",
        width: "218px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        style={{
          width: "111px",
          height: "42px",
          position: "absolute",
          top: "50px",
          left: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Logo source={"/logoimage.jpg"} />
        <p
          style={{
            width: "54px",
            height: "33px",
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "32.74px",
            color: "#030229",
          }}
        >
          Base
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          top: "142px",
          width: "154px",
          height: "424.99px",
          borderRadius: "0px,5px,5px,0px",
        }}
      >
        <ButtonIcon
          icon={
            <RxDashboard
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          }
          text="Dashboard"
        />
        <ButtonIcon
          icon={
            <IoStatsChartOutline
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          }
          text="Upload"
        />
        <ButtonIcon
          icon={
            <FaFileInvoice
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          }
          text="Invoice"
        />
        <ButtonIcon
          icon={
            <CgNotes
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          }
          text="Schedule"
        />
        <ButtonIcon
          icon={
            <LuCalendarDays
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          }
          text="Calender"
        />
        <ButtonIcon
          icon={
            <IoNotificationsOutline
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          }
          text="Notification"
        />
        <ButtonIcon
          icon={
            <IoSettingsOutline
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          }
          text="Settings"
        />
      </div>
    </div>
  );
}
