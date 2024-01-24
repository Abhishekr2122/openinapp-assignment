import { useState } from "react";
import { LuUpload } from "react-icons/lu";
import DataTable from "../components/DataTable";
import toast from "react-hot-toast";

export default function Upload() {
  const [inputFile, setInputFile] = useState("");

  const localStorageData = localStorage.getItem("data");
  console.log(localStorageData);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <div>
          <div>
            <p>
              Drop your excel sheet here or{" "}
              <span>
                <input
                  type="file"
                  name="inputdata"
                  id="data"
                  value={inputFile}
                  onChange={function (e) {
                    setInputFile(e.target.value);
                  }}
                  accept=".csv"
                />
              </span>
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid blue",
            borderRadius: "0.5rem",
          }}
        >
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              borderRadius: "0.5rem",
              width: "100%",
              border: "none",
              cursor: "pointer",
            }}
            disabled={inputFile ? false : true}
            onClick={function () {
              localStorage.setItem("data", JSON.stringify(inputFile));
              setInputFile("");
              toast.success("File sucessfully uploaded");
            }}
          >
            <LuUpload />
            <p>Upload</p>
          </button>
        </div>
      </div>
      <DataTable />
    </div>
  );
}
