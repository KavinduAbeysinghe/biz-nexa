import { BarChart } from "@mui/x-charts";
import { ProgressBar } from "../../components/progress/ProgressBar";
import { Button } from "../../components/buttons/Button";
import { DigitalClock } from "../../components/clock/DigitalClock";
import { NormalTable } from "../../components/tables/NormalTable";
import { CollapsibleNotice } from "../../components/collapsibleNotices/CollapsibleNotice";
import { Dropdown } from "../../components/inputs/dropdowns/Dropdown";

export const Dashboard = () => {
  const statisticsOptions = [
    {
      title: "Today",
      completed: 3,
      total: 8,
      notation: "hrs",
      barColor: "bg-progressGreen",
    },
    {
      title: "This Week",
      completed: 28,
      total: 40,
      notation: "hrs",
      barColor: "bg-progressRed",
    },
    {
      title: "This Month",
      completed: 90,
      total: 160,
      notation: "hrs",
      barColor: "bg-progressOrange",
    },
    {
      title: "Remaining",
      completed: 90,
      total: 160,
      notation: "hrs",
      barColor: "bg-progressBlue",
    },
    {
      title: "Overtime",
      completed: 5,
      total: 10,
      notation: "hrs",
      barColor: "bg-progressYellow",
    },
  ];

  const attendanceColumnHeaders = [
    "S.NO",
    "Date",
    "Punch In",
    "Punch Out",
    "Production",
    "Break",
    "Overtime",
  ];

  const attendanceTableData = [
    {
      sNo: 1001,
      date: "28 Oct 2023",
      punchIn: "8 AM",
      punchOut: "5 PM",
      production: "8 hrs",
      break: "1 hrs",
      overtime: "1 hrs",
    },
    {
      sNo: 1001,
      date: "28 Oct 2023",
      punchIn: "8 AM",
      punchOut: "5 PM",
      production: "8 hrs",
      break: "1 hrs",
      overtime: "1 hrs",
    },
    {
      sNo: 1001,
      date: "28 Oct 2023",
      punchIn: "8 AM",
      punchOut: "5 PM",
      production: "8 hrs",
      break: "1 hrs",
      overtime: "1 hrs",
    },
    {
      sNo: 1001,
      date: "28 Oct 2023",
      punchIn: "8 AM",
      punchOut: "5 PM",
      production: "8 hrs",
      break: "1 hrs",
      overtime: "1 hrs",
    },
    {
      sNo: 1001,
      date: "28 Oct 2023",
      punchIn: "8 AM",
      punchOut: "5 PM",
      production: "8 hrs",
      break: "1 hrs",
      overtime: "1 hrs",
    },
  ];

  const noticesData = [
    {
      priority: "high",
      title: "Completion of Time Sheets",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
    {
      priority: "medium",
      title: "Completion of Time Sheets",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
    {
      priority: "high",
      title: "Completion of Time Sheets",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
    {
      priority: "low",
      title: "Completion of Time Sheets",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
    {
      priority: "medium",
      title: "Completion of Time Sheets",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
  ];

  const tasksDueToday = [
    {
      title: "Creating a UI Design for the HR web app",
      allocatedBy: "Jane Watson - Technical Lead (Dev)",
      dueTime: "5 PM",
    },
    {
      title: "Creating a UI Design for the HR web app",
      allocatedBy: "Jane Watson - Technical Lead (Dev)",
      dueTime: "5 PM",
    },
    {
      title: "Creating a UI Design for the HR web app",
      allocatedBy: "Jane Watson - Technical Lead (Dev)",
      dueTime: "5 PM",
    },
    {
      title: "Creating a UI Design for the HR web app",
      allocatedBy: "Jane Watson - Technical Lead (Dev)",
      dueTime: "5 PM",
    },
    {
      title: "Creating a UI Design for the HR web app",
      allocatedBy: "Jane Watson - Technical Lead (Dev)",
      dueTime: "5 PM",
    },
  ];

  const tasksOverdue = [
    {
      title: "Creating a UI Design for the HR web app",
      allocatedBy: "Jane Watson - Technical Lead (Dev)",
      dueTime: "Late by 21 days",
    },
    {
      title: "Creating a UI Design for the HR web app",
      allocatedBy: "Jane Watson - Technical Lead (Dev)",
      dueTime: "Late by 21 days",
    },
    {
      title: "Creating a UI Design for the HR web app",
      allocatedBy: "Jane Watson - Technical Lead (Dev)",
      dueTime: "Late by 21 days",
    },
    {
      title: "Creating a UI Design for the HR web app",
      allocatedBy: "Jane Watson - Technical Lead (Dev)",
      dueTime: "Late by 21 days",
    },
    {
      title: "Creating a UI Design for the HR web app",
      allocatedBy: "Jane Watson - Technical Lead (Dev)",
      dueTime: "Late by 21 days",
    },
  ];

  return (
    <div className={"px-5"}>
      <div className={"flex justify-between mt-5 items-center"}>
        <h1 className="font-bold text-2xl">Hello, Stephanie !</h1>
        <DigitalClock />
      </div>
      <div className={"grid grid-cols-12 gap-5 mt-5"}>
        <div
          className={
            "col-span-12 lg:col-span-4 p-3 rounded-2xl flex flex-col card"
          }
        >
          <p className={"text-blue-700 font-semibold"}>Notices</p>
          <div className={"my-3"}>
            <Dropdown
              options={[
                "By Date",
                "By High Priority",
                "By Medium Priority",
                "By Low Priority",
              ]}
              title={"Filter"}
            />
          </div>
          <div className={"h-64 overflow-auto flex flex-col gap-3"}>
            {noticesData?.map((notice: any, index) => (
              <CollapsibleNotice
                priority={notice?.priority}
                title={notice?.title}
                id={`NOT${index}`}
                key={index}
              />
            ))}
          </div>
        </div>
        <div
          className={
            "card col-span-12 lg:col-span-4 p-3 rounded-2xl flex flex-col"
          }
        >
          <p className={"text-blue-700 font-semibold"}>Statistics</p>
          <div className={"flex flex-col gap-2 mt-3"}>
            {statisticsOptions?.map((option: any, index) => (
              <div className={"rounded border-2 p-2"} key={index}>
                <div className={"flex justify-between mb-1"}>
                  <p className={"text-sm font-semibold"}>{option?.title}</p>
                  <p className={"text-sm font-semibold"}>
                    {`${option?.completed}/${option?.total}`}
                    <span className={"text-xs"}>{option?.notation}</span>
                  </p>
                </div>
                <ProgressBar
                  color={option?.barColor}
                  completed={option?.completed}
                  total={option?.total}
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className={
            "card col-span-12 lg:col-span-4 p-3 rounded-2xl flex flex-col justify-between"
          }
        >
          <p className={"text-blue-700 font-semibold"}>Time Sheets</p>
          <div className={"rounded border-2 p-2"}>
            <p className={"text-sm font-semibold"}>Punch in at</p>
            <p className={"text-sm text-gray-600"}>
              30<sup>th</sup> October 2023 8.00 AM
            </p>
          </div>
          <p className={"font-extrabold text-5xl text-center"}>4.5 hrs</p>
          <Button text={"Punch Out"} btnClass={"primary"} type={"button"} />
          <div className={""}>
            <hr />
            <div className={"grid grid-cols-12 p-2"}>
              <div className={"col-span-6 text-center"}>
                <p className={"text-sm text-gray-600"}>Break</p>
                <p className={"text-sm text-gray-600"}>1.5 hrs</p>
              </div>
              <div className={"col-span-6 text-center"}>
                <p className={"text-sm text-gray-600"}>Overtime</p>
                <p className={"text-sm text-gray-600"}>3.5 hrs</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "card col-span-12 md:col-span-8 p-3 rounded-2xl flex flex-col"
          }
        >
          <p className={"text-blue-700 font-semibold"}>Attendance Summary</p>
          <NormalTable
            columnHeaders={attendanceColumnHeaders}
            tableData={attendanceTableData}
          />
        </div>
        <div
          className={
            "card col-span-12 md:col-span-4 p-3 rounded-2xl flex flex-col"
          }
        >
          <p className={"text-blue-700 font-semibold"}>Daily Records</p>
          <div className={"flex"}>
            <BarChart
              xAxis={[
                { scaleType: "band", data: ["group A", "group B", "group C"] },
              ]}
              series={[
                { data: [4, 3, 5] },
                { data: [1, 6, 3] },
                { data: [2, 5, 6] },
              ]}
              width={500}
              height={300}
            />
          </div>
        </div>
        <div className={"card col-span-12 lg:col-span-6 p-3 rounded"}>
          <p className={"text-blue-700 font-semibold"}>Tasks Due Today</p>
          <span className="my-3 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-500 text-white">
            Total Count 5
          </span>
          <div>
            <div className="w-full flex flex-col divide-y divide-gray-200">
              {tasksDueToday?.map((task: any, index) => (
                <div
                  className={
                    "grid grid-cols-12 gap-x-2 py-3 px-4 text-sm hover:bg-blue-100 hover:text-blue-700"
                  }
                >
                  <div className={"col-span-10"}>
                    <p className={"font-semibold"}>{task?.title}</p>
                    <p className={"text-gray-600"}>{task?.allocatedBy}</p>
                  </div>
                  <div className={"col-span-2 text-end"}>
                    <p className={"font-semibold"}>{task?.dueTime}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={"card col-span-12 lg:col-span-6 p-3 rounded"}>
          <p className={"text-blue-700 font-semibold"}>Tasks Overdue</p>
          <span className="my-3 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-500 text-white">
            Total Count 5
          </span>
          <div>
            <div className="w-full flex flex-col divide-y divide-gray-200">
              {tasksOverdue?.map((task: any, index) => (
                <div
                  className={
                    "grid grid-cols-12 gap-x-2 py-3 px-4 text-sm hover:bg-blue-100 hover:text-blue-700"
                  }
                >
                  <div className={"col-span-10"}>
                    <p className={"font-semibold"}>{task?.title}</p>
                    <p className={"text-gray-600"}>{task?.allocatedBy}</p>
                  </div>
                  <div className={"col-span-2 text-end"}>
                    <p className={"font-semibold"}>{task?.dueTime}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
