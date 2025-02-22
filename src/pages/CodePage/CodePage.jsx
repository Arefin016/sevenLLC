import { useForm } from "react-hook-form";
import signUpPic from "../../assets/images/signUpImage/signUpImage.jpg";
import logo from "../../assets/images/signUpImage/signUpLogo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  BackToHomeArrowSvg,
  SignUpSvg,
} from "../../components/SvgContainer/SvgConainer";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import useAuth from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { OtpVerifyFunc } from "@/hooks/auth.hooks";
import { PiSpinnerBold } from "react-icons/pi";
import toast from "react-hot-toast";

const CodePage = () => {
  const { loading, setLoading, token } = useAuth();
  const [otp, setOtp] = useState("");
  const { handleSubmit } = useForm();
  const navigate = useNavigate();

  // mutation:
  const otpVerifyMutation = useMutation({
    mutationKey: ["otp-verify"],
    mutationFn: (payload) => OtpVerifyFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      console.log(data);
      setLoading(false);
      setOtp("");
      // localStorage.removeItem('email');
      navigate("/resetPassword");
      toast.success(data?.message, {
        duration: 1500,
      });
    },
    onError: () => {
      setLoading(false);
      toast.error("Invalid OTP !", {
        duration: 1500,
      });
    },
  });

  //handlers:
  const onSubmit = () => {
    const email = localStorage.getItem("email");
    const payload = {
      email: JSON.parse(email),
      otp,
    };
    otpVerifyMutation.mutate(payload);
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
              className="md:w-[185px] lg:w-[254px] w-[150px] md:h-[150px] h-[120px] lg:h-[193px] object-cover"
              src={logo}
              alt=""
            />
            <h1 className="text-headingColor text-2xl md:text-2xl lg:text-[32px] font-bold lg:mt-[104px] mt-8">
              Enter The Code
            </h1>
            <p className="text-navbarColor mt-2 max-w-[379px] flex text-center px-2">
              Enter the code just sent your email to reset your password.
            </p>
          </div>
          {/* Input Field */}
          <div className="max-w-[560px] px-5 mx-auto mt-12">
            {/* This is input field */}
            {/* Your Name Field */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="lg:max-w-[560px]"
            >
              {/* This is the Email Address input field */}
              <div id="otp_container" className="">
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderSeparator={false}
                  renderInput={(props) => <input {...props} />}
                />
              </div>
              {/* This is the submit button */}
              <div className="flex justify-center items-center gap-2">
                <button
                  className="bg-buttonColor rounded-[60px] text-sm sm:text-base font-semibold mt-9 text-[#FFF] w-[250px] sm:w-[560px] lg:h-[68px] h-10 flex items-center justify-center cursor-pointer hover:bg-white border hover:border-buttonColor hover:text-buttonColor group"
                  type="submit"
                >
                  {loading ? (
                    <PiSpinnerBold className="text-white size-4 sm:size-7 animate-spin group-hover:text-buttonColor" />
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

export default CodePage;
