import React, { useState, useRef, useEffect } from "react";

const ImageGallery = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbsRef = useRef(null);
  const scrollAmount = 100; // Pixels to scroll
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Track scroll position to show/hide buttons
  useEffect(() => {
    const container = thumbsRef.current;
    if (container) {
      const checkScroll = () => {
        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(
          container.scrollLeft < container.scrollWidth - container.clientWidth
        );
      };

      // Initial check
      checkScroll();

      // Add event listener
      container.addEventListener("scroll", checkScroll);

      // Cleanup
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, [images]);

  const scrollThumbs = (direction) => {
    if (thumbsRef.current) {
      if (direction === "left") {
        thumbsRef.current.scrollLeft -= scrollAmount;
      } else {
        thumbsRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
      {/* Main Image (Top) */}
      <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
        {images.length > 0 ? (
          <img
            src={images[activeIndex]}
            alt={`Product view ${activeIndex + 1}`}
            className="w-full h-full max-h-[500px] object-contain mx-auto"
          />
        ) : (
          <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">No images available</span>
          </div>
        )}
      </div>

      {/* Thumbnail Navigation (Bottom) */}
      {images.length > 1 && (
        <div className="relative">
          {/* Left Scroll Button - Only shown when can scroll left */}
          {canScrollLeft && (
            <button
              onClick={() => scrollThumbs("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-white shadow-md hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}

          {/* Thumbnails with horizontal scroll */}
          <div
            ref={thumbsRef}
            className="flex gap-2 overflow-x-auto py-2 px-8 scrollbar-hide snap-x scroll-smooth"
          >
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`flex-shrink-0 w-16 h-16 border-2 rounded-md overflow-hidden transition-all snap-center ${
                  activeIndex === idx
                    ? "border-blue-500 ring-2 ring-blue-200"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          {/* Right Scroll Button - Only shown when can scroll right */}
          {canScrollRight && (
            <button
              onClick={() => scrollThumbs("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-white shadow-md hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
