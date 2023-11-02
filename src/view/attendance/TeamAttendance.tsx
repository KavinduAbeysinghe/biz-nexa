import { TextField } from "../../components/inputs/texts/TextField";
import { Button } from "../../components/buttons/Button";
import { NormalTable } from "../../components/tables/NormalTable";
import {
  attendanceColumnHeaders,
  attendanceTableData,
} from "../dashboard/Dashboard";

export const TeamAttendance = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="card col-span-12 rounded-2xl p-5">
        <p className={"text-blue-700 font-semibold mb-3"}>Attendance History</p>
        <div className={"mb-3 grid grid-cols-12 gap-5"}>
          <div className="col-span-12 lg:col-span-3">
            <TextField
              label={"Team Member"}
              type={"text"}
              id={"teamMember"}
              helperText={""}
              error={false}
              required={false}
              register={undefined}
              placeholder={"Enter team member name"}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <TextField
              label={"From"}
              type={"date"}
              id={"dateFrom"}
              helperText={""}
              error={false}
              required={false}
              register={undefined}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <TextField
              label={"To"}
              type={"date"}
              id={"dateTo"}
              helperText={""}
              error={false}
              required={false}
              register={undefined}
            />
          </div>
          <div className="col-span-12 lg:col-span-2">
            <div className={"mt-7"}>
              <Button text={"Find"} btnClass={"primary"} type={"button"} />
            </div>
          </div>
        </div>
        <NormalTable
          columnHeaders={attendanceColumnHeaders}
          tableData={attendanceTableData}
        />
      </div>
    </div>
  );
};
