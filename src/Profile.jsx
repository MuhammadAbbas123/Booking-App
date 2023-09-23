import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'react-week-calendar/dist/style.less';

import Sidebar from './components/ProfileSidebar';
// import TutorImg1 from './assets/images/tutor1.png';

const Profile = () => {
  const { id } = useParams();
  const [rating, setRating] = useState();
  const [tutor, setTutor] = useState({});

  const changeRating = (newRating, name) => {
    setRating(newRating);
  };
  useEffect(() => {
    fetch(`http://localhost:3000/tutor`)
      .then((res) => res.json())
      .then((data) => {
        data && setTutor(data.find((item) => item?.id === id));
      });
  }, [id]);
  console.log(tutor);
  return (
    <div className="flex">
      <Sidebar tutor={tutor} />
      <div className="w-4/5 bg-[#f9f9f9]">
        <div className="">
          {/* Week Calender */}

          <div className="bg-white my-2 px-4 py-6 lg:px-8 lg:py-12">
            <div className="table-header flex flex-col md:flex-row justify-between">
              <h1 className="font-semibold text-center md:text-start text-xl md:text-base lg:text-2xl pb-8 md:pb-0">
                Book your online session
              </h1>

              <div className="dates-btn flex justify-between md:justify-end items-center">
                <p className="text-base lg:text-[20px] text-primary-black font-[500]">
                  10 - 16 Jul, 2023
                </p>
                <div className="calender-btns  ml-8">
                  <button className="text-[#9c9c9c] hover:bg-[#f4f4f4] hover:text-[#080614] border-[#D8D8D8] border-l-[1px] border-y-[1px] rounded-l-[4px] py-2 px-4">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 17.225C12.3417 17.225 12.1833 17.1667 12.0583 17.0417L6.62499 11.6083C5.74166 10.725 5.74166 9.27502 6.62499 8.39168L12.0583 2.95835C12.3 2.71668 12.7 2.71668 12.9417 2.95835C13.1833 3.20002 13.1833 3.60002 12.9417 3.84168L7.50833 9.27502C7.10833 9.67502 7.10833 10.325 7.50833 10.725L12.9417 16.1583C13.1833 16.4 13.1833 16.8 12.9417 17.0417C12.8167 17.1583 12.6583 17.225 12.5 17.225Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button className="text-[#9c9c9c] hover:bg-[#f4f4f4] hover:text-[#080614] border-[#D8D8D8] border-[1px] rounded-r-[4px] py-2 px-4">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.425 17.225C7.26667 17.225 7.10834 17.1667 6.98334 17.0417C6.74167 16.8 6.74167 16.4 6.98334 16.1583L12.4167 10.725C12.8167 10.325 12.8167 9.67502 12.4167 9.27502L6.98334 3.84168C6.74167 3.60002 6.74167 3.20002 6.98334 2.95835C7.225 2.71668 7.625 2.71668 7.86667 2.95835L13.3 8.39168C13.725 8.81668 13.9667 9.39168 13.9667 10C13.9667 10.6083 13.7333 11.1833 13.3 11.6083L7.86667 17.0417C7.74167 17.1583 7.58334 17.225 7.425 17.225Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="table-main pt-3">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="">
                    <tr>
                      <th scope="col" className="px-6 py-3"></th>
                      <th scope="col" className="px-6 py-3 text-center">
                        <span className="text-primary-black text-base font-semibold">
                          10 Jul
                        </span>{' '}
                        <br />
                        <p className="text-[#9C9C9C] mt-2 text-[14px] font-[400]">
                          Mon
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        <span className="text-primary-black text-base font-semibold">
                          11 Jul
                        </span>{' '}
                        <br />
                        <p className="text-[#9C9C9C] mt-2 text-[14px] font-[400]">
                          Tue
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        <span className="text-primary-black text-base font-semibold">
                          12 Jul
                        </span>{' '}
                        <br />
                        <p className="text-[#9C9C9C] mt-2 text-[14px] font-[400]">
                          Wed
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        <span className="text-primary-black text-base font-semibold">
                          13 Jul
                        </span>{' '}
                        <br />
                        <p className="text-[#9C9C9C] mt-2 text-[14px] font-[400]">
                          Thu
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        <span className="text-primary-black text-base font-semibold">
                          14 Jul
                        </span>{' '}
                        <br />
                        <p className="text-[#9C9C9C] mt-2 text-[14px] font-[400]">
                          Fri
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        <span className="text-primary-black text-base font-semibold">
                          15 Jul
                        </span>{' '}
                        <br />
                        <p className="text-[#9C9C9C] mt-2 text-[14px] font-[400]">
                          Sat
                        </p>
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        <span className="text-primary-black text-base font-semibold">
                          16 Jul
                        </span>{' '}
                        <br />
                        <p className="text-[#9C9C9C] mt-2 text-[14px] font-[400]">
                          Sun
                        </p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        12:00 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8] table-cell">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>

                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        12:30 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>

                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        01:00 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>

                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        01:30 am
                      </th>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>

                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        02:00 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8] table-cell">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>

                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        02:30 am
                      </th>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>

                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        03:00 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>

                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        03:30 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>

                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        04:00 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>

                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        04:30 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>

                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        05:00 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>
                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        05:30 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>
                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        06:00 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>
                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        06:30 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>
                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        07:00 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>
                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        07:30 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>
                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        08:00 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>
                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        08:30 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>

                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        09:00 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>

                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        09:30 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>
                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        10:00 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>
                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        10:30 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>

                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        11:00 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>

                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        11:30 am
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>

                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        12:00 pm
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>

                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        12:30 pm
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>

                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        01:00 pm
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>
                    <tr className="bg-white text-base">
                      <th
                        scope="row"
                        className="px-4 py-4 text-[#080614]  font-normal whitespace-nowrap"
                      >
                        01:30 pm
                      </th>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">
                          {' '}
                          <Link to="/demo-request">Available</Link>
                        </Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="cursor-pointer px-4 py-4 text-[#5538C8]">
                        <Link to="/demo-request">Available</Link>
                      </td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                      <td className="px-4 py-4 text-[#5538C8]"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="bg-white w-full mb-4 p-8">
            <div className="pb-1.5">
              <label
                className="text-lg text-primary-black font-medium"
                for="grade"
              >
                Experience
              </label>
              <select
                className="shadow border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                 bg-[#FCFBFF]"
                id="grade"
                required
              >
                <option className="text-gray-500 py-2">Experience</option>
              </select>
            </div>
            <div className="pb-1.5">
              <label
                className="text-lg text-primary-black font-medium"
                for="grade"
              >
                Education
              </label>
              <select
                className="shadow border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#FCFBFF]"
                id="grade"
                required
              >
                <option className="text-gray-500 bg-[#FCFBFF]">
                  Experience
                </option>
              </select>
            </div>
            <div className="pb-1.5">
              <label
                className="text-lg text-primary-black font-medium"
                for="grade"
              >
                Certification
              </label>
              <select
                className="shadow border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#FCFBFF]"
                id="grade"
                required
              >
                <option className="text-gray-500">Experience</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
