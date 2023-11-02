import { NormalTable } from "../../components/tables/NormalTable";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components/buttons/Button";
import { TextField } from "../../components/inputs/texts/TextField";

export const TeamLeaves = () => {
  const teamLeaveHeads = [
    "Staff Id",
    "Emp Name",
    "Date Applied",
    "Date From",
    "Date To",
    "",
  ];

  const teamLeaveTableData = [
    {
      staffId: "ST-1001",
      empName: "Stephanie Williams",
      dateApplied: "10 Nov 2023",
      dateFrom: "12 Nov 2023",
      dateTo: "13 Nov 2023",
      approveButtons: (
        <div className={"flex gap-2 justify-end"}>
          <Button text={"Approve"} btnClass={"primary"} type={"button"} />
          <Button text={"Decline"} btnClass={"secondary"} type={"button"} />
        </div>
      ),
    },
    {
      staffId: "ST-1001",
      empName: "Stephanie Williams",
      dateApplied: "10 Nov 2023",
      dateFrom: "12 Nov 2023",
      dateTo: "13 Nov 2023",
      approveButtons: (
        <div className={"flex gap-2 justify-end"}>
          <Button text={"Approve"} btnClass={"primary"} type={"button"} />
          <Button text={"Decline"} btnClass={"secondary"} type={"button"} />
        </div>
      ),
    },
    {
      staffId: "ST-1001",
      empName: "Stephanie Williams",
      dateApplied: "10 Nov 2023",
      dateFrom: "12 Nov 2023",
      dateTo: "13 Nov 2023",
      approveButtons: (
        <div className={"flex gap-2 justify-end"}>
          <Button text={"Approve"} btnClass={"primary"} type={"button"} />
          <Button text={"Decline"} btnClass={"secondary"} type={"button"} />
        </div>
      ),
    },
    {
      staffId: "ST-1001",
      empName: "Stephanie Williams",
      dateApplied: "10 Nov 2023",
      dateFrom: "12 Nov 2023",
      dateTo: "13 Nov 2023",
      approveButtons: (
        <div className={"flex gap-2 justify-end"}>
          <Button text={"Approve"} btnClass={"primary"} type={"button"} />
          <Button text={"Decline"} btnClass={"secondary"} type={"button"} />
        </div>
      ),
    },
    {
      staffId: "ST-1001",
      empName: "Stephanie Williams",
      dateApplied: "10 Nov 2023",
      dateFrom: "12 Nov 2023",
      dateTo: "13 Nov 2023",
      approveButtons: (
        <div className={"flex gap-2 justify-end"}>
          <Button text={"Approve"} btnClass={"primary"} type={"button"} />
          <Button text={"Decline"} btnClass={"secondary"} type={"button"} />
        </div>
      ),
    },
  ];

  const actionButtons = [
    {
      tooltip: "Approve",
      icon: faCircleCheck,
      handleClick: () => {},
    },
    {
      tooltip: "Approve",
      icon: faCircleCheck,
      handleClick: () => {},
    },
  ];

  return (
    <div className="card grid grid-cols-12 gap-x-5 gap-y-2 p-5 rounded-2xl">
      <div className="col-span-12">
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
          columnHeaders={teamLeaveHeads}
          tableData={teamLeaveTableData}
          // actionButtons={actionButtons}
        />
      </div>
    </div>
  );
};
