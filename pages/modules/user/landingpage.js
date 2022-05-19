import React from "react";

const landingpage = () => {
  return (
    <>
      <div className="m-8">
        <div className="flex w-full justify-center items-end">
          <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
            <input
              type="text"
              id="hero-field"
              name="hero-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="inline-flex text-white bg-sky-900 border-0 py-2 px-6 focus:outline-none hover:bg-sky-700 rounded text-lg">
            Search
          </button>
        </div>
        <p className="text-sm mt-2 text-gray-500 mb-8 w-full text-center">
          Search for jobs by skills, designation, companies, location
        </p>
      </div>
      <div className=" card my-8 mx-32">
        <div className="p-6 max-w-m bg-white rounded-lg border border-gray-200 shadow-md">
          <a href="#">
            <h5 className=" text-2xl font-bold tracking-tight text-gray-900">
              Nodejs Development
            </h5>
            <h6 className="mt-2 text-lg text-gray-700 font-medium">
              Ghar Chalo
            </h6>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-900 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            View Details
          </a>
        </div>
      </div>
    </>
  );
};

export default landingpage;
