import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex pt-8 px-4 max-w-6xl m-auto justify-between">
      <Link href="/" >
      <h1 className="text-2xl font-extrabold text-primary">WEBSHOT</h1>
      </Link>
      <div>
        <a
          href="#features"
          className="hover:text-primary text-black/80 transition-colors text-lg font-medium"
        >
          Features
        </a>
      </div>
    </div>
  );
}
