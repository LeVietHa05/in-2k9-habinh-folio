import Image from "next/image";
import Link from "next/link";
import NavBar from "./Nav";

export default function Header({
  text1,
  text2,
}: {
  text1?: string;
  text2: string;
}) {
  return (
    <header className="flex h-screen h-[100svh] flex-col overflow-hidden pb-3 text-white">
      <section
        className="relative isolate flex min-h-0 flex-1"
        aria-label="Portfolio introduction"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            className="object-cover object-center"
            src="/bg.png"
            fill
            priority
            sizes="100vw"
            alt=""
          />
        </div>
        <NavBar />
        <div className="absolute inset-[20%_4%_5%_2%] flex flex-col justify-between max-sm:inset-x-[4%]">
          {text1 && (
            <h1 className="m-0 font-[family-name:var(--font-Instru)] text-[clamp(4rem,12vw,10rem)] leading-[0.9] max-sm:text-[clamp(4rem,18vw,7rem)]">
              {text1}
            </h1>
          )}
          <h2 className="m-0 max-w-full self-end text-right font-[family-name:var(--font-Instru)] text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.9] max-sm:text-[clamp(3.5rem,14vw,5rem)]">
            {text2}
          </h2>
        </div>
      </section>

      {/* Menu "About me | Writing | Art" thay cho dòng chữ chạy */}
      <nav
        className="flex h-[52px] shrink-0 items-center justify-center gap-10 border-b border-[#10234a] bg-white px-4 text-[#10234a] md:gap-20"
        aria-label="Section menu"
      >
        <Link
          href="/"
          className="font-[family-name:var(--font-Instru)] text-[1.45rem] leading-none transition-transform hover:scale-105 hover:underline"
        >
          About me
        </Link>
        <Link
          href="/writing"
          className="font-[family-name:var(--font-Instru)] text-[1.45rem] leading-none transition-transform hover:scale-105 hover:underline"
        >
          Writing
        </Link>
        <Link
          href="/art"
          className="font-[family-name:var(--font-Instru)] text-[1.45rem] leading-none transition-transform hover:scale-105 hover:underline"
        >
          Art
        </Link>
      </nav>
    </header>
  );
}