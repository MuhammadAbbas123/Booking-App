import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setTutor } from './redux/action/TutorAction';

import TutorInfo from './assets/images/tutor-info.png';
import { useNavigate } from 'react-router-dom';

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
const DemoRequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    subject: '',
    class: '',
    time: '',
    date: '',
  });
  const gradeRef = useRef(null);

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
    <div className="pt-[3px] bg-[#D8D8D8]">
      <div className="bg-white">
        <div className="container mx-auto px-2.5 lg:px-24">
          <p className="text-xl text-primary font-semibold lg:text-[32px] pt-5 lg:pt-10">
            Create a Demo Request:
          </p>
          <div className="flex justify-between pt-9">
            <div className="w-[45%]">
              <p className="text-xl font-semibold text-primary">Tutor Info</p>
            </div>
            <div className="w-[45%]">
              <p className="text-xl font-semibold text-primary">Info</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center md:flex-row">
            <div className="w-full lg:w-[45%]">
              <div className="flex shadow-lg py-1 pl-1 pr-4 rounded">
                <img src={TutorInfo} alt="Tutor" className="h-28 w-28" />
                <div className="pl-4 w-full mt-4">
                  <div className="flex justify-between items-center">
                    <p className="text-lg text-primary font-medium">Anna Doe</p>
                    <p className="text-base text-gray-500">$15/h</p>
                  </div>

                  <p className="text-base text-primary-black">Expertise: BCS</p>
                  <p className="text-xs text-gray-500">Location: Canada</p>
                </div>
              </div>
            </div>
            <div className="h-20 w-[2px] bg-[#9C9C9C] hidden lg:block"></div>
            <div className="w-full lg:w-[45%]">
              <div className="shadow-lg rounded px-3 py-[18px] mt-8 md:mt-0">
                <div className="flex justify-between">
                  <div className="w-[70%] lg:w-[50%]">
                    <div className="flex justify-between">
                      <p className="text-base text-gray-500 w-2/4">Name:</p>
                      <p className="text-lg text-primary w-2/4">John Doe</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-base text-gray-500 w-2/4">UserName:</p>
                      <p className="text-lg text-primary w-2/4">JDoe234</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-base text-gray-500 w-2/4">Location:</p>
                      <p className="text-lg text-primary-black w-2/4">UK</p>
                    </div>
                  </div>
                  <div className="text-lg text-primary">30 min</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-14">
            <p className="text-xl font-semibold text-primary">Other details:</p>
            <form onSubmit={submitHandler}>
              <div className="flex flex-col justify-between mt-7 md:flex-row">
                <div className="w-full mb-4 md:w-[45%]">
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
                <div className="w-full mb-4 md:w-[45%]">
                  <label className="text-lg text-primary-black" for="grade">
                    Grade / Class<span className="text-red-600">*</span>
                  </label>
                  <select
                    className="shadow border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="grade"
                    required
                    ref={gradeRef}
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
              <div className="flex flex-col justify-between mt-7 md:flex-row">
                <div className="w-full mb-4 md:w-[45%]">
                  <label className="text-lg text-primary-black" for="time">
                    Enter Time<span className="text-red-600">*</span>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="time"
                    type="time"
                    required
                    value={values.time}
                    onChange={(e) => {
                      setValue(e.target.value, 'time');
                    }}
                  />
                </div>
                <div className="w-full mb-4 md:w-[45%]">
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
              <div className="flex gap-x-2 justify-center items-center py-10 md:py-[122px]">
                <button className="text-xs text-primary px-11 py-3 border border-primary rounded lg:text-xl">
                  Back
                </button>
                <button
                  className="text-xs bg-primary text-white px-11 py-3 rounded lg:text-xl"
                  type="submit"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoRequest;
