import Link from "next/link";

const cvfirst = () => {
  return (
    <div>
      <div className="text-sky-90 text-center text-4xl m-8">
        Build your resume
      </div>
      <div className="w-1/2 rounded-full bg-sky-100 mx-auto m-8">
        <div className="bg-sky-900 text-xs font-medium text-yellow-400 text-center p-2 leading-none rounded-full w-1/3">
          33%
        </div>
      </div>

      <div>
        <form>
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="group relative z-0 ml-24 m-10 w-4/5">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-900 focus:outline-none focus:ring-0"
                placeholder=" "
                required=""
              />
              <label
                for="floating_first_name"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-900 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-900"
              >
                First name
              </label>
            </div>
            <div className="group relative z-0 mr-24 m-10 w-4/5">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-900 focus:outline-none focus:ring-0"
                placeholder=" "
                required=""
              />
              <label
                for="floating_last_name"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-900 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-900"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="group relative z-0 ml-24 m-10 w-4/5">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-900 focus:outline-none focus:ring-0"
                placeholder=" "
                required=""
              />
              <label
                for="floating_phone"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-900 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-900"
              >
                Phone number
              </label>
            </div>
            <div className="group relative z-0 mr-28 m-10 w-4/5">
              <input
                type="text"
                name="email"
                id="email"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-900 focus:outline-none focus:ring-0"
                placeholder=" "
                required=""
              />
              <label
                for="floating_company"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-900 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-900"
              >
                Email
              </label>
            </div>
          </div>
          <div className="grid xl:grid-cols-1">
            <div className="group relative z-0 mx-auto my-10 my-10 w-4/5">
              <input
                type="text"
                name="address"
                id="address"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-900 focus:outline-none focus:ring-0"
                placeholder=" "
                required=""
              />
              <label
                for="floating_address"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-900 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-sky-900"
              >
                Address
              </label>
            </div>
          </div>
        </form>
      </div>

      <div className="flex justify-center">
        <Link href={"/modules/cv/cvsecond"}>
          <button
            type="button"
            className="text-yellow-400 bg-gradient-to-r from-sky-400 via-sky-700 to-sky-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 shadow-lg shadow-sky-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default cvfirst;
