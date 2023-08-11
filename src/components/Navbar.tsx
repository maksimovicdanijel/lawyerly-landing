import { useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

import { Logo } from "./Logo";
import { useWindowScroll } from "@uidotdev/usehooks";
import { Container } from "./ui/container";

const navbarLinks = [
  { label: "Početna", href: "#home", ariaLabel: "Početna" },
  { label: "Funkcionalnosti", href: "#features", ariaLabel: "Funkcionalnosti" },
  { label: "Paketi", href: "#pricing", ariaLabel: "Paketi" },
  {
    label: "Najčešća pitanja",
    href: "#najcesca-pitanja",
    ariaLabel: "Najčešća pitanja",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state] = useWindowScroll();

  return (
    <nav
      className={`w-full h-20 flex flex-col justify-center items-center fixed z-40 transition-colors ${
        state.y > 100 ? "bg-white shadow-sm" : ""
      }`}
    >
      <Container className="flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a className="navbar-link" href="#home" aria-label="Home">
            <div className="flex justify-start items-center grow basis-0">
              <div className="mr-2 text-6xl">
                <Logo />
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pl-12 pb-2">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="navbar-link"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <div
          className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 "></div>
        </div>
      </Container>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-white z-50 w-full 
        items-center gap-10 pb-10 border-y shadow pt-10
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="navbar-link"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
