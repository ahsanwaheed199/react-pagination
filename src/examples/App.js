import React, { useState, useMemo } from "react";
import Pagination from "../Pagination";
import { tableHedings, data } from "./data";
import "./style.scss";

let PageSize = 2;

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <table>
        <thead>
          <tr>
            {tableHedings.map((value, index) => (
              <th key={index}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((value, index) => (
            <tr key={index}>
              <td>{value.preRegistrationDate}</td>
              <td>{value.jobNumber}</td>
              <td>{value.homeowner}</td>
              <td>{value.technician}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
