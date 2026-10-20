"use client";

import Image from "next/image";
import { useState } from "react";

type Artwork = {
  src: string;
  title: string;
  year: string;
  size: string;
  medium: string;
  excerpt: string;
  description: string;
  special?: {
    title: string;
    text: string;
  };
};

type GallerySection = {
  title: string;
  artworks: Artwork[];
};

const sketches: Artwork[] = [
  {
    src: "/art-sketch-1.png",
    title: "Craftsmen in their element, fishes in impediment",
    year: " ",
    size: "21 × 29.7 cm",
    medium: "Fineliner on paper",
    excerpt: "",
    description:
      "Craftsmen in their element, fishes in impediment combines Vietnam’s traditional textile with the country’s developed aquaculture industry. Marine animals, inspired by Bruegel the Elder’s famous “Big Fish Eat Little Fish”, were depicted without much fanfare, with bloodied scales and lifeless eyes. ",
  },
  {
    src: "/art-sketch-2.png",
    title: "Worm’s paradise",
    year: " ",
    size: "21 × 29.7 cm",
    medium: "Fineliner on paper",
    excerpt: "",
    description:
      "Worm’s paradise reimagines the hidden life of fire ants. Inspired (or annoyed) by luckless instances of stepping on fire ant colonies, I returned to my papers, visualizing myself as a colony member. From a well at the entrance, a winding pool system, to countless rooms with bunk beds, people can carry out their day-to-day functions in the safety of worms’ world.",
  },
  {
    src: "/art-sketch-3.png",
    title: "The Inn",
    year: " ",
    size: "21 × 29.7 cm",
    medium: "Fineliner on paper",
    excerpt: "",
    description:
      "In the years before entering first grade, I frequently requested Pinocchio as a bedtime story. I loved The Red Lobster Inn aesthetic especially, and The Inn is my interpretation of a dream restaurant. In the crowded space, people's lives are intertwined yet separated: the lone customer and waitress interact with one another, while the open door reveals the hardships outside. ",
  },
  {
    src: "/art-sketch-4.png",
    title: "All the world’s knowledge",
    year: " ",
    size: "21 × 29.7 cm",
    medium: "Fineliner on paper",
    excerpt: "",
    description:
      "Could there be a modern, Vietnamese equivalent of the library of Alexandria? All the world’s knowledge attempts this Herculean goal, including books from many fields, mainly in English and Vietnamese. Although the work failed in representing the world's boundless knowledge, it encapsulates a tiny slice of that pie.",
  },
  {
    src: "/art-sketch-5.png",
    title: "Gifts",
    year: " ",
    size: "21 × 29.7 cm",
    medium: "Fineliner on paper",
    excerpt: "",
    description:
      "I was enamored by Rembrandt’s depiction of lace and captivated by historical European fashion, but still wanted my characters to have unrestricted movement in their heavy clothing, so I modified their garments to my liking in Gifts. On the table lies a copy of polymath Robert Hooke’s 1665 book, Micrographia, further setting the scene for this experimental piece. ",
  },
];

