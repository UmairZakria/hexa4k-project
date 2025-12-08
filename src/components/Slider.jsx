import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Slider() {
  const [movies, setMovies] = useState([]);

  const API_KEY = import.meta.env.VITE_PUBLIC_TMDB_KEY;
  const IMG_BASE = "https://image.tmdb.org/t/p/w500";

  const discoverURL = (page = 1) => {
    const thisYear = new Date().getFullYear();
    return (
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}` +
      `&sort_by=popularity.desc` +
      `&include_adult=false&include_video=false` +
      `&region=US&with_original_language=en` +
      `&certification_country=US&certification.lte=PG-13` +
      `&primary_release_date.gte=${thisYear}-01-01` +
      `&page=${page}`
    );
  };

  useEffect(() => {
    async function fetchMovies() {
      if (!API_KEY) {
        console.warn("TMDB API Key missing");
        return;
      }
      try {
        const [res1, res2, res3] = await Promise.all([
          fetch(discoverURL(1)),
          fetch(discoverURL(2)),
          fetch(discoverURL(3)),
        ]);

        const data1 = await res1.json();
        const data2 = await res2.json();
        const data3 = await res3.json();

        const combined = [
          ...(data1.results || []),
          ...(data2.results || []),
          ...(data3.results || []),
        ];

        const safe = combined.filter(
          (m) => !m.adult && m.poster_path && (m.vote_count ?? 0) > 20
        );
        const unique = Array.from(new Map(safe.map((m) => [m.id, m])).values());

        setMovies(unique);
      } catch (e) {
        console.error("TMDb fetch failed:", e);
      }
    }
    fetchMovies();
  }, [API_KEY]);

  if (!movies.length) return null;

  // Duplicate movies array to ensure smooth infinite loop
  const duplicatedMovies = [...movies, ...movies, ...movies];

  return (
    <div className="py-12 mx-4 lg:mx-[5vw] relative z-0 border-none">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-20% dark:to-black to-primary-DEFAULT/30 blur-2xl z-10"></div>

      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div> */}

      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        speed={1000}
        slidesPerView={"auto"}
        loopAdditionSlides={5}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 120,
          modifier: 2,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="w-full py-10"
      >
        {duplicatedMovies.map((movie, index) => (
          <SwiperSlide key={`${movie.id}-${index}`} className="!w-auto">
            <div className="group relative w-[250px] sm:w-[300px] overflow-hidden rounded-2xl  transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-[2/3] w-full overflow-hidden">
                <img
                  src={`${IMG_BASE}${movie.poster_path}`}
                  alt={movie.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="font-poppins text-[18px] lg:text-lg font-xl line-clamp-1">
                    {movie.title}
                  </h3>
                  <p className="font-poppins text-[12px] lg:text-xs opacity-80">
                    {new Date(movie.release_date).getFullYear()}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
