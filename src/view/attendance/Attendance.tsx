import { ProgressBar } from "../../components/progress/ProgressBar";
import { NormalTable } from "../../components/tables/NormalTable";
import {
  attendanceColumnHeaders,
  attendanceTableData,
} from "../dashboard/Dashboard";
import { TextField } from "../../components/inputs/texts/TextField";
import { Button } from "../../components/buttons/Button";
import { TabPanel } from "../../components/tabs/TabPanel";
import { MyAttendence } from "./MyAttendence";
import { TeamAttendance } from "./TeamAttendance";
import { MyLeaves } from "./MyLeaves";
import { TeamLeaves } from "./TeamLeaves";

export const Attendance = () => {
  const tabOptions = [
    {
      title: "My Attendance",
      body: <MyAttendence />,
      active: true,
    },
    {
      title: "Team Attendance",
      body: <TeamAttendance />,
    },
    {
      title: "My Leaves",
      body: <MyLeaves />,
    },
    {
      title: "Team Leaves",
      body: <TeamLeaves />,
    },
  ];

  return (
    <div className={"px-5"}>
      <p className={"font-bold text-2xl my-5"}>Attendance</p>
      <TabPanel options={tabOptions} />
    </div>
  );
};
