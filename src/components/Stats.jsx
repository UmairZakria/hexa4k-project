import { Tv, Film, Play, Star, Volleyball } from "lucide-react";

export default function Stats() {
  const features = [
    {
      icon: Tv,
      title: "Live TV",
      description:
        "20,000+ Live channels of almost all countries of the world.",
      bgColor: "bg-primary",
    },
    {
      icon: Film,
      title: "Movies",
      description: "83,000+ movie channels and videos on demand.",
      bgColor: "bg-primary",
    },
    {
      icon: Play,
      title: "Web Series",
      description: "3000+ Best TV Series & Tv Shows of 2025 and All Time.",
      bgColor: "bg-primary",
    },
    {
      icon: Volleyball,
      title: "Sports",
      description: "All Premium Sports Channels and PPV events.",
      bgColor: "bg-primary",
    },
  ];

  return (
    <div className=" py-8 my-16 px-4 md:px-[5vw] space-y-12 lg:space-y-[4vw]">
      <div className="mx-auto max-w-2xl flex flex-col lg:flex-row items-center justify-between lg:max-w-full text- lg:text-left">
        <h2 className="font-display text-[32px] lg:text-3xl font- font-comfortaa text-gray-900 dark:text-white sm:text-4xl">
          Endless Entertainment, <br /> Instantly
        </h2>
        <p className="mt-4 lg:mt-[1vw] text-[18px] lg:text-lg w-full lg:w-[30vw] lg:text-right  text-gray-600 dark:text-gray-400">
          Dive into our massive library featuring the latest movies,
          binge-worthy TV shows, and live channels from around the globe.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[2vw]">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800/20 flex items-center flex-col justify-center shadow-xl dark:shadow-2xl dark:shadow-[#9089fc]/15 hover:-translate-y-3 transition-all duration-300 ease-in-out rounded-lg font-poppins px-6 py-6 lg:px-[1.3vw] lg:py-[1.6vw]  hover:shadow-md  "
            >
              <div
                className={`bg-primary size-20 lg:size-[4vw] rounded-full flex items-center justify-center mb-4`}
              >
                <IconComponent className="size-10 lg:size-[2vw] text-white" />
              </div>

              <h3 className="text-[20px] lg:text-xl font-medium font-poppins dark:text-white uppercase text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="dark:text-white/65 italic text-gray-600 text-center text-[18px] lg:text-lg mt-4 lg:mt-[1vw]">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
