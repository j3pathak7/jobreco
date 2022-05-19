import Link from "next/link";

const cvthird = () => {
  return (
    <div>
      <div className="text-sky-90 text-center text-4xl m-8">
        Build your resume
      </div>
      <div className="w-1/2 rounded-full bg-sky-100 mx-auto m-8">
        <div className="bg-sky-900 text-xs font-medium text-yellow-400 text-center p-2 leading-none rounded-full w-3/3">
          100%
        </div>
      </div>
      <div className="flex justify-center">
        <Link href={"/modules/cv/cvsecond"}>
          <button
            type="button"
            className="text-yellow-400 bg-gradient-to-r from-sky-400 via-sky-700 to-sky-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 shadow-lg shadow-sky-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4"
          >
            Back
          </button>
        </Link>
        <Link href={"/modules/cv/cvfinal"}>
          <button
            type="button"
            className="text-yellow-400 bg-gradient-to-r from-sky-400 via-sky-700 to-sky-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 shadow-lg shadow-sky-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4"
          >
            Build
          </button>
        </Link>
      </div>
    </div>
  );
};

export default cvthird;
