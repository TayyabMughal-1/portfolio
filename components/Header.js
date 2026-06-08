import { useEffect, useState } from "react";

const menu = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Results", href: "#analytics" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      let current = "#home";

      menu.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section && window.scrollY >= section.offsetTop - 170) {
          current = item.href;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <nav className="mx-auto max-w-4xl rounded-full bg-[#E0E5EC]/90 backdrop-blur-xl shadow-extruded px-3 py-3">
        <ul className="flex items-center justify-center gap-1 overflow-x-auto no-scrollbar">
          {menu.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`block whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-all ${
                  active === item.href
                    ? "bg-violet-500 text-white"
                    : "text-[#3D4852] hover:text-violet-500"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
