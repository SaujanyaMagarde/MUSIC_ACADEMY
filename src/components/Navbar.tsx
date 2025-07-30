"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link"

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-2 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="#">
        <MenuItem setActive={setActive} active={active} item="HOME">
        </MenuItem>
        </Link>
          <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="courses">Web Development</HoveredLink>
              <HoveredLink href="courses">Interface Design</HoveredLink>
              <HoveredLink href="courses">Search Engine Optimization</HoveredLink>
              <HoveredLink href="courses">Branding</HoveredLink>
            </div>
          </MenuItem>
        <Link href="contact">
        <MenuItem setActive={setActive} active={active} item="Contact Us">
        </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar