"use client";

import { useState } from "react";

type Article = {
  title: string;
  paragraphs: {
    text: string;
    className: string;
  }[];
};

const articles: Article[] = [
  {
    title: "How to learn a language",
    paragraphs: [
      {
        text: "I. Glossary",
        className: "w-1/2",
      },
      {
        text: "“&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;” word class: one size fits all",
        className: "w-1/2 text-left",
      },
      {
        text: "Silence",
        className: "w-full font-bold",
      },
      {
        text: "II. Prologue",
        className: " text-left",
      },
      {
        text: "There are a variety of unique languages one can learn. Many chose to start from childhood for longer exposure time and to utilize a young mind’s ability to absorb languages. Each tongue is characterized by specific skills, which require dutiful polishing, especially for non-native users.",
        className: "w-full text-justify",
      },
      {
        text: "Unlike most, the language of silence is universal.",
        className: "w-full text-justify",
      },
      {
        text: "I speak it. My mother speaks it. My father. My brother. Strangers. Close friends. We all brandish it like a tool, our savior when exchanges become too harsh, our weapon when we indulge in passive-aggressive interactions. To acquire proficiency in this language, experience and practice is the optimal route. I heard somewhere that shadowing a speaker is a tried-and-true method of improvement.",
        className: "w-full text-justify",
      },
      {
        text: "Luckily, I am eloquent in the intricacies of silence.",
        className: "w-full text-justify",
      },
      {
        text: "III. Uses",
        className: " text-left",
      },
      {
        text: "a.  Do you live with a wolf? You know, the one who jumps at other people’s throats, snarls at the slightest quarrel. Like overcast skies on days before tropical typhoons, like rapid waters entering riverside houses during floods, the wolf looms, permeates, and thickens suffocating dinner tables. My brother and I, frustrations snaking in our veins, await the pounce. It speaks the voices of thunder. I am afraid of thunder, so I use quietness. We dance around each other, nights of thunder, eerie tranquility woven between flashes of light and noise and rain. I understand generational trauma. With regret, I admit to inflicting it on my brother every day. In the wolf, I see myself. In the mirror, I see the wolf. Harshness leaves legacies, burned into vocal cords. To my weak defense, my brother does it too. When one hears thunder all the time, one is bound to adapt.",
        className: "w-full text-justify",
      },
      {
        text: "b.  Mirrors are fascinating objects, both in the beauty of their surface and the unforgiving nature of their reflections. Artificial lights are deceptive objects, as they can be manipulated to an intensity that obscures some and emphasizes others. Paired with mirrors, lights distort perspective. When I look into mirrors, I find unsaid words trickling from my lips. Fittingly, there is a psychological toll to practicing my daily language. The concentrated gibberish must leave, somehow.",
        className: "w-full text-justify",
      },
      {
        text: "From a small cabinet above the sink, I take out a fresh roll of tissue paper. It should be done methodically, with words removed from the left side of the mouth first. Then, all the excess on the lips. Finally, ending at the right, curling the tissue to capture venomous sentences. It must be done immediately, because it leaves a burning, heavy feeling if left for too long. After the ritual, sleep is crucial. I exit the bathroom, turning the light off behind me, enveloping the mirror in honesty.",
        className: "w-full text-justify",
      },
      {
        text: "c.  Other people employ this tongue to calm their minds. Blankness allows contemplation, understanding. Without empty spaces, they fear divulging too much. Quietness upholds mysterious airs or causes uncomfortable gazes. People say teenagers are besotted by their devices, but many of us use them to fill in vast chasms of tranquility.",
        className: "w-full text-justify",
      },
      {
        text: "Instilling silence is an intricate business. Assuming that quietness only extends to physical actions, any cognitive throb should not be an issue. So one could use digital devices for silence, feigning preoccupation. People use it a lot these days. It’s a no-brainer, phones.",
        className: "w-full text-justify",
      },
      {
        text: "Bored? Phone.",
        className: "w-full text-justify",
      },
      {
        text: "Scared? Phone.",
        className: "w-full text-justify",
      },
      {
        text: "Alone? Phone.",
        className: "w-full text-justify",
      },
      {
        text: "d.  Employing various psychological techniques to practice silence leaves you hollowed out from the inside, blood replaced by unsaid words, frothing at the mouth every few nights. Sometimes, I wish I could resort to a phone. But there the wolf stood, like an overgrown vine I cannot dare cut. The phone stays tucked within folds of clothing, tissues wedged in the bathroom like shameful reminders of sinful words.",
        className: "w-full text-justify",
      },
      {
        text: "e.  Those well-versed with the tongue will know how to weaponize it. If you provoke them enough times, maybe they will teach you. A word of warning, it’s a painful experience, because you master from how they use it on you. Passive-aggressiveness is twisted art. Before it became thunder, the wolf was rain. I love rain, as long as it does not accompany wind.",
        className: "w-full text-justify",
      },
      {
        text: "Rain during summer, rejuvenating dry branches. Rain before winter, melting the cityscape into patterns of gray. Rain in late spring, sprinkling chilliness on moss-covered tiles. But the wolf was turbulent rain. There were moments of tranquility, forced upon the Earth. These were quickly followed by accusations, swirling like undying wind. Despite its changes throughout the year, silence was the language that always soothed its mind, because there is nothing it can do, when all it receives is silence.",
        className: "w-full text-justify",
      },
      {
        text: "f.  One day, I would choke on the aftertaste of silence. Today I stood in the bathroom. No socks, no lights. The truth stood in the mirror, and cold tiles lay under my feet. I am burning through tissue paper faster than I can replace it. Swipe. Throw. Swipe. Throw. Words are everywhere on the face that resembles a wolf.",
        className: "w-full text-justify",
      },
      {
        text: "g.  If the wolf speaks the language of pain, would it be easier to cope? Would it be easier than this constant, unrelentless fear of thunder, and the softening but not soothing quality of rain in between? Using silence against noise wounds the mind. With no outlet, tissue paper is the only way",
        className: "w-full text-justify",
      },
      {
        text: "h.  Silence is not the language of resignation. For all the ways it has been implemented as a weakness in a dominating context, silence can be the language of resistance. It is the last-minute placeholder, the most protective solution. Nothingness is strategic. In quietness I safeguard my heart.",
        className: "w-full text-justify",
      },
      {
        text: "IV. Epilogue",
        className: "w-full text-justify",
      },
      {
        text: "Many times, I wonder if teenage hormones and personality shortcomings have led to my faulty perception of my father. Is he the wolf, jumping on my family’s throat every time he does not get his way? Am I the rebellious one, whose silences and closed doors are louder than explosive voices? Owing to the mysteries of silence, the unpredictable frequency of thunder, truth remains elusive to me. If you want to learn the tongue of thunder, you can ask my father. He is a native. If you want to study the language of silence, you can ask me. I may be unreliable as a narrator, but I am qualified for this.",
        className: "w-full text-justify",
      },
      {
        text: "After all, it is so simple.",
        className: "w-full text-justify",
      },
      {
        text: "There is only one word:",
        className: "w-full text-justify",
      },
      {
        text: "“&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;”",
        className: "w-full text-justify",
      },
      {
        text: "<b>Notes:</b> <i>How to learn a language</i> is formatted like Cambridge Dictionary’s definition page. It received the Distinguished Writers Award (Fiction category) for the Bennington College Young Writers Awards 2025 - 2026.",
        className: "w-full text-justify",
      },
    ],
  },
  {
    title: "Alexithymia",
    paragraphs: [
      {
        text: "I knew if I didn’t love them, one day they would stop loving me back. But I never, ever wanted them to stop loving me. ",
        className: "  text-center",
      },
      {
        text: "It’s simply ironic. The kid who was praised throughout her primary and middle school years for expressive and imaginative writing is the most emotionally constipated to tread the earth. For all my blandness, inner feelings gravitate from one extreme to the other. ",
        className: "  text-center",
      },
      {
        text: "Deep inside me, I know it would happen one day. That day was February 24th, 2025. I guess I don’t have to ask them why anymore. It was written on the faces of the broken-hearted, carved into the stony hearts they pulled up after layers crumbled down.",
        className: "text-center",
      },
      {
        text: "I don’t know what changed, really. Maybe I do. But I’ve always been emotionally stunted, unable to express myself with anything other than words on a literature test. In the exams, I can blame it all on the educational requirements. ",
        className: "text-center",
      },
      {
        text: "I can be real, behind the guise that it is all blatant fakery.",
        className: "text-center",
      },
      {
        text: "I kind of know that I am a terrible individual. I have known that for a long, long time. After all, who would want to be like me? Hiding things to the point of complete secrecy, self-conscious to the point of self-sabotaging. ",
        className: "text-center",
      },
      {
        text: "Was I better before? Was I more emotional before? I don’t know anymore. There’s something weird, festering within me, annoying me to my wits' end. I am now just a shell of my old self, real skin replaced with sharp knives. ",
        className: "text-center",
      },
      {
        text: "The walls are finally closing in. I’m here, but I am never here. I am always somewhere else. I lament the old life I have, as I always do. ",
        className: "text-center",
      },
      {
        text: "<b>Notes:</b> <i>Alexithymia</i>, according to the definition by the Cambridge Dictionary, is “a condition in which someone is unable to recognize or describe their emotions.”",
        className: "w-full text-justify",
      },
    ],
  },
  {
    title: "Memory of ceramics",
    paragraphs: [
      {
        text: "The first thing I felt was immense pain.",
        className: "  text-left",
      },
      {
        text: "The elderly artisan handled me carefully, running his calloused finger pads over my ceramic surface. He carried me from the bunch of freshly fired ceramic jars and loaded me onto the back of an oxcart. ",
        className: "  text-left",
      },
      {
        text: "The new home was in the fields, the house of a newly married couple. I was stowed away in the kitchen corner for storing grain, among the scurrying of starving rats. People were hungry, too. I never saw them full, never saw them dare to finish the grain I preciously held",
        className: "text-left",
      },
      {
        text: "In 1945, I was finally empty. Not a grain left for the preying rats. Not a rat left, even. Maybe they had already given up the chase and lay dead in secluded corners. The woman wandered the house, searching for any forgotten bit of food. ",
        className: "text-left",
      },
      {
        text: "By the time I regained awareness, I was holding grains again, and the man was gone. He was killed in combat.",
        className: "text-left",
      },
      {
        text: "For a while afterward, I lived a meaningless existence, gazing at the family children as they morphed into adulthood. They left one by one, and when they returned, the roguish spark that characterized their eyes had blinked out. ",
        className: "text-left",
      },
      {
        text: "One day, noise awoke my long slumber. Noise of children. Chittering, like little rats hanging from mango trees. ",
        className: "text-left",
      },
      {
        text: "The children dragged me into the living room. I became decorative, a piece for the eyes. Children circled the house once every year, and I saw the adults, too. Sons and daughters of the woman and man. There was only joy. During New Year's, people traded red envelopes for luck. I was there for the first lightbulb in the late eighties. I was there for the house’s first colored TV, sometime around the nineties. ",
        className: "text-left",
      },
      {
        text: "***",
        className: "text-center",
      },
      {
        text: "I was there when it smouldered to dust.",
        className: "text-left",
      },
      {
        text: "The years following the grandchildren’s introduction were those of great joy. There was so much childishness that it began to affect the woman. It started strangely, somewhere in her eyes. Then her milky white hair unfurled into cascades of black. Concerned, a son of hers shaved it all, so it grew out pitch-black.",
        className: "text-left",
      },
      {
        text: "The next thing she did was talk to me.",
        className: "text-left",
      },
      {
        text: "She talked, her voice child-like and high, her eyes large, her face nearly devoid of wrinkles. She talked of her husband. She woke up at the crack of dawn and collected grain from my body. As she cooked, she called for her dead babies, who strayed into the land of clouds as children. ",
        className: "text-left",
      },
      {
        text: "The last thing she did was leave. Her son was too quick in his haste to relocate her that she did not have a moment to speak to me. He did not want anyone to see his mother turning back time. ",
        className: "text-left",
      },
      {
        text: "***",
        className: "text-center",
      },
      {
        text: "A strange man is dragging me out of the house. I do not want to leave. I am being hoisted onto an oxcart…",
        className: "text-left",
      },
      {
        text: "He grunts when I slip from his hold, ceramic body making contact with cement.",
        className: "text-left",
      },
      {
        text: "The last thing I felt was immense pain, shattering me. Finally.",
        className: "text-left",
      },
      {
        text: "<b>Notes:</b> <i>Memory of ceramics</i> is based on the prompt: write from the perspective of an object that has witnessed three generations of a family. The ceramic jar is inspired by a 100-year-old decorative piece in my paternal grandparents’ home. ",
        className: "w-full text-justify",
      },
    ],
  },
  {
    title: "DD/MM/YY (unremarkable, for short)",
    paragraphs: [
      {
        text: "She died on such an ordinary day. No one even thought it would be possible for her to leave on such an ordinary day, so she died alone. ",
        className: " text-left",
      },
      {
        text: "I was standing in the foyer, entertaining a horde of guests. They were all bored and disgruntled because nothing remotely gossip-worthy was going on around town, and the sunlight was limitless but not abnormal. Yet beautiful days like this are infuriating. While there is nothing inherently wrong, things are too normal, even for a mundane Tuesday.",
        className: "mx-auto  text-left",
      },
      {
        text: "Mother hovered in the kitchen, arthritis-ridden fingers slicing a moon cake into two slices. Then four slices. Then eight slices. Aging joints curled around the porcelain plate as Mother tottered out into the hall, beckoning to the guest.",
        className: "ml-auto  text-left",
      },
      {
        text: "Father’s careworn face appeared from the door leading to the backyard, sunken cheeks wrinkling to make way for a crooked smile.",
        className: "ml-auto  text-left",
      },
      {
        text: "“In here”, I heard myself say, muddled from a strong smell. ",
        className: "ml-auto  text-left",
      },
      {
        text: "The crowd contained men of all shapes and sizes. There was a short woman who walked with no cane, followed by a tall man with a slumped back and polished cane. At the back, a lady with impeccable fashion sense wrinkled her nose at what I presumed was the smell. ",
        className: "ml-auto  text-left",
      },
      {
        text: "The well-off deposited an assortment of bright red cards packed with money at the garden table. The less wealthy took out half-finished candy packets and small brooches from inside their coats to add to the small pile. I found this tradition peculiar. What would we even do with the odd collection of objects? She would love the cash, but she was currently confined to bed. The brooches looked like old-fashioned, random objects, ones that would not fit on contemporary clothing.",
        className: "ml-auto  text-left",
      },
      {
        text: "Maybe Father would find brooches and candy useful as gifts for his mistress, Tu.",
        className: "ml-auto  text-left",
      },
      {
        text: "The smell was getting stronger, seeping from inside the house. I returned inside, searching for the smell, with the fashionable woman’s eyes glued to my back. Out to the foyer. Nothing. Under the kitchen sink. Nothing. On the second floor. ",
        className: "ml-auto  text-left",
      },
      {
        text: "My sister lay on the floor, limbs thrown out like a starfish. There were no tell-tale signs of doom, as the doctor said. Her face was clean, eyes open. From her half-open lips, the smell escaped. The smell was years of hidden memories, all the deeds my family had done. Father’s adultery, bubbling under sunken skin. Mother’s disappointment and hypocrisy. My faulty personality, shaped by the monster that was me. ",
        className: "ml-auto  text-left",
      },
      {
        text: "Father left after the funeral. It was a quiet affair, following all the proper expectations of our community. A fortune teller led the ceremony, five fully prepared meal tables were placed in the garden, and the family arrived in dark clothing. ",
        className: "ml-auto  text-left",
      },
      {
        text: "I sat by the dishes, a white smock and headband signifying immediate family thrown over black clothes and hair. Father situated himself on a table near the door, drinking a pail of tea and shaking hands with every visitor. Mother wailed next to a group of concerned women, looking at the fading incense. When everything was over, Father packed a briefcase and left for Tu’s house. ",
        className: "ml-auto  text-left",
      },
      {
        text: "Mother stayed behind, with her reddened eyes and trampled heart.",
        className: "ml-auto  text-left",
      },
      {
        text: "A few days after everything, Mother and I said goodbye at the door. First, she lit the last incense for my sister. Then, she stroked my cheek once, because she never kissed me there like she did my sister or Father. Finally, she walked down the dark alleyway to look for her favorite daughter. ",
        className: "ml-auto  text-left",
      },
      {
        text: "Her other daughter stood on the front porch, chilly autumn rain drenching white smock and dark clothing.",
        className: "ml-auto  text-left",
      },
      {
        text: "I know why she died that day. It was so ordinary a day that death had to take her away.",
        className: "ml-auto  text-left",
      },
      {
        text: "I do not know why she died that way. It was selfish of her to take away Mother and Father. In the end, I remained.",
        className: "ml-auto  text-left",
      },
      {
        text: "<b>Notes:</b> <i>Yellow</i> explores how color perception changes with age through a 17-year-old's reflection.",
        className: "w-full text-justify",
      },
    ],
  },
  {
    title: "Yellow",
    paragraphs: [
      {
        text: "When I was older, I found out",
        className: "ml-auto  text-left  mb-0",
      },
      {
        text: "the only sun-dry afternoons were in lost memories",
        className: " text-right mb-0",
      },
      {
        text: "17",
        className: "mx-auto  text-left font-bold mb-0",
      },
      {
        text: "7",
        className: "mx-auto  text-right font-bold mb-0",
      },
      {
        text: "unused kitchens, covered in soot <br/>\
              grandmother’s slippers, thrown in a corner<br/>\
              the porch, drenched in unbearable heat<br/>\
              grandfather, hunched over a cup of tea \
              ",
        className: "mx-auto  mb-0  text-right  ",
      },
      {
        text: "Wrinkled skin stretched over struggling joints <br/>\
              Time, drawing lines on childhood touches<br/>\
              Silence, floating on forgotten sand dunes<br/>\
              Love, growing faint like yellows in the afternoon \
              ",
        className: "mx-auto  mb-0  text-left  ",
      },
      {
        text: "what is life but a colorful movie? <br/>\
              I thought, gazing lazily at falling dusk<br/>\
              in the sky, speckles of wind-borne kites<br/>\
              on the ground, children, waiting for the oncoming night<br/>\
              ",
        className: "mx-auto  mb-0  text-right  ",
      },
      {
        text: "I never returned to the land of kites<br/>\
              No one ever asked me why<br/>\
              Because in my absence<br/>\
              They have gradually filtered by<br/>\
              ",
        className: "mx-auto  mb-0  text-left  ",
      },
      {
        text: "the coat of twilight disguises secrets <br/>\
              us village children, we counted on blues <br/>\
              covering our tracks, hiding our nightly ventures <br/>\
              keeping us safe from sun-dry summers <br/>\
              ",
        className: "mx-auto  mb-0  text-right  ",
      },
      {
        text: "In one summer, though not sun-dry <br/>\
              Grandmother swept through layers of dust<br/>\
              Summer boiled down the back of hatless hair <br/>\
              Giving the whisper of yellowed care<br/>\
              ",
        className: "mx-auto  mb-0  text-left  ",
      },
      {
        text: "run, run away from dancing sunlight <br/>\
              run, into the realms of many moons <br/>\
              and run back, into dying twilights <br/>\
              in the midst of  flowers, bursting into blooms <br/>\
              ",
        className: "mx-auto  mb-0  text-right  ",
      },
      {
        text: "Yellow, a color lost in time <br/>\
              Like how grandfather lost his many watches <br/>\
              Like how grandmother holds her decks of cards <br/>\
              Familiar, yet forever cloaked in obscurity <br/>\
              ",
        className: "mx-auto  mb-0  text-left  ",
      },
      {
        text: "unused kitchens, covered in soot <br/>\
              When yellows were still a thing<br/>\
              When my eyes still recognized yellows <br/>\
              A decade of sun-dry afternoons ago. <br/>\
              ",
        className: "mx-auto  mb-0  text-center  ",
      },
    ],
  },
];

