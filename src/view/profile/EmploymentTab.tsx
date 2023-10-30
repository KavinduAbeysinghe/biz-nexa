import { NormalTable } from "../../components/tables/NormalTable";

export const EmploymentTab = () => {
  const reportingColumnHeaders: Array<string> = [
    "Reporting",
    "Date From",
    "Date To",
    "Duration",
    "Remarks",
  ];

  const reportingTableData: Array<any> = [
    {
      reporting: "JJ Jane Watson - Technical Lead",
      dateFrom: "01-Feb-2006",
      dateTo: "01-Feb-2015",
      duration: "7 Months 27 Days",
      remarks: "-",
    },
    {
      reporting: "JJ Jane Watson - Technical Lead",
      dateFrom: "01-Feb-2006",
      dateTo: "01-Feb-2015",
      duration: "7 Months 27 Days",
      remarks: "-",
    },
  ];

  return (
    <div>
      <div className={"p-5"}>
        <div className={"grid grid-cols-12"}>
          <div className={"col-span-6"}>
            <p className={" text-lg font-bold text-gray-400 mb-5"}>
              Employment Information
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <p className="text-blue-950 font-semibold">
                Staff ID:{" "}
                <span className="text-gray-500 font-normal">STF001112</span>
              </p>
              <p className="text-blue-950 font-semibold">
                Date of Joining:{" "}
                <span className="text-gray-500 font-normal">01-Feb-2006</span>
              </p>
              <p className="text-blue-950 font-semibold">
                Organization DOJ:{" "}
                <span className="text-gray-500 font-normal"></span>
              </p>
              <p className="text-blue-950 font-semibold">
                Employment Period:{" "}
                <span className="text-gray-600 font-normal">8 Months</span>
              </p>
              <p className="text-blue-950 font-semibold">
                Notice Period:{" "}
                <span className="text-gray-500 font-normal">3 Months</span>
              </p>
              <p className="text-blue-950 font-semibold">
                Hiring Source:{" "}
                <span className="text-gray-500 font-normal">Consultancy</span>
              </p>
              <p className="text-blue-950 font-semibold">
                Coperate Email:{" "}
                <span className="text-gray-500 font-normal">
                  stephanieanderson@hotmail.com
                </span>
              </p>
              <p className="text-blue-950 font-semibold">
                Personal Email:{" "}
                <span className="text-gray-500 font-normal">
                  stephanie.a@gmail.com
                </span>
              </p>
            </div>
          </div>
          <div className={"col-span-6"}>
            {/*<p className={" text-lg font-bold text-gray-400 mb-5"}>Reporting</p>*/}
          </div>
        </div>
        <div className={"mt-5"}>
          <p className={" text-lg font-bold text-gray-400 mb-5"}>Reporting</p>
          <NormalTable
            columnHeaders={reportingColumnHeaders}
            tableData={reportingTableData}
          />
        </div>
      </div>
    </div>
  );
};
