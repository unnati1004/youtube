import React, { useRef } from "react";
import { Button } from "./Button";

const ButtonList = () => {
  const list = [
    "All", "Mixes", "Rhythms", "Trending", "Live", "Sadhguru", "Travel", "React",
    "Interview", "Namaste", "Podcasts", "DataStructure", "Gaming", "Songs",
    "Soccer", "Cricket", "Soccer", "Cricket", "Soccer", "Cricket"
  ];

  // Reference to the scrollable container
  const scrollContainerRef = useRef(null);

  // Function to scroll the container
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth / 2; // Scroll half the width of the container

      if (direction === "left") {
        scrollContainerRef.current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: "smooth",
        });
      } else if (direction === "right") {
        scrollContainerRef.current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="w-[88.5%] flex items-center fixed top-[5.2rem] left-[220px] right-0 bg-white z-10 p-2"
    // style={{  Width: "50%" }}
    >
      {/* Button to scroll left */}
      <button
        onClick={() => scroll("left")}
        className="p-2 bg-gray-200 rounded-l-md mr-2"
      >
        ◀
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-hidden no-scrollbar whitespace-nowrap"
        style={{ scrollBehavior: "smooth",maxWidth:"95%"}} // Ensure smooth scrolling
      >
        {list.map((name, index) => (
          <Button key={index} name={name} />
        ))}
      </div>

      {/* Button to scroll right */}
      <button
        onClick={() => scroll("right")}
        className="p-2 bg-gray-200 rounded-r-md ml-2"
      >
        ▶
      </button>
    </div>
  );
};

export default ButtonList;