const multimedia: Artwork[] = [
  {
    src: "/art-media-1.png",
    title: "The Picnic",
    year: "2018",
    size: "40 x 40 cm",
    medium: "Acrylics on canvas",
    excerpt: "Part of the collection for “Origin“ exhibition (2019)",
    description:
      "The Picnic is the painting that started it all, beginning a series of works with themes of nature and foliage. This work shows a simple picnic under the trees and the waning moon, both elements frequently repeated in later works. While the moon shines, it is just an afterthought to the individuals under the tree branches.",
  },
  {
    src: `/art-media-3.png`,
    title: `Blue (a gift for my father)`,
    year: "2019",
    size: "30 x 30 cm",
    medium: "Acrylics on canvas",
    excerpt: "",
    description:
      "Blue (a gift for my father) is a study of all shades of blue. In this work, the sky, tree, and earth merge into one another, swirls of blue melting one realm into the next. Gravity serves only a minor function in this world, as an individual continues to float in a boat, unfettered by nature’s laws. Blue is a distant vision, visited in the depths of one’s dreams. ",
  },
  {
    src: `/art-media-4.png`,
    title: `Mary Poppins`,
    year: "2019",
    size: "50 x 50 cm",
    medium: "Acrylics on canvas",
    excerpt: "Part of the collection for “Origin' exhibition (2019)",
    description:
      "In early 2019, I watched the musical Mary Poppins Returns for the first time, and was inspired to paint Mary Poppins. From the fuzzy sky is supposedly Mary Poppins, floating down from a green umbrella. Yet this version of Mary Poppins is much more ordinary, with her mundane clothing and oddly colored umbrella. Perhaps Mary Poppins is within all of us, in the creative nooks of our imagination, and with limitless interpretations.",
  },
  {
    src: `/art-media-6.png`,
    title: `Returning home`,
    year: "2020",
    size: "80 x 60 cm",
    medium: "Acrylics on wood",
    excerpt: "",
    description:
      "Returning home is an experimental take on Impressionist artworks of the 19th century. In the midst of the chaotic scene, my brother and I dashed across the grass paths, following each bend with familiarity gained by hundreds of afternoons doing the same. ",
  },
  {
    src: `/art-media-7.png`,
    title: `Moonlit scene`,
    year: "2021",
    size: "60 x 60 cm",
    medium: "Acrylics on wood",
    excerpt: "",
    description:
      "Moonlit scene explores still life while attempting to document its movements. Like the concept of entropy, flowers and leaves are continually rearranging themselves, falling more and more into a chaotic mess. Even the cups and background are filled with movement, revealing their shapes in the ever-changing passage of time",
  },
  {
    src: `/art-media-9.png`,
    title: `Riverside city`,
    year: "2023",
    size: "120 x 80 cm",
    medium: "Mixed media on canvas",
    excerpt: "",
    description:
      "Riverside City shows a seldomly-noticed perspective of the coastal city where I live. Although the style of this work is influenced by Paul Cezanne’s landscape paintings, it offers a more unrefined view of a familiar scene. The final rays of sunlight harbor a nostalgic feeling, lasting only a moment, blurring memories and landscape into one.",
  },
  {
    src: `/art-media-8.png`,
    title: `Distant Memories`,
    year: "2023",
    size: "50 x 50 cm",
    medium: "Mixed media on canvas",
    excerpt: "",
    description:
      "Distant Memories is a collection of unsorted, convoluted childhood stories. The work depicts fragments of memory in the most natural way possible - disorganized, random, and following each other in an individual’s stream of consciousness. A character peers into the path of memories, seemingly in the back of one’s mind but forever out of reach.",
  },
  {
    src: `/art-media-10.png`,
    title: `Blur`,
    year: "2024",
    size: "25 x 25 cm",
    medium: "Mixed media on wood",
    excerpt: "",
    description:
      "Blur is a soft, silent conversation exploring buried memories and the moon’s glowing gaze. The moon’s silvery tears have permeated the scenery, coating the flowers in layers of mystery and cloudy haze. Still, underneath it all, the plants’ liveliness peaks out, whether in a flush of pink around the stems, a touch of green in half-covered leaves, or yellowed flower petals.",
  },
  {
    src: `/art-media-5.png`,
    title: `Tet`,
    year: "2025",
    size: "40 x 30 cm",
    medium: "Acrylics and clay on canvas",
    excerpt: "",
    description:
      "Tet continues the my tradition of Lunar New Year paintings. The work’s varying shades of gray represent smoke from the cooking of Banh Chung, Vietnam’s traditional dish. The peach flowers and ridges in the vase are sculpted with clay, creating an interesting texture. Amid modern objects such as a beverage can and a glass jar are long-established items, including my father’s handcrafted teapot and red paper decorations. ",
  },
  {
    src: `/art-media-2.png`,
    title: `Fish stories `,
    year: "2025",
    size: "80 x 60 cm",
    medium: "Mixed media on canvas ",
    excerpt: "A submission for the Ocean Awareness Contest 2025",
    description:
      "Fish stories follows the process of making and preserving one of My Canh village’s most famous traditions: manufacturing fish sauce. I depicted the process from netting large quantities of anchovies, fermenting them in vats, to a final, packaged product. Fish stories also explores the habit of wearing protective clothing against the sun, sometimes quirkily dubbed “ninja clothing” by Vietnamese newspapers. ",
    special: {
      title: "The beginning of a series",
      text: "This work opened a path for later paintings to revisit nature, foliage, and the small moments shared between people. Add sketches, references, or further project notes here.",
    },
  },
];

const digitalGroups = [
  {
    title: "Illustrations for short films",
    description:
      "Illustration work for a children's cartoon project. Add project dates and credits here.",
    artworks: [1, 2],
  },
  {
    title: "Digital designs and multimedia works for clubs",
    description: "",
    artworks: [3, 4],
  },
  {
    title: "Digital designs for clubs",
    description: "",
    artworks: [5, 6, 7, 8],
  },
];

