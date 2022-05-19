import Link from "next/link";

const cvsecond = () => {
  return (
    <div>
      <div className="text-sky-90 text-center text-4xl m-8">
        Build your resume
      </div>
      <div className="w-1/2 rounded-full bg-sky-100 mx-auto m-8">
        <div className="bg-sky-900 text-xs font-medium text-yellow-400 text-center p-2 leading-none rounded-full w-2/3">
          66%
        </div>
      </div>

      <div>
        <form>
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="group relative z-0 mx-auto m-10 sm:mx-auto w-4/5">
              <input
                type="text"
                name="desired_position"
                id="desired_position"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-900 focus:outline-none focus:ring-0"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_first_name"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-900 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-900"
              >
                Desired Position
              </label>
            </div>
            <div className="group relative z-0 mx-auto m-10 w-4/5">
              <input
                type="date"
                name="dob"
                id="dob"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-900 focus:outline-none focus:ring-0"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_last_name"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-900 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-900"
              >
                Date of Birth
              </label>
            </div>
          </div>

          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="group relative z-0 mx-auto m-10 sm:mx-auto w-4/5">
              <input
                type="tel"
                name="gender"
                id="gender"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-900 focus:outline-none focus:ring-0"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_phone"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-900 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-900"
              >
                Gender
              </label>
            </div>

            <div className="group relative z-0 mx-auto m-10 w-4/5">
              <input
                type="text"
                name="nationality"
                id="nationality"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-900 focus:outline-none focus:ring-0"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_company"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-900 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-900"
              >
                Nationality
              </label>
            </div>
          </div>
          <div className="grid xl:grid-cols-1">
            <div className="group relative z-0 mx-auto sm:mx-auto my-10 w-4/5">
              <input
                type="text"
                name="profile"
                id="profile"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-900 focus:outline-none focus:ring-0"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_address"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-900 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-900"
              >
                Write about yourself
              </label>
            </div>
          </div>
        </form>
      </div>

      <div className="flex justify-center">
        <Link href={"/modules/cv/cvfirst"}>
          <button
            type="button"
            className="text-yellow-400 bg-gradient-to-r from-sky-400 via-sky-700 to-sky-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 shadow-lg shadow-sky-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4"
          >
            Back
          </button>
        </Link>
        <Link href={"/modules/cv/cvthird"}>
          <button
            type="button"
            className="text-yellow-400 bg-gradient-to-r from-sky-400 via-sky-700 to-sky-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 shadow-lg shadow-sky-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4"
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default cvsecond;
