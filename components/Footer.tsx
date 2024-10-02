import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <div className="my-3 pt-4 border-t">
      <div className="max-w-6xl flex px-6 lg:px-0  gap-2 items-center text-sm justify-center font-medium m-auto">
        <p className="">Created by</p>
        <a
          href="http://github.com/amanDhiran"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground"
        >
            <p className="text-muted-foreground hover:text-primary transition-colors">
            @amanDhiran
            </p>
        </a>
      </div>
    </div>
  );
}
