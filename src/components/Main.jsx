import React from "react"
import profileimage from "../assets/images/profile__img.png"

const Main = () => {
  return (
    <div className="main-container pt-16 pl-28 pr-28 ">
      <div className="main-section pr-8 pl-8 items-center flex flex-col ">
        <div className="main-content flex flex-col items-start p-0">
          <div className="profile-section flex flex-col items-center">
            <img
              className="mb-6"
              src={profileimage}
              alt="profile-image"
              id="profile__img"
            />
            <p className="font-inter" id="twitter">
              Mahoety
            </p>
          </div>
          <div className="link-section"></div>
        </div>
      </div>
      <div className="social-section mt-6 pt-6 pb-6">
        <div className="social-container pt-6  pb-6">
          <div className="social-content flex flex-row items-center">
            <div className="social-icons flex flex-row items-center justify-center "></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
