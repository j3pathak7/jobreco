

const Hero = () => {
    return (
        < section className="text-gray-600 body-font" >
            <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="interview.png" />
                <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to <span className="text-sky-900">Zephyr</span></h1>
                    <div className="flex w-full justify-center items-end">
                        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                            <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button className="inline-flex text-white bg-sky-900 border-0 py-2 px-6 focus:outline-none hover:bg-sky-700 rounded text-lg">Search</button>
                    </div>
                    <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p>
                </div>
            </div>
        </ section>
    )
}

export default Hero