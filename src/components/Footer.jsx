import React from 'react';
import Zurilogo from '../assets/svg/Zuri.Internship_Logo.svg';
import I4G from '../assets/svg/I4G.svg';

const Footer = () => {
  return (
    <div className="footer h-[196px] md:h-40 pt-8 pb-8 md:pt-12 md:pb-12 md:pl-20 md:pr-20">
      <div className="footer-container pt-12 pb-12 pl-4 pr-4 md:pl-8 md:pr-8">
        <div className="footer-content flex flex-col items-start md:flex-row md:justify-between md:items-center h-16 pt-8 gap-y-4 ">
          <img src={Zurilogo} alt="zuri-logo" />
          <p className="text-gray-500 font-normal text-base ">
            HNG internship 9 Frontend Task
          </p>
          <img src={I4G} alt="i4g-logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
