import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

export default function AppLayout() {
  return (
    <div
      style={{
        width: "1440px",
        height: "1385px",
        display: "grid",
        gridTemplateColumns: "26rem 1fr",
        gridTemplateRows: "auto 1fr",
        rowGap: "0px",
        columnGap: "0px",

        // grid-template-columns: 26rem 1fr;
        // grid-template-rows: auto 1fr;
      }}
    >
      <Header />
      <Main />
      <Sidebar />
    </div>
  );
}
