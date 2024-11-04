export default function Template() {
  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
        <nav className="container flex items-center justify-between py-6">
          <a href="./index.html">
            <img className="h-9" src="./assets/logo.svg" alt="Weather App" />
          </a>

          <div className="flex items-center gap-4 relative">
            <form action="#">
              <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input
                  className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                  type="search"
                  placeholder="Search Location"
                  required
                />
                <button type="submit">
                  <img src="./assets/search.svg" />
                </button>
              </div>
            </form>
            <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
              <img src="./assets/heart.svg" alt="" />
              <span>Favourite Locations</span>
            </div>

            {/* <!-- Modal --> */}
            <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
              <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
              <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
                <li className="hover:bg-gray-200">Dhaka</li>
                <li className="hover:bg-gray-200">Rangpur</li>
                <li className="hover:bg-gray-200">Europe</li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- End Header --> */}

      {/* <!-- Begin Main --> */}
      <main>
        {/* <!-- Begin Wheather --> */}
        <section className="">
          <div className="container">
            <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
              <div className="grid md:grid-cols-2 gap-10 md:gap-6">
                <div className="md:col-span-2">
                  <div className="flex items-center justify-end space-x-6">
                    <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
                      <span>Add to Favourite</span>
                      <img src="./assets/heart.svg" alt="" />
                    </button>
                  </div>
                </div>
                <div>
                  <div className="max-md:flex items-center justify-between md:-mt-10">
                    <img src="./assets/cloud.svg" alt="cloud" />
                    <div className="max-md:flex items-center max-md:space-x-4">
                      <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
                        16°
                      </h1>
                      <div className="flex items-center space-x-4 md:mb-4">
                        <img src="./assets/pin.svg" />
                        <h2 className="text-2xl lg:text-[50px]">Dhaka</h2>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm lg:text-lg">
                    06:09 - Sunday, 9 Dec ‘23
                  </p>
                </div>
                <div>
                  <p className="text-sm lg:text-lg font-bold uppercase mb-8">
                    thunderstorm with light drizzle
                  </p>
                  <ul className="space-y-6 lg:space-y-6">
                    <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                      <span>Temp max</span>
                      <div className="inline-flex space-x-4">
                        <p>19°</p>
                        <img src="./assets/icons/temp-max.svg" alt="temp-max" />
                      </div>
                    </li>
                    <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                      <span>Temp min</span>
                      <div className="inline-flex space-x-4">
                        <p>19°</p>
                        <img src="./assets/icons/temp-min.svg" alt="temp-min" />
                      </div>
                    </li>
                    <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                      <span>Humadity</span>
                      <div className="inline-flex space-x-4">
                        <p>58%</p>
                        <img src="./assets/icons/humidity.svg" alt="humidity" />
                      </div>
                    </li>
                    <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                      <span>Cloudy</span>
                      <div className="inline-flex space-x-4">
                        <p>86%</p>
                        <img src="./assets/icons/cloud.svg" alt="cloudy" />
                      </div>
                    </li>
                    <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                      <span>Wind</span>
                      <div className="inline-flex space-x-4">
                        <p>5km/h</p>
                        <img src="./assets/icons/wind.svg" alt="wind" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Wheather --> */}
      </main>
    </>
  );
}
