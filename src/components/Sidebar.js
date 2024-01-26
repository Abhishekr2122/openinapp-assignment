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
        height: "1047px",
        width: "218px",
        top: "-1px",
        position: "relative",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        style={{
          width: "111px",
          height: "42px",
          top: "50px",
          left: "56px",
          position: "absolute",
        }}
      >
        <Logo source={"/logoimage.jpg"} />
        <p
          style={{
            width: "54px",
            height: "33px",
            position: "absolute",
            top: "55px",
            left: "113px",
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
                position: "absolute",
                width: "24px",
                height: "24px",
                top: "142px",
                left: "31px",
              }}
            />
          }
          text="Dashboard"
          topPosition={"143px"}
        />
        <ButtonIcon
          icon={
            <IoStatsChartOutline
              style={{
                position: "absolute",
                width: "24px",
                height: "24px",
                top: "190px",
                left: "31px",
              }}
            />
          }
          text="Upload"
          topPosition={"203px"}
        />
        <ButtonIcon
          icon={
            <FaFileInvoice
              style={{
                position: "absolute",
                width: "24px",
                height: "24px",
                top: "284.9px",
                left: "31px",
              }}
            />
          }
          text="Invoice"
          topPosition={"277.27px"}
        />
        <ButtonIcon
          icon={
            <CgNotes
              style={{
                position: "absolute",
                width: "24px",
                height: "24px",
                top: "341.27px",
                left: "31px",
              }}
            />
          }
          text="Schedule"
          topPosition={"343.27px"}
        />
        <ButtonIcon
          icon={
            <LuCalendarDays
              style={{
                position: "absolute",
                width: "24px",
                height: "24px",
                top: "400px",
                left: "31px",
              }}
            />
          }
          text="Calender"
          topPosition={"400px"}
        />
        <ButtonIcon
          icon={
            <IoNotificationsOutline
              style={{
                position: "absolute",
                width: "24px",
                height: "24px",
                top: "474.13px",
                left: "31px",
              }}
            />
          }
          text="Notification"
          topPosition={"475.95px"}
        />
        <ButtonIcon
          icon={
            <IoSettingsOutline
              style={{
                position: "absolute",
                width: "24px",
                height: "24px",
                top: "540.56px",
                left: "31px",
              }}
            />
          }
          text="Settings"
          topPosition={"542.92px"}
        />
      </div>
    </div>
  );
}
