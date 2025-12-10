import React from "react";
import { Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
      <div className="px-6 lg:px-[5vw] py-10 lg:py-[4vw]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-[5vw]">
          <div>
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <img
                className="h-8 lg:h-[4vw] w-auto"
                src="logo.png"
                alt="H4K HEXA 4K Logo"
              />
              <span className="ml-3 font-display text-[20px] lg:text-xl font-bold text-gray-800 dark:text-white">
              HEXA 4K
              </span>
            </a>
            <p className="mt-4 text-[14px] lg:text-sm text-gray-500 dark:text-gray-400">
              © 2024 H4K HEXA. All rights reserved.
            </p>
          </div>
          <div>
            <h3 className="text-[14px] lg:text-sm font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 lg:space-y-[1vw]">
              <li>
                <a
                  href="/"
                  className="text-[14px] lg:text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-[14px] lg:text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="text-[14px] lg:text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[14px] lg:text-sm font-semibold text-gray-900 dark:text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-2 lg:space-y-[1vw]">
              <li>
                <a
                  href="#"
                  className="text-[14px] lg:text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[14px] lg:text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[14px] lg:text-sm font-semibold text-gray-900 dark:text-white">
              Follow Us
            </h3>
            <div className="flex mt-4 space-x-4 lg:space-x-[1vw]">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5 lg:h-[2vw] lg:w-[2vw]" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5 lg:h-[2vw] lg:w-[2vw]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
