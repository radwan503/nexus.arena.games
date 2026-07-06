"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Gamepad2,
  Play,
  Radio,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import ExploreGamesDrawer from "./ExploreGamesDrawer";
import TrailerModal from "./Modal/TrailerModal";

const smooth = [0.16, 1, 0.3, 1] as const;

const gameCards = [
  {
    number: "01",
    title: "Cyber Drift",
    type: "Racing",
    players: "12.8K",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=90&w=1400&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Shadow Core",
    type: "Tactical Shooter",
    players: "24.6K",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=90&w=1400&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Neon Arena",
    type: "Competitive Esports",
    players: "18.4K",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=90&w=1400&auto=format&fit=crop",
  },
];

export default function EsportsHero() {
      const [openGames, setOpenGames] = useState(false);
      const [openTrailer, setOpenTrailer] = useState(false);

      useEffect(() => {
        document.body.style.overflow = openTrailer ? "hidden" : "";
        return () => {
          document.body.style.overflow = "";
        };
      }, [openTrailer]);
  return (
    <>
    <section
      id="home"
      className="relative left-1/2 min-h-[100svh] w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden bg-[#090817] text-white"
    >
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat opacity-[0.12]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=90&w=2200&auto=format&fit=crop')",
        }}
      />

      {/* Main background overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#090817]/80 via-[#090817]/95 to-[#090817]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(255,90,31,0.2),transparent_28%),radial-gradient(circle_at_8%_82%,rgba(124,92,255,0.14),transparent_32%)]" />

      {/* Soft vertical light */}
      <motion.div
        animate={{
          x: ["-10%", "12%", "-10%"],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[5%] top-[10%] h-[70%] w-[40%] bg-[radial-gradient(ellipse_at_center,rgba(255,90,31,0.18),transparent_65%)] blur-[80px]"
      />

      {/* Animated top scan */}
      <motion.div
        animate={{ x: ["-40vw", "140vw"] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1,
        }}
        className="pointer-events-none absolute top-0 z-20 h-px w-[32vw] bg-gradient-to-r from-transparent via-[#ff5a1f] to-transparent shadow-[0_0_24px_rgba(255,90,31,0.8)]"
      />

      {/* Main content */}
      <main className="relative z-10 mx-auto grid min-h-[100svh] w-full items-center gap-14 px-4 pb-24 pt-32 sm:px-6 sm:pb-28 sm:pt-36 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10 lg:px-10 lg:pb-32 lg:pt-36 xl:gap-16 xl:px-16 2xl:px-20">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.95,
            ease: smooth,
          }}
          className="relative z-20 max-w-[900px]"
        >
          {/* Eyebrow */}
          <div className="mb-7 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-3 border-l-2 border-[#ff5a1f] pl-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff5a1f] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#ff5a1f]" />
              </span>

              <p className="font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.3em] text-[#ff5a1f] sm:text-xs">
                Season 06 Live Now
              </p>
            </div>

            <span className="hidden h-px w-16 bg-white/15 sm:block" />

            <span className="font-['Orbitron'] text-[9px] font-black uppercase tracking-[0.24em] text-white/35 sm:text-[10px]">
              Global Arena Network
            </span>
          </div>

          {/* Main title */}
          <h1 className="font-['Orbitron'] text-[clamp(4.2rem,10vw,10.5rem)] font-black uppercase leading-[0.78] tracking-[-0.095em]">
            Play
            <span className="relative block text-[#ff5a1f]">
              Beyond

              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.7,
                  ease: smooth,
                }}
                className="absolute -bottom-3 left-1 h-1 w-[32%] origin-left bg-[#ff5a1f]"
              />
            </span>
          </h1>

          {/* Description */}
          <p className="mt-10 max-w-2xl text-sm font-medium leading-7 text-white/52 sm:text-base sm:leading-8 lg:max-w-xl">
            Enter a competitive gaming universe built around elite titles,
            global tournaments, live creators, and unforgettable arena moments.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <motion.a
              type="button"
              whileHover={{ x: 6 }}
              onClick={() => setOpenGames(true)}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex min-h-16 items-center justify-between gap-8 bg-[#ff5a1f] px-7 font-['Orbitron'] text-xs font-black uppercase tracking-[0.12em] text-white sm:min-w-[230px]"
            >
              Explore Games

              <span className="grid h-9 w-9 place-items-center border border-white/25 bg-white/10 transition group-hover:bg-white group-hover:text-[#090817]">
                <ArrowUpRight size={17} />
              </span>
            </motion.a>

            <motion.button
              type="button"
              onClick={() => setOpenTrailer(true)}
              whileHover={{ x: 6 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex min-h-16 items-center justify-between gap-8 border border-white/12 bg-white/[0.04] px-7 font-['Orbitron'] text-xs font-black uppercase tracking-[0.12em] text-white transition hover:border-[#ff5a1f]/60 hover:bg-white/[0.07] sm:min-w-[220px]"
            >
              Watch Trailer
              <span className="grid h-9 w-9 place-items-center bg-white text-[#090817] transition group-hover:bg-[#ff5a1f] group-hover:text-white">
                <Play size={14} fill="currentColor" />
              </span>
            </motion.button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-white/10 py-5">
            <div>
              <p className="font-['Orbitron'] text-xl font-black sm:text-2xl">
                24K+
              </p>
              <p className="mt-1 text-[9px] font-black uppercase tracking-[0.2em] text-white/35">
                Online
              </p>
            </div>

            <div className="border-x border-white/10 px-5">
              <p className="font-['Orbitron'] text-xl font-black sm:text-2xl">
                180+
              </p>
              <p className="mt-1 text-[9px] font-black uppercase tracking-[0.2em] text-white/35">
                Events
              </p>
            </div>

            <div className="pl-5">
              <p className="font-['Orbitron'] text-xl font-black text-[#ff5a1f] sm:text-2xl">
                $2.4M
              </p>
              <p className="mt-1 text-[9px] font-black uppercase tracking-[0.2em] text-white/35">
                Prize Pool
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FEATURED GAMES */}
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
            filter: "blur(14px)",
          }}
          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: smooth,
          }}
          className="relative w-full"
        >
          {/* Orange background shape */}
          <div className="pointer-events-none absolute -right-8 top-10 hidden h-[82%] w-[72%] bg-[#ff5a1f]/15 lg:block" />

          {/* Main rectangle panel */}
          <div className="relative border border-white/10 bg-[#0d0c1a]/90 shadow-[0_40px_140px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-7 lg:px-6 xl:px-8">
              <div className="flex items-center gap-4">
                <div className="grid h-11 w-11 place-items-center bg-[#ff5a1f]">
                  <Gamepad2 size={20} />
                </div>

                <div>
                  <p className="font-['Orbitron'] text-[9px] font-black uppercase tracking-[0.24em] text-[#ff5a1f]">
                    Featured Library
                  </p>

                  <h2 className="mt-1 font-['Orbitron'] text-lg font-black uppercase tracking-[-0.04em] sm:text-xl">
                    Games Trending Now
                  </h2>
                </div>
              </div>

              <div className="hidden items-center gap-2 sm:flex">
                <span className="h-2 w-2 rounded-full bg-[#ff5a1f]" />
                <span className="font-['Orbitron'] text-[9px] font-black uppercase tracking-[0.2em] text-white/35">
                  Live Data
                </span>
              </div>
            </div>

            {/* Rectangle game list */}
            <div>
              {gameCards.map((game, index) => (
                <motion.article
                  key={game.title}
                  initial={{
                    opacity: 0,
                    x: 45,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: 0.3 + index * 0.12,
                    ease: smooth,
                  }}
                  className="group relative grid min-h-[145px] cursor-pointer grid-cols-[80px_1fr] overflow-hidden border-b border-white/10 last:border-b-0 sm:min-h-[170px] sm:grid-cols-[120px_1fr] lg:grid-cols-[105px_1fr] xl:grid-cols-[145px_1fr]"
                >
                  {/* Number */}
                  <div className="relative z-20 flex items-center justify-center border-r border-white/10 bg-[#090817]">
                    <span className="font-['Orbitron'] text-2xl font-black text-white/15 transition duration-500 group-hover:text-[#ff5a1f] sm:text-3xl">
                      {game.number}
                    </span>
                  </div>

                  {/* Image/content */}
                  <div className="relative overflow-hidden">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-75 group-hover:grayscale-0"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#090817]/95 via-[#090817]/55 to-[#090817]/20" />

                    {/* Animated hover fill */}
                    <div className="absolute inset-y-0 left-0 w-0 bg-[#ff5a1f]/10 transition-all duration-700 group-hover:w-full" />

                    <div className="relative z-10 flex h-full items-center justify-between gap-5 p-5 sm:p-7">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-['Orbitron'] text-[9px] font-black uppercase tracking-[0.22em] text-[#ff5a1f]">
                            {game.type}
                          </span>

                          <span className="h-px w-7 bg-white/20" />

                          <span className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.16em] text-white/45">
                            <Users size={11} />
                            {game.players}
                          </span>
                        </div>

                        <h3 className="mt-3 font-['Orbitron'] text-xl font-black uppercase leading-none tracking-[-0.05em] sm:text-3xl lg:text-2xl xl:text-3xl">
                          {game.title}
                        </h3>
                      </div>

                      <motion.div
                        whileHover={{ rotate: 45 }}
                        className="hidden h-12 w-12 shrink-0 place-items-center border border-white/15 bg-black/30 text-white transition group-hover:border-[#ff5a1f] group-hover:bg-[#ff5a1f] sm:grid"
                      >
                        <ArrowUpRight size={18} />
                      </motion.div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff5a1f] transition-all duration-700 group-hover:w-full" />
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Footer status */}
            <div className="flex items-center justify-between bg-[#070611] px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                <Radio size={13} className="text-[#ff5a1f]" />

                <span className="font-['Orbitron'] text-[9px] font-black uppercase tracking-[0.18em] text-white/40">
                  3 Featured Experiences
                </span>
              </div>

              <a
                href="#games"
                className="group inline-flex items-center gap-3 font-['Orbitron'] text-[9px] font-black uppercase tracking-[0.18em] text-white/60 transition hover:text-[#ff5a1f]"
              >
                View All

                <ArrowRight
                  size={14}
                  className="transition group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Floating rating */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-7 -left-5 hidden min-w-[200px] border border-white/10 bg-[#ff5a1f] p-5 shadow-[0_25px_70px_rgba(255,90,31,0.25)] sm:block lg:-left-8"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-11 w-11 place-items-center border border-white/25 bg-white/10">
                <Trophy size={19} />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <p className="font-['Orbitron'] text-2xl font-black">4.9</p>
                  <Sparkles size={15} />
                </div>

                <p className="mt-1 text-[9px] font-black uppercase tracking-[0.18em] text-white/70">
                  Player Rating
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Bottom section transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-2 bg-[#ff5a1f]">
        <motion.div
          animate={{ x: ["-100%", "500%"] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-y-0 left-0 w-[22%] bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </div>
    </section>
     <ExploreGamesDrawer
        open={openGames}
        onClose={() => setOpenGames(false)}
      />
      <TrailerModal
        open={openTrailer}
        onClose={() => setOpenTrailer(false)}
      />
    </>
  );
}