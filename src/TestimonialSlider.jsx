import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    text: "Easy to use and saved me so much time! Highly recommended.",
  },
  {
    name: "Priya Sharma",
    text: "CA assisted filing was super smooth and helpful.",
  },
  {
    name: "Amit Verma",
    text: "Great support team! They answered all my tax queries instantly.",
  },
  {
    name: "Neha Gupta",
    text: "User-friendly and affordable. I filed my ITR in just minutes.",
  },
];

export default function TestimonialSlider() {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const autoScroll = setInterval(() => {
      if (!isHovered) {
        const nextIndex = (index + 1) % testimonials.length;
        setIndex(nextIndex);
        container.scrollTo({
          left: nextIndex * container.offsetWidth,
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(autoScroll);
  }, [index, isHovered]);

  const handleDotClick = (i) => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: i * container.offsetWidth,
        behavior: "smooth",
      });
      setIndex(i);
    }
  };

  return (
    <section
      className="bg-green-50 py-16 text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-10">What Our Users Say</h2>

      {/* Scrollable Testimonials */}
      <div
        ref={containerRef}
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory w-full max-w-4xl mx-auto flex"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        onScroll={(e) => {
          const newIndex = Math.round(
            e.target.scrollLeft / e.target.offsetWidth
          );
          setIndex(newIndex);
        }}
      >
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-full px-6 md:px-12 py-6"
          >
            <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
              <p className="text-gray-700 text-lg mb-4 italic">“{item.text}”</p>
              <h4 className="text-lg font-semibold text-gray-800">– {item.name}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-green-600 w-4" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
