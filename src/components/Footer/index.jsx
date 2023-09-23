import React from 'react';
import { useLocation } from 'react-router-dom';
const Footer = () => {
  const { pathname } = useLocation();

  return (
    <div className={`bg-primary ${pathname !== '/' ? 'hidden' : 'block'}`}>
      {/* <div className="bg-primary"> */}
      <div className="container mx-auto px-2.5 py-5 lg:py-20 lg:px-20">
        <div className="flex justify-between">
          <div className="flex justify-between w-[50%] lg:w-[30%]">
            <div>
              <div className="pb-4 lg:pb-8">
                <a href="!#" className="text-white text-xs lg:text-lg">
                  Earn with us
                </a>
              </div>
              <div className="pb-4 lg:pb-8">
                <a href="!#" className="text-white text-xs lg:text-lg">
                  Careers
                </a>
              </div>
              <div className="pb-4 lg:pb-8">
                <a href="!#" className="text-white text-xs lg:text-lg">
                  Contact Us
                </a>
              </div>
            </div>
            <div>
              <div className="pb-4 lg:pb-8">
                <a href="!#" className="text-white text-xs lg:text-lg">
                  Privacy Policy
                </a>
              </div>
              <div className="pb-4 lg:pb-8">
                <a href="!#" className="text-white text-xs lg:text-lg">
                  Sitemap
                </a>
              </div>
              <div className="pb-4 lg:pb-8">
                <a href="!#" className="text-white text-xs lg:text-lg">
                  Help Center
                </a>
              </div>
            </div>
          </div>
          <div className="text-xl text-white font-bold pt-5 lg:text-5xl">
            Air Academic
          </div>
        </div>
        <div className="text-xs text-center text-white pt-5 lg:text-base lg:pt-0">
          <a href="!#">
            <span className="font-bold">Air Academic</span> 2023 copyright all
            rights reserved
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
