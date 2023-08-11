import React from "react";
import { Container } from "./ui/container";
import { Logo } from "./Logo";

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

export const Footer: React.FC = () => {
  return (
    <Container className="mt-12 py-12 md:mt-20 md:py-20">
      <div className="flex justify-center">
        <div className="text-center">
          <Logo />

          <ul className="md:flex mt-10">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <li key={label} className="md:ml-10 md:mb-0 mb-6">
                <a
                  href={href}
                  aria-label={ariaLabel}
                  className="text-slate-600"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};
