import React from 'react';

const Subjects = [
  {
    name: 'All Subject',
    value: 'all subject',
  },
  {
    name: 'Computer Science',
    value: 'BS computer science',
  },
  {
    name: 'Mathematics',
    value: 'BS mathematics',
  },
  {
    name: 'Physics',
    value: 'BS Physics',
  },
];
const Level = [
  {
    name: 'Low',
    value: 'Low',
  },
  {
    name: 'Medium',
    value: 'Medium',
  },
  {
    name: 'Heigh',
    value: 'Heigh',
  },
  {
    name: 'Expert',
    value: 'Expert',
  },
];
const Sidebar = ({ setFilterData, setValue, filterHandler }) => {
  const checkboxHandler = (value, checked) => {
    // const [value, checked] = event?.target;
    //     if(checked) {
    // setValue(checked,)
    //     }
    //     else {
    //     }
    //     console.log('event', value, checked);
  };
  return (
    <div className="w-1/5 bg-[#f9f9f9] border-r-[3px] hidden lg:block">
      <p className="text-base text-black py-[18px] px-[18px] border-b-[3px]">
        Filters
      </p>
      <div className="px-[18px] pt-[18px]">
        <p className="text-xs text-black mb-2">Select Subject</p>
        <select
          className="w-full text-[#9C9C9C] text-xs outline-none p-3 border rounded-sm"
          name="subject"
          onChange={(e) => {
            setValue(e.target.value, 'subject');
            filterHandler(e.target.value, 'subject');
          }}
        >
          {Subjects &&
            Subjects?.map((single, index) => (
              <option
                key={index}
                className="bg-white text-[#9C9C9C] text-[10px] 2xl:text-xs p-1 lg:p-2 2xl:p-3"
                value={single.value}
              >
                {single?.name}
              </option>
            ))}
        </select>
      </div>

      <div className="px-[18px] pt-[18px] ">
        <input
          type="text"
          className="text-xs text-black mb-2 w-full p-3 outline-none border"
          placeholder="Preferred Start Date "
        />
      </div>
      <div className="px-[18px] py-[18px] border-b">
        <p className="text-sm text-black mb-2">Skill Level</p>
        {Level &&
          Level?.map((single, index) => (
            <label className="checkbox" for={`checkbox-low ${index}`}>
              <input
                type="checkbox"
                className="rounded-sm peer"
                id={`checkbox-low ${index}`}
                name="level"
                value={single?.value}
                onChange={(event) => {
                  checkboxHandler(event.target.value, event.target.checked);
                }}
              />
              <span className="text-sm checkbox__label text-[#9C9C9C] peer-checked:text-black">
                {single?.name}
              </span>

              <div className="checkbox__indicator rounded"></div>
            </label>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
