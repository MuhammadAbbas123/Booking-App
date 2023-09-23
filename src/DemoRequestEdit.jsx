import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTutor } from './redux/action/TutorAction';

import TutorInfo from './assets/images/tutor-info.png';

const Grade = [
  {
    name: 'Select',
    value: '',
  },
  {
    name: '5th',
    value: '5th',
  },
  {
    name: '6th',
    value: '6th',
  },
  {
    name: '7th',
    value: '7th',
  },
  {
    name: '8th',
    value: '8th',
  },
];

const DemoRequestEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tutor } = useSelector((state) => state.TutorInfo);
  const [modal, setModal] = useState(false);

  const [values, setValues] = useState({
    subject: tutor?.subject || '',
    class: tutor?.class || '',
    time: tutor?.time || '',
    date: tutor?.date || '',
  });

  const setValue = (value, name) => {
    console.log(value, name);
    setValues({ ...values, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setTutor(values));
    navigate('/demo-request-confirmation');
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
          <div className="container mx-auto px-5 lg:px-24 pt-10 lg:pt-14">
            <div className="flex justify-between items-center px-5 py-7 shadow-[3px_4px_11px_-6px_rgba(0,0,0,0.2)] rounded">
              <p className="text-[32px] text-primary font-semibold">
                Booking Confirmed
              </p>
              <div>
                <button className="text-xl text-primary px-10 py-3 border border-primary rounded mr-2">
                  Edit
                </button>
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
            <div className="flex justify-between items-center">
              <div className="w-[45%]">
                <div className="flex shadow-[3px_4px_11px_-6px_rgba(0,0,0,0.2)] py-1 pl-1 pr-4 rounded">
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
              <div className="h-20 w-[2px] bg-[#9C9C9C]"></div>
              <div className="w-[45%]">
                <div className="shadow-[3px_4px_11px_-6px_rgba(0,0,0,0.2)] rounded px-3 py-[18px]">
                  <div className="flex justify-between">
                    <div className="w-[50%] md:w-[79%] lg:w-[50%]">
                      <div className="flex justify-between">
                        <p className="text-base text-gray-500 w-2/4">Name:</p>
                        <p className="text-lg text-primary w-2/4">John Doe</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-base text-gray-500 w-2/4">
                          UserName:
                        </p>
                        <p className="text-lg text-primary w-2/4">JDoe234</p>
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
            <div className="flex justify-between my-20 shadow-[3px_4px_11px_-6px_rgba(0,0,0,0.2)] rounded px-5 py-8">
              <div className="w-[50%]">
                <p className="text-xl font-semibold text-primary pb-2.5">
                  Other details:
                </p>
                <div className="flex justify-between pt-5">
                  <p className="text-base text-gray-500 w-2/4">Student Name:</p>
                  <p className="text-lg text-primary-black w-2/4">John Doe</p>
                </div>
                <div className="flex justify-between pt-5">
                  <p className="text-base text-gray-500 w-2/4">Grade/Class:</p>
                  <p className="text-lg text-primary-black w-2/4">6th</p>
                </div>
                <div className="flex justify-between pt-5">
                  <p className="text-base text-gray-500 w-2/4">Date</p>
                  <p className="text-lg text-primary-black w-2/4">10-07-2023</p>
                </div>
                <div className="flex justify-between pt-5">
                  <p className="text-base text-gray-500 w-2/4">Start Time</p>
                  <p className="text-lg text-primary-black w-2/4">02:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fileds */}
      <div className="pt-14 bg-[#f9f9f9]">
        <div className="container mx-auto px-24">
          <p className="text-xl font-semibold text-primary">Other details:</p>
          <form onSubmit={submitHandler}>
            <div className="flex justify-between mt-7">
              <div className="w-[45%] mb-4">
                <label className="text-lg text-primary-black" for="username">
                  Enter Subject<span className="text-red-600">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  value={values.subject}
                  placeholder="Subject Name"
                  required
                  onChange={(e) => {
                    setValue(e.target.value, 'subject');
                  }}
                />
              </div>
              <div className="w-[45%] mb-4">
                <label className="text-lg text-primary-black" for="grade">
                  Grade / Class<span className="text-red-600">*</span>
                </label>
                <select
                  className="shadow border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="grade"
                  required
                  value={values.class}
                  onChange={(e) => {
                    setValue(e.target.value, 'class');
                  }}
                >
                  {Grade?.map((single, index) => (
                    <option className="text-gray-500">{single?.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-between mt-7">
              <div className="w-[45%] mb-4">
                <label className="text-lg text-primary-black" for="username">
                  Enter Time<span className="text-red-600">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="time"
                  required
                  value={values.time}
                  onChange={(e) => {
                    setValue(e.target.value, 'time');
                  }}
                />
              </div>
              <div className="w-[45%] mb-4">
                <label className="text-lg text-primary-black" for="date">
                  Choose Session Date<span className="text-red-600">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="date"
                  required
                  type="date"
                  placeholder="10/07/2023"
                  value={values.date}
                  onChange={(e) => {
                    setValue(e.target.value, 'date');
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center items-center py-[122px]">
              <button className="text-xl text-primary px-11 py-3 border border-primary rounded mr-2">
                Back
              </button>
              <button
                className="text-xl bg-primary text-white px-11 py-3 rounded ml-2"
                type="submit"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DemoRequestEdit;
