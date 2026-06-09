import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/results", label: "Results" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 bg-[#E0E5EC]/80 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto bg-[#E0E5EC] rounded-[28px] px-5 py-4 flex items-center justify-center shadow-extruded relative">
        {/* Menu for large screens */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const active = router.pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-5 py-3 rounded-2xl text-sm font-bold transition ${
                  active
                    ? "bg-violet-500 text-white"
                    : "text-[#3D4852] hover:text-violet-500"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Hamburger button for mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-11 h-11 rounded-2xl shadow-insetDeep flex items-center justify-center text-violet-500 absolute right-5"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden max-w-7xl mx-auto mt-4 bg-[#E0E5EC] rounded-[28px] p-4 shadow-extruded">
          <div className="grid gap-2">
            {navItems.map((item) => {
              const active = router.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`px-5 py-4 rounded-2xl text-sm font-bold ${
                    active
                      ? "bg-violet-500 text-white"
                      : "text-[#3D4852] shadow-inset"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
