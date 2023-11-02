import { TextField } from "../../components/inputs/texts/TextField";
import { Button } from "../../components/buttons/Button";
import { NormalTable } from "../../components/tables/NormalTable";

export const MyLeaves = () => {
  const Badge = (status: string) => {
    return (
      <span
        className={`my-3 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium text-white ${
          status === "Approved"
            ? "bg-green-500"
            : status === "Pending"
            ? "bg-orange-400"
            : "bg-gray-500"
        }`}
      >
        {status}
      </span>
    );
  };

  const leaveColHeads = [
    "Applied Date",
    "Date From",
    "Date To",
    "Comments",
    "Status",
  ];

  const leaveTableData = [
    {
      appliedDate: "1 Nov 2023",
      dateFrom: "8 Nov 2023",
      dateTo: "9 Nov 2023",
      comment: "For a personal matter",
      status: Badge("Approved"),
    },
    {
      appliedDate: "1 Nov 2023",
      dateFrom: "8 Nov 2023",
      dateTo: "9 Nov 2023",
      comment: "For a personal matter",
      status: Badge("Pending"),
    },
    {
      appliedDate: "1 Nov 2023",
      dateFrom: "8 Nov 2023",
      dateTo: "9 Nov 2023",
      comment: "For a personal matter",
      status: Badge("Approved"),
    },
    {
      appliedDate: "1 Nov 2023",
      dateFrom: "8 Nov 2023",
      dateTo: "9 Nov 2023",
      comment: "For a personal matter",
      status: Badge("Approved"),
    },
    {
      appliedDate: "1 Nov 2023",
      dateFrom: "8 Nov 2023",
      dateTo: "9 Nov 2023",
      comment: "For a personal matter",
      status: Badge("Declined"),
    },
  ];

  return (
    <div className="card grid grid-cols-12 gap-x-5 gap-y-2 p-5 rounded-2xl">
      <div className="col-span-12 lg:col-span-2">
        <TextField
          label={"Date From"}
          type={"date"}
          id={"dateFrom"}
          helperText={""}
          error={false}
          required={false}
          register={undefined}
        />
      </div>
      <div className="col-span-12 lg:col-span-2">
        <TextField
          label={"Date To"}
          type={"date"}
          id={"dateTo"}
          helperText={""}
          error={false}
          required={false}
          register={undefined}
        />
      </div>
      <div className="col-span-12 lg:col-span-6">
        <TextField
          label={"Comments"}
          type={"text"}
          id={"dateTo"}
          helperText={""}
          error={false}
          required={false}
          register={undefined}
          placeholder={"Enter any comment"}
        />
      </div>
      <div className="col-span-2">
        <div className="mt-7">
          <Button text={"Apply"} btnClass={"primary"} type={"button"} />
        </div>
      </div>
      <div className="col-span-12">
        <div className={"mt-5"}>
          <NormalTable
            columnHeaders={leaveColHeads}
            tableData={leaveTableData}
          />
        </div>
      </div>
    </div>
  );
};
