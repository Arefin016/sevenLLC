import { useForm } from 'react-hook-form';
import signUpPic from '../../assets/images/signUpImage/signUpImage.jpg';
import logo from '../../assets/images/signUpImage/signUpLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import {
  BackToHomeArrowSvg,
  SignUpSvg,
} from '../../components/SvgContainer/SvgConainer';

import { useLogin } from '@/hooks/auth.mutations';
import useAuth from '@/hooks/useAuth';
import { ImSpinner9 } from 'react-icons/im';
import { useEffect, useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { mutateAsync: loginMutation } = useLogin();
  const { loading, token } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // console.log(data);
      await loginMutation(data);
      reset();
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  //return if the user is signed in
  useEffect(() => {
    if (token) {
      navigate('/');
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
            <h1 className="text-headingColor text-2xl md:text-2xl lg:text-[32px] font-bold lg:mt-[104px] mt-5">
              Log In
            </h1>
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
                  {...register('email', { required: true })}
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
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    {...register('password', {
                      required: 'Password is required',
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
              {/* forget password text */}
              <div className="flex justify-center mt-[23px]">
                <p className="text-navbarColor text-base lg:text-lg">
                  Forgot your Password?{' '}
                  <Link to={'/forgetPassword'}>
                    <span className="text-buttonColor text-base lg:text-lg font-bold underline">
                      Click Here
                    </span>{' '}
                  </Link>
                </p>
              </div>
              {/* This is the submit button */}
              <div className="flex justify-center sm:justify-normal items-center gap-2">
                <button
                  className="bg-buttonColor rounded-[60px] text-sm sm:text-base font-semibold mt-9 text-[#FFF] w-[250px] sm:w-[560px] lg:h-[68px] h-10 flex items-center justify-center cursor-pointer hover:bg-white border hover:border-buttonColor hover:text-buttonColor group"
                  type="submit"
                >
                  {loading ? (
                    <ImSpinner9 className="text-white size-4 sm:size-7 animate-spin group-hover:text-buttonColor" />
                  ) : (
                    <span className="flex items-center justify-center gap-1">
                      <span>Log In</span>
                      <SignUpSvg />
                    </span>
                  )}
                </button>
              </div>
              {/*  */}
              <p className="text-center lg:mt-[113px] lg:mb-[47px] mt-5 mb-11 text-navbarColor text-base sm:text-lg">
                New User?
                <Link to={'/signUp'}>
                  <span className="text-buttonColor text-base lg:text-lg font-bold ml-2">
                    Create Account
                  </span>{' '}
                </Link>
              </p>
            </form>
          </div>
        </div>
        {/* This is the right div */}
        <div className="w-full sm:w-[50%] relative overflow-auto">
          <div className="flex items-center gap-2 absolute lg:right-[200px] right-[90px] lg:top-4">
            <Link to={'/'}>
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

export default Login;
