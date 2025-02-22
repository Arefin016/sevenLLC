import { useForm } from "react-hook-form";
import signUpPic from "../../assets/images/signUpImage/signUpImage.jpg";
import logo from "../../assets/images/signUpImage/signUpLogo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  BackToHomeArrowSvg,
  SignUpSvg,
} from "../../components/SvgContainer/SvgConainer";
import { useMutation } from "@tanstack/react-query";
import { VerifyEmailFunc } from "@/hooks/auth.hooks";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";
import { PiSpinnerBold } from "react-icons/pi";
import { useEffect } from "react";

const ForgetPasswordPage = () => {
  const { loading, setLoading, token } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // mutation:
  const verifyMailMutation = useMutation({
    mutationKey: ["verify-email"],
    mutationFn: VerifyEmailFunc,
    onMutate: async () => {
      setLoading(true);
    },
    onSuccess: (data, variables) => {
      setLoading(false);
      reset();
      localStorage.setItem("email", JSON.stringify(variables.email));
      navigate("/enterCodePage");
      toast.success(data?.message, {
        duration: 1500,
      });
    },
    onError: (error) => {
      setLoading(false);
      toast.error(error.response?.data?.message, {
        duration: 1500,
      });
    },
  });

  //handlers:
  const onSubmit = (data) => {
    verifyMailMutation.mutateAsync(data);
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
      <div className="flex flex-col-reverse sm:flex-row h-[550px] md:h-[100vh] overflow-hidden">
        {/* This is the left div */}
        <div className="w-full sm:w-[50%]">
          <div className="flex flex-col justify-center items-center sm:mt-[68.58px] mt-7">
            <img
              className="md:w-[140px] lg:w-[190px] w-[120px] md:h-[150px] h-[120px] lg:h-[193px] object-contain"
              src={logo}
              alt=""
            />
            <h1 className="text-headingColor text-2xl md:text-2xl lg:text-[32px] font-bold lg:mt-[104px] mt-8">
              Forgot Password?
            </h1>
            <p className="text-navbarColor mt-2 px-2 text-center">
              Enter your email to get a verification code.
            </p>
          </div>
          {/* Input Field */}
          <div className="xl:ml-[200px] mt-8 sm:mt-16 sm:max-w-[560px] w-full">
            {/* This is input field */}
            {/* Your Name Field */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="sm:mt-12 mt-10 px-6 xlg:pl-14 xl:px-0"
            >
              {/* This is the Email Address input field */}
              <div className="flex flex-col gap-2 mt-[28px] w-full">
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
              {/* This is the submit button */}
              <div className="flex justify-center sm:justify-normal items-center gap-2">
                <button
                  className="bg-buttonColor rounded-[60px] text-sm sm:text-base font-semibold mt-9 text-[#FFF] w-[560px] lg:h-[68px] h-11 flex items-center justify-center cursor-pointer hover:bg-white border hover:border-buttonColor hover:text-buttonColor group"
                  type="submit"
                >
                  {loading ? (
                    <PiSpinnerBold className="text-white size-7 animate-spin group-hover:text-buttonColor" />
                  ) : (
                    <span className="flex items-center gap-1">
                      <span>Submit</span>
                      <SignUpSvg />
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
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

export default ForgetPasswordPage;
