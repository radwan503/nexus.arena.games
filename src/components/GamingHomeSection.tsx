// components/GamesAboutSection.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import ExploreGamesDrawer from "./ExploreGamesDrawer";

const smooth = [0.16, 1, 0.3, 1] as const;

export default function GamesAboutSection() {
    const [openGames, setOpenGames] = useState(false);
  return (
    <>
    <section
      id="games"
      className="relative w-full overflow-hidden bg-[#090817] px-5 py-24 text-white sm:px-8 lg:px-16 xl:px-24"
    >
      {/* Same background structure, updated to hero colors */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_45%,rgba(255,90,31,0.13),transparent_28%),radial-gradient(circle_at_72%_30%,rgba(124,92,255,0.16),transparent_30%)]" />

      <div className="relative z-10 grid w-full items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        {/* IMAGE COMPOSITION */}
        <motion.div
          initial={{ opacity: 0, x: -50, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: smooth }}
          className="relative min-h-[460px] w-full"
        >
          {/* Main angular image */}
          <div
            className="absolute left-0 top-0 h-[330px] w-[78%] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 92% 82%, 72% 82%, 65% 100%, 0 100%)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=90&w=1200&auto=format&fit=crop"
              alt="Competitive gaming squad"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-[#090817]/55 via-transparent to-[#ff5a1f]/20" />
          </div>

          {/* Top triangle image */}
          <div
            className="absolute right-0 top-8 hidden h-[160px] w-[30%] overflow-hidden sm:block"
            style={{
              clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=90&w=900&auto=format&fit=crop"
              alt="Gaming battle station"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#7c5cff]/15" />
          </div>

          {/* Bottom angular image */}
          <div
            className="absolute bottom-0 right-3 h-[270px] w-[48%] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.5)]"
            style={{
              clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%, 0 22%)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=90&w=1000&auto=format&fit=crop"
              alt="Competitive esports player"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#090817]/65 via-transparent to-[#ff5a1f]/15" />
          </div>

          {/* Orange triangle accent */}
          <span
            className="absolute bottom-[18%] left-[17%] h-20 w-20 bg-[#ff5a1f]"
            style={{
              clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
            }}
          />

          {/* Purple outline triangle */}
          <span
            className="absolute right-[13%] top-[44%] h-24 w-24 bg-[#7c5cff]/40"
            style={{
              clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
            }}
          >
            <span
              className="absolute inset-[3px] bg-[#090817]"
              style={{
                clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
              }}
            />
          </span>

          <span className="absolute -left-3 top-1/2 h-3 w-3 rounded-full bg-[#ff5a1f] shadow-[0_0_30px_rgba(255,90,31,0.8)]" />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: smooth }}
          className="max-w-3xl"
        >
          <span className="inline-flex bg-[#ff5a1f] px-6 py-2 font-['Orbitron'] text-xs font-black uppercase tracking-[0.25em] text-white">
            Inside The Arena
          </span>

          <h2 className="mt-7 font-['Orbitron'] text-[clamp(3rem,7vw,6.5rem)] font-black uppercase leading-[0.95] tracking-[-0.06em]">
            Where Legends
            <span className="block text-[#ff5a1f]">Enter The Game</span>
          </h2>

          <div className="mt-4 h-3 w-48 bg-[#ff5a1f] [clip-path:polygon(0_60%,70%_20%,100%_60%,100%_75%,55%_45%,0_85%)]" />

          <p className="mt-8 max-w-2xl text-base font-medium leading-8 text-white/65 sm:text-lg">
            Enter cinematic worlds, master every challenge, and compete with
            players across a new generation of games.
          </p>

          <motion.a
            type="button"
            onClick={() => setOpenGames(true)}
            initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-3 bg-[#ff5a1f] px-8 py-5 font-['Orbitron'] text-sm font-black uppercase text-white transition hover:bg-white hover:text-[#090817]"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
            }}
          >
            Explore Worlds
            <ArrowUpRight size={17} />
          </motion.a>
        </motion.div>
      </div>
    </section>
    <ExploreGamesDrawer
    open={openGames}
    onClose={() => setOpenGames(false)}
    />
    </>
  );
}