const digitalArtworks: Artwork[] = Array.from({ length: 8 }, (_, index) => ({
  src: `/art-digital-${index + 1}.png`,
  title: `Digital work ${String(index + 1).padStart(2, "0")}`,
  year: "20XX",
  size: "Digital file",
  medium: "Digital illustration and design",
  excerpt: "A digital piece made for a collaborative project.",
  description:
    "Add the story behind this design, its purpose, and your role in the project here.",
}));

const sections: GallerySection[] = [
  { title: "Free-hand sketches", artworks: sketches },
  { title: "Multimedia works", artworks: multimedia },
  { title: "Digital designs and art films", artworks: digitalArtworks },
];

function ArtworkDetails({
  artwork,
  onClose,
}: {
  artwork: Artwork;
  onClose: () => void;
}) {
  return (
    <article className="mt-6 border-y border-[#df818c] py-6 text-[#10234a]">
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(240px,0.8fr)]">
        <div className="relative min-h-[280px] overflow-hidden bg-white/50 md:min-h-[440px]">
          <Image
            className="object-contain"
            src={artwork.src}
            fill
            sizes="(max-width: 768px) 90vw, 60vw"
            alt={artwork.title}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-start justify-between gap-4 border-b border-[#df818c] pb-3">
            <h3 className="font-[family-name:var(--font-Instru)] text-3xl italic leading-tight text-[#d77f8a] md:text-4xl">
              {artwork.title}
            </h3>
            <button
              aria-label="Close artwork details"
              className="shrink-0 rounded-full border border-[#df818c] px-3 py-1 text-sm text-[#d77f8a] transition-colors hover:bg-[#df818c]/10"
              onClick={onClose}
              type="button"
            >
              Close
            </button>
          </div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 border-b border-[#df818c] py-4 text-sm md:text-base">
            <dt className="text-[#d77f8a]">Year</dt>
            <dd>{artwork.year}</dd>
            <dt className="text-[#d77f8a]">Size</dt>
            <dd>{artwork.size}</dd>
            <dt className="text-[#d77f8a]">Medium</dt>
            <dd>{artwork.medium}</dd>
          </dl>
          <p className="py-4 font-[family-name:var(--font-Instru)] text-xl italic leading-snug text-[#d77f8a]">
            {artwork.excerpt}
          </p>
          <p className="text-base leading-relaxed">{artwork.description}</p>
        </div>
      </div>
      {artwork.special && (
        <section className="mt-8 border-t border-[#df818c] pt-5">
          <h4 className="font-[family-name:var(--font-Instru)] text-2xl text-[#d77f8a] md:text-3xl">
            {artwork.special.title}
          </h4>
          <p className="mt-3 max-w-3xl leading-relaxed">
            {artwork.special.text}
          </p>
        </section>
      )}
    </article>
  );
}

function ArtworkStrip({
  artworks,
  activeArtwork,
  onSelect,
}: {
  artworks: Artwork[];
  activeArtwork: Artwork | null;
  onSelect: (artwork: Artwork) => void;
}) {
  return (
    <>
      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto border-b border-[#df818c] py-4">
        {artworks.map((artwork) => (
          <button
            aria-label={`View ${artwork.title}`}
            aria-pressed={activeArtwork?.src === artwork.src}
            className={`relative h-32 w-48 shrink-0 snap-start overflow-hidden bg-white/60 transition-opacity sm:h-40 sm:w-60 ${
              activeArtwork?.src === artwork.src
                ? "outline outline-2 outline-[#df818c]"
                : "hover:opacity-80"
            }`}
            key={artwork.src}
            onClick={() => onSelect(artwork)}
            type="button"
          >
            <Image
              className="object-cover"
              src={artwork.src}
              fill
              sizes="240px"
              alt=""
            />
          </button>
        ))}
      </div>
      {activeArtwork && (
        <ArtworkDetails
          artwork={activeArtwork}
          onClose={() => onSelect(activeArtwork)}
        />
      )}
    </>
  );
}

export default function ArtGallery() {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [activeArtwork, setActiveArtwork] = useState<Artwork | null>(null);

  function toggleSection(index: number) {
    setActiveSection((current) => (current === index ? null : index));
    setActiveArtwork(null);
  }

  function selectArtwork(artwork: Artwork) {
    setActiveArtwork((current) =>
      current?.src === artwork.src ? null : artwork,
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1000px]">
      {sections.map((section, index) => {
        const isOpen = activeSection === index;
        const panelId = `art-section-${index}`;

        return (
          <section
            className="border-t border-[#df818c] last:border-b"
            key={section.title}
          >
            <h2>
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className="group flex w-full items-center justify-between gap-4 py-2 text-left font-[family-name:var(--font-Instru)] text-[clamp(1.25rem,3vw,1.75rem)] italic leading-tight text-[#d77f8a]"
                onClick={() => toggleSection(index)}
                type="button"
              >
                <span>{section.title}</span>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#df818c] transition-colors group-hover:bg-[#df818c]/10">
                  <svg
                    aria-hidden="true"
                    className={`size-6 transition-transform duration-300 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 12h17m-7-7 7 7-7 7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            {isOpen && (
              <div
                aria-labelledby={`${panelId}-title`}
                className="border-t border-[#df818c] py-6"
                id={panelId}
              >
                {index === 2 ? (
                  <div className="space-y-8">
                    <div className="border-b border-[#df818c] pb-6 text-center">
                      <h3
                        className="mx-auto mb-4 w-fit max-w-full border-b border-[#df818c] px-3 pb-2 font-[family-name:var(--font-Instru)] text-[clamp(2rem,5vw,3.5rem)] italic leading-tight text-[#d77f8a]"
                        id={`${panelId}-title`}
                      >
                        {section.title}
                      </h3>
                      <p className="mx-auto max-w-3xl text-left leading-relaxed text-[#d77f8a]">
                        A collection of illustrations, club designs, and
                        collaborative digital projects. Replace this
                        introduction with your project details.
                      </p>
                    </div>
                    {digitalGroups.map((group) => (
                      <section
                        className="border-b border-[#df818c] pb-6 last:border-b-0"
                        key={group.title}
                      >
                        <h4 className="mb-3 font-[family-name:var(--font-Instru)] text-xl text-[#d77f8a] md:text-2xl">
                          {group.title}
                        </h4>
                        {group.description && (
                          <p className="mb-4 max-w-3xl text-[#d77f8a]">
                            {group.description}
                          </p>
                        )}
                        <div
                          className={`grid gap-3 ${
                            group.artworks.length === 2
                              ? "grid-cols-1 sm:grid-cols-2"
                              : "grid-cols-1 sm:grid-cols-2"
                          }`}
                        >
                          {group.artworks.map((artworkNumber) => {
                            const artwork = digitalArtworks[artworkNumber - 1];

                            return (
                              <button
                                aria-label={`View ${artwork.title}`}
                                aria-pressed={
                                  activeArtwork?.src === artwork.src
                                }
                                className={`relative aspect-[1.6] overflow-hidden rounded-md bg-white/60 ${
                                  activeArtwork?.src === artwork.src
                                    ? "outline outline-2 outline-[#df818c]"
                                    : "transition-opacity hover:opacity-80"
                                }`}
                                key={artwork.src}
                                onClick={() => selectArtwork(artwork)}
                                type="button"
                              >
                                <Image
                                  className="object-cover"
                                  src={artwork.src}
                                  fill
                                  sizes="(max-width: 640px) 90vw, 45vw"
                                  alt=""
                                />
                              </button>
                            );
                          })}
                        </div>
                      </section>
                    ))}
                    {activeArtwork &&
                      digitalArtworks.some(
                        (artwork) => artwork.src === activeArtwork.src,
                      ) && (
                        <ArtworkDetails
                          artwork={activeArtwork}
                          onClose={() => setActiveArtwork(null)}
                        />
                      )}
                  </div>
                ) : (
                  <>
                    <h3
                      className="mx-auto mb-4 w-fit max-w-full border-b border-[#df818c] px-3 pb-2 text-center font-[family-name:var(--font-Instru)] text-[clamp(2rem,5vw,3.5rem)] italic leading-tight text-[#d77f8a]"
                      id={`${panelId}-title`}
                    >
                      {section.title}
                    </h3>
                    <ArtworkStrip
                      artworks={section.artworks}
                      activeArtwork={
                        activeArtwork &&
                        section.artworks.some(
                          (artwork) => artwork.src === activeArtwork.src,
                        )
                          ? activeArtwork
                          : null
                      }
                      onSelect={selectArtwork}
                    />
                  </>
                )}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
