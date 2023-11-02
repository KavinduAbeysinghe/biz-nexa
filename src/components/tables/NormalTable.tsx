import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Pagination } from "@mui/material";
import { ActionButton } from "../buttons/ActionButton";
import { useState } from "react";

interface NormalTableProps {
  columnHeaders: Array<any>;
  tableData: Array<any>;
  sideRowHeaders?: Array<string>;
  actionButtons?: Array<any>;
  id?: string;
}

export const NormalTable = ({
  columnHeaders,
  tableData,
  sideRowHeaders,
  actionButtons,
  id,
}: NormalTableProps) => {
  const [page, setPage] = useState(1);

  const [rowsPerPage] = useState(5);

  const paginatedData = tableData.slice(
    (page - 1) * rowsPerPage,
    (page - 1) * rowsPerPage + rowsPerPage,
  );

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className={"bg-gray-50"}>
                <tr>
                  {actionButtons?.length && <th></th>}
                  {sideRowHeaders?.length && <th></th>}
                  {columnHeaders?.map((header, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              {tableData?.length ? (
                <tbody className="divide-y divide-gray-200">
                  {tableData?.map((row, index) => (
                    <tr key={index}>
                      {actionButtons?.length ? (
                        <td
                          className={
                            "px-6 py-3 whitespace-nowrap text-sm font-semibold text-gray-800"
                          }
                        >
                          {actionButtons?.map((b: any, index) => (
                            <ActionButton
                              key={index}
                              tooltip={b.tooltip}
                              icon={b.icon}
                              handleClick={() => {
                                return b.handleClick(row[id ? id : ""]);
                              }}
                            />
                          ))}
                        </td>
                      ) : (
                        <></>
                      )}
                      {sideRowHeaders?.length && (
                        <td
                          className={
                            "px-6 py-3 whitespace-nowrap text-sm font-semibold text-gray-800"
                          }
                        >
                          {sideRowHeaders[index]}
                        </td>
                      )}
                      {Object.entries(row)?.map(([key, value], index) => (
                        <td
                          key={index}
                          className={
                            "px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-800"
                          }
                        >
                          {<>{value}</>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody>
                  <td
                    colSpan={columnHeaders?.length}
                    className={
                      "px-6 py-3 whitespace-nowrap text-sm font-semibold text-gray-800 text-center"
                    }
                  >
                    No Data Found
                  </td>
                </tbody>
              )}
            </table>
          </div>
          <div className="flex justify-center items-center mt-2">
            <Pagination
              count={Math.ceil(tableData.length / rowsPerPage)}
              shape="rounded"
              onChange={(event) => handlePageChange}
              page={page}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
