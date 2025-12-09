import { ArrowDown, ChevronDown, MoveRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [downloadOptions, setDownloadOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setDownloadOptions([
      {
        platform: "Windows",
        icon: "https://img.icons8.com/?size=40&id=TuXN3JNUBGOT&format=png&color=000000",
        downloadUrl:
          "https://www.filehorse.com/download-iptv-smarters-pro/download/",
      },
      {
        platform: "Mac",
        icon: "https://img.icons8.com/?size=40&id=122959&format=png&color=000000",
        downloadUrl:
          "https://www.filehorse.com/download-iptv-smarters-pro/download/",
      },
      {
        platform: "Android",
        icon: "https://img.icons8.com/?size=40&id=L1ws9zn2uD01&format=png&color=000000",
        downloadUrl:
          "https://aftv.news/1998462",
      },
      {
        platform: "iOS",
        icon: "https://img.icons8.com/?size=40&id=fKXXelWgP1B6&format=png&color=000000",
        downloadUrl:
          "https://apps.apple.com/pk/app/smarters-player-lite/id1628995509",
      },
    ]);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getPlatformIcon = (platform) => {
    const iconMap = {
      windows:
        "https://img.icons8.com/?size=40&id=TuXN3JNUBGOT&format=png&color=000000",
      mac: "https://img.icons8.com/?size=40&id=122959&format=png&color=000000",
      linux:
        "https://img.icons8.com/?size=40&id=122959&format=png&color=000000",
      android:
        "https://img.icons8.com/?size=40&id=L1ws9zn2uD01&format=png&color=000000",
      ios: "https://img.icons8.com/?size=40&id=fKXXelWgP1B6&format=png&color=000000",
      web: "https://img.icons8.com/?size=40&id=122959&format=png&color=000000",
    };
    return iconMap[platform.toLowerCase()] || iconMap.web;
  };

  return (
    <div className="relative pt-38 lg:py-0 h-auto lg:h-[70vh]  z-[100] isolate px-6 lg:px-[4vw]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-[24px] md:blur-[4vw] sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[65vw]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="flex items-end justify-center h-full  ">
        <div className=" ">
          <div className="mx-auto lg:w-[60%] space-y-1 lg:space-y-[2vw] text-center">
            <h1 className=" font-comfortaa  text-[35px]  font-light   text-gray-900 dark:text-white lg:text-7xl">
              The Ultimate{" "}
              <span className="gradient-text font-medium">4K IPTV</span>{" "}
              Experience
            </h1>
            <p className=" text-[16px] lg:text-xl   lg:w-[70%]  text-center mx-auto  text-gray-600  dark:text-white/75 font-poppins font-light">
              Unlock a world of entertainment with thousands of channels,
              movies, and series on any device, anytime.
            </p>
            <div className="mt-10 lg:mt-[3vw] flex flex-col sm:flex-row relative z-[9999] items-center justify-center gap-4 lg:gap-x-[2vw]">
              <a
                className={` md:block relative !z-[9999] `}
                ref={dropdownRef}
                href="https://dl.dropboxusercontent.com/scl/fi/33e2phewot6qqiksdg37q/H4KHexav405.apk?rlkey=7sy6kmuxlf1klgrbqvbclt42d&dl=1"
              >
                <button
                  // onClick={() => setIsOpen(!isOpen)}
                  className={`rounded-md lg:rounded-[0.2vw] px-6 lg:px-[1.4vw] py-3 lg:py-[0.7vw] bg-primary-DEFAULT font-poppins w-full flex group  transition-all duration-300 ease-in-out  text-[16px] lg:text-lg cursor-pointer text-white items-center justify-center gap-3 lg:gap-[1vw] relative z-10`}
                >
                  Download Now
                  <div className="flex items-center gap-1">
                    <ChevronDown
                      className={`transition-transform rotate-270 size-6 lg:size-[1.3vw] duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Dropdown Menu */}
                {/* {isOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1  bg-white  border !border-gray-200 rounded-md shadow-xl !z-[9999] overflow-hidden">
                    {downloadOptions.map((option, index) => (
                      <a
                        key={option.platform}
                        href={option.downloadUrl}
                        target="_blank"
                        title={`Download For ${option.platform}`}
                        className="w-full  px-4 lg:px-[1.4vw] py-3 lg:py-[0.7vw] text-left hover:bg-gray-100 cursor-pointer transition-colors duration-150 flex items-center gap-4 text-gray-700 hover:text-gray-900"
                      >
                        <img
                          src={option.icon}
                          className=" size-10 lg:size-[2.3vw]"
                          alt=""
                        />
                        <span className="font-medium  md:text-base uppercase">
                          For {option.platform}
                        </span>
                      </a>
                    ))}
                  </div>
                )} */}
              </a>

              <a
                href="#features"
                className="relative text-[16px] lg:text-lg  flex items-center gap-x-2 lg:gap-x-[0.5vw] bg-white/5 backdrop-blur-xs border lg:border-[0.1vw] dark:border-white/10  rounded-md lg:rounded-[0.2vw] px-10 lg:px-[1.4vw] py-3 lg:py-[0.7vw]   border-black/15 leading-6 text-gray-900 dark:text-white"
              >
                Learn more
                <MoveRight className="size-6 lg:size-[1vw]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-[24px] md:blur-[4vw] sm:top-[calc(100%-30rem)]"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[70vw]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
    </div>
  );
}
