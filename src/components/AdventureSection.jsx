// TimelineComponent.jsx

import React from "react";

// 1. Define the data structure for the timeline items
const timelineData = [
  {
    text: "Stream thousands of live TV channels worldwide with H4K Hexa.",
    image: "image-left",
    position: "right",
  },
  {
    text: "Enjoy HD quality movies, sports, and entertainment at your fingertips.",
    image: "image-left",
    position: "right",
  },
  {
    text: "Access premium international content with a simple subscription.",
    image: "image-right",
    position: "left",
  },
  {
    text: "Compatible with Smart TVs, Android, iOS, and Firestick devices.",
    image: "none",
    position: "left",
  },
  {
    text: "Experience seamless streaming with H4K Hexa reliable IPTV service.",
    image: "none",
    position: "right",
  },
];

// Helper component for the image cards to mimic the stacked/overlapping effect
const ImageCard = ({ src, alt, className }) => (
  <div
    className={`
      ${className}
      absolute   shadow-lg  rounded-xl lg:rounded-[1vw] overflow-hidden 
      transition-all duration-300 hover:scale-[1.02] cursor-pointer
    `}
  >
    {/* Placeholder for the image. In a real app, you'd use a proper image tag */}
    {/* <div className="w-full h-full "> */}
    {/* Actual image content goes here. We use a div to mimic the placeholder images */}
    <img
      src={src}
      className="w-full    h-full object-cover object-center "
      alt={alt}
    />
    {/* </div> */}
  </div>
);

// Helper component to render a single timeline item
const TimelineItem = ({ item, index }) => {
  const isLeft = item.position === "left";
  const isFirstLeft = index === 2; // For the first group of left-side images
  const isSecondRight = index === 1; // For the second group of right-side images

  // Generate placeholder image URLs (replace these with your actual image paths)
  const getImageUrl = (key) => {
    switch (key) {
      case "image-left": // Images associated with right-side text
        return "/logo-bg.jpg";
      case "image-right-primary": // Primary image for left-side text (top)
        return "/f1.jpg";
      case "image-right-secondary": // Secondary/overlapping image for left-side text (bottom)
        return "https://www.indiewire.com/wp-content/uploads/2017/07/avatar-4.jpg";
      case "image-bottom-right-primary": // Primary image for right-side text (top)
        return "https://tva.onscreenasia.com/wp-content/uploads/2022/05/DP_6282658_Venom_LetThereBeCarnage_CoverArt_3840x2160_US_2000x1125_thumbnail-min.jpg";
      case "image-bottom-right-secondary": // Secondary image for right-side text (bottom)
        return "https://cdn.mos.cms.futurecdn.net/Wz22N7QyT9Bn2qN9vx8FFX-2000-80.jpg";
      case "image-top-right": // Image for the very top item (index 0)
        return "";
      default:
        return null;
    }
  };

  // --- Image Rendering Logic (Mimicking the complex original layout) ---
  const renderImages = () => {
    if (isFirstLeft) {
      // Images for "Immerse yourself..." block
      return (
        <div className="relative w-full h-full  -translate-y-[100%] -translate-x-[22vw] left-0 top-0">
          <ImageCard
            src={getImageUrl("image-right-primary")}
            alt="Mountains"
            className="w-48 h-36 md:w-[24vw] md:h-[16vw]  dark:bg-background-light -translate-y-[99%] -translate-x-1/2 left-[33vw] top-0 z-10"
          />
          <ImageCard
            src={getImageUrl("image-right-secondary")}
            alt="Sheep field"
            className="w-32 h-24  md:w-[25vw] md:h-[16vw]   -translate-y-1/2 -translate-x-1/3  left-[8vw] top-[-25%] z-0"
          />
        </div>
      );
    }

    if (isSecondRight) {
      // Images for "Explore breathtaking..." block
      return (
        <div className="relative w-full h-full   translate-x-[22vw] right-0 top-[40%] ">
          <ImageCard
            src={getImageUrl("image-bottom-right-primary")}
            alt="Green forest"
            className="w-48 h-36  md:w-[24vw] md:h-[16vw] translate-y-1/2 translate-x-1/2 right-[33vw]  top-[70%] z-10"
          />
          <ImageCard
            src={getImageUrl("image-bottom-right-secondary")}
            alt="Misty landscape"
            className="w-32 h-24  md:w-[22vw] md:h-[16vw] translate-y-[100%]  translate-x-1/2 right-[14vw] top-[40%] z-0"
          />
        </div>
      );
    }

    if (isLeft) {
      return (
        <div className="relative w-full h-full    translate-x-1/2 left-0 top-[40%] ">
          <ImageCard
            src={getImageUrl("image-left")}
            alt="Green forest"
            className="w-48 h-36  md:w-[18vw] md:h-[14vw] translate-y-1/2 translate-x-1/2 left-[-29vw]  top-[40%] z-10"
          />
        </div>
      );
    }

    // Default: No complex images for other items
    return null;
  };
  // ----------------------------------------------------------------------

  return (
    <div className="relative  ">
      {/* Container for content and line/dot */}
      <div
        className={`flex items-center w-full  min-h-[150px] md:min-h-[10vw]   ${
          isLeft ? "justify-start" : "justify-end"
        }`}
      >
        {/* Timeline Dot */}
        <div className="absolute left-1/2 transform md:block  -translate-x-1/2 z-20">
          <div className="size-3 lg:size-[0.8vw] bg-gray-600 rounded-full border-2 border-white shadow-md"></div>
        </div>

        {/* Content Box (Text) */}
        <div
          className={`
          max-w-[calc(50%-0.1vw)]    p-4 lg:p-[1vw] text-sm font-poppins text-[16px] md:text-xl
          ${
            isLeft
              ? "text-right pr- md:pr-[3vw]"
              : "text-left pl md:pl-[3vw]"
          }
          text-gray-700 dark:text-white
        `}
        >
          {item.text}
        </div>
      </div>

      {/* Complex Image Overlays: Positioned absolutely relative to the main component */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        {renderImages()}
      </div>
    </div>
  );
};

// Main Component
const TimelineComponent = () => {
  return (
    <div className="py-12 px-4 relative md:py-[10vw] md:px-[5vw] bg-background-light dark:bg-background-dark font-poppins">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 left-0  z-10 transform-gpu overflow-hidden blur-[24px] md:blur-[4vw] sm:-top-[10vw]"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[110deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(70%)] sm:w-[65vw]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] z-10 transform-gpu overflow-hidden blur-[24px] md:blur-[4vw] sm:top-[calc(50%)]"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[70vw]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="relative w-full lg:w-[50vw] space-y-16 lg:space-y-[5vw]  mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 md:block    w-1 lg:w-[0.2vw] bg-gray-400 h-full transform -translate-x-1/2 z-10"></div>

        {/* Map through the data to render items */}
        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TimelineComponent;
