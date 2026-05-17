"use client";

import Link from "next/link";
import { useState } from "react";
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

const SaaSNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "All SaaS",
      link: "/saas",
    },
    {
      name: "Melme",
      link: "/saas/melme",
    },
    {
      name: "Wachat",
      link: "/saas/wachat",
    },
  ];

  return (
    <header className="flex items-center justify-center">
      <div className="relative w-full">
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <NavbarButton as={Link} href="/#contactme_wrapper" variant="outline">
              Contact
            </NavbarButton>
          </NavBody>

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
                <Link
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 transition-colors duration-200 hover:text-black"
                >
                  <span className="block">{item.name}</span>
                </Link>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  as={Link}
                  href="/#contactme_wrapper"
                  onClick={() => setIsMobileMenuOpen(false)}
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

export default SaaSNavbar;