import { ArrowRightIcon } from "@heroicons/react/20/solid";

const SeventhSectionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-12 sm:py-24 gap-2 xl:py-28">
      <h1 className="text-2xl sm:text-4xl font-medium">
        See What’s Possible with Sighnal.
      </h1>
      <p className="text-sm sm:text-xl font-normal max-w-lg">
        Get a glimpse of what better decisions can do for your business.
      </p>

      <button className="px-6 py-2 sm:px-8 sm:py-3 flex items-center text-[#F3F1EC] bg-[#2D6759] rounded-3xl text-sm sm:text-base gap-2 mt-4 sm:mt-6 xl:mt-8 transition hover:bg-[#245347]">
        Learn more <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default SeventhSectionComponent;
