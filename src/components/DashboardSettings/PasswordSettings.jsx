import { usePasswordChangeMutation } from '@/hooks/cms.mutations';
import PasswordInput from '../PasswordInput/PasswordInput';
import { OrderSummerySvg } from '../SvgContainer/SvgConainer';
import { useForm } from 'react-hook-form';
import useAuth from '@/hooks/useAuth';
import { ImSpinner9 } from 'react-icons/im';
import toast from 'react-hot-toast';

const PasswordSettings = () => {
  const { mutateAsync: passwordMutation } = usePasswordChangeMutation();
  const { loading } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (data?.password != data?.password_confirmation) {
        toast.error('Passwords did not match');
      } else {
        await passwordMutation(data);
        reset();
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };
  return (
    <div className="container mx-auto mb-4 pb-10">
      <div className="bg-[#FFF] rounded-[20px] border border-[#F8F9FA] shadow-dashboardShadow mt-5 px-5 xxs:px-4 sm:px-4 xl:px-0">
        <div className="flex ml-8 gap-[22px] items-center mt-7 mb-[21px]">
          <h1 className="text-headingColor text-base xxs:text-lg md:text-xl font-semibold ">
            Password Setting
          </h1>
          <OrderSummerySvg />
        </div>
        <section>
          {/* This is the Password Setting Section */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="xlg:mt-6 xlg:ml-[31px] border border-[#F0F0F0] rounded max-w-[984px] xlg:mb-[50px] mb-5"
          >
            <div className="">
              <h1 className="text-headingColor text-base font-semibold border pl-5 py-[13px]">
                Change Password
              </h1>
            </div>

            {/* Current Password Div */}
            <PasswordInput
              register={register}
              name="old_password"
              errors={errors}
              label={'Current Password'}
              placeholder={'Current Password'}
            />
            <PasswordInput
              register={register}
              errors={errors}
              name="password"
              label={'New Password'}
              placeholder={'8+ characters'}
            />
            <PasswordInput
              register={register}
              errors={errors}
              name="password_confirmation"
              label={'Confirm Password'}
              placeholder={'Confirm Password'}
            />
            {/* This the button section */}
            <div className="pl-6 my-8">
              <button
                className={`bg-buttonColor rounded-[60px] px-3 sm:px-6 md:px-7 lg:px-8 flex xl:gap-2 justify-center items-center xl:py-4 py-[10px] md:py-[10px] lg:py-3 text-[#FFF] font-semibold hover:bg-transparent border border-buttonColor hover:border-buttonColor hover:text-buttonColor ease-in-out duration-150 group text-sm xl:text-base group w-[250px]  `}
              >
                {loading ? (
                  <ImSpinner9 className="text-white size-4 sm:size-6 animate-spin group-hover:text-buttonColor" />
                ) : (
                  <span className="flex items-center justify-center gap-1">
                    <span>Change Password</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      fill="none"
                      className="transition size-5 md:size-6 duration-150 ease-in-out group-hover:fill-buttonColor"
                    >
                      <path
                        d="M16.5054 9.6015L7.89838 18.2085L6.48438 16.7945L15.0904 8.1875H7.50538V6.1875H18.5054V17.1875H16.5054V9.6015Z"
                        fill="white"
                        className="group-hover:fill-buttonColor transition duration-150"
                      />
                    </svg>
                  </span>
                )}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default PasswordSettings;
