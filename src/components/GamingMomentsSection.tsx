// components/GamingMomentsSection.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const smooth = [0.16, 1, 0.3, 1] as const;

const moments = [
  {
    title: "Clutch Final Round",
    tag: "New",
    player: "Sky Hunter",
    duration: "02:14",
    views: "84K",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=90&w=1200&auto=format&fit=crop",
    description:
      "A last-second arena clutch that turned the match into one of the most watched highlights of the season.",
  },
  {
    title: "Arena Comeback",
    tag: "New",
    player: "Nova Ghost",
    duration: "01:48",
    views: "62K",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=90&w=1200&auto=format&fit=crop",
    description:
      "Nova Ghost leads a clean comeback after losing early control of the map.",
  },
  {
    title: "MVP Highlight",
    tag: "Live",
    player: "Max Jett",
    duration: "03:02",
    views: "109K",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=90&w=1200&auto=format&fit=crop",
    description:
      "A high-speed MVP run packed with precision plays and perfect timing.",
  },
  {
    title: "Squad Wipe",
    tag: "New",
    player: "Mad Raze",
    duration: "01:35",
    views: "51K",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=90&w=1200&auto=format&fit=crop",
    description:
      "Mad Raze clears the field with aggressive movement and clean execution.",
  },
  {
    title: "Victory Push",
    tag: "Hot",
    player: "Brimstone",
    duration: "02:42",
    views: "97K",
    image:
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=90&w=1200&auto=format&fit=crop",
    description:
      "The final push that secured the championship round for Brimstone.",
  },
];

function MomentsFX() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1} />
      <Stars radius={90} depth={45} count={600} factor={3} fade speed={0.35} />
    </Canvas>
  );
}

export default function GamingMomentsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selected, setSelected] = useState<(typeof moments)[number] | null>(
    null
  );

  const visibleMoments = useMemo(() => {
    return [...moments.slice(active), ...moments.slice(0, active)].slice(0, 5);
  }, [active]);

  const next = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % moments.length);
  };

  const prev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + moments.length) % moments.length);
  };

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <section
        id="moments"
        className="relative left-1/2 min-h-screen w-screen -translate-x-1/2 overflow-hidden bg-[#090817] text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(255,90,31,0.16),transparent_28%),radial-gradient(circle_at_12%_80%,rgba(124,92,255,0.16),transparent_30%)]" />

        <div className="pointer-events-none absolute inset-0 opacity-20">
          <MomentsFX />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col justify-center px-4 pb-36 pt-24 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: smooth }}
            className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
          >
            <div>
              <p className="font-['Orbitron'] text-xs font-black uppercase tracking-[0.3em] text-[#ff5a1f]">
                Arena Moments
              </p>

              <h2 className="mt-5 font-['Orbitron'] text-[clamp(2.6rem,6vw,6.8rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
                Legendary Plays
              </h2>
            </div>

            <button
              onClick={next}
              className="inline-flex items-center gap-3 font-['Orbitron'] text-sm font-black uppercase tracking-[0.12em] text-[#ff5a1f]"
            >
              Browse More
              <ArrowRight size={18} />
            </button>
          </motion.div>

          <div className="relative w-screen -translate-x-4 overflow-hidden sm:-translate-x-6 lg:-translate-x-10 xl:-translate-x-16 2xl:-translate-x-20">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 120 : -120,
                  filter: "blur(10px)",
                }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -120 : 120,
                  filter: "blur(10px)",
                }}
                transition={{ duration: 0.65, ease: smooth }}
                className="grid w-full grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-10 2xl:grid-cols-5 2xl:px-20"
              >
                {visibleMoments.map((item, index) => (
                  <motion.article
                    key={`${item.title}-${active}`}
                    initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.72,
                      delay: index * 0.06,
                      ease: smooth,
                    }}
                    className={`group relative min-h-[460px] overflow-hidden bg-white/[0.04] p-1.5 lg:min-h-[430px] xl:min-h-[480px] ${
                      index === 4 ? "lg:hidden 2xl:block" : ""
                    }`}
                  >
                    <div className="absolute inset-0 bg-[#ff5a1f]/35 opacity-0 transition group-hover:opacity-100" />

                    <div
                      className="relative h-full overflow-hidden bg-[#111420]"
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 26px) 0, 100% 26px, 100% 100%, 26px 100%, 0 calc(100% - 26px))",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover opacity-75 grayscale transition duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#090817] via-[#090817]/35 to-transparent" />

                      <span className="absolute right-4 top-4 bg-white px-3 py-1 font-['Orbitron'] text-[10px] font-black uppercase text-[#090817]">
                        {item.tag}
                      </span>

                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <p className="flex items-center gap-2 font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.2em] text-[#ff5a1f]">
                          <Sparkles size={13} />
                          {item.player}
                        </p>

                        <h3 className="mt-3 font-['Orbitron'] text-2xl font-black uppercase leading-tight">
                          {item.title}
                        </h3>

                        <button
                          onClick={() => setSelected(item)}
                          className="mt-5 inline-flex items-center gap-3 text-sm font-black uppercase text-white/75 transition hover:text-[#ff5a1f]"
                        >
                          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ff5a1f] text-white">
                            <Play size={15} fill="currentColor" />
                          </span>
                          Details
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="grid h-12 w-12 place-items-center border border-white/10 bg-white/[0.06] transition hover:bg-[#ff5a1f]"
              aria-label="Previous moments"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="grid h-12 w-12 place-items-center border border-white/10 bg-white/[0.06] transition hover:bg-[#ff5a1f]"
              aria-label="Next moments"
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
                    Moment Details
                  </p>
                  <h3 className="mt-2 font-['Orbitron'] text-3xl font-black uppercase">
                    {selected.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="grid h-12 w-12 place-items-center border border-white/10 bg-white/[0.06] transition hover:border-[#ff5a1f] hover:text-[#ff5a1f]"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="p-5">
                <div
                  className="relative overflow-hidden bg-[#111420]"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 34px) 0, 100% 34px, 100% 100%, 34px 100%, 0 calc(100% - 34px))",
                  }}
                >
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="h-[360px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090817]/80 via-transparent to-transparent" />
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Player", selected.player],
                    ["Duration", selected.duration],
                    ["Views", selected.views],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="border border-white/10 bg-white/[0.04] p-4"
                    >
                      <p className="font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.2em] text-[#ff5a1f]">
                        {label}
                      </p>
                      <p className="mt-2 font-['Orbitron'] text-lg font-black uppercase">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-base font-medium leading-8 text-white/65">
                  {selected.description}
                </p>

                <button className="mt-8 inline-flex items-center gap-3 bg-[#ff5a1f] px-8 py-5 font-['Orbitron'] text-sm font-black uppercase tracking-[0.1em] text-white [clip-path:polygon(10%_0,90%_0,100%_50%,90%_100%,10%_100%,0_50%)]">
                  <Play size={16} fill="currentColor" />
                  Watch Full Clip
                </button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}