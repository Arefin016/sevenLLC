/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

const PasswordInput = ({ label, placeholder, register, name, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="px-6 mt-6">
      <label className="text-sm text-headingColor">{label}</label>
      <div className="relative">
        <Input
          {...register(name, { required: `${label} is required` })} // Custom error message
          className="h-11 mt-2 border bg-[#D9D9D91A] rounded-[2px] !text-sm text-headingColor"
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute  -translate-y-1/2 top-1/2 right-[16px] cursor-pointer"
        >
          {showPassword ? (
            <IoEyeOutline className="text-xl" />
          ) : (
            <IoEyeOffOutline className="text-xl text-black" />
          )}
        </span>
      </div>

      {/* 🚀 Show error dynamically */}
      {errors[name] && (
        <p className="text-red-600 text-sm mt-1 font-semibold">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};

export default PasswordInput;
