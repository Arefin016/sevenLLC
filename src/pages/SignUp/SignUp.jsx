import { useEffect, useState } from "react";
import signUpPic from "../../assets/images/signUpImage/signUpImage.jpg";
import logo from "../../assets/images/signUpImage/signUpLogo.png";
import {
  BackToHomeArrowSvg,
  SignUpSvg,
  UploadPicSvg,
} from "../../components/SvgContainer/SvgConainer";
import { ImSpinner9 } from "react-icons/im";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";
import { useSignUp } from "@/hooks/auth.mutations";

const SignUp = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { loading, token } = useAuth();
  const { mutateAsync: signUpMutation } = useSignUp();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      if (image) {
        const userData = { ...data, avatar: image };
        await signUpMutation(userData); // Wait for mutation to complete
        reset(); // Reset the form after successful mutation
        setImage(null);
      } else {
        toast.error("You must upload a image before proceed", {
          duration: 1500,
        });
      }
    } catch (error) {
      console.error("Registration Error: ", error);
    }
  };

  //image handler:
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

  //return if the user is signed in
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [navigate, token]);
  if (token) return;
  return (
    <section>
      <div className="flex flex-col-reverse sm:flex-row h-[100vh] overflow-hidden">
        {/* This is the left div */}
        <div className="w-full sm:w-[50%] overflow-y-scroll">
          <div className="flex flex-col justify-center items-center sm:mt-[68.58px] mt-7">
            <img
              className="md:w-[140px] lg:w-[190px] w-[120px] md:h-[150px] h-[120px] lg:h-[193px] object-contain"
              src={logo}
              alt=""
            />
            <h1 className="text-headingColor text-2xl md:text-2xl lg:text-[32px] font-bold lg:mt-[104px] mt-8">
              Sign Up
            </h1>
          </div>
          {/* Input Field */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="xl:ml-[200px] mt-8 sm:mt-16 sm:max-w-[560px] w-full"
          >
            <div className="flex flex-col xl:justify-normal justify-center xxs:flex-row gap-4 items-center">
              <label
                htmlFor="photo-upload"
                className="w-24 h-24 border-2 border-dashed border-gray-300 flex justify-center items-center rounded-md cursor-pointer hover:border-blue-500 transition"
              >
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
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
              <div className="flex flex-col xmd:flex-row items-center gap-3">
                <p className="text-xl lg:text-2xl text-headingColor font-medium">
                  Add your photo
                </p>
                <p className="text-base lg:text-lg text-navbarColor">
                  (Less than 2MB)
                </p>
              </div>
            </div>
            {/* This is input field */}
            {/* Your Name Field */}
            <div className="sm:mt-12 mt-8 px-6 xlg:pl-14 xl:px-0">
              {/* This is the First name input field */}
              <div className="flex flex-col gap-2 w-full">
                <label className="text-headingColor lg:text-lg text-base font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  {...register("first_name", { required: true })}
                  className="border text-sm lg:text-base border-[#D0D3D6] rounded-xl py-4 lg:py-[25px] px-5"
                  placeholder="Enter Your First Name"
                />
                {errors.first_Name && (
                  <span className="text-red-600 font-semibold">
                    First Name is required
                  </span>
                )}
              </div>
              {/* This is the Last Name input field */}
              <div className="flex flex-col gap-2 mt-3 sm:mt-[28px] w-full">
                <label className="text-headingColor lg:text-lg text-base font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  {...register("last_name", { required: true })}
                  className="border text-sm lg:text-base border-[#D0D3D6] rounded-xl py-4 lg:py-[25px] px-5"
                  placeholder="Enter Your Last Name"
                />
                {errors.last_Name && (
                  <span className="text-red-600 font-semibold">
                    Last Name is required
                  </span>
                )}
              </div>
              {/* This is the Phone Number input field */}
              <div className="flex flex-col gap-2 mt-3 sm:mt-[28px] w-full">
                <label className="text-headingColor sm:text-lg text-base font-medium">
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phone"
                  {...register("phone", { required: true })}
                  className="border text-sm lg:text-base border-[#D0D3D6] rounded-xl py-4 lg:py-[25px] px-5"
                  placeholder="Enter Your Phone Number"
                />
                {errors.phone && (
                  <span className="text-red-600 font-semibold">
                    Phone Number is required
                  </span>
                )}
              </div>
              {/* This is the Email Address input field */}
              <div className="flex flex-col gap-2 mt-3 sm:mt-[28px] w-full">
                <label className="text-headingColor lg:text-lg text-base font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="border text-sm lg:text-base border-[#D0D3D6] rounded-xl py-4 lg:py-[25px] px-5"
                  placeholder="Enter Email Address"
                />
                {errors.email && (
                  <span className="text-red-600 font-semibold">
                    Email Address is required
                  </span>
                )}
              </div>
              {/* This is the Password input field */}
              <div className="flex flex-col gap-2 mt-3 sm:mt-[28px] relative w-full">
                <label className="text-headingColor lg:text-lg text-base font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="border text-sm lg:text-base border-[#D0D3D6] rounded-xl py-4 lg:py-[25px] px-5 w-full"
                    placeholder="Enter Password"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute lg:bottom-7 bottom-[18px] right-[10px] cursor-pointer"
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
              <div className="flex flex-col gap-2 mt-3 sm:mt-[28px] relative w-full">
                <label className="text-headingColor lg:text-lg text-base font-medium">
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
                    className="border text-sm lg:text-base border-[#D0D3D6] rounded-xl py-4 lg:py-[25px] px-5 w-full"
                    placeholder="Enter Confirm Password"
                  />
                  <span
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute lg:bottom-7 bottom-[18px] right-[10px] cursor-pointer"
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
                <p className="text-navbarColor text-base lg:text-lg">
                  Forgot your Password?{" "}
                  <Link to={"/forgetPassword"}>
                    <span className="text-buttonColor text-base lg:text-lg font-bold underline">
                      Click Here
                    </span>{" "}
                  </Link>
                </p>
              </div>
              {/* This is the submit button */}
              <div className="flex justify-center sm:justify-normal items-center gap-2">
                <button
                  className="bg-buttonColor rounded-[60px] text-sm sm:text-base font-semibold mt-9 text-[#FFF] w-[560px] lg:h-[68px] h-11 flex items-center justify-center cursor-pointer hover:bg-white border hover:border-buttonColor hover:text-buttonColor group"
                  type="submit"
                >
                  {loading ? (
                    <ImSpinner9 className="text-white size-7 animate-spin group-hover:text-buttonColor" />
                  ) : (
                    <span className="flex items-center justify-center gap-1">
                      <span>Sign Up</span>
                      <SignUpSvg />
                    </span>
                  )}
                </button>
              </div>
              {/*  */}
              <p className="text-center lg:mt-[113px] lg:mb-[47px] mt-5 mb-11 text-navbarColor text-base sm:text-lg">
                Already have an account?{" "}
                <Link to={"/login"}>
                  <span className="text-buttonColor text-base lg:text-lg font-bold ml-2">
                    Log In
                  </span>{" "}
                </Link>
              </p>
            </div>
          </form>
        </div>
        {/* This is the right div */}
        <div className="w-full sm:w-[50%] relative overflow-auto">
          <div className="flex items-center gap-2 absolute lg:right-[200px] right-[90px] lg:top-4">
            <Link to={"/"}>
              <button
                className="bg-transparent rounded-[60px] lg:text-base text-sm font-semibold mt-9 text-[#FFF] w-[208px] lg:h-[58px] h-12 flex items-center justify-center cursor-pointer border border-[#FFF] "
                type="submit"
              >
                <span>Back to Home</span>
                <BackToHomeArrowSvg />
              </button>
            </Link>
          </div>
          <img
            className="w-full hidden sm:block sm:w-[960px] h-auto sm:h-[100vh] object-cover"
            src={signUpPic}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
