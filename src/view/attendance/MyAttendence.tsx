import { ProgressBar } from "../../components/progress/ProgressBar";
import { TextField } from "../../components/inputs/TextField";
import { Button } from "../../components/buttons/Button";
import { NormalTable } from "../../components/tables/NormalTable";
import {
  attendanceColumnHeaders,
  attendanceTableData,
} from "../dashboard/Dashboard";

export const MyAttendence = () => {
  const topCardData = [
    {
      title: "Your Total Days",
      value: "256",
      completed: 60,
      total: 100,
      progressColor: "bg-blue-400",
    },
    {
      title: "Your Total Hours",
      value: "12,500",
      completed: 40,
      total: 100,
      progressColor: "bg-blue-600",
    },
    {
      title: "Average Hours",
      value: "12.90",
      completed: 70,
      total: 100,
      progressColor: "bg-blue-800",
    },
    {
      title: "Overtime Hours",
      value: "9.50",
      completed: 44,
      total: 100,
      progressColor: "bg-blue-950",
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-12 card p-5 rounded-2xl">
        <div className={"grid grid-cols-12"}>
          <div
            className={
              "col-span-12 md:col-span-3 border-r-2 flex flex-col items-center justify-center gap-2"
            }
          >
            <div className="relative inline-block">
              <img
                className="object-cover inline-block h-[3.875rem] w-[3.875rem] rounded-full ring-2 ring-white"
                src={require("../../assets/images/person.jpg")}
                alt="Image Description"
              />
              <span className="absolute top-0 right-0 block h-3.5 w-3.5 rounded-full ring-2 ring-white bg-green-700"></span>
            </div>
            <div className={"flex flex-col justify-center items-center"}>
              <p className={"font-semibold text-blue-950 text-lg"}>
                Stephanie Anderson
              </p>
              <p className={"text-sm text-gray-600"}>
                Senior Software Engineer
              </p>
              <div
                className={
                  "p-1 bg-gray-200 rounded-lg text-sm inline-block px-3 mt-2"
                }
              >
                <p className={"text-gray-500 font-medium"}>
                  LAST SEEN <span className={"text-gray-900"}>15s ago</span>
                </p>
              </div>
            </div>
          </div>
          <div
            className={
              "col-span-12 md:col-span-9 grid grid-cols-12 gap-10 items-center px-10"
            }
          >
            {topCardData?.map((c: any, index) => (
              <div
                className={"col-span-12 md:col-span-6 lg:col-span-3"}
                key={index}
              >
                <p className={"text-gray-600 font-semibold text-sm"}>
                  {c?.title}
                </p>
                <p className={"font-semibold text-3xl my-5"}>{c?.value}</p>
                <ProgressBar
                  color={c?.progressColor}
                  completed={c?.completed}
                  total={c?.total}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="card col-span-12 rounded-2xl p-5">
        <p className={"text-blue-700 font-semibold mb-3"}>Attendance History</p>
        <div className={"mb-3 grid grid-cols-12 gap-5"}>
          <div className="col-span-3">
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
          <div className="col-span-3">
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
          <div className="col-span-2">
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
