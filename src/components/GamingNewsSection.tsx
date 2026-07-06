// components/GamingNewsSection.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const smooth = [0.16, 1, 0.3, 1] as const;

const news = [
  {
    year: "2026",
    title: "Attendee Guide",
    desc: "Everything players and fans need before entering the global arena.",
    image:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?q=90&w=1200&auto=format&fit=crop",
  },
  {
    year: "2026",
    title: "EWC26 Paris Announced",
    desc: "The next championship season brings elite teams, creators, and fans together.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=90&w=1200&auto=format&fit=crop",
  },
  {
    year: "2026",
    title: "Trophy System Explained",
    desc: "A deeper look at the scoring, ranking, and prize structure.",
    image:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=90&w=1200&auto=format&fit=crop",
  },
  {
    year: "2026",
    title: "Beyond Spectating",
    desc: "Interactive match hubs, fantasy picks, rewards, and fan missions arrive.",
    image:
      "https://images.unsplash.com/photo-1511882150382-421056c89033?q=90&w=1200&auto=format&fit=crop",
  },
  {
    year: "2026",
    title: "Pro Teams Confirmed",
    desc: "Top-ranked squads lock in their slots for the summer competition.",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=90&w=1200&auto=format&fit=crop",
  },
];

function NewsFX() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1} />
      <Stars radius={90} depth={45} count={480} factor={3} fade speed={0.28} />
    </Canvas>
  );
}

export default function GamingNewsSection() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<(typeof news)[number] | null>(null);

  const visibleNews = useMemo(() => {
    return [...news.slice(active), ...news.slice(0, active)].slice(0, 4);
  }, [active]);

  const next = () => setActive((prev) => (prev + 1) % news.length);
  const prev = () => setActive((prev) => (prev - 1 + news.length) % news.length);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <section
        id="news"
        className="relative left-1/2 min-h-screen w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden bg-[#090817] text-white"
      >
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(255,90,31,0.16),transparent_30%),radial-gradient(circle_at_86%_76%,rgba(124,92,255,0.14),transparent_34%)]" /> */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
          <NewsFX />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col justify-center px-4 pb-36 pt-24 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: smooth }}
            className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <p className="font-['Orbitron'] text-xs font-black uppercase tracking-[0.28em] text-[#ff5a1f]">
                Latest Updates
              </p>

              <h2 className="mt-4 font-['Orbitron'] text-[clamp(2.6rem,6vw,6.5rem)] font-black uppercase leading-[0.9] tracking-[-0.07em]">
                Latest News
                <span className="block text-[#ff5a1f]">From Arena</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm font-bold uppercase tracking-[0.08em] text-white/50 sm:text-base">
                Stay on top of the action.
              </p>
            </div>

            <button
              onClick={next}
              className="inline-flex items-center gap-4 self-start font-['Orbitron'] text-sm font-black uppercase tracking-[0.14em] text-white transition hover:text-[#ff5a1f] lg:self-auto"
            >
              <span className="hidden h-px w-24 bg-white/30 sm:block" />
              See All News
              <ArrowRight size={18} />
            </button>
          </motion.div>

