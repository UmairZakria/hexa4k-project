import React from 'react';

const movies = [
    {
        title: 'War of the Worlds',
        genre: 'Sci-Fi',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhC4qvygUgxSKXeXy_NuVOhIK8QeDiR5m4qo3XUZB3ZLzpZ7ZQu0v0xzFgW0pjsN9QRbiF487zQVTAv4kSlH2DC16Kvo_WK6xewy_nC3aiMss65tZYM1Pzg-wQ0UcCJi6N8DVNP2OmpVZJf_upnMtqBgMkHSvmvrgdUsdYLDCjlmRi2MAn2gfzC1ZWM3mhjS2P6w-F4FBy06V04BoWCWFcYZwW8R8DqZLMW1yyaAGSLJrpkVAd0nChSRCrhArE7p-_vgzZCAzelIc',
    },
    {
        title: 'Altered Carbon',
        genre: 'Cyberpunk',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-rxn0iFZmPx7P83fqic3qjF1PQbUdcyK02gFzwks0n_iWibraz_gNUqi3tPFYZvNRzrKYH1bjWYynaZUwrMUujETRPZDyHtv7B6nAo0FolcWONMnA1pDE8Wfsxj5O-tTWebTmgIFOaS0HanRD3xUdu3E5QH9_ADVmwIN8r0NZQCSvK70ddWKJLU0HVSxa7T2DUB871mbROkQJeUPGwBZVavACQ_Wxwy11Y2ecv2l3X-YGiliDQuyNttshrgQhoTMcdckNQZKD6T8',
    },
    {
        title: 'Wicked',
        genre: 'Fantasy',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_ZP_YaUaPXhUUpeCoriNPdYwx87Fsw-YnPa1rGaGtfwomJNy_s9s0mAmY4Q7sMcr5jWmJXPpAaV5hq7IPNo-3u-xQm0RGGBvTB4pLGJV2CjH54cJLroXOOplxrNQFvuRGSsNnn1nLg2Txae3nuUsRDT2aFRQ0wvqXtMCP54jTDXFcCMXI2bgiNrB0DE9_kCC4AIUtUt_MYT_m15VrVGjrGsfBIkVY6imGKliLxLAVrp2y5cYevU3IJCeDROQv-YX0HGVvquF6qFY',
    },
    {
        title: 'Romance in Paris',
        genre: 'Rom-Com',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ8I3YfEQlfmc0hloSVjGUkZRIVbMB6FW9hBKuivHSESf5zITxaldLgym_7FqkDkdd_fZcD-DYghUgrWV2ZAtqBezOsmwLezegW9YXWhGxYR0qT0HLj6AJCeb0Tl4EFIIhcspM4KbhkB4wffi_IBCoIVHgD11iKg529Q2hh57hhvfnOEjgXtJhfr-EuZy6XStZGYFYHACibISariwo1RGcI3OFR6GNser2CoBjOIdsKv-a3Mb1prxhG_zYg9QVJsH0aVD85GyOlv8',
    },
    {
        title: 'Galaxy Quest',
        genre: 'Sci-Fi Comedy',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVlh4COIuil9kR00kslg0zBKI-I0MiXg9Ucw96_oD3qzi-E9TVFOUMoPlwKgxkxJePp0EAoDeu17tDQXj5XG89hX0ykbLnBUYd8itiRA5PHX3I7GlwW-qKZEP9PZYFwxFfkHJyydT8g0lLD1l8424KKyAQgdqjuyCwjZe3iLCoPPPLcgv4tH3xVku0SM7d9f1iLX7TKIg9YkmmmlU48aZNmHkLtuj6rfumO_17Qz2RLvHN_fROuPDYPHNNmVoCTeo0ADO0RJNFeW8',
    },
    {
        title: 'The Last Kingdom',
        genre: 'Historical Drama',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQCF1F_egC87rB07QbpTtCMOQc86EvSG0jteVwH8MT-_zX-kLs32czggd5bAkZ0o01Ff0Bse6AM3G1pnnosL9VLoPOsvDJJvlCeCDow-6bo2xPsWONLctFaAUp3gpkKGn47MvA3nLhOcvjrEc3ebgZPCEO3Mus-7NrBalnOBTeNR8IWxIwlSFgSV2AiQmUNtdiUyVHkAc5dbUSVLK3iM1iTcwvcunoxF3PI3bxGET-WxqZhtTWB_8Js2li11O3Xw18Ot-tbIZ2rvM',
        className: 'hidden md:block',
    },
    {
        title: 'Cosmic Odyssey',
        genre: 'Space Opera',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvxQdNPEhOIfgO5ZjnjDT3sU5HeFIFE0HR_6KG6TqJOpM-5CgHnqDc6zIPB6NjlKFQ7j8f3g9P8_9U6z4z6ke5b1PxquYGFECfyhzwjqsl59H7uTYFppctvFaFVbZt5GqpZ7XVzSoJXFrwhoVlAIsE_aRXhGbkNVJOXoO7PsPSvA42ExfSlHlTwP3sdqpc62b0oZzUVHkv5gY9cERPCvZ4D7BXkRd5HdFRYXmN_lzUBM5cx4JettHMJFqLJQbILN3c6n-bz9LO7-E',
        className: 'hidden lg:block',
    },
];

export default function ContentShowcase() {
    return (
        <section className="py-24 sm:py-32 relative overflow-hidden">
            <div aria-hidden="true" className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-background-light dark:bg-background-dark"></div>
                <div className="absolute inset-0 bg-black/10 dark:bg-black/30 backdrop-blur-xl"></div>
            </div>
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
                    <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Endless Entertainment, Instantly</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
                        Dive into our massive library featuring the latest movies, binge-worthy TV shows, and live channels from around the globe.
                    </p>
                </div>
                <div className="mt-16">
                    <div className="flex flex-nowrap gap-4 pb-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
                        {movies.map((movie, index) => (
                            <div key={index} className={`relative flex-shrink-0 w-1/3 md:w-1/4 lg:w-1/5 group ${movie.className || ''}`}>
                                <div className="aspect-[2/3] overflow-hidden rounded-lg">
                                    <img
                                        alt={`${movie.title} movie poster`}
                                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                        src={movie.image}
                                    />
                                </div>
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10"></div>
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h3 className="text-base font-semibold text-white">{movie.title}</h3>
                                    <p className="text-xs text-gray-300 mt-1">{movie.genre}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
