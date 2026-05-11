"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/#intro" },
  { label: "Interests", href: "/#sidestep" },
  { label: "Experience", href: "/#skills-experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Certificates", href: "/#certificates" },
  { label: "Travels", href: "/travels" },
  { label: "Travel fund", href: "/travel-fund" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 z-[1000] w-full border-b border-[color:color-mix(in_srgb,var(--accent)_38%,transparent)] bg-[#101014]/90 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/#intro"
            className="shrink-0 text-xl font-bold leading-none tracking-widest text-[var(--accent)] sm:text-2xl"
          >
            PATRICK
          </Link>
          <div className="flex space-x-1 sm:space-x-4 text-xs sm:text-sm overflow-x-auto">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-icon px-2 sm:px-3 py-1 whitespace-nowrap text-[#e0e0e0] ${
                  pathname === "/travels" && link.href === "/travels"
                    ? "text-[var(--accent)]"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}