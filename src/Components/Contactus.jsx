import React from "react";
import { useForm } from "react-hook-form";
import logo from "../assets/logo.png";

const Contactus = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    alert("Form Submitted Successfully!");
    reset();
  };

  return (
    <div className="mx-auto w-full max-w-lg rounded-lg bg-white p-4 shadow-2xl sm:p-5 lg:p-6">
      {/* Logo */}
      <div className="mb-3 flex justify-center sm:mb-4">
        <div className="flex justify-center">
          <img src={logo} className="h-fit w-1/2" alt="logo" />
        </div>
      </div>

      {/* Heading */}
      <h3 className="mb-4 text-center text-sm font-medium leading-6 text-gray-800 sm:text-base">
        Interested in our courses? Share your details and we will get back to
        you.
      </h3>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Enter your name*"
            {...register("name", {
              required: "Name is required",
            })}
            className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-400 sm:px-4 sm:py-3"
          />

          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Your email*"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })}
            className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-400 sm:px-4 sm:py-3"
          />

          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <div className="flex">
            <div className="flex shrink-0 items-center rounded-l-md border border-gray-300 bg-white px-3 text-sm">
              IN +91
            </div>

            <input
              type="tel"
              placeholder="Enter mobile number*"
              {...register("phone", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: "Enter valid mobile number",
                },
              })}
              className="min-w-0 w-full rounded-r-md border border-l-0 border-gray-300 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-400 sm:px-4 sm:py-3"
            />
          </div>

          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Course */}
        <div>
          <select
            {...register("course", {
              required: "Please select a course",
            })}
            className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm text-gray-600 outline-none focus:ring-2 focus:ring-orange-400 sm:px-4 sm:py-3">
            <option value="">Select course*</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="BBA">BBA</option>
            <option value="MBA">MBA</option>
          </select>

          {errors.course && (
            <p className="mt-1 text-xs text-red-500">{errors.course.message}</p>
          )}
        </div>

        {/* Checkbox */}
        <div>
          <label className="flex items-start gap-2.5 text-xs leading-5 text-gray-600 sm:text-sm">
            <input
              type="checkbox"
              {...register("terms", {
                required: "You must accept this field",
              })}
              className="mt-1 shrink-0 accent-orange-500"
            />

            <p>
              I authorize Online Manipal and its associates to contact me via
              email, SMS, WhatsApp, and voice call.
            </p>
          </label>

          {errors.terms && (
            <p className="mt-1 text-xs text-red-500">{errors.terms.message}</p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mx-auto block w-full rounded-md bg-orange-400 px-7 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-orange-500 sm:w-auto">
          Enroll Now
        </button>
      </form>
    </div>
  );
};

export default Contactus;
