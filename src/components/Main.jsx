import React from 'react';
import profileimage from '../assets/images/profile__img.png';
import Shareicon from '../assets/svg/shareicon.svg';
import Slackicon from '../assets/svg/slack.svg';
import Githubicon from '../assets/svg/github.svg';

const Main = () => {
  return (
    <div className="main-container md:h-[998px] ">
      <div className="main-section pt-16 pb-8 md:pr-8 md:pt-16 md:pl-8 items-center flex flex-col ">
        <div className="main-content flex flex-col items-center md:mb-14 md:items-start pl-4 pr-4 w-[343px] h-[700px] md:w-[1152px] md:h-[774px]">
          <div className="profile-section flex flex-col  h-[140px] mb-8 md:mb-14 md:h-[142px] items-center relative">
            <img
              className="mb-6 "
              src={profileimage}
              alt="profile-image"
              id="profile__img"
            />
            <p
              className="font-inter h-7 md:h-[30px] text-gray-900 flex flex-row justify-center items-center font-bold mb-14 text-xl w-[1152px] "
              id="twitter"
            >
              Mahoety
            </p>
            <p className="font-inter text-gray-900 hidden" id="slack">
              Olayinka
            </p>

            <img
              className="border border-[#D0D5DD] border-dashed rounded-[20px] px-1 py-1 absolute right-[208px] top-[-15px]"
              src={Shareicon}
              alt="share-icon"
            />
          </div>

          <div className="link-section h-[528px] md:h-[576px] flex flex-col items-center p-0 gap-6 ">
            <a
              href="https://twitter.com/Mahoetey/"
              className="bg-[#EAECF0] rounded-lg py-6 px-6 flex items-center justify-center text-gray-900 font-medium text-sm md:text-lg h-[68px] md:[76px] w-[343px] md:w-[1152px]"
              id="twitter__link"
            >
              Twitter Link
            </a>
            <a
              href="https://training.zuri.team/"
              id="btn__zuri"
              className="bg-[#EAECF0] rounded-lg py-6 px-6 flex items-center justify-center text-gray-900 font-medium text:sm md:text-lg w-[343px] md:w-[1152px]"
              title="Meet the Zuri Team"
            >
              Zuri Team
            </a>
            <a
              href="https://books.zuri.team/"
              className="bg-[#EAECF0] rounded-lg py-6 px-6 flex items-center justify-center text-gray-900 font-medium text:sm md:text-lg w-[343px] md:w-[1152px]"
              id="books"
              title="Need premium books to help you design and code? Click here!! "
            >
              Zuri Books
            </a>
            <a
              href="https://books.zuri.team/python-for-beginners?ref_id=Olayinka"
              id="book__python"
              className="bg-[#EAECF0] rounded-lg py-6 px-6 flex items-center justify-center text-gray-900 font-medium text:sm md:text-lg w-[343px] md:w-[1152px] "
              title="Get your best Python Books Here!"
            >
              Python Books
            </a>
            <a
              href="https://background.zuri.team/"
              className="bg-[#EAECF0] rounded-lg py-6 px-6 flex items-center justify-center text-gray-900 font-medium text:sm md:text-lg w-[343px] md:w-[1152px]"
              id="pitch"
              title="We offer comprehensive background check on Coders"
            >
              Background Check for Beginners
            </a>
            <a
              href="https://books.zuri.team/design-rules"
              className="bg-[#EAECF0] rounded-lg py-6 px-6 flex items-center justify-center text-gray-900 font-medium text:sm md:text-lg w-[343px] md:w-[1152px]"
              id="book__design"
              title="Get free design books by Zuri"
            >
              Design Books
            </a>
            <a
              className="bg-[#EAECF0] rounded-lg py-6 px-6 flex items-center justify-center text-gray-900 font-medium text:sm md:text-lg w-[343px] md:w-[1152px]"
              id="contact"
              title="Contact Me"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="social-section h-[72px] items-center pt-6 pb-6 ">
        <div className="social-container pr-8 pl-8">
          <div className="social-content h-[24px]   ">
            <div className="social-icons flex flex-row gap-x-10 justify-center items-center">
              <a href="https://hng9.slack.com/">
                <img src={Slackicon} alt="slack-icon " />
              </a>
              <a href="https://github.com/YhinkaDevOps/">
                <img src={Githubicon} alt="github-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
