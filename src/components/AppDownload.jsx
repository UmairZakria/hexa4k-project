import React from "react";
import { Smartphone, Monitor } from "lucide-react";

export default function AppDownload({ links }) {
  const icons = {
    windows:
      "https://img.icons8.com/?size=60&id=TuXN3JNUBGOT&format=png&color=000000",
    mac: "https://img.icons8.com/?size=60&id=122959&format=png&color=000000",
    android:
      "https://img.icons8.com/?size=60&id=L1ws9zn2uD01&format=png&color=000000",
    ios: "https://img.icons8.com/?size=60&id=fKXXelWgP1B6&format=png&color=000000",
    apk: "https://img.icons8.com/?size=60&id=Qn4GH3u6CYo5&format=png&color=000000",
  };

  const {
    windows = "https://www.filehorse.com/download-iptv-smarters-pro/download/",
    mac = "https://www.filehorse.com/download-iptv-smarters-pro/download/",
    android = "https://aftv.news/1998462",
    ios = "https://apps.apple.com/pk/app/smarters-player-lite/id1628995509",
    apk = "https://aftv.news/1998462", // defaulting APK to android for now
  } = links || {};

  // If apk link is not explicitly in DB, use android link
  const apkLink = links?.apk || android;

  return (
    <section
      id="download"
      className="bg-gray-50 relative px-6 lg:px-[5vw]  w-full flex items-center h-auto lg:h-[60vh] justify-center dark:bg-background-dark py-16 lg:py-[10vw] z-[1] "
    >
      <div className="  absolute top-1/6 md:top-[70%]  blur-[4px] md:blur-[0.6vw] left-1/2 md:left-1/4 grayscale-100 -translate-x-1/2 -translate-y-1/2 z-[1] md:h-[20vw] h-[150px]  w-[150px] md:w-[20vw]">
        <img src="logo.png" className="h-full w-full" alt="" />
      </div>
      <div className="  flex flex-col lg:flex-row items-center w-full   justify-around gap-10 lg:gap-0 ">
        <div className="  w-full lg:w-fit text-left ">
          <h2 className="font-comfortaa text-[32px] lg:text-3xl font-light tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Download Our App
          </h2>
          <p className="mt-6 lg:mt-[1.8vw] text-[18px] lg:text-lg w-full  mx-auto lg:mx-0 lg:w-[25vw]   text-gray-600 dark:text-gray-400">
            Get the best streaming experience on your favorite device. Download
            the H4K HEXA app now.
          </p>
        </div>
        <div className=" w-full lg:w-[35vw]  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href={apkLink}
              target="_blank"
              className="flex items-center justify-center gap-4 rounded-lg bg-primary-DEFAULT/10 dark:bg-gradient-to-br from-primary-DEFAULT to-transparent p-6 lg:p-[2vw] text-left hover:bg-primary-DEFAULT/20 dark:hover:bg-primary-DEFAULT/30 transition-colors duration-300"
            >
              <button className="bg--DEFAULT cursor-pointer  dark:text-white  rounded-lg flex items-center gap-4 lg:gap-[1vw]">
                <img
                  className="size-10 lg:h-[2vw] lg:w-[2vw]"
                  src={icons.apk}
                  alt=""
                />
                <div className="text-left">
                  <div className="text-[14px] md:text-sm font-semibold">
                    DIRECT DOWNLOAD
                  </div>
                  <div className="text-[16px] md:text-lg font-bold">
                    .APK FILE
                  </div>
                </div>
              </button>
            </a>
            <a
              href={ios}
              className="flex items-center justify-center gap-4 rounded-lg bg-primary-DEFAULT/10 dark:bg-gradient-to-bl from-primary-DEFAULT to-transparent p-6 lg:p-[2vw] text-left hover:bg-primary-DEFAULT/20 dark:hover:bg-primary-DEFAULT/30 transition-colors duration-300"
            >
              <button className=" cursor-pointer dark:text-white rounded-lg flex items-center gap-4 lg:gap-[1vw]">
                <img
                  className="size-10 lg:h-[2vw] lg:w-[2vw]"
                  src={icons.ios}
                  alt=""
                />
                <div className="text-left uppercase">
                  <div className="text-[14px] lg:text-sm font-medium">
                    Available on
                  </div>
                  <div className="text-[20px] lg:text-xl font-semibold">
                    iOS App
                  </div>
                </div>
              </button>
            </a>
            <a
              href={android}
              className="flex items-center justify-center gap-4 rounded-lg bg-primary-DEFAULT/10 dark:bg-gradient-to-tr from-primary-DEFAULT to-transparent p-6 lg:p-[2vw] text-left hover:bg-primary-DEFAULT/20 dark:hover:bg-primary-DEFAULT/30 transition-colors duration-300"
            >
              <button className=" cursor-pointer dark:text-white rounded-lg flex items-center gap-4 lg:gap-[1vw]">
                <img
                  className="size-10 lg:h-[2vw] lg:w-[2vw]"
                  src={icons.android}
                  alt="Google Play"
                />
                <div>
                  <p className="text-[14px] lg:text-sm font-medium text-gray-500 dark:text-gray-400">
                    Available on
                  </p>
                  <p className="text-[18px] lg:text-lg font-semibold text-gray-900 dark:text-white">
                    Google Play
                  </p>
                </div>
              </button>
            </a>
            <a
              href={windows}
              className="flex items-center justify-center gap-4 rounded-lg bg-primary-DEFAULT/10 dark:bg-gradient-to-tl from-primary-DEFAULT to-transparent p-6 lg:p-[2vw] text-left hover:bg-primary-DEFAULT/20 dark:hover:bg-primary-DEFAULT/30 transition-colors duration-300"
            >
              <button className=" cursor-pointer dark:text-white rounded-lg flex items-center gap-4 lg:gap-[1vw]">
                <img
                  className="size-10 lg:h-[2vw] lg:w-[2vw]"
                  src={icons.windows}
                  alt=""
                />
                <div className="text-left">
                  <div className="text-[14px] lg:text-sm font-medium">
                    Download For
                  </div>
                  <div className="text-[18px] lg:text-lg font-semibold">
                    Windows
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