<div className="relative w-screen -translate-x-4 overflow-hidden sm:-translate-x-6 lg:-translate-x-10 xl:-translate-x-16 2xl:-translate-x-20">
  <AnimatePresence mode="wait">
    <motion.div
      key={active}
      initial={{ opacity: 0, x: 100, filter: "blur(10px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, x: -100, filter: "blur(10px)" }}
      transition={{ duration: 0.65, ease: smooth }}
      className="grid w-full grid-cols-1 gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-10 xl:px-16 2xl:px-20"
    >
      {visibleNews.map((item, index) => (
        <motion.article
          key={`${item.title}-${active}`}
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: index * 0.07,
            ease: smooth,
          }}
          whileHover={{ y: -10 }}
          onClick={() => setSelected(item)}
          className="group relative cursor-pointer overflow-hidden border border-white/10 bg-[#0d0c19] shadow-[0_32px_100px_rgba(0,0,0,0.28)] transition duration-500 hover:border-[#ff5a1f]/70 hover:bg-[#11101f]"
        >
          <div className="absolute left-0 top-0 z-20 h-14 w-14 bg-[#ff5a1f] [clip-path:polygon(0_0,100%_0,0_100%)]" />

          <span className="absolute left-3 top-3 z-30 font-['Orbitron'] text-[10px] font-black text-white">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="relative h-[270px] overflow-hidden sm:h-[310px] xl:h-[360px]">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover opacity-70 grayscale transition duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#090817] via-[#090817]/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090817]/45 via-transparent to-transparent" />

            <motion.div
              animate={{ x: ["-160%", "420%"] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.35,
                repeatDelay: 2,
              }}
              className="pointer-events-none absolute inset-y-0 left-0 w-16 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent blur-md"
            />

            <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 bg-[#ff5a1f] px-3 py-2 font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.14em] text-white">
              <CalendarDays size={13} />
              {item.year}
            </span>
          </div>

          <div className="relative min-h-[230px] p-6">
            <span className="pointer-events-none absolute -right-1 top-2 font-['Orbitron'] text-7xl font-black leading-none text-white/[0.035]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <p className="font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.24em] text-[#ff5a1f]">
              Arena Chronicle
            </p>

            <h3 className="mt-4 font-['Orbitron'] text-2xl font-black uppercase leading-[1.05] tracking-[-0.05em] text-white">
              {item.title}
            </h3>

            <p className="mt-4 line-clamp-2 text-sm font-medium leading-6 text-white/50 transition group-hover:text-white/65">
              {item.desc}
            </p>

            <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
              <button className="inline-flex items-center gap-3 font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.16em] text-white">
                Read More
                <span className="grid h-8 w-8 place-items-center bg-white/[0.06] text-[#ff5a1f] transition group-hover:bg-[#ff5a1f] group-hover:text-white">
                  <ArrowRight size={14} />
                </span>
              </button>

              <span className="font-['Orbitron'] text-[8px] font-black uppercase tracking-[0.18em] text-white/25">
                Classified
              </span>
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  </AnimatePresence>
</div>

          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous news"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.06] shadow-sm transition hover:bg-[#ff5a1f]"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              aria-label="Next news"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.06] shadow-sm transition hover:bg-[#ff5a1f]"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -bottom-1 z-20 h-[70px] w-full overflow-hidden sm:h-[90px] md:h-[110px] lg:h-[140px] xl:h-[170px]"
        >
          <div className="absolute inset-0 bg-[#ff5a1f] [clip-path:polygon(0_82%,28%_82%,31%_62%,48%_62%,50%_34%,52%_62%,69%_62%,72%_82%,100%_82%,100%_100%,0_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[calc(100%-6px)] bg-[#090817] [clip-path:polygon(0_86%,29%_86%,32%_68%,48%_68%,50%_42%,52%_68%,68%_68%,71%_86%,100%_86%,100%_100%,0_100%)]" />
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[300] bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.55, ease: smooth }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-full overflow-y-auto border-l border-[#ff5a1f]/30 bg-[#090817] text-white shadow-[0_0_90px_rgba(255,90,31,0.18)] sm:w-[560px] lg:w-[720px]"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#090817]/95 p-5 backdrop-blur-xl">
                <div>
                  <p className="font-['Orbitron'] text-xs font-black uppercase tracking-[0.26em] text-[#ff5a1f]">
                    News Details
                  </p>
                  <h3 className="mt-2 font-['Orbitron'] text-3xl font-black uppercase">
                    {selected.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="grid h-12 w-12 place-items-center border border-white/10 bg-white/[0.06] transition hover:border-[#ff5a1f] hover:text-[#ff5a1f]"
                  aria-label="Close news drawer"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="p-5">
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="h-[360px] w-full object-cover"
                  />
                </div>

                <div className="mt-6 inline-flex items-center gap-2 bg-[#ff5a1f] px-4 py-2 font-['Orbitron'] text-xs font-black uppercase text-white">
                  <CalendarDays size={14} />
                  {selected.year}
                </div>

                <p className="mt-6 text-base font-medium leading-8 text-white/65">
                  {selected.desc}
                </p>

                <p className="mt-5 text-base font-medium leading-8 text-white/55">
                  This update highlights the next stage of the arena ecosystem,
                  including tournament access, player engagement, live coverage,
                  and fan-focused experiences built for competitive gaming.
                </p>

                <button className="mt-8 inline-flex items-center gap-3 bg-[#ff5a1f] px-8 py-5 font-['Orbitron'] text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-[#090817]">
                  Read Full Story
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}