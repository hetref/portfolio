"use client";

// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   SignUpButton,
//   useAuth,
//   UserButton,
// } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
// import Container from "./Container";
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
import { ShoppingBag } from "lucide-react";
// import { Button } from "./ui/button";

const NavigationBar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Skills",
      link: "/products",
    },
    {
      name: "Experience",
      link: "/contact",
    },
    {
      name: "Works",
      link: "/works",
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //   const { isSignedIn } = useAuth();

  return (
    <header className="flex justify-center items-center">
      {/* <Container> */}
      <div className="relative w-full">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            {/* <div className="flex items-center gap-4"> */}
            {/* <NavbarButton variant="outline">Contact</NavbarButton> */}
            {/* <Link href="/cart">
                  <NavbarButton variant="ghost" className="cursor-pointer hover:text-primary">
                    <ShoppingBag />
                  </NavbarButton>
                </Link> */}
            {/* <SignedOut>
                  <SignInButton>
                    
                  </SignInButton>
                  <SignUpButton>
                    <NavbarButton variant="primary">Sign Up</NavbarButton>
                  </SignUpButton>
                </SignedOut> */}
            {/* <SignedIn>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: {
                          width: "3rem",
                          height: "3rem",
                        },
                      },
                    }}
                  />
                </SignedIn> */}
            {/* </div> */}
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
                <Link
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600"
                >
                  <span className="block">{item.name}</span>
                </Link>
              ))}
              <div className="flex w-full flex-col gap-4">
                {/* <SignedOut>
                    <SignInButton>
                      <NavbarButton
                        onClick={() => setIsMobileMenuOpen(false)}
                        variant="outline"
                        className="w-full"
                      >
                        LogIn
                      </NavbarButton>
                    </SignInButton>
                    <SignUpButton>
                      <NavbarButton
                        onClick={() => setIsMobileMenuOpen(false)}
                        variant="primary"
                        className="w-full"
                      >
                        SignUp
                      </NavbarButton>
                    </SignUpButton>
                  </SignedOut> */}
                {/* <SignedIn>
                    <Link href="/my-account">
                      <NavbarButton
                        onClick={() => setIsMobileMenuOpen(false)}
                        variant="primary"
                        className="w-full"
                      >
                        My Account
                      </NavbarButton>
                    </Link>
                  </SignedIn> */}
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
      {/* </Container> */}
    </header>
  );
};

export default NavigationBar;
