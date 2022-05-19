import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="text-gray-200 body-font bg-sky-900">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl text-gray-100 uppercase">Zephyr</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"}>
            <a className="mr-5 hover:text-gray-300">Home</a>
          </Link>
          <Link href={"/about"}>
            <a className="mr-5 hover:text-gray-300">About</a>
          </Link>
          <Link href={"/modules/cv/cvfirst"}>
            <a className="mr-5 hover:text-gray-300">CV Maker</a>
          </Link>
          <Link href={"/test"}>
            <a className="mr-5 hover:text-gray-300">Take a test</a>
          </Link>
        </nav>
        <Link href={"/modules/organization/signup"}>
          <button className="inline-flex items-center bg-yellow-400 text-gray-900 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-500 rounded text-base mt-4 md:mt-0">
            Register as Company
          </button>
        </Link>
        <Link href={"/modules/user/login"}>
          <button className="inline-flex items-center border border-yellow-400 text-yellow-400 py-1 px-3 focus:outline-none hover:bg-yellow-400 hover:text-gray-900 rounded text-base mt-4 md:mt-0 ml-4">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
