"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Button } from "../ui/loading-button";
import { ProgressBarLink } from "./progress-bar";
import { logOut } from "@/actions/auth";

export default function Header({ children }: { children?: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full container-x py-4 md:py-3 fixed top-0 bg-background z-10 border-b">
      <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <Link href="/" className=" text-base font-semibold">
            {siteConfig.name}
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4 items-center">
          <ProgressBarLink
            href="/"
            className=" hover:text-primary transition-colors"
          >
            Home
          </ProgressBarLink>
          <ProgressBarLink
            href="/blood-bank"
            className=" hover:text-primary transition-colors"
          >
            Blood Bank
          </ProgressBarLink>
          {children}
        </nav>

        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 py-6">
            <Link
              href="/"
              className="hover:text-accent-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blood-bank"
              className="hover:text-accent-foreground transition-colors"
            >
              Blood Bank
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
