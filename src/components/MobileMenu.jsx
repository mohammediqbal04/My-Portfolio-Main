// MobileMenu.jsx
import React from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed md:hidden top-0 left-0 w-full h-screen z-40 flex flex-col items-center justify-center
                  transition-all duration-300 ease-in-out 
                  backdrop-blur-md bg-black/60 
                  ${
                    menuOpen
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }
                `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {["About", "Skills", "Projects", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                      ${
                        menuOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }`}
        >
          {item}
        </a>
      ))}
    </div>
  );
};
