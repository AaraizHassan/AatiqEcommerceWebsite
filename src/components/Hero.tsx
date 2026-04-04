// import React from 'react';
// import Image from 'next/image';
// import { heroDetails } from '@/data/hero';

// const Hero: React.FC = () => {
//     return (
//         <section
//             id="hero"
//             className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] pt-24 overflow-hidden"
//         >
//             {/* Background Image */}
//             <Image
//                 src={heroDetails.centerImageSrc}
//                 fill
//                 priority
//                 quality={100}
//                 unoptimized
//                 alt="Antique Hero"
//                 className="object-cover"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/20"></div>
//         </section>
//     );
// };

// export default Hero;

'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { heroDetails } from '@/data/hero';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const Hero: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = heroDetails.images;

    // Auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000); // change every 4 sec

        return () => clearInterval(interval);
    }, [images.length]);

    // Manual controls
    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <section
            id="hero"
            className="relative w-full h-[500px] md:h-[650px] lg:h-[650px] pt-20 overflow-hidden"
        >
            {/* Image Slider */}
            {images.map((img, index) => (
                <Image
                    key={index}
                    src={img}
                    fill
                    priority={index === 0}
                    quality={100}
                    alt="Hero Image"
                    className={`object-cover absolute inset-0 transition-opacity duration-1500 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full transition"
            >
                <HiChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full transition"
            >
                <HiChevronRight className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition ${
                            index === currentIndex
                                ? 'bg-white'
                                : 'bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;