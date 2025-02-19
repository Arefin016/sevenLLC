import { useState } from "react";
import signUpPic from "../../assets/images/signUpImage/signUpImage.jpg";
import logo from "../../assets/images/signUpImage/signUpLogo.png";
import {
  SignUpSvg,
  UploadPicSvg,
} from "../../components/SvgContainer/SvgConainer";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import toast from "react-hot-toast";

const SignUp = () => {
  const [image, setImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Create FormData to send files
      const formData = new FormData();
      formData.append("first_name", data.first_Name);
      formData.append("last_name", data.last_Name);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("password_confirmation", data.password_confirmation);
      if (image) formData.append("avatar", image);

      console.log(...formData);

      // Send formData to your backend API
      const response = await axiosPublic.post("/api/users/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success(response.data.message, {
        duration: 1500,
      });
      reset();
      navigate("/login");
    } catch (error) {
      console.error("Registration Error: ", error);
      toast.error(error.response?.data?.message || "Registration Failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Only image files (JPEG, PNG, JPG, GIF) are allowed.");
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert("File must be less than 2MB.");
        return;
      }
      setImage(file);
    }
  };

  return (
    <section>
      <div className="flex h-[100vh] overflow-hidden">
        {/* This is the left div */}
        <div className="w-[50%] overflow-y-scroll">
          <div className="flex flex-col justify-center items-center mt-[68.58px]">
            <img
              className="w-[254px] h-[193px] object-cover"
              src={logo}
              alt=""
            />
            <h1 className="text-headingColor text-[32px] font-bold mt-[104px]">
              Sign Up
            </h1>
          </div>
          {/* Input Field */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="ml-[200px] mt-16 max-w-[560px]"
          >
            <div className="flex gap-4 items-center">
              <label
                htmlFor="photo-upload"
                className="w-24 h-24 border-2 border-dashed border-gray-300 flex justify-center items-center rounded-md cursor-pointer hover:border-blue-500 transition"
              >
                {image ? (
                  <img
                    src={image}
                    alt="Uploaded"
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <div className="flex flex-col items-center text-navbarColor rounded-xl">
                    <UploadPicSvg />
                  </div>
                )}
              </label>
              <input
                type="file"
                id="photo-upload"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              <div className="flex items-center gap-3">
                <p className="text-2xl text-headingColor font-medium">
                  Add your photo
                </p>
                <p className="text-lg text-navbarColor">(Less than 2MB)</p>
              </div>
            </div>
            {/* This is input field */}
            {/* Your Name Field */}
            <div className="mt-12">
              {/* This is the First name input field */}
              <div className="flex flex-col gap-2">
                <label className="text-headingColor text-lg font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_Name"
                  {...register("first_Name", { required: true })}
                  className="border border-[#D0D3D6] rounded-xl py-[25px] px-5"
                  placeholder="Enter Your First Name"
                />
                {errors.first_Name && (
                  <span className="text-red-600 font-semibold">
                    First Name is required
                  </span>
                )}
              </div>
              {/* This is the Last Name input field */}
              <div className="flex flex-col gap-2 mt-[28px]">
                <label className="text-headingColor text-lg font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_Name"
                  {...register("last_Name", { required: true })}
                  className="border border-[#D0D3D6] rounded-xl py-[25px] px-5"
                  placeholder="Enter Your Last Name"
                />
                {errors.last_Name && (
                  <span className="text-red-600 font-semibold">
                    Last Name is required
                  </span>
                )}
              </div>
              {/* This is the Phone Number input field */}
              <div className="flex flex-col gap-2 mt-[28px]">
                <label className="text-headingColor text-lg font-medium">
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phone"
                  {...register("phone", { required: true })}
                  className="border border-[#D0D3D6] rounded-xl py-[25px] px-5"
                  placeholder="Enter Your Phone Number"
                />
                {errors.phone && (
                  <span className="text-red-600 font-semibold">
                    Phone Number is required
                  </span>
                )}
              </div>
              {/* This is the Email Address input field */}
              <div className="flex flex-col gap-2 mt-[28px]">
                <label className="text-headingColor text-lg font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="border border-[#D0D3D6] rounded-xl py-[25px] px-5"
                  placeholder="Enter Email Address"
                />
                {errors.email && (
                  <span className="text-red-600 font-semibold">
                    Email Address is required
                  </span>
                )}
              </div>
              {/* This is the Password input field */}
              <div className="flex flex-col gap-2 mt-[28px] relative">
                <label className="text-headingColor text-lg font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="border border-[#D0D3D6] rounded-xl py-[25px] px-5 w-full"
                    placeholder="Enter Password"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute bottom-[28px] right-[10px] cursor-pointer"
                  >
                    {showPassword ? (
                      <IoEyeOutline className="text-xl" />
                    ) : (
                      <IoEyeOffOutline className="text-xl text-black" />
                    )}
                  </span>
                </div>
                {errors.password && (
                  <span className="text-red-600 font-semibold">
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* This is the Confirm Password input field */}
              <div className="flex flex-col gap-2 mt-[28px] relative">
                <label className="text-headingColor text-lg font-medium">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="password_confirmation"
                    {...register("password_confirmation", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    className="border border-[#D0D3D6] rounded-xl py-[25px] px-5 w-full"
                    placeholder="Enter Confirm Password"
                  />
                  <span
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute bottom-[28px] right-[10px] cursor-pointer"
                  >
                    {showConfirmPassword ? (
                      <IoEyeOutline className="text-xl" />
                    ) : (
                      <IoEyeOffOutline className="text-xl" />
                    )}
                  </span>
                </div>
                {errors.password_confirmation && (
                  <span className="text-red-600 font-semibold">
                    {errors.password_confirmation.message}
                  </span>
                )}
              </div>

              {/* forget password text */}
              <div className="flex justify-center mt-[23px]">
                <p className="text-navbarColor text-lg">
                  Forgot your Password?{" "}
                  <Link to={"/forgetPassword"}>
                    <span className="text-buttonColor text-lg font-bold underline">
                      Click Here
                    </span>{" "}
                  </Link>
                </p>
              </div>
              {/* This is the submit button */}
              <div className="flex items-center gap-2">
                <button
                  className="bg-buttonColor rounded-[60px] text-base font-semibold mt-9 text-[#FFF] w-[560px] h-[68px] flex items-center justify-center cursor-pointer hover:bg-white border hover:border-buttonColor hover:text-buttonColor"
                  type="submit"
                >
                  <span>Sign Up</span>
                  <SignUpSvg />
                </button>
              </div>
              {/*  */}
              <p className="text-center mt-[113px] mb-[47px] text-navbarColor text-lg">
                Already have an account?{" "}
                <Link to={"/login"}>
                  <span className="text-buttonColor text-lg font-bold ml-2">
                    Log In
                  </span>{" "}
                </Link>
              </p>
            </div>
          </form>
        </div>
        {/* This is the right div */}
        <div className="w-[50%] relative">
          <div className="flex items-center gap-2 absolute right-[200px] top-[56px]">
            <Link to={"/"}>
              <button
                className="bg-transparent rounded-[60px] text-base font-semibold mt-9 text-[#FFF] w-[208px] h-[58px] flex items-center justify-center cursor-pointer border border-[#FFF] "
                type="submit"
              >
                <span>Back to Home</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.0054 9.414L7.39838 18.021L5.98438 16.607L14.5904 8H7.00538V6H18.0054V17H16.0054V9.414Z"
                    fill="white"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <img
            className="w-[960px] h-[100vh] object-cover"
            src={signUpPic}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
