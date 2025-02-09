const FirstSectionComponent = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 sm:px-8 ">
      {/* Text Section */}
      <div className="text-center mt-10 sm:mt-14 max-w-4xl">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          Sighnal Reveals What
        </h1>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          Others Can’t Hear.
        </h1>
        <p className="text-sm sm:text-lg md:text-xl font-normal mt-4 text-gray-700">
          Delivering insights that transform customer feedback into actionable
          data.
        </p>
      </div>

      {/* Image / Background Section */}
      <div className="w-full my-6 sm:my-10 lg:my-14">
        <div className="bg-[#F5F5F5] rounded-[30px] flex justify-center items-center h-[200px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] w-full  mx-auto">
          {/* Placeholder for Image or Content */}
          {/* <img src="your-image.jpg" alt="Visualization" className="max-w-full h-auto rounded-lg shadow-lg" /> */}
        </div>
      </div>
    </section>
  );
};

export default FirstSectionComponent;
