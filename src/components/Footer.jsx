import { Facebook } from "@mui/icons-material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from "react";
import CenterMenu from "./CenterMenu";

function Footer() {
    const SocialStyle = "rounded-full border-2 border-whit p-2 mr-[5rem]"
  return (
    <div className=" footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu />
      {/* Social icons */}
      <div className="flex w-[100%] justify-center mt-14">
        <div className={SocialStyle}>
          <Facebook />
        </div>{" "}
        <div className={SocialStyle}>
         <YouTubeIcon/>
        </div>{" "}
        <div className={SocialStyle}>
        <LinkedInIcon/>
        </div>{" "}
        <div className={SocialStyle}>
          <InstagramIcon/>
        </div>
      </div>
      {/* detail */}
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
      The primary purpose of the music streaming application is to play music available in the databases of the service, compose custom playlists and suggest similar songs. The main elements of music streaming apps are: Discovery
      </span>
    </div>
  );
}

export default Footer;
