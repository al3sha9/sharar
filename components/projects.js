export const Content = () => {
    return (
      <section className="bg-gray-900">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 text-white py-px mb-4 text-xl font-semibold tracking-wider  uppercase rounded-full bg-teal-accent-400">
            2023
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-6xl font-bold leading-none tracking-tight text-violet-400 sm:text-6xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Our</span>
          </span>{' '}
          Projects
        </h2>
       
      </div>
        <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
          <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
              <img
                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                src="https://shararfoundation.org/wp-content/uploads/2023/01/IMG_20200927_231140_671-600x600.jpg"
                alt=""
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
              <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Student Flood Relief
              </h5>
              <p className="mb-5 text-gray-700">
              Sharar addressed this issue to recover the educational loss of students affected by the flood. The organization set out to provide students with basic resources to continue their studies, including books, bags, uniforms and other study materials.
              </p>
                       <button className="px-6 py-2 rounded-xm hover:bg-transparent text-white border-2 border-violet-400 hover:text-violet-400 shadow-sm bg-violet-400 ">Learn More</button>

            </div>
          </div>
          <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
            <div className="relative">
              <img
                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                src="https://shararfoundation.org/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-21-at-03.04.52-600x337.jpeg"
                alt=""
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
            </div>
            <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
              <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Hire Us
              </h5>
              <p className="mb-5 text-gray-700">
                 
Team Sharar participated in paradigm challenge 2021. We created a team of seven members and presented  our idea to paradigm challenge. Our idea was to create lightweight, high flying, SMOG converter drones which will fly over places and absorb SMOG. 
              </p>
              <button className="px-6 py-2 text-white rounded-xm hover:bg-transparent border-2 border-violet-400 hover:text-violet-400 shadow-sm bg-violet-400 ">Learn More</button>

            </div>
          </div>
        </div>
      </div>
      </section>
    );
  };