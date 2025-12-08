import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Jane D.",
    handle: "@janedoe",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDusonQu9J04hxS3gJRcDyf32IRQ83Jii6KCFmjxA3WVR8x495ux5rwBTw-Hxp_kAR_OuwN-5KVl5nnNxz4HCq5SUHDkjM67ve7Hf4rXQbTzT2am5K3cCWAjahlpqArlWNx7G2zB4J1MsupWSMhTYcHBgbWtkbXscVqE8jy42i2VgjbR41aT_wB_pdz7KIUXkZnOCO9vSRrI-d9hotTv9P-aCyRbhFsJDJ2V_-rfZ60_kuYROAFQC0nlVMvfzB7uX1nAQq3983S9rQ",
    content:
      "Absolutely love this service. The 4K quality is incredible, and the channel selection is massive. Haven't had any buffering issues at all. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael S.",
    handle: "@mikesmith",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBx3gbigQBCkcvm_cUBeyB3px3RrnVSo0e0v2UI9NGSwHN7o45EjuK_7Qqoiq9zgiS3-xNN0YUr6uYSE_8UsikvlL5rpFud97X6w4OiNoRE1WPUJzpo_JdRFDUjD13mjjttX5vJjYqIEgmgthaqURuoeTHrb1cAFtuMey2DzsHrV9G8DFZe0ocjC9HR6otvcu6LNzotOUOMTHgm8qqD86EK09eUjbBEN2nFCzePFpKm5xeCvo5gEuhNuynl7RutlrbcW7g0QGn76Y4",
    content:
      "Switched from cable and I'm never going back. The VOD library is insane and gets updated constantly. The setup was super easy on my smart TV.",
    rating: 4.5,
  },
  {
    name: "Carlos R.",
    handle: "@carlosr",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSZyh8G6swpiQrd2mThm_Jo1Tj8weBXO3rymhqcBMiEbG2E6QLSaFfxsmIMKDrIBuUOTZORq7hHJ77Ps2gS_qTldRJLkzQmqo4yxOpNz1yXgvQ77wlMtK6IfoPDwhzSIkRL3WiJ2sRRCLn8Xl-vU8wX0aNEt1ZITPhMixTtv2K89j9p8mh0mce4laFcMXqFv78pRvYf6sGHgBkxIt0cup7_uGvodZKBqV5Yu_Qr2Zp0wlstXL7LVsNtOsWN-WbAPDQzRgVsWkSOCQ",
    content:
      "Customer support is top-notch. Had a small issue with setup and they resolved it in minutes. The app is also very user-friendly. Great value for the price.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className=" px-6 lg:px-[5vw] py-24 sm:py-32">
      <div className="mx-auto w-full lg:w-[35vw] text-center lg:text-left">
        <h2 className="font-comfortaa text-[32px] lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          What Our Customers Say's
        </h2>
        <p className="mt-4 lg:mt-[1.3vw] text-[18px] lg:text-lg w-3/4 mx-auto lg:mx-0 text-gray-600 dark:text-gray-400">
          We're trusted by thousands of happy users worldwide. Here's what they
          think.
        </p>
      </div>
      <div className="mx-auto mt-10 lg:mt-[3vw] grid max-w-2xl grid-cols-1 gap-6 lg:gap-[2vw] lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg bg-white dark:bg-gray-800/20 shadow-lg ring-1 ring-gray-900/5 dark:ring-white/10 p-6 lg:p-[2.5vw]"
          >
            <div className="flex items-center gap-x-4">
              <img
                alt={`Avatar of ${review.name}`}
                className="h-16 w-16 lg:h-[4.5vw] lg:w-[4.5vw] rounded-full bg-gray-50"
                src={review.image}
              />
              <div>
                <div className="text-[20px] lg:text-xl font-semibold text-gray-900 dark:text-white">
                  {review.name}
                </div>
                <div className=" text-[16px] lg:text-base text-gray-600 dark:text-gray-400">
                  {review.handle}
                </div>
              </div>
            </div>
            <div className="mt-4 lg:mt-[1.4vw] text-[18px] lg:text-lg  text-gray-700 dark:text-gray-300">
              “{review.content}”
            </div>
            <div className="mt-2 lg:mt-[1vw] flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`size-6 lg:w-[1.5vw] lg:h-[1.5vw] ${
                    i < Math.floor(review.rating)
                      ? "fill-current"
                      : i < review.rating
                      ? "fill-current opacity-50"
                      : ""
                  }`}
                  strokeWidth={0} // Fill only for star effect
                  fill="currentColor"
                />
              ))}
              {/* Lucide stars are outlined by default, for filled we use fill prop. For half star it's tricky with standard icon sets, I will just use full stars for simplicity or complex logic, 
                 but for this prototype full stars is fine, or simple logic.  
                 Actually, the previous code had star_half. I'll just render full stars based on rating being >= i+1.
                 Let's stick to full stars for simplicity, or I can use a 'half' logic if I import StarHalf. Lucide has StarHalf.
               */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
