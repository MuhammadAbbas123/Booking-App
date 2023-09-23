import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import ReactPaginate from 'react-paginate';
import { restructorData } from './helpers';

import Sidebar from './components/HomeSidebar';
import TutorImg1 from './assets/images/tutor1.png';
const tutorRecord = [
  {
    id: '1',
    name: 'A',
    subjectName: 'BS Computer Science',
    rating: '2.5',
    skillLevel: 'Medium',
  },
  {
    id: '2',
    name: 'B',
    subjectName: 'BS Physics',
    rating: '2.5',
    skillLevel: 'Medium',
  },
  {
    id: '3',
    name: 'C',
    subjectName: 'BS Mathematics',
    rating: '2.5',
    skillLevel: 'Medium',
  },
  {
    id: '4',
    name: 'D',
    subjectName: 'BS Mathematics',
    rating: '2.5',
    skillLevel: 'Medium',
  },
  {
    id: '5',
    name: 'E',
    subjectName: 'BS Computer Science',
    rating: '2.5',
    skillLevel: 'Medium',
  },
  {
    id: '5',
    name: 'F',
    subjectName: 'BS Mathematics',
    rating: '2.5',
    skillLevel: 'Medium',
  },
  {
    id: '6',
    name: 'G',
    subjectName: 'BS Biology',
    rating: '2.5',
    skillLevel: 'Medium',
  },
  {
    id: '7',
    name: 'H',
    subjectName: 'BS Mathematics',
    rating: '2.5',
    skillLevel: 'Medium',
  },
  {
    id: '8',
    name: 'I',
    subjectName: 'BS Mathematics',
    rating: '2.5',
    skillLevel: 'Medium',
  },
  {
    id: '9',
    name: 'J',
    subjectName: 'BS Mathematics',
    rating: '2.5',
    skillLevel: 'Medium',
  },
  {
    id: '10',
    name: 'K',
    subjectName: 'BS Mathematics',
    rating: '2.5',
    skillLevel: 'Medium',
  },
  {
    id: '11',
    name: 'L',
    subjectName: 'BS Mathematics',
    rating: '2.5',
    skillLevel: 'Medium',
  },
  {
    id: '12',
    name: 'M',
    subjectName: 'BS Mathematics',
    rating: '2.5',
    skillLevel: 'Medium',
  },
  {
    id: '13',
    name: 'N',
    subjectName: 'BS Mathematics',
    rating: '2.5',
    skillLevel: 'Medium',
  },
];

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [rating, setRating] = useState();
  const [tutor, setTutor] = useState();
  const [current, setCurrent] = useState(0);

  const [filterData, setFilterData] = useState({
    subject: '',
    date: '',
    level: '',
  });

  const setValue = (value, name) => {
    setFilterData({ ...filterData, [name]: value });
  };
  useEffect(() => {
    setTutor(restructorData(tutorRecord, 6));
    setUserData(tutorRecord);
  }, [current]);

  const filterHandler = (val) => {
    if (val && val !== 'all subject') {
      let _filter = userData?.filter(
        (item) =>
          item?.subjectName.toLowerCase().indexOf(val.toLowerCase()) !== -1
      );

      setTutor(restructorData(_filter, 6));
    } else {
      setTutor(restructorData(userData, 6));
    }
  };

  const changeRating = (newRating, name) => {
    console.log(name);
    setRating(newRating);
  };
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setCurrent(event?.selected);
  };

  return (
    <>
      <div className="flex">
        <Sidebar
          setFilterData={setFilterData}
          setValue={setValue}
          filterHandler={filterHandler}
        />
        <div className="w-full px-3 pb-28 bg-[#f9f9f9] lg:w-4/5 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-2.5 p-2 w-full mb-10">
            {tutor &&
              tutor[current]?.map((single, index) => (
                <div
                  className=" bg-white rounded flex flex-col justify-center items-center pt-[18px] px-4 pb-10 lg:px-5 2xl:px-8"
                  key={index}
                >
                  <div className="h-[78px] w-[78px]">
                    <img
                      src={TutorImg1}
                      className="h-full w-full"
                      alt="Tutor'"
                    />
                  </div>

                  <p className="text-[22px] text-primary-black font-semibold pt-2">
                    Name
                  </p>

                  <p className="text-base text-gray-400">
                    {single?.subjectName}
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
                    <span className="text-primary-black">
                      {single?.skillLevel}
                    </span>
                  </p>
                  <div className="flex gap-2 items-center justify-center w-full pt-11 lg:gap-4">
                    <Link to={`/profile/${single?.id}`}>
                      <button className="text-xs py-2.5 px-3.5 bg-white border border-primary text-primary rounded-full lg:px-2.5 lg:text-[10px] 2xl:text-xs 2xl:px-3.5">
                        Request a demo
                      </button>
                    </Link>
                    <button className="text-xs py-2.5 px-10 border text-white bg-primary rounded-full text-[10px] lg:px-8 2xl:px-16  2xl:text-xs">
                      Hire
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={tutor && tutor?.length}
            previousLabel="<"
            renderOnZeroPageCount={null}
            className="flex justify-center page-link"
            breakClassName="px-2"
            previousClassName="px-3 py-1 border"
            nextClassName="px-3 py-1 border"
            activeClassName="px-3 py-1 bg-primary text-white rounded"
            onPageActive="bg-primary"
            pageClassName="px-3 py-1 text-primary-black rounded border mx-1"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
