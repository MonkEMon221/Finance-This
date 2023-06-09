import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import FooterGrid from "./FooterGrid";

const Footer = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto py-10 px-6 sm:grid sm:grid-cols-5 flex flex-col text-white">
      <div className="sm:col-span-2 sm:mr-12 mb-6 ">
        <h1 className="w-full font-bold text-3xl text-[#00df9a] ">React.</h1>
        <p className="text-white mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi
          cras fermentum odio eu feugiat pretium nibh ipsum consequat.
        </p>
        <div className="flex justify-between mt-4">
          <TwitterIcon size={20} className="cursor-pointer" />
          <GitHubIcon size={20} className="cursor-pointer" />
          <LinkedInIcon size={20} className="cursor-pointer" />
          <InstagramIcon size={20} className="cursor-pointer" />
          <FacebookIcon size={20} className="cursor-pointer" />
        </div>
      </div>
      <div className="sm:col-span-3 flex justify-between">
        <FooterGrid
          first="Solutions"
          second="Analytics"
          third="Marketing"
          fourth="Commerce"
          fifth="Insights"
        />
        <FooterGrid
          first="Support"
          second="Pricing"
          third="Documentation"
          fourth="Guides"
          fifth="API Status"
        />
        <FooterGrid
          first="Company"
          second="About"
          third="Blog"
          fourth="Jobs"
          fifth="Press"
          sixth="Partners"
        />
      </div>
    </div>
  );
};

export default Footer;
