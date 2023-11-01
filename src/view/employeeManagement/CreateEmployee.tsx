import { TextField } from "../../components/inputs/TextField";
import { TabPanel } from "../../components/tabs/TabPanel";
import { MyAttendence } from "../attendance/MyAttendence";
import { TeamAttendance } from "../attendance/TeamAttendance";
import { NormalTable } from "../../components/tables/NormalTable";
import { Button } from "../../components/buttons/Button";

export const CreateEmployee = () => {
  const AddressForm = () => {
    return (
      <div className="grid grid-cols-12 gap-5">
        <div className={"col-span-12 lg:col-span-3"}>
          <TextField
            label={"Address Line 1"}
            type={"text"}
            id={"gender"}
            helperText={""}
            error={false}
            required={true}
            register={undefined}
          />
        </div>
        <div className={"col-span-12 lg:col-span-3"}>
          <TextField
            label={"Address Line 2"}
            type={"text"}
            id={"gender"}
            helperText={""}
            error={false}
            required={true}
            register={undefined}
          />
        </div>
        <div className={"col-span-12 lg:col-span-3"}>
          <TextField
            label={"Address Line 3"}
            type={"text"}
            id={"gender"}
            helperText={""}
            error={false}
            required={true}
            register={undefined}
          />
        </div>
        <div className={"col-span-12 lg:col-span-3"}>
          <TextField
            label={"City"}
            type={"text"}
            id={"gender"}
            helperText={""}
            error={false}
            required={true}
            register={undefined}
          />
        </div>
        <div className={"col-span-12 lg:col-span-3"}>
          <TextField
            label={"State"}
            type={"text"}
            id={"gender"}
            helperText={""}
            error={false}
            required={true}
            register={undefined}
          />
        </div>
        <div className={"col-span-12 lg:col-span-3"}>
          <TextField
            label={"Country"}
            type={"text"}
            id={"gender"}
            helperText={""}
            error={false}
            required={true}
            register={undefined}
          />
        </div>
        <div className={"col-span-12 lg:col-span-3"}>
          <TextField
            label={"Geo Coordinate"}
            type={"text"}
            id={"gender"}
            helperText={""}
            error={false}
            required={true}
            register={undefined}
          />
        </div>
        <div className={"col-span-12 lg:col-span-3"}>
          <TextField
            label={"Postal Code"}
            type={"text"}
            id={"gender"}
            helperText={""}
            error={false}
            required={true}
            register={undefined}
          />
        </div>
      </div>
    );
  };

  const tabOptions = [
    {
      title: "Present Address",
      body: <AddressForm />,
      active: true,
    },
    {
      title: "Permanent Address",
      body: <AddressForm />,
    },
  ];

  const reportingColumnHeaders = [
    "Staff ID",
    "Name",
    "Designation",
    "Date From",
    "Date To",
  ];

  return (
    <div className={"px-5"}>
      <p className={"font-bold text-2xl my-5"}>Create Employee</p>
      <div className={"card p-3 rounded-2xl"}>
        <p className={"font-semibold text-lg text-gray-500 mb-5"}>
          Personal Details
        </p>
        <div className={"grid grid-cols-12 gap-5"}>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"First Name"}
              type={"text"}
              id={"firstName"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Last Name"}
              type={"text"}
              id={"lastName"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Calling Name"}
              type={"text"}
              id={"callingName"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Date of Birth"}
              type={"date"}
              id={"dob"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Gender"}
              type={"text"}
              id={"gender"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Mobile"}
              type={"text"}
              id={"gender"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Personal Email"}
              type={"text"}
              id={"gender"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
        </div>
        <div className={"my-5"}>
          <TabPanel options={tabOptions} />
        </div>
        <p className={"font-semibold text-lg text-gray-500 mb-5"}>
          Employment Details
        </p>
        <div className={"grid grid-cols-12 gap-5"}>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Staff ID"}
              type={"text"}
              id={"gender"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Hiring Source"}
              type={"text"}
              id={"gender"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Department"}
              type={"text"}
              id={"gender"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Date of Joining"}
              type={"date"}
              id={"gender"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Employment From"}
              type={"date"}
              id={"gender"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Employment To"}
              type={"date"}
              id={"gender"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Cooperate Email"}
              type={"text"}
              id={"gender"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className={"col-span-12 lg:col-span-6"}>
            <TextField
              label={"Reporting Employee"}
              type={"text"}
              id={"gender"}
              helperText={""}
              error={false}
              required={true}
              register={undefined}
            />
          </div>
          <div className={"col-span-12"}>
            <NormalTable
              columnHeaders={reportingColumnHeaders}
              tableData={[]}
            />
          </div>
          <div className={"col-span-12 flex justify-end gap-5"}>
            <Button text={"Clear"} btnClass={"secondary"} type={"button"} />
            <Button text={"Save"} btnClass={"primary"} type={"button"} />
          </div>
        </div>
      </div>
    </div>
  );
};
