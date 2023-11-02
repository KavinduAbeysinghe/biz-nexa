import { TextField } from "../../components/inputs/texts/TextField";
import { Button } from "../../components/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handlePasswordToggle = () => setShowPassword((prev) => !prev);

  const commonError = "Field is required";

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(commonError),
    password: Yup.string().required(commonError),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleLogin = (data: any) => {
    console.log(data);
    navigate("/control/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <img
        src={require("../../assets/images/bgimg.jpg")}
        alt="bg-img"
        className="h-full w-full absolute top-0 left-0 object-cover -z-10 brightness-50"
      />
      <div className="rounded-2xl m-auto w-11/12 md:w-4/6 lg:w-1/2 overflow-hidden">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 relative">
            <video
              className="absolute h-1/3 md:h-full top-0 left-0 object-cover w-full"
              playsInline
              autoPlay
              muted
              loop
              poster="cake.jpg"
            >
              <source
                src={require("../../assets/videos/bgv.mp4")}
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
            <div className="absolute z-10 top-0 left-0 w-full h-full flex flex-col justify-center items-center">
              <p className="text-5xl text-white font-extrabold">Biz Nexa</p>
              <p className="text-gray-300 text-lg mt-5">Modern and Efficient</p>
              <p className="text-gray-300 text-lg my-3">HR Management System</p>
              {/* <p className="text-gray-300 text-lg">Attendence Marking System</p> */}
            </div>
          </div>
          <div className="p-5 md:p-10 col-span-12 md:col-span-6 bg-white">
            <p className="text-2xl font-bold text-center">Welcome Back</p>
            <p className="text-sm text-gray-600 font-normal text-center">
              Log in to continue
            </p>
            <div className="mt-5 space-y-3">
              <TextField
                label="Email"
                type="text"
                id="email"
                helperText={
                  errors?.email?.message
                    ? errors?.email?.message?.toString()
                    : ""
                }
                error={!!errors?.email?.message}
                required={true}
                register={register("email")}
              />
              <div>
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  icon={
                    !showPassword ? (
                      <FontAwesomeIcon
                        icon={faEye}
                        className="text-gray-400"
                        onClick={handlePasswordToggle}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        className="text-gray-400"
                        onClick={handlePasswordToggle}
                      />
                    )
                  }
                  helperText={
                    errors?.password?.message
                      ? errors?.password?.message?.toString()
                      : ""
                  }
                  error={!!errors?.password?.message}
                  required={true}
                  register={register("password")}
                />
                <p className="text-sm text-right mt-2 text-blue-700">
                  Forgot Password?
                </p>
              </div>
            </div>
            <div className="mt-5">
              <Button
                text="Login"
                btnClass="primary"
                type="submit"
                onClick={handleSubmit(handleLogin)}
                fullWidth={true}
              />
              <div className="py-6 flex items-center text-sm text-gray-300 uppercase before:flex-[1_1_0%] before:border-t before:mr-6 after:flex-[1_1_0%] after:border-t after:ml-6">
                Or
              </div>
              <Button
                text="Continue with Google"
                btnClass="secondary"
                type="button"
                fullWidth={true}
              />
              <p className="text-sm text-gray-500 text-center mt-5">
                Don't have an account? Sign Up
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-10 text-gray-400 w-full text-center">
        <p>Copyright © 2023 bizNexa.com All Rights Reserved.</p>
      </div>
    </div>
  );
};
