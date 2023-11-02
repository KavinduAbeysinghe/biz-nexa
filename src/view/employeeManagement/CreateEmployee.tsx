import { TextField } from "../../components/inputs/texts/TextField";
import { TabPanel } from "../../components/tabs/TabPanel";
import { MyAttendence } from "../attendance/MyAttendence";
import { TeamAttendance } from "../attendance/TeamAttendance";
import { NormalTable } from "../../components/tables/NormalTable";
import { Button } from "../../components/buttons/Button";
import FormAutoCompleteField from "../../components/inputs/texts/FormAutocompleteField";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

export const CreateEmployee = () => {
  const commonError = "Field is required";

  const validationSchema = Yup.object().shape({
    reportingEmployee: Yup.string().required(commonError),
    dateFrom: Yup.string().required(commonError),
    dateTo: Yup.string().required(commonError),
    firstName: Yup.string().required(commonError),
    lastName: Yup.string().required(commonError),
    callingName: Yup.string().required(commonError),
    dob: Yup.string().required(commonError),
    mobile: Yup.string().required(commonError),
    personalEmail: Yup.string().required(commonError),
    staffId: Yup.string().required(commonError),
    hiringSource: Yup.string().required(commonError),
    department: Yup.string().required(commonError),
    dateJoining: Yup.string().required(commonError),
    employmentTo: Yup.string().required(commonError),
    employmentFrom: Yup.string().required(commonError),
    cooperateEmail: Yup.string().required(commonError),
    gender: Yup.string().required(commonError),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

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

  const employeeData = [
    {
      id: 1,
      staffId: "STF1001",
      name: "Steven Smith",
      designation: "Technical Lead",
    },
    {
      id: 2,
      staffId: "STF1002",
      name: "John Doe",
      designation: "Architect",
    },
    {
      id: 3,
      staffId: "STF1003",
      name: "Jane Eyre",
      designation: "Senior SE",
    },
    {
      id: 4,
      staffId: "STF1004",
      name: "Charles Migill",
      designation: "Associate SE",
    },
    {
      id: 5,
      staffId: "STF1005",
      name: "James John",
      designation: "SE",
    },
  ];

  const [employeeTableData, setEmployeeTableData] = useState<Array<any>>([]);

  const reportingEmployee = watch("reportingEmployee");

  const dateFrom = watch("dateFrom");

  const dateTo = watch("dateTo");

  const handleAddEmployee = () => {
    if (reportingEmployee && dateFrom && dateTo) {
      const emp = employeeData?.find((e: any) => e?.id === reportingEmployee);
      setEmployeeTableData((prevState) => [
        ...prevState,
        {
          staffId: emp?.staffId,
          name: emp?.name,
          designation: emp?.designation,
          dateFrom: dateFrom,
          dateTo: dateTo,
        },
      ]);
      setValue("dateFrom", "");
      setValue("dateTo", "");
      setValue("reportingEmployee", "");
    }
  };

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
              helperText={
                errors?.firstName?.message
                  ? errors?.firstName?.message?.toString()
                  : ""
              }
              error={!!errors?.firstName?.message}
              required={true}
              register={register("firstName")}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Last Name"}
              type={"text"}
              id={"lastName"}
              helperText={
                errors?.lastName?.message
                  ? errors?.lastName?.message?.toString()
                  : ""
              }
              error={!!errors?.lastName?.message}
              required={true}
              register={register("lastName")}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Calling Name"}
              type={"text"}
              id={"callingName"}
              helperText={
                errors?.callingName?.message
                  ? errors?.callingName?.message?.toString()
                  : ""
              }
              error={!!errors?.callingName?.message}
              required={true}
              register={register("callingName")}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Date of Birth"}
              type={"date"}
              id={"dob"}
              helperText={
                errors?.dob?.message ? errors?.dob?.message?.toString() : ""
              }
              error={!!errors?.dob?.message}
              required={true}
              register={register("dob")}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <FormAutoCompleteField
              options={[
                { label: "Male", value: 1 },
                { label: "Female", value: 2 },
              ]}
              register={register("gender")}
              label={"Reporting Employee"}
              error={!!errors?.gender?.message}
              helperText={
                errors?.gender?.message
                  ? errors?.gender?.message?.toString()
                  : ""
              }
              id={"gender"}
              required={true}
              control={control}
              setValue={setValue}
              watch={watch}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Mobile"}
              type={"text"}
              id={"mobile"}
              helperText={
                errors?.mobile?.message
                  ? errors?.mobile?.message?.toString()
                  : ""
              }
              error={!!errors?.mobile?.message}
              required={true}
              register={register("mobile")}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Personal Email"}
              type={"text"}
              id={"personalEmail"}
              helperText={
                errors?.personalEmail?.message
                  ? errors?.personalEmail?.message?.toString()
                  : ""
              }
              error={!!errors?.personalEmail?.message}
              required={true}
              register={register("personalEmail")}
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
              id={"staffId"}
              helperText={
                errors?.staffId?.message
                  ? errors?.staffId?.message?.toString()
                  : ""
              }
              error={!!errors?.staffId?.message}
              required={true}
              register={register("staffId")}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <FormAutoCompleteField
              options={[
                { label: "Consultancy", value: 1 },
                { label: "Internship", value: 2 },
              ]}
              register={register("hiringSource")}
              label={"Hiring Source"}
              error={!!errors?.hiringSource?.message}
              helperText={
                errors?.hiringSource?.message
                  ? errors?.hiringSource?.message?.toString()
                  : ""
              }
              id={"hiringSource"}
              required={true}
              control={control}
              setValue={setValue}
              watch={watch}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Department"}
              type={"text"}
              id={"department"}
              helperText={
                errors?.department?.message
                  ? errors?.department?.message?.toString()
                  : ""
              }
              error={!!errors?.department?.message}
              required={true}
              register={register("department")}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Date of Joining"}
              type={"date"}
              id={"dateJoining"}
              helperText={
                errors?.dateJoining?.message
                  ? errors?.dateJoining?.message?.toString()
                  : ""
              }
              error={!!errors?.dateJoining?.message}
              required={true}
              register={register("dateJoining")}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Employment From"}
              type={"date"}
              id={"employmentFrom"}
              helperText={
                errors?.employmentFrom?.message
                  ? errors?.employmentFrom?.message?.toString()
                  : ""
              }
              error={!!errors?.employmentFrom?.message}
              required={true}
              register={register("employmentFrom")}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Employment To"}
              type={"date"}
              id={"employmentTo"}
              helperText={
                errors?.employmentTo?.message
                  ? errors?.employmentTo?.message?.toString()
                  : ""
              }
              error={!!errors?.employmentTo?.message}
              required={true}
              register={register("employmentTo")}
            />
          </div>
          <div className={"col-span-12 lg:col-span-3"}>
            <TextField
              label={"Cooperate Email"}
              type={"text"}
              id={"cooperateEmail"}
              helperText={
                errors?.cooperateEmail?.message
                  ? errors?.cooperateEmail?.message?.toString()
                  : ""
              }
              error={!!errors?.cooperateEmail?.message}
              required={true}
              register={register("cooperateEmail")}
            />
          </div>
          <div className={"col-span-12 grid grid-cols-12 gap-5"}>
            <div className="col-span-12 lg:col-span-4">
              <FormAutoCompleteField
                options={reportingEmployees}
                register={register("reportingEmployee")}
                label={"Reporting Employee"}
                error={!!errors?.reportingEmployee?.message}
                helperText={
                  errors?.reportingEmployee?.message
                    ? errors?.reportingEmployee?.message?.toString()
                    : ""
                }
                id={"reportingEmployee"}
                required={true}
                control={control}
                setValue={setValue}
                watch={watch}
                placeholder={"Enter reporting employee name"}
              />
            </div>
            <div className="col-span-12 lg:col-span-3">
              <TextField
                label={"Date From"}
                type={"date"}
                id={"dateFrom"}
                helperText={
                  errors?.dateFrom?.message
                    ? errors?.dateFrom?.message?.toString()
                    : ""
                }
                error={!!errors?.dateFrom?.message}
                required={true}
                register={register("dateFrom")}
              />
            </div>
            <div className="col-span-12 lg:col-span-3">
              <TextField
                label={"Date To"}
                type={"date"}
                id={"dateTo"}
                helperText={
                  errors?.dateTo?.message
                    ? errors?.dateTo?.message?.toString()
                    : ""
                }
                error={!!errors?.dateTo?.message}
                required={true}
                register={register("dateTo")}
              />
            </div>
            <div className="col-span-12 lg:col-span-1">
              <div className="mt-0 lg:mt-7">
                <Button
                  text={"Add"}
                  btnClass={"primary"}
                  type={"button"}
                  onClick={handleAddEmployee}
                />
              </div>
            </div>
          </div>
          <div className={"col-span-12"}>
            <NormalTable
              columnHeaders={reportingColumnHeaders}
              tableData={employeeTableData}
            />
          </div>
          <div className={"col-span-12 flex justify-end gap-5"}>
            <Button text={"Clear"} btnClass={"secondary"} type={"button"} />
            <Button
              text={"Save"}
              btnClass={"primary"}
              type={"button"}
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const reportingEmployees = [
  { value: 1, label: "Steven Smith - Technical Lead" },
  { value: 2, label: "John Doe - Architect" },
  { value: 3, label: "Jane Eyre - Senior SE" },
  { value: 4, label: "Charles Migill - Associate SE" },
  { value: 5, label: "James John - SE" },
];
