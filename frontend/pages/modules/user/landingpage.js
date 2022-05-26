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
          <a href="./knock">
            <h5 className=" text-4xl font-bold tracking-tight text-gray-900">
              Required Position
            </h5>
            <h6 className="mt-2 text-lg text-gray-700 font-medium">
              Undergrad Major
            </h6>
          </a>
          <div className="mb-3 grid grid-cols-2">
            <h6 className=" font-normal text-gray-500">
              Languages worked with
            </h6>
            <h6 className="font-normal text-gray-900 text-right">Salary</h6>
          </div>
          <div className="flex justify-center">
            <a
              href="./knock"
              className="text-yellow-400 bg-gradient-to-r from-sky-400 via-sky-700 to-sky-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 shadow-lg shadow-sky-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-1/5"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default landingpage;
