import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check if user has a saved preference or use system preference
    const savedTheme = sessionStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      sessionStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      sessionStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  const tils = [
    " ",
    " We wish you Merry Christmas and Happy New Year! ",
    " H4K Hexa4K ",
    " We wish you Merry Christmas and Happy New Year! ",
    " H4K Hexa4K ",
    " We wish you Merry Christmas and Happy New Year! ",
    " H4K Hexa4K ",
    " We wish you Merry Christmas and Happy New Year! ",
    " H4K Hexa4K ",
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-[9999]">
      <div className="w-full flex flex-wrap h-10 lg:h-[3vw] bg-[#9089fc] items-center justify-center text-black font-poppins text-lg dark:text-white overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {tils.map((til, index) => (
            <span key={index} className="mx-6 text-white text-[16px]">
              {til}
            </span>
          ))}
          {tils.map((til, index) => (
            <span key={`duplicate-${index}`} className="mx-6 text-white text-[16px]">
              {til}
            </span>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>

      <nav
        className="mx-4 lg:mx-[5vw] flex items-center justify-between pt-4 lg:pt-[1.4vw] lg:px-0"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a
            href="#"
            className="-m-1.5 p-1.5 lg:p-[0.4vw] bg-black rounded-xl dark:bg-transparent flex items-center"
          >
            <img
              className="h-16 md:h-[4vw] w-auto saturate-200"
              src="logo.png"
              alt="H4K Hexa4K 4K Logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-[2vw] uppercase tracking-widest">
          <a
            href="#download"
            className="text-sm leading-6 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition"
          >
            Download
          </a>
          <a
            href="#features"
            className="text-sm leading-6 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition"
          >
            Features
          </a>
          <a
            href="#reviews"
            className="text-sm leading-6 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition"
          >
            Reviews
          </a>
          <a
            href="#"
            className="text-sm leading-6 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition"
          >
            Contact
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            onClick={toggleTheme}
            className="rounded-full bg-transparent border border-black dark:border-white/20 p-2 lg:p-[0.7vw] active:rotate-180 text-white shadow-sm backdrop-blur-sm hover:bg-white/20 transition-all duration-300 focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="size-5 lg:size-[1vw] text-white" />
            ) : (
              <Moon fill="black" className="text-black size-5 lg:size-[1vw]" />
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div 
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm animate-fadeIn"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background-dark/50 backdrop-blur-sm px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 animate-slideInRight">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex items-center">
                <img 
                  className="h-16 w-auto" 
                  src="logo.png" 
                  alt="H4K Hexa4K Logo" 
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-300 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#download"
                    className="-mx-3 block rounded-lg px-3 py-2 text-[18px] lg:text-base font-medium  text-white hover:bg-gray-800 transition"
                  >
                    Download
                  </a>
                  <a
                    href="#features"
                    className="-mx-3 block rounded-lg px-3 py-2 text-[18px] lg:text-base font-medium  text-white hover:bg-gray-800 transition"
                  >
                    Features
                  </a>
                  <a
                    href="#reviews"
                    className="-mx-3 block rounded-lg px-3 py-2 text-[18px] lg:text-base font-medium  text-white hover:bg-gray-800 transition"
                  >
                    Reviews
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-[18px] lg:text-base font-medium  text-white hover:bg-gray-800 transition"
                  >
                    Contact
                  </a>
                </div>
                <div className="py-6 flex items-center justify-between">
                  <span className="text-[18px] md:text-base font-medium text-white">
                    Theme
                  </span>
                  <button
                    onClick={() => {
                      toggleTheme();
                    }}
                    className="rounded-full bg-white/10 p-2 shadow-sm backdrop-blur-sm hover:bg-white/20 transition focus:outline-none"
                  >
                    {theme === "dark" ? (
                      <Sun className="h-5 w-5 ease-in-out active:rotate-180 transition-all duration-300 text-white" />
                    ) : (
                      <Moon className="h-5 w-5 ease-in-out active:rotate-180 transition-all duration-300 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}