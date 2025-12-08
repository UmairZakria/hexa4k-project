import React from "react";
import { MonitorSmartphone, Shield, Subtitles } from "lucide-react";

export default function Features() {
  const features = [
    {
      name: "Multi-Device Support",
      description:
        "Watch on your TV, phone, tablet, or computer. Our service is compatible with all major devices and platforms.",
      icon: MonitorSmartphone,
    },
    {
      name: "Parental Controls",
      description:
        "Keep your family safe with easy-to-use parental controls. Manage content access with just a few clicks.",
      icon: Shield,
    },
    {
      name: "Subtitles & EPG",
      description:
        "Enjoy content from around the world with multi-language subtitles and a comprehensive Electronic Program Guide.",
      icon: Subtitles,
    },
  ];

  return (
    <section id="features" className="px-6 lg:px-[5vw] py-24 sm:py-[10vw]">
      <div className="mx-auto w-full lg:w-[50%] lg:text-center">
        <h2 className=" text-[32px] lg:text-3xl font-medium font-comfortaa  tracking-wide     text-gray-900 dark:text-white sm:text-5xl">
          Everything You Need for Perfect Streaming
        </h2>
        <p className="mt-4 lg:mt-[1.2vw] text-[18px] lg:text-lg  text-gray-600 dark:text-white/65 w-full lg:w-[70%] mx-auto">
          Our platform is packed with powerful features designed to give you the
          best viewing experience possible.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-6 lg:gap-x-[2vw] gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col box-border h-auto lg:h-[20vw] shadow-2xl dark:shadow-2xs  dark:shadow-[#9089fc] hover:shadow-[#362D51]/70 transition-all hover:scale-95 duration-300 ease-in-out items-center text-center py-8 px-6 lg:py-[3vw] lg:px-[2vw] rounded-lg bg-[#9089fc]/5     backdrop-blur-sm border border-white/10"
            >
              <div className="mb-4 flex p-4 lg:p-[1.1vw] items-center justify-center rounded-lg bg-primary brightness-125 text-white">
                <feature.icon
                  className="size-8 lg:size-[1.5vw]"
                  aria-hidden="true"
                />
              </div>
              <dt className="text-[18px] md:text-xl font-medium  text-gray-900 dark:text-white  ">
                {feature.name}
              </dt>
              <dd className="mt-4 lg:mt-[1.3vw] flex-auto text-[18px] md:text-base lg:text-[0.9vw] font-poppins font-light leading-normal  text-gray-600 dark:text-white/75">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
