import signUpPic from '../../assets/images/signUpImage/signUpImage.jpg';
import logo from '../../assets/images/signUpImage/signUpLogo.png';
import { Link } from 'react-router-dom';
import { SignUpSvg } from '../../components/SvgContainer/SvgConainer';
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import useAuth from '@/hooks/useAuth';
import { useMutation } from '@tanstack/react-query';
import { OtpVerifyFunc } from '@/hooks/auth.hooks';
import { PiSpinnerBold } from 'react-icons/pi';
import toast from 'react-hot-toast';

const CodePage = () => {
  const { loading, setLoading } = useAuth();
  const [otp, setOtp] = useState('');

  // mutation:
  const otpVerifyMutation = useMutation({
    mutationKey: ['otp-verify'],
    mutationFn: (payload) => OtpVerifyFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      console.log(data);
      setLoading(false);
      setOtp('');
      toast.success(data?.message);
    },
    onError: (error) => {
      setLoading(false);
      toast.error(error?.message);
    },
  });

  //handlers:
  const onSubmit = () => {
    const email = localStorage.getItem('email');
    const payload = {
      email: JSON.parse(email),
      otp,
    };
    otpVerifyMutation.mutate(payload);
  };
  return (
    <section>
      <div className="flex h-[100vh] overflow-hidden">
        {/* This is the left div */}
        <div className="w-[50%] ">
          <div className="flex flex-col justify-center items-center mt-[68.58px]">
            <img
              className="w-[254px] h-[193px] object-cover"
              src={logo}
              alt=""
            />
            <h1 className="text-headingColor text-[32px] font-bold mt-[104px]">
              Enter The Code
            </h1>
            <p className="text-navbarColor mt-2 max-w-[379px] flex text-center">
              Enter the code just sent your email to reset your password.
            </p>
          </div>
          {/* Input Field */}
          <div className="ml-[200px] mt-12 max-w-[560px]">
            {/* This is input field */}
            {/* Your Name Field */}
            <form className="">
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
              <div className="flex items-center gap-2">
                <button
                  onClick={onSubmit}
                  className="bg-buttonColor rounded-[60px] text-base font-semibold mt-9 text-[#FFF] w-[560px] h-[68px] flex items-center justify-center cursor-pointer hover:bg-white border hover:border-buttonColor hover:text-buttonColor group"
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
        <div className="w-[50%] relative">
          <div className="flex items-center gap-2 absolute right-[200px] top-[56px]">
            <Link to={'/'}>
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

export default CodePage;
