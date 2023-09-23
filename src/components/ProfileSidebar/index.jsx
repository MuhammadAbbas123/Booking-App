import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import TutorImg from '../../assets/images/tutor1.png';
import Location from '../../assets/images/location.png';
import Clock from '../../assets/images/clock.png';
import BriefCase from '../../assets/images/briefcase.png';
import TickCircle from '../../assets/images/tick-circle.png';
import Timer from '../../assets/images/timer.png';
import Child from '../../assets/images/child.png';
import Female from '../../assets/images/family.png';
const Sidebar = ({ tutor }) => {
  const [rating, setRating] = useState(Number(tutor?.rating || 2.5));

  const changeRating = (newRating, name) => {
    setRating(newRating);
  };

  return (
    <div className="w-1/5 bg-[#f9f9f9] hidden lg:block">
      <div className="mt-[3px]">
        <div className=" bg-white rounded flex flex-col justify-center items-center pt-[18px] pb-10 px-8 mr-[3px]">
          <div className="h-[78px] w-[78px]">
            <img src={TutorImg} className="h-full w-full" alt="Tutor" />
          </div>

          <p className="text-[22px] text-primary-black font-semibold pt-2">
            {tutor?.name}
          </p>

          <p className="text-base text-gray-400">{tutor?.subjectName}</p>
          <p className="text-sm font-semibold text-primary-black pt-2.5">
            USD &7/hour
          </p>
          <div className="flex items-center">
            <StarRatings
              rating={rating}
              starRatedColor="yellow"
              starHoverColor="yellow"
              changeRating={changeRating}
              starDimension="20px"
              starSpacing="0px"
              isAggregateRating={true}
            />
            <div className="ml-1 leading-8">{rating}</div>
          </div>
          <p className="text-xs text-gray-500 pt-4">
            skill level:{' '}
            <span className="text-primary-black">{tutor?.skillLevel}</span>
          </p>
        </div>
        <div className="px-6 py-6 bg-white mt-[3px] mr-[3px]">
          <div className="flex py-3">
            <img src={Location} alt="Location" className="h-5 w-5" />
            <p className="text-sm text-primary-black pl-3">
              City , State Country
            </p>
          </div>
          <div className="flex py-3">
            <img src={Clock} alt="Clock" className="h-5 w-5" />
            <p className="text-sm text-primary-black pl-3">
              Time zone : Asia Karachi
            </p>
          </div>
          <div className="flex py-3">
            <img src={BriefCase} alt="Brief Case" className="h-5 w-5" />
            <p className="text-sm text-primary-black pl-3">
              Teaching 4 students now
            </p>
          </div>
          <div className="flex py-3">
            <img src={TickCircle} alt="Check" className="h-5 w-5" />
            <p className="text-sm text-primary-black pl-3">
              Verified by Air Academic
            </p>
          </div>
          <div className="flex py-3">
            <img src={Timer} alt="Timer" className="h-5 w-5" />
            <p className="text-sm text-primary-black pl-3">Member since 2022</p>
          </div>
          <div className="flex py-3">
            <img src={Child} alt="Family" className="h-5 w-5" />
            <p className="text-sm text-primary-black pl-3">24 years</p>
          </div>
          <div className="flex py-3">
            <img src={Female} alt="Female" className="h-5 w-5" />
            <p className="text-sm text-primary-black pl-3">Female</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
