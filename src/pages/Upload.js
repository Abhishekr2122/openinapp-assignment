import { useState } from "react";
import { LuUpload } from "react-icons/lu";
import DataTable from "../components/DataTable";
import toast from "react-hot-toast";
import Papa from "papaparse";
import "./upload.css";

export default function Upload() {
  const [tableData, setTableData] = useState({});
  const [parsedData, setParsedData] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [values, setValues] = useState([]);

  function handleChange(e) {
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];
        results.data.forEach((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });
        setParsedData(results.data);
        setTableRows(rowsArray[0]);
        setValues(valuesArray);
      },
    });
  }

  return (
    <>
      <div
        style={{
          width: "596px",
          height: "367px",
          position: "absolute",
          top: "218px",
          left: "350px",
          display: "flex",
          flexDirection: "column",

          borderRadius: "8px",
          backgroundColor: "#FFFFFF",
        }}
        className="upload"
      >
        <div
          style={{
            width: "564px",
            height: "258px",
            position: "absolute",
            top: "16px",
            left: "16px",
            borderRadius: "8px",
            border: "1px dotted #EBEBEB",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "267px",
              height: "76px",
              top: "114px",
              left: "165px",
            }}
          >
            <p>
              Drop your excel sheet here or{" "}
              <span>
                <input
                  type="file"
                  name="inputdata"
                  id="data"
                  onChange={handleChange}
                  accept=".csv"
                  onDrop={handleChange}
                />
              </span>
            </p>
          </div>

          <button
            style={{
              height: "56px",
              width: "564px",
              position: "absolute",
              top: "285px",
              left: "0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              padding: "8px,16px,8px,8px",
              gap: "8px",
              backgroundColor: "#605BFF",
              borderStyle: "none",
              cursor: "pointer",
            }}
            onClick={function () {
              setTableData({ tableRows, values });
              toast.success("File sucessfully uploaded");
            }}
          >
            <LuUpload
              style={{ color: "white", height: "24px", width: "24px" }}
            />
            <p
              style={{
                color: "#FFFFFF",
                width: "46px",
                height: "24px",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "24px",
              }}
            >
              Upload
            </p>
          </button>
        </div>
        {/* <div className="tablecontainer">
        <table style={{ padding: "1rem", width: "100%" }}>
          <thead>
            <tr>
              {tableRows.map((rows, index) => {
                return (
                  <th
                    key={index}
                    style={{ padding: "12px", textAlign: "left" }}
                  >
                    {rows}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {values.map((value, index) => {
              return (
                <tr
                  key={index}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                  }}
                >
                  {value.map((val, i) => {
                    return (
                      <td
                        key={i}
                        style={{
                          padding: "12px",
                          textAlign: "left",
                        }}
                      >
                        {val}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}
      </div>

      <DataTable tableData={tableData} />
    </>
  );
}
