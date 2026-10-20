import Header from "./components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header text1="Hà Bình" text2="Portfolio" />
      <main className="relative isolate overflow-hidden bg-[#f1f2f5] text-[#10234a]">
        <Image
          className="absolute inset-0 -z-10 object-cover object-center opacity-100 mix-blend-multiply"
          src="/bg1.png"
          fill
          sizes="100vw"
          alt=""
        />
        <section className="mx-auto grid  max-w-[1440px] grid-cols-[minmax(280px,0.8fr)_minmax(0,1.3fr)] items-center gap-5 px-[7vw] py-16 max-md:grid-cols-1 max-md:gap-8 max-md:px-6 max-md:py-12">
          <div className="relative aspect-[0.87] w-full overflow-hidden max-md:mx-auto max-md:aspect-[4/5] max-md:max-w-[460px]">
            <Image
              className="object-cover object-center"
              src="/about1.png"
              fill
              sizes="(max-width: 768px) 90vw, 35vw"
              priority
              alt="Hà Bình"
            />
          </div>
          <article className="flex min-h-[min(48vh,660px)] flex-col border-y-2 border-[#10234a] py-3 max-md:min-h-0">
            <h2 className="border-b-2 border-[#10234a] pb-3 font-[family-name:var(--font-Instru)] text-[clamp(3.5rem,7vw,6rem)] leading-none">
              About Me
            </h2>
            <div className="flex flex-1 flex-col justify-start gap-5 py-6 font-[family-name:var(--font-Instru)] text-lg leading-[1.35] md:text-xl">
              <p>
                My name is Ha Binh, and I am an English major student from Vo
                Nguyen Giap High School for the Gifted. This portfolio holds the
                artworks I cherish, snippets of daily life, and my favorite
                writing, many of them produced in bursts of inspiration.
              </p>
              <p>
                I love focusing on individual emotions, whether by adopting
                first-person perspectives in writing or diving into childhood
                memories. For me, the creative process requires a lot of
                preservation and a sprinkle of epiphanies, which I attempt to
                encourage through long countryside walks, afternoons at the
                nearby Village Center, and art workshops for local students. It
                is undoubtedly time-consuming and sometimes fruitless. 
              </p>
              <p>
                Regardless, I regularly document my experiences, seeking that
                “aha” moment. I hope you enjoy exploring this portfolio and, if
                the timing is right, find a few surprises. 
              </p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
