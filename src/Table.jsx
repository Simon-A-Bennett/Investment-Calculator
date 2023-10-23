import TableItems from "./TableItems";

function Table() {
  return (
    <>
      <table id="result">
        <thead id="result-thead">
         <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody id="result-tbody">
          <TableItems />
        </tbody>
      </table>
    </>
  );
}

export default Table;
