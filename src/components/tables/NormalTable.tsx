interface NormalTableProps {
  columnHeaders: Array<string>;
  tableData: Array<any>;
  sideRowHeaders?: Array<string>;
}

export const NormalTable = ({
  columnHeaders,
  tableData,
  sideRowHeaders,
}: NormalTableProps) => {
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className={"bg-gray-50"}>
                <tr>
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
              <tbody className="divide-y divide-gray-200">
                {tableData?.map((row, index) => (
                  <tr>
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
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
