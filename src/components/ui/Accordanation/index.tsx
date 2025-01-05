import { useState } from "react";
import { Disclosure } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Accordanation() {
  const [openIndex, setOpenIndex] = useState(0); // Default to the first item

  const items = [
    {
      title: "Data governance",
      content: `Your data is only used for your company’s agent. We don’t use your data to train models, 
                and we use industry standard best practices to ensure your data is secure.`,
    },
    {
      title: "Secure integration",
      content: `Your data is only used for your company’s agent. We don’t use your data to train models, 
                and we use industry standard best practices to ensure your data is secure.`,
    },
    {
      title: "Privacy compliance",
      content: `Your data is only used for your company’s agent. We don’t use your data to train models, 
                and we use industry standard best practices to ensure your data is secure.`,
    },
  ];

  const handleDisclosureToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index); // Toggle open/close
  };

  return (
    <div className="h-auto w-full px-4">
      <div className="mx-auto w-full rounded-xl">
        {items.map((item, index) => (
          <Disclosure
            key={index}
            as="div"
            className="group mt-2"
            defaultOpen={openIndex === index}
          >
            {() => (
              <div
                className={`p-6 ${
                  openIndex === index
                    ? "bg-[#245A4D] rounded-3xl"
                    : "hover:bg-[#245A4D] hover:rounded-3xl"
                }`}
              >
                <div className="flex gap-3 items-center">
                  <span className="w-[70px] h-16 bg-[#E0E0E014] rounded-2xl"></span>
                  <Disclosure.Button
                    className="group flex w-full items-center justify-between"
                    onClick={() => handleDisclosureToggle(index)}
                  >
                    <span className="text-base sm:text-2xl font-medium text-[#F3F1EC]">
                      {item.title}
                    </span>

                    {/* Uncomment and use ChevronDownIcon if needed */}
                    {/* <ChevronDownIcon
                      className={`size-5 fill-white/60 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    /> */}
                  </Disclosure.Button>
                </div>
                {openIndex === index && (
                  <Disclosure.Panel className="mt-2 text-sm sm:text-base xl:text-lg text-[#DFE3DD]">
                    {item.content}
                  </Disclosure.Panel>
                )}
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
