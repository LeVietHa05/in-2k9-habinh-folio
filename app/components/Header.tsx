import Image from "next/image";
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
      <div
        className="h-[52px] shrink-0 overflow-hidden border-b border-[#10234a] bg-white text-[#10234a]"
        aria-label="Hà Bình Portfolio"
      >
        <div className="flex h-full w-max animate-ticker-scroll motion-reduce:animate-none">
          {[0, 1].map((group) => (
            <div
              className="flex h-full w-max shrink-0 items-center"
              aria-hidden={group === 1}
              key={group}
            >
              {Array.from({ length: 8 }, (_, index) => (
                <span
                  className="inline-flex items-center gap-5 whitespace-nowrap pr-5 font-[family-name:var(--font-Instru)] text-[1.45rem] leading-none"
                  key={index}
                >
                  Hà Bình Portfolio <span aria-hidden="true">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
