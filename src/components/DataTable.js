import "./datatable.css";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function DataTable({ tableData }) {
  const { tableRows, values } = tableData;

  console.log(
    "This is the tableRows in Datatablecomponent",
    tableData.tableRows
  );
  console.log("This is the values in Datatablecomponent", tableData.values);

  const length = Object.values(tableData).length;
  console.log(length);

  if (length < 1) {
    return null;
  }

  return (
    <div className="tablecontainer">
      <table style={{ padding: "1rem", width: "1065px" }}>
        <thead>
          <tr>
            {tableRows?.map((rows, index) => {
              return (
                <th key={index} style={{ padding: "12px", textAlign: "left" }}>
                  {rows}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {values?.map((value, index) => {
            return (
              <tr
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                }}
              >
                {value?.map((val, i) => {
                  return (
                    <td
                      key={i}
                      style={{
                        padding: "12px",
                        textAlign: "left",
                      }}
                    >
                      {i === 1 ? (
                        <a
                          href={`${val}`}
                          style={{ textDecoration: "none" }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {val}
                        </a>
                      ) : // val
                      i === 3 ? (
                        <button
                          style={{
                            backgroundColor: "transparent",
                            border: "1px solid grey",
                            borderRadius: "4px",

                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          Select Tags {<RiArrowDropDownLine />}
                        </button>
                      ) : (
                        val
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
