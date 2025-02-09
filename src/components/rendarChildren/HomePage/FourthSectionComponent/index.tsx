const FourthSectionComponent = () => {
  return (
    <div className="bg-[#E9F0FF] my-0 p-4 sm:p-6 xl:p-28">
      <div className="py-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Content Section */}
        <div className="flex items-center">
          <div className="w-full sm:w-[80%] lg:w-[70%]">
            <h1 className="text-xl sm:text-3xl xl:text-5xl font-normal leading-snug">
              We’re Not Them. Sighnal Does More, Effortlessly.
            </h1>
            <p className="text-base sm:text-xl pt-1 sm:pt-3">
              Skip the clutter. Sighnal gives you what you need—clean,
              actionable results that matter.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="bg-white h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl"></div>
      </div>
    </div>
  );
};

export default FourthSectionComponent;
