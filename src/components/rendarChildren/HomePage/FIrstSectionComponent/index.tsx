const FIrstSectionComponent = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-14">
        <div className="flex flex-col items-center gap-2 ">
          <h1 className=" text-3xl sm:text-5xl  font-medium  ">
            Sighnal Reveals What
          </h1>
          <h1 className="text-3xl sm:text-5xl font-medium ">
            Others Can’t Hear.
          </h1>
          <p className=" text-base sm:text-xl font-normal">
            Delivering insights that transform customer feedback into actionable
            data.
          </p>
        </div>
      </div>
      <div className="my-5 xl:my-10 2xl:my-14">
        <div className="bg-[#F5F5F5] rounded-[40px] flex justify-center items-center h-[300px] sm:h-[500px]">
          {/* <div className="w-[400px] h-auto rounded-lg bg-gray-300">
            <div className="w-[80%] h-[300px] "></div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FIrstSectionComponent;
