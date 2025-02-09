const ThirdSectionComponent = () => {
  return (
    <div className="bg-[#F6F6F6] mt-4 py-4 px-4 sm:px-10 xl:px-20 2xl:px-28">
      <h1 className="text-2xl sm:text-4xl font-normal pt-3 text-center">
        How Sighnal helps businesses to grow
      </h1>
      <p className="text-base sm:text-xl w-full sm:w-[75%] md:w-[60%] lg:w-[45%] mx-auto text-center pt-2">
        Enable your customers to get answers, solve problems, and take action
        through a natural, conversational experience.
      </p>

      {/* Responsive Grid Layout */}
      <div className="py-4 sm:py-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 xl:gap-16 2xl:gap-20">
        <div className="bg-white h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl"></div>

        <div className="flex flex-col gap-4 sm:gap-5 xl:gap-6">
          {[
            {
              img: "https://vetic-img.s3.ap-south-1.amazonaws.com/website/Website-Astro/icons/Frame+1000004639.png",
              title: "Master Customer Understanding",
              desc: "Sighnal gives you the clarity to truly know your customers, empowering you to make better decisions.",
            },
            {
              img: "https://vetic-img.s3.ap-south-1.amazonaws.com/website/Website-Astro/icons/Frame+1000004639-1.png",
              title: "Turn Data Into Gold",
              desc: "Sighnal turns everyday interactions into valuable insights, helping you build a smarter strategy for growth.",
            },
            {
              img: "https://vetic-img.s3.ap-south-1.amazonaws.com/website/Website-Astro/icons/Frame+1000004639-2.png",
              title: "See Tomorrow, Act Today",
              desc: "Stay ahead of the curve. Sighnal helps you see what’s coming, long before your competitors do.",
            },
            {
              img: "https://vetic-img.s3.ap-south-1.amazonaws.com/website/Website-Astro/icons/Frame+1000004639-3.png",
              title: "Build Strong Customer Loyalty",
              desc: "Forge bonds that last. Sighnal keeps you connected to what your customers really want.",
            },
            {
              img: "https://vetic-img.s3.ap-south-1.amazonaws.com/website/Website-Astro/icons/Frame+1000004639-4.png",
              title: "Decisions? Done Right, Every Time",
              desc: "When you see the full picture, decisions become easier. Sighnal helps you move forward with confidence.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start sm:items-center gap-4">
              <div className="h-12 w-12 rounded-xl flex-shrink-0">
                <img
                  src={item.img}
                  alt={`icon-${index}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-base sm:text-2xl font-normal">
                  {item.title}
                </h1>
                <p className="text-sm sm:text-base text-[#717171] pt-0 xl:pt-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdSectionComponent;
