import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <div class="h-screen w-screen flex flex-wrap justify-center">
        <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-sky-900">
          <div class="max-w-md">
            <div class="text-5xl font-dark font-bold my-6">404</div>
            <p class="text-2xl md:text-3xl font-light leading-normal my-6">
              Sorry we couldn't find this page.
            </p>

            <Link href={"/"}>
              <button
                type="button"
                className="my-6 text-yellow-400 bg-gradient-to-r from-sky-400 via-sky-700 to-sky-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 shadow-lg shadow-sky-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Back to homepage
              </button>
            </Link>
          </div>
          <div class="max-w-lg"></div>
          <img src="career.png" width={600} height={"400"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
