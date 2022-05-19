import Link from "next/link";

const knock = () => {
  return (
    <div>
      <div className="flex justify-center m-28 p-28 ">
        <h4 className="text-4xl">
          Congrats! You have applied for Required Position
        </h4>
      </div>
      <div className="flex justify-center">
        <Link href={"/modules/user/landingpage"}>
          <button
            type="button"
            className="text-yellow-400 bg-gradient-to-r from-sky-400 via-sky-700 to-sky-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 shadow-lg shadow-sky-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4"
          >
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default knock;
