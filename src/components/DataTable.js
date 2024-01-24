import "./datatable.css";
export default function DataTable({ tableData }) {
  const { tableRows, values } = tableData;
  console.log(
    "This is the tableRows in Datatablecomponent",
    tableData.tableRows
  );
  console.log("This is the values in Datatablecomponent", tableData.values);

  return (
    <div className="tablecontainer">
      <table style={{ padding: "1rem", width: "100%" }}>
        <thead>
          <tr>
            {tableRows.map((rows, index) => {
              return (
                <th key={index} style={{ padding: "12px", textAlign: "left" }}>
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
    </div>
  );
}
