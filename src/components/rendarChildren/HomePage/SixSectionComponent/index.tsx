import Accordanation from "@/components/ui/Accordanation";

const SixSectionComponent = () => {
  return (
    <div className="bg-[#2D6759] my-0 sm:my-4 px-4 sm:px-10 xl:px-20 2xl:px-28 py-8 sm:py-14 xl:py-16 2xl:py-28">
      <h1 className="text-2xl sm:text-4xl font-medium text-[#F3F1EC]">
        Safe and Secure
      </h1>
      <p className="text-[#F3F1ECE5] text-base sm:text-xl font-normal py-3 w-full sm:w-[60%]">
        Sighnal is designed with the highest commitment to trust, security, and
        compliance. Your AI agent won't pretend to be something it’s not, and it
        will be honest about its limitations.
      </p>

      <div className="py-3 sm:py-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 xl:gap-16 items-center">
        <div className="bg-white h-56 sm:h-72 md:h-80 lg:h-96 xl:h-[500px] rounded-2xl"></div>
        <Accordanation />
      </div>
    </div>
  );
};

export default SixSectionComponent;
