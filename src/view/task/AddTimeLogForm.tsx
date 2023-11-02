import { TextField } from "../../components/inputs/texts/TextField";

export const AddTimeLogForm = () => {
  return (
    <div className="grid grid-cols-12 gap-x-5 gap-y-2">
      <div className="col-span-4">
        <TextField
          label={"Date"}
          type={"date"}
          id={"date"}
          helperText={""}
          error={false}
          required={false}
          register={undefined}
        />
      </div>
      <div className="col-span-4">
        <TextField
          label={"Start Time"}
          type={"time"}
          id={"startTime"}
          helperText={""}
          error={false}
          required={false}
          register={undefined}
        />
      </div>
      <div className="col-span-4">
        <TextField
          label={"End Time"}
          type={"time"}
          id={"endTime"}
          helperText={""}
          error={false}
          required={false}
          register={undefined}
        />
      </div>
    </div>
  );
};
