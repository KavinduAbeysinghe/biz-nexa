import {
  Autocomplete,
  FormControl,
  FormHelperText,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import ClearIcon from "@mui/icons-material/Clear";

interface FormAutoCompleteFieldProps {
  options: Array<any>;
  register: any;
  label: string;
  error: boolean;
  helperText: string;
  id: string;
  disabled?: boolean;
  required: boolean;
  control: any;
  setValue: any;
  watch: any;
  placeholder?: string;
}

const FormAutoCompleteField = ({
  options,
  label,
  error,
  helperText,
  register,
  id,
  disabled,
  required,
  control,
  setValue,
  watch,
  placeholder,
}: FormAutoCompleteFieldProps) => {
  const [inputValue, setInputValue] = useState<any>("");
  const [temp, setTemp] = useState<any>("");

  // Sorting the option alphabetically according to the label
  useEffect(() => {
    options.sort((a, b) => {
      const labelA = a.label.toLowerCase();
      const labelB = b.label.toLowerCase();
      if (labelA > labelB) return 1;
      if (labelA < labelB) return -1;
      return 0;
    });
  }, [options]);

  const val = watch(id);

  useEffect(() => {
    if (val) {
      if (typeof val === "object") {
        setTemp(val);
      } else {
        setTemp(options.find((e) => e.value == val) ?? "");
      }
    } else {
      setTemp(val);
    }
  }, [val, options]);

  return (
    <FormControl
      fullWidth
      variant="outlined"
      size="small"
      required={required}
      // error={error}
      disabled={disabled}
    >
      <Controller
        control={control}
        name={id}
        render={({ field: { value, onChange } }) => {
          return (
            <Autocomplete
              disabled={disabled}
              // fullWidth
              value={temp ?? ""}
              onChange={(event: any, newValue: any) => {
                setValue(id, newValue?.value ?? "");
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id={id}
              freeSolo
              autoHighlight
              clearOnBlur={true}
              loadingText={"Loading..."}
              options={options}
              sx={{
                padding: 0,
                margin: 0,
                paddingTop: 0,
              }}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <label
                    htmlFor={id}
                    className={`block text-sm font-semibold mb-2 ${
                      error && "text-red-700"
                    }`}
                  >
                    {label}{" "}
                    <span className="text-red-700">{required ? "*" : ""}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      {...params.inputProps}
                      className={`py-2 px-3 block w-full border-[1px] ${
                        error ? "border-red-700" : ""
                      } rounded-md text-sm focus:outline-0 focus:border-transparent focus:ring-2 ring-0 focus:ring-blue-600 transition-all`}
                      placeholder={placeholder}
                    />

                    {/*<div className="absolute inset-y-0 right-0 pr-3 flex items-center">*/}
                    {/*  <IconButton*/}
                    {/*    size={"small"}*/}
                    {/*    onClick={() => {*/}
                    {/*      setInputValue("");*/}
                    {/*      setTemp("");*/}
                    {/*    }}*/}
                    {/*  >*/}
                    {/*    <ClearIcon fontSize={"small"} />*/}
                    {/*  </IconButton>*/}
                    {/*</div>*/}
                  </div>
                  <p className="text-red-700 text-xs mt-2">{helperText}</p>
                </div>
              )}
            />
          );
        }}
      />
      {/*<FormHelperText>{helperText}</FormHelperText>*/}
    </FormControl>
  );
};

export default FormAutoCompleteField;
