"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const data = [
  { text: "About Me", link: "/" },
  { text: "Writing", link: "/writing" },
  { text: "Art", link: "/art" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="relative z-10 w-full flex items-start justify-between gap-4 px-[clamp(8px,1.5vw,20px)] py-3 max-sm:gap-2 max-sm:px-2">
      <Link
        className="min-w-[min(190px,34%)] rounded-full border border-white/75 px-6 py-[5px] text-center font-[family-name:var(--font-Instru)] text-2xl leading-[1.1] text-inherit no-underline max-sm:min-w-0 max-sm:px-2.5 max-sm:text-[0.9rem]"
        href="/"
      >
        Hà Bình Portfolio
      </Link>
      <nav
        className="flex justify-between gap-[clamp(10px,7vw,100px)] rounded-full border border-white/75 px-[clamp(10px,2vw,24px)] py-[3px] max-sm:gap-[clamp(10px,4vw,24px)]"
        aria-label="Main navigation"
      >
        {data.map((item) => {
          const isActive =
            pathname === item.link ||
            (item.link !== "/" && pathname.startsWith(`${item.link}/`));

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={`font-[family-name:var(--font-Instru)] text-2xl leading-[1.1] text-inherit no-underline transition-opacity hover:opacity-70 max-sm:text-[0.95rem] ${
                isActive ? "underline underline-offset-4" : ""
              }`}
              href={item.link}
              key={item.link}
            >
              {item.text}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