export default function WritingAccordion() {
  const [activeArticle, setActiveArticle] = useState<number | null>(null);

  return (
    <div className="mx-auto w-full max-w-[900px]">
      {articles.map((article, index) => {
        const isOpen = activeArticle === index;
        const panelId = `writing-article-${index}`;

        return (
          <section
            className="border-t border-[#df818c] last:border-b"
            key={article.title}
          >
            <h2>
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className="group flex w-full items-center justify-between gap-4 py-2 text-left font-[family-name:var(--font-Instru)] text-[clamp(1.25rem,3vw,1.75rem)] italic leading-tight text-[#d77f8a]"
                onClick={() => setActiveArticle(isOpen ? null : index)}
                type="button"
              >
                <span>{article.title}</span>
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
              <article
                aria-labelledby={`${panelId}-title`}
                className="border-t border-[#df818c] py-8 text-[#10234a]"
                id={panelId}
              >
                <h3
                  className="mx-auto mb-8 w-fit max-w-full border-b border-[#df818c] px-2 pb-3 text-center font-[family-name:var(--font-Instru)] text-[clamp(2.25rem,6vw,3.75rem)] italic leading-none text-[#d77f8a]"
                  id={`${panelId}-title`}
                >
                  {article.title}
                </h3>
                <div className="space-y-6 font-[family-name:var(--font-Instru)] text-base leading-relaxed md:text-lg">
                  {article.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      className={paragraph.className}
                      key={paragraphIndex}
                      dangerouslySetInnerHTML={{ __html: paragraph.text }}
                    ></p>
                  ))}
                </div>
              </article>
            )}
          </section>
        );
      })}
    </div>
  );
}
