"use client";

import Link from "next/link";
import React from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

const NavigationBar = () => {
  gsap.registerPlugin(ScrollToPlugin);

  const scrollToSection = (sectionId) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: sectionId },
      ease: "power2.inOut",
    });
  };

  const navItems = [
    {
      name: "Home",
      link: "#",
      onClick: () => scrollToSection("#header"),
    },
    {
      name: "About",
      link: "#",
      onClick: () => scrollToSection("#aboutme"),
    },
    {
      name: "Skills",
      link: "#",
      onClick: () => scrollToSection("#iknow"),
    },
    {
      name: "Experience",
      link: "#",
      onClick: () => scrollToSection("#workexperience"),
    },
    {
      name: "Works",
      link: "#",
      onClick: () => scrollToSection("#myprojects_wrapper"),
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex justify-center items-center">
      <div className="relative w-full">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <NavbarButton 
              variant="outline"
              onClick={() => scrollToSection("#contactme_wrapper")}
            >
              Contact
            </NavbarButton>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <button
                  key={`mobile-link-${idx}`}
                  onClick={() => {
                    item.onClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="relative text-neutral-600 hover:text-black transition-colors duration-200"
                >
                  <span className="block">{item.name}</span>
                </button>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => {
                    scrollToSection("#contactme_wrapper");
                    setIsMobileMenuOpen(false);
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Contact
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
    </header>
  );
};

export default NavigationBar;
