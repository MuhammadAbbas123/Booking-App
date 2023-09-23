import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import { setTutor } from './redux/action/TutorAction';

import TutorInfo from './assets/images/tutor-info.png';

const DemoRequestConfirmation = () => {
  const dispatch = useDispatch();
  const { tutor } = useSelector((state) => state.TutorInfo);

  console.log('TutorInfo', tutor);
  const [modal, setModal] = useState(false);
  const bookingCancel = () => {
    dispatch(setTutor({}));
  };
  return (
    <div>
      {modal && (
        <div
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg shadow-xl transition-all border border-[#FF1001]">
                <button
                  class="text-[32px] font-semibold  bg-transparent text-[#FF1001] px-32 py-10"
                  onClick={() => {
                    setModal(false);
                    bookingCancel();
                  }}
                >
                  Booking Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="pt-[3px] bg-[#D8D8D8]">
        <div className="bg-white">
          <div className="container mx-auto px-2.5 lg:px-24 pt-10 lg:pt-14">
            <div className="flex flex-col justify-between items-center px-5 py-7 shadow-lg rounded md:flex-row">
              <p className="text-2xl text-primary font-semibold md:text-[32px]">
                Booking Confirmed
              </p>
              <div className="mt-5 md:mt-0">
                <Link to="/demo-request-edit">
                  <button className="text-xl text-primary px-10 py-3 border border-primary rounded mr-2">
                    Edit
                  </button>
                </Link>
                <button
                  className="text-xl bg-primary text-white px-10 py-3 rounded ml-2"
                  onClick={() => {
                    setModal(true);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>

            <div className="flex justify-between pt-14">
              <div className="w-[45%]">
                <p className="text-xl font-semibold text-primary">Tutor Info</p>
              </div>
              <div className="w-[45%]">
                <p className="text-xl font-semibold text-primary">Info</p>
              </div>
            </div>
            <div className="flex justify-between flex-col items-center md:flex-row">
              <div className="w-full md:w-[45%]">
                <div className="flex shadow-lg py-1 pl-1 pr-4 rounded">
                  <img src={TutorInfo} alt="Tutor" className="h-28 w-28" />
                  <div className="pl-4 w-full mt-4">
                    <div className="flex justify-between items-center">
                      <p className="text-lg text-primary font-medium">
                        Anna Doe
                      </p>
                      <p className="text-base text-gray-500">$15/h</p>
                    </div>

                    <p className="text-base text-primary-black">
                      Expertise: BCS
                    </p>
                    <p className="text-xs text-gray-500">Location: Canada</p>
                  </div>
                </div>
              </div>
              <div className="h-20 w-[2px] bg-[#9C9C9C] hidden lg:block"></div>
              <div className="w-full md:w-[45%]">
                <div className="shadow-lg rounded px-3 py-[18px]">
                  <div className="flex justify-between">
                    <div className="w-[50%] md:w-[70%] lg:w-[50%]">
                      <div className="flex justify-between">
                        <p className="text-base text-gray-500 w-2/4">
                          Parent Name:
                        </p>
                        <p className="text-lg text-primary w-2/4">John Doe</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-base text-gray-500 w-2/4">
                          Student Name:
                        </p>
                        <p className="text-lg text-primary w-2/4">Marry</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-base text-gray-500 w-2/4">
                          Location:
                        </p>
                        <p className="text-lg text-primary-black w-2/4">UK</p>
                      </div>
                    </div>
                    <div className="text-lg text-primary">30 min</div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-between my-20 shadow-lg rounded px-5 py-8">
              <div className="w-full md:w-[50%]">
                <p className="text-xl font-semibold text-primary pb-2.5">
                  Other details:
                </p>
                <div className="flex justify-between pt-5">
                  <p className="text-base text-gray-500 w-2/4">Student Name:</p>
                  <p className="text-lg text-primary-black w-2/4">John Doe</p>
                </div>
                <div className="flex justify-between pt-5">
                  <p className="text-base text-gray-500 w-2/4">Grade/Class:</p>
                  <p className="text-lg text-primary-black w-2/4">
                    {tutor?.class}
                  </p>
                </div>
                <div className="flex justify-between pt-5">
                  <p className="text-base text-gray-500 w-2/4">Date</p>
                  <p className="text-lg text-primary-black w-2/4">
                    {tutor?.date}
                  </p>
                </div>
                <div className="flex justify-between pt-5">
                  <p className="text-base text-gray-500 w-2/4">Start Time</p>
                  <p className="text-lg text-primary-black w-2/4">
                    {moment(tutor.time, 'hh:mm').format('hh:mm A')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoRequestConfirmation;
