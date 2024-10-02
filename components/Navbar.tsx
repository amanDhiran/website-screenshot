"use client";
import { useState } from "react";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (

    <div className="flex pt-8 px-4 max-w-6xl m-auto justify-between">
      <h1 className="text-2xl font-extrabold text-primary">WEBSHOT</h1>
      <div>
        <a href="#features" className="hover:text-primary text-lg font-medium">Features</a>
      </div>
    </div>
  );
}
