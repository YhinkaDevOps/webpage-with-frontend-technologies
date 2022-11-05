import React from 'react';
import {useFormik} from 'formik';

const contact = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      message: '',
    },
  });
  console.log(formik);
  return (
    <div>
      <div className=" contact-page-header flex flex-col py-14 max-h-[884px] items-start">
        <header className="px-4 max-h-[116px] mb-12 max-w-[343px]">
          <div>
            <p className="mb-4 text-[36px] text-[#101828] leading-[44px] font-semibold tracking-tight">
              Contact Me
            </p>
            <span className="font-normal text-lg text-[#475467] ">
              Hi there, contact me to ask about anything you have in mind.
            </span>
          </div>
        </header>
        <form
          autoComplete="off"
          className="px-4 flex flex-col w-[375px] gap-y-6 "
        >
          <label className="block" htmlFor="firstname">
            <span>First Name</span>

            <input
              type="text"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              placeholder="Enter your first name"
              className="border-[1px] border-solid border-[#D0D5DD] rounded-lg w-full h-11 py-5 px-7 focus:outline-none mt-1.5 placeholder:text-base placeholder:text-[#667085]"
            />
          </label>

          <label className="block" htmlFor="lastname">
            <span>Last Name</span>

            <input
              type="text"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              placeholder="Enter your last name"
              className="border-[1px] border-solid border-[#D0D5DD] rounded-lg w-full h-11 py-5 px-7 focus:outline-none mt-1.5 placeholder:text-base placeholder:text-[#667085]"
            />
          </label>

          <label className="block" htmlFor="email">
            <span>Email</span>

            <input
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="yourname@email.com"
              className="border-[1px] border-solid border-[#D0D5DD] rounded-lg w-full h-11 py-5 px-7 focus:outline-none mt-1.5 placeholder:text-base placeholder:text-[#667085]"
            />
          </label>
          <label className="block " htmlFor="message">
            <span>Message</span>
            <textarea
              name="message"
              id=""
              value={formik.values.message}
              onChange={formik.handleChange}
              placeholder="Send me a message and i'll reply you as soon as possible..."
              className="border-[1px] border-solid border-[#D0D5DD] rounded-lg w-full  py-3 px-[14px] focus:outline-none mt-1.5 placeholder:text-base placeholder:text-[#667085] h-[132px]"
            ></textarea>
          </label>
          <label className="block " htmlFor="checkbox">
            <input type="checkbox" name="" id="" />
            <span>
              You agree to providing your data to {'name'} who may contact you
            </span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default contact;
