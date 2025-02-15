const SecondComponent = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-6">
      <h1 className="text-2xl sm:text-4xl font-normal pt-3 text-center">
        How Sighnal helps businesses to grow
      </h1>
      <p className="text-base sm:text-xl w-full sm:w-[75%] md:w-[60%] lg:w-[45%] mx-auto text-center pt-2">
        Enable your customers to get answers, solve problems, and take action
        through a natural, conversational experience.
      </p>

      {/* First Row - 2 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 xl:gap-16 2xl:gap-20 w-full pt-8">
        <div className="sm:rounded-lg">
          <div className="bg-[#F8F8F8] h-[250px] sm:h-[350px] rounded-xl"></div>
          <h1 className="text-base sm:text-2xl font-normal pt-3">
            Master Customer Understanding
          </h1>
          <p className="text-sm sm:text-base w-full pr-0 xl:pr-6 pt-2">
            Sighnal gives you the clarity to truly know your customers,
            empowering you to make better decisions.
          </p>
        </div>
        <div className="sm:rounded-lg">
          <div className="bg-[#F8F8F8] h-[250px] sm:h-[350px] rounded-xl"></div>
          <h1 className="text-base sm:text-2xl font-normal pt-3">
            Turn Data Into Your Asset
          </h1>
          <p className="text-sm sm:text-base w-full pr-0 xl:pr-6 pt-2">
            Sighnal turns everyday interactions into valuable insights, helping
            you build a smarter strategy for growth.
          </p>
        </div>
      </div>

      {/* Second Row - 3 Cards */}
      <div className="py-3 mt-2 sm:mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 xl:gap-16 2xl:gap-20 w-full py-2">
          <div className="sm:rounded-lg">
            <div className="bg-[#F8F8F8] h-[250px] sm:h-64 rounded-xl"></div>
            <h1 className="text-base sm:text-2xl font-normal pt-3">
              See Tomorrow, Act Today
            </h1>
            <p className="text-sm sm:text-base w-full pr-0 xl:pr-6 pt-2">
              Stay ahead of the curve. Sighnal helps you see what’s coming, long
              before your competitors do.
            </p>
          </div>
          <div className="sm:rounded-lg">
            <div className="bg-[#F8F8F8] h-[250px] sm:h-64 rounded-xl"></div>
            <h1 className="text-base sm:text-2xl font-normal pt-3">
              Build Strong Customer Loyalty
            </h1>
            <p className="text-sm sm:text-base w-full pr-0 xl:pr-6 pt-2">
              Forge bonds that last. Sighnal keeps you connected to what your
              customers really want.
            </p>
          </div>
          <div className="sm:rounded-lg">
            <div className="bg-[#F8F8F8] h-[250px] sm:h-64 rounded-xl"></div>
            <h1 className="text-base sm:text-2xl font-normal pt-3">
              Smart Decisions Every Time
            </h1>
            <p className="text-sm sm:text-base w-full pr-0 xl:pr-6 pt-2">
              When you see the full picture, decisions become easier. Sighnal
              helps you move forward with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;
