import React from 'react';
import Marquee from 'react-fast-marquee';

const Slider2 = () => {
    // Your provided image data array
    const data = [
        'S1.jpg',
        'S3.jpg',
        'S4.jpg',
        'S7.jpg',
        'S2.jpg',
        'S5.jpg',
        'S6.jpg',
        'S8.jpg'
    ];

    // Configuration for the image size to maintain responsiveness (using vw)
    // Image width: 15vw (adjust as needed)
    const imageWidthVW = '33vw';

    // The image height will be set to 'auto' to maintain aspect ratio

    // --- Component to render a single image ---
const ImageComponent = ({ src }) => (
    // 💎 Simple, Attractive, and Professional Look
    // This design uses a clear white border/background and a powerful shadow
    // to give the image a lifted, clean card aesthetic.
    <div 
        // We use 'p-1' and 'bg-white' to simulate a clean card frame around the image.
        // shadow-2xl for maximum depth effect.
        className="flex-shrink-0 p-[1vw] w-[350px] md:w-[33vw] shadow-primary/70   dark:shadow-primary/50 bg-background-dark  backdrop-blur-xs rounded-xl md:shadow-2xl shadow-md 
                   transition duration-500 ease-in-out hover:scale-[1.03]" 
        // style={{ width: imageWidthVW }}
    >
        {/* The inner image fits neatly inside the card frame */}
        <img 
            src={src} 
            alt={`Slide image ${src}`} 
            // h-[16vw] maintains uniformity
            // object-cover ensures no stretching
            className="w-full h-[250px] md:h-[16vw] object-cover  rounded-md cursor-pointer" 
            loading="lazy" 
        />
    </div>
);
    // ------------------------------------------

    return (
        // The container uses flex-col to stack the marquees vertically and centers the content
        <div className=' relative  flex flex-col justify-center items-center h-auto py-[2vw] w-full      overflow-hidden'>
            <div className='absolute top-0 -left-10 bg-linear-to-r from-transparent dark:from-black via-gray-50/0 blur-2xl dark:via-black/70 to-transparent dark:w-[25vw] w-[20vw] z-[100] h-full '></div>
            {/* <div className='absolute top-0 right-0 bg-linear-to-l blur-3xl from-gray-50 dark:from-black via-gray-50/60 dark:via-black/70 to-transparent w-[15vw] z-[100] h-full '></div> */}
            {/* <div className='absolute top-0 right-0 bg-linear-to-l from-black/50 to-transparent w-[20vw] h-full '></div> */}
         

            {/* --- TOP MARQUEE: GOING LEFT --- 
              - Speed and gradient are configured for a smooth, continuous loop.
              - The margin-bottom separates the two sliders.
            */}
            <div className="w-full   ">
                <Marquee 
                    direction="right" 
                    pauseOnHover="true"
                    speed={25} 
                    // gradient={true} 
                    // gradientColor={[249, 250, 251]} // Matches bg-gray-50
                    // gradientWidth={100} // Width of the fade effect
                >
                    {data.map((src, index) => (
                        <div key={`top-${index}`} className="mx-[1vw] my-[4vw]">
                            <ImageComponent src={src} />
                        </div>
                    ))}
                </Marquee>
            </div>

            {/* --- BOTTOM MARQUEE: GOING RIGHT --- 
              - Direction is set to 'right' to create the opposite-flow effect.
              - Slightly faster speed for visual interest.
            */}
            
        </div>
    );
}

export default Slider2;