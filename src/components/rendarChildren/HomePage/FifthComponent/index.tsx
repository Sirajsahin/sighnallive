const FifthComponent = () => {
  return (
    <div className="px-4 sm:px-6 ">
      <h1 className="text-2xl sm:text-4xl font-medium pt-2 sm:pt-5">
        Get the Data You Need to Grow
      </h1>
      <p className="text-sm sm:text-base font-normal pt-1 sm:pt-2">
        Gain the data-backed clarity you need to confidently lead and grow your
        business.
      </p>

      <div className="py-8">
        <div
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 xl:gap-12 2xl:gap-16"
        >
          {[
            {
              title: "NPS",
              desc: "Measure customer loyalty and transform it into long-term business growth.",
            },
            {
              title: "Multiple Choice",
              desc: "Offer dynamic options and uncover strategic insights for smarter decision-making.",
            },
            {
              title: "Rating",
              desc: "Evaluate customer satisfaction and refine your strategies with direct, actionable feedback.",
            },
            {
              title: "Image Response",
              desc: "Leverage visual feedback to gain deeper, more authentic customer insights.",
            },
            {
              title: "Open Text",
              desc: "Capture unfiltered customer feedback and turn it into clear, actionable business insights.",
            },
            {
              title: "Mood Scale",
              desc: "Track customer sentiment and enhance engagement with emotional intelligence.",
            },
          ].map((item, index) => (
            <div key={index} className="sm:rounded-lg">
              <div className="bg-[#F8F8F8] h-48 sm:h-64 rounded-xl"></div>
              <div>
                <h1 className="text-base sm:text-2xl font-normal pt-3">
                  {item.title}
                </h1>
                <p className="w-full text-sm sm:text-base pt-0 xl:pt-2">
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

export default FifthComponent;
