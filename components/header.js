export default function HEADER (){
    return(
<section>

<div className="relative">
  <img
    src="https://shararfoundation.org/wp-content/uploads/2023/01/IMG-20200927-WA0034.jpg"
    className="absolute inset-0 object-cover bg-right w-full h-full"
    alt=""
  />
  <div className="relative bg-opacity-75 py-44 bg-deep-purple-accent-700">
    <svg
      className="absolute svgg inset-x-0 bottom-0 text-white"
      viewBox="0 0 1160 163"
    >
      <path
        fill="currentColor"
        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
      />
    </svg>
    <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between xl:flex-row">
        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
          <h1 className="max-w-lg mb-6 font-sans text-6xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none">
            SHARAR FOUNDATION
          </h1>
          <p className="max-w-xl mb-4 text-base text-gray-200 md:text-2xl">
            "Education that Inspires, Guides and Empowers"
          </p>
          <button className="px-6 py-2 rounded-xm hover:bg-transparent border-2 border-violet-400 hover:text-violet-400 shadow-sm bg-violet-400 ">Learn More</button>
        </div>
      </div>
    </div>
  </div>
</div>

</section>
    )
}