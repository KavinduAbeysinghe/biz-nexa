import EditIcon from "@mui/icons-material/Edit";
import { NormalTable } from "../../components/tables/NormalTable";

const PersonalTab = () => {
  const columnHeaders: Array<string> = ["Present Address", "Permanent Address"];

  const tableData: Array<any> = [
    {
      presentAddressLine1: "No. 404",
      permanentAddressLine1: "No. 404",
    },
    {
      presentAddressLine2: "St. Peters Lane",
      permanentAddressLine2: "St. Peters Lane",
    },
    {
      presentAddressLine3: "Hopkins",
      permanentAddressLine3: "Hopkins",
    },
    {
      presentCity: "California",
      permanentCity: "California",
    },
    {
      presentState: "Liberty",
      permanentState: "Liberty",
    },
    {
      presentGeoCoordinate: "112-112-112",
      permanentGeoCoordinate: "112-112-112",
    },
    {
      presentPostalCode: "11200",
      permanentPostalCode: "11200",
    },
    {
      presentCountry: "United States",
      permanentCountry: "United States",
    },
    {
      presentLandLineNumber: "+112-112-112-112",
      permanentLandLineNumber: "+112-112-112-112",
    },
  ];

  const sideRowHeaders: Array<string> = [
    "Address Line 1",
    "Address Line 2",
    "Address Line 3",
    "City",
    "State",
    "Geo Coordinate",
    "Postal Code",
    "Country",
    "Landline Number",
  ];

  return (
    <div>
      <div className="grid grid-cols-12 gap-5 lg:gap-0">
        <div className="col-span-12 lg:col-span-6 text-sm flex flex-col p-5">
          <div className="flex gap-10">
            <p className="text-lg font-bold text-gray-400 mb-5">
              Profile Information
            </p>
            <EditIcon
              fontSize="small"
              className="text-gray-400 hover:text-blue-950 cursor-pointer"
            />
          </div>
          <p className="text-gray-500 mb-5 text-justify">
            Hi, I’m Stephanie Anderson, Decisions: If you can’t decide, the
            answer is no. If two equally difficult paths, choose the one more
            painful in the short term (pain avoidance is creating an illusion of
            equality).
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-blue-950 font-semibold">
              Title: <span className="text-gray-500 font-normal">Ms</span>
            </p>
            <p className="text-blue-950 font-semibold">
              Initials: <span className="text-gray-500 font-normal">A</span>
            </p>
            <p className="text-blue-950 font-semibold">
              First Name:{" "}
              <span className="text-gray-500 font-normal">Stephanie</span>
            </p>
            <p className="text-blue-950 font-semibold">
              Middle Name:{" "}
              <span className="text-gray-600 font-normal">Jane</span>
            </p>
            <p className="text-blue-950 font-semibold">
              Last Name:{" "}
              <span className="text-gray-500 font-normal">Anderson</span>
            </p>
            <p className="text-blue-950 font-semibold">
              Maritial Status:{" "}
              <span className="text-gray-500 font-normal">Unmarried</span>
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
            <p className="text-blue-950 font-semibold">
              Mobile:{" "}
              <span className="text-gray-500 font-normal">
                +114-112-112-112
              </span>
            </p>
            <p className="text-blue-950 font-semibold">
              Office:{" "}
              <span className="text-gray-500 font-normal">
                +114-112-112-112
              </span>
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 p-5 border-l-0 border-t lg:border-l lg:border-t-0">
          <div className="flex gap-10">
            <p className="text-lg font-bold text-gray-400 mb-5">
              Role Information
            </p>
            {/* <EditIcon
            fontSize="small"
            className="text-gray-400 hover:text-blue-950 cursor-pointer"
          /> */}
          </div>
          <div className="text-sm flex flex-col gap-3">
            <p className="text-blue-950 font-semibold">
              Staff ID:{" "}
              <span className="text-gray-500 font-normal">STF001112</span>
            </p>
            <p className="text-blue-950 font-semibold">
              Designation:{" "}
              <span className="text-gray-500 font-normal">
                Senior Software Engineer
              </span>
            </p>
            <p className="text-blue-950 font-semibold">
              Reporting To:{" "}
              <span className="text-gray-500 font-normal">Mr. John Smith</span>
            </p>
            <p className="text-blue-950 font-semibold">
              Department:{" "}
              <span className="text-gray-500 font-normal">Innovation Labs</span>
            </p>
            <p className="text-blue-950 font-semibold">
              Location:{" "}
              <span className="text-gray-500 font-normal">Head Office</span>
            </p>
          </div>
        </div>
      </div>

      {/*<hr className={""} />*/}

      <div className={"p-5"}>
        <div className="flex gap-10">
          <p className="text-lg font-bold text-gray-400 mb-5">
            Address Information
          </p>
          {/*<EditIcon*/}
          {/*  fontSize="small"*/}
          {/*  className="text-gray-400 hover:text-blue-950 cursor-pointer"*/}
          {/*/>*/}
        </div>
        <NormalTable
          columnHeaders={columnHeaders}
          tableData={tableData}
          sideRowHeaders={sideRowHeaders}
        />
      </div>
    </div>
  );
};

export default PersonalTab;
