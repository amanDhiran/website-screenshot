"use client";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Menu } from "lucide-react";
export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex py-4 max-w-6xl m-auto justify-between">
      <div>LOGO</div>
      <div className="flex items-center gap-2">
        {/* <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun className="h-6 w-6" />
          ) : (
            <Moon className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button> */}
        <div>
          <Menu className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
