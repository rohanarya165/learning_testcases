import React from 'react'
import Facebook from "../assets/facebook.png"
import Instagram from "../assets/instagram.png"
import Twitter from "../assets/twitter.png"
import Twitch from "../assets/twitch.png"
import Youtube from "../assets/youtube.png"
 
function Footer() {
  return (
    <div>
      <div className="bg-black text-white py-10 px-24 w-full ">
        <div className="flex gap-8 flex-wrap">
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
          <img src={Twitter} alt="" />
          <img src={Twitch} alt="" />
          <img src={Youtube} alt="" />
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 mt-10">
          <p className="font-[400] text-[24px]">Privacy Policy</p>
          <p className="font-[400] text-[24px]">Contact Us</p>{" "}
          <p className="font-[400] text-[24px]">Cookie preferences</p>{" "}
          <p className="font-[400] text-[24px]">Corporate Information</p>{" "}
          <p className="font-[400] text-[24px]">Privacy Policy</p>
          <p className="font-[400] text-[24px]">Contact Us</p>{" "}
          <p className="font-[400] text-[24px]">Cookie preferences</p>{" "}
          <p className="font-[400] text-[24px]">Corporate Information</p>{" "}
        </div>
        <div className="mt-20">
          <p className="font-[400] text-[24px]">
            <span className="text-[#334155]">©</span>  Alkye Test
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer