import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ContentShowcase from "../components/ContentShowcase";
import Testimonials from "../components/Testimonials";
import AppDownload from "../components/AppDownload";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import SmoothScrollProvider from "../components/SmoothScrollProvider";
import { MoveRight, Stamp, Star } from "lucide-react";
import Stats from "../components/Stats";
import AdventureSection from "../components/AdventureSection";
import Slider2 from "../components/Slider2";

function Home() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    axios
      .get("https://hexa4k-server.vercel.app/api/content")
      .then((res) => setContent(res.data))
      .catch((err) => console.error("Failed to load content", err));
  }, []);

  return (
    <SmoothScrollProvider>
      <div className="bg-background-light dark:bg-background-dark font-poppins text-gray-700 dark:text-gray-300 antialiased min-h-screen">
        <div className="relative z-[9999] overflow-hidden">
          <Navbar />
          <main>
            <Hero content={content?.hero} />
            <Slider2 />
            <AppDownload links={content?.downloads} />

            <h1 className="text-[24px] font-comfortaa lg:text-4xl text-black dark:text-white mt-[5vw] font-bold text-center">
              Unlimted Entertainment
            </h1>
            <Slider />
            <Features />

            <div
              className="bg-gray-100 dark:bg-[#9089fc]/80 saturate-200 mx-4 lg:mx-[5vw] rounded-lg p-6 lg:p-[1.8vw]  text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
                <span
                  className="text-gray-600 dark:text-white/65 text-[18px] md:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  Our customers say
                </span>

                <div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                >
                  <span className="text-[18px] md:text-2xl   font-medium dark:text-white">
                    Excellent
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 1.0 + i * 0.1 }}
                      >
                        <Star className="w-6 h-6 fill-[#F47820] text-[#F47820]" />
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                >
                  <span className="text-[18px] md:text-2xl font-semibold text-gray-900 dark:text-white">
                    4.9
                  </span>
                  <span className="text-gray-600 text-[18px] md:text-lg whitespace-nowrap dark:text-white/65">
                    out of 5 based on
                  </span>
                  <span className="font-bold text-[18px] md:text-lg text-gray-900 dark:text-white ">
                    +100 reviews
                  </span>
                </div>

                <div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
                  <Star className="w-6 h-6 fill-[#F47820] text-[#F47820]" />
                  <span className="font- text-[#F47820] text-[18px] lg:text-lg">
                    Trustpilot
                  </span>
                </div>
              </div>
            </div>
            <AdventureSection />

            <Stats></Stats>
            {/* <ContentShowcase /> */}
            <Testimonials />
          </main>
          <Footer />
        </div>
      </div>
    </SmoothScrollProvider>
  );
}

export default Home;
