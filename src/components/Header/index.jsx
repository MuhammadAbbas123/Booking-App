import React from 'react';
import AuthorImg from '../../assets/images/author-img.png';
const Header = () => {
  return (
    <header className="container mx-auto flex justify-between py-6 px-2.5 2xl:px-0">
      <div className="text-xl text-primary font-extrabold uppercase lg:text-3xl">
        Demo
      </div>
      <div className="flex ">
        <button className="py-2.5 px-6 bg-primary text-white rounded-full mr-4 lg:mr-11">
          Upgrade
        </button>
        <img src={AuthorImg} className="h-12 w-12 rounded" alt="author-img" />
      </div>
    </header>
  );
};

export default Header;
