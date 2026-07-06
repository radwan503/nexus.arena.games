// components/UpcomingMatchesSection.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  Gamepad2,
  Radio,
  Trophy,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const smooth = [0.16, 1, 0.3, 1] as const;

const matches = [
  {
    date: "MON 24",
    event: "OMEGA CUP",
    stage: "Semi Final",
    teamA: "VOID KINGS",
    teamB: "FOX REAPERS",
    time: "7:00 PM CET",
    map: "Neon District",
    prize: "$25K",
    status: "Live Soon",
  },
  {
    date: "WED 26",
    event: "RIFT SERIES",
    stage: "Group Stage",
    teamA: "ROGUE WOLVES",
    teamB: "IRON PULSE",
    time: "9:30 PM CET",
    map: "Cyber Rift",
    prize: "$18K",
    status: "Scheduled",
  },
  {
    date: "FRI 28",
    event: "SHADOW LEAGUE",
    stage: "Grand Final",
    teamA: "NOVA RAMS",
    teamB: "BEASTBORN",
    time: "11:00 PM CET",
    map: "Dark Harbor",
    prize: "$50K",
    status: "Finals",
  },
  {
    date: "SUN 30",
    event: "NEXUS WAR",
    stage: "Qualifier",
    teamA: "CYBER RAIDERS",
    teamB: "DARK UNIT",
    time: "8:00 PM CET",
    map: "Iron Valley",
    prize: "$12K",
    status: "Open Lobby",
  },
  {
    date: "TUE 02",
    event: "BLAZE ARENA",
    stage: "Pro League",
    teamA: "RIFT HUNTERS",
    teamB: "OMEGA CORE",
    time: "10:00 PM CET",
    map: "Lava Point",
    prize: "$30K",
    status: "Scheduled",
  },
];

function MatchFX() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1} />
      <Stars radius={90} depth={45} count={600} factor={3} fade speed={0.35} />
    </Canvas>
  );
}

export default function UpcomingMatchesSection() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <section
        id="matches"
        className="relative left-1/2 min-h-screen w-screen -translate-x-1/2 overflow-hidden bg-[#090817] text-white"
      >
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat opacity-[0.12]"
          style={{ backgroundImage: "url('/banner_bg.f969e99a.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#090817]/96 via-[#10102a]/94 to-[#090817]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,90,31,0.16),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(124,92,255,0.15),transparent_32%)]" />

        <div className="pointer-events-none absolute inset-0 opacity-20">
          <MatchFX />
        </div>

        <div className="relative z-10 flex min-h-screen w-full flex-col justify-center px-4 pb-36 pt-24 sm:px-6 sm:pb-44 lg:px-10 lg:pb-52 xl:px-16 2xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: smooth }}
            className="mx-auto max-w-6xl text-center"
          >
            <span className="inline-flex bg-[#ff5a1f] px-6 py-3 font-['Orbitron'] text-xs font-black uppercase tracking-[0.24em] text-white [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)]">
              Competition Schedule
            </span>

            <h2 className="mt-6 font-['Orbitron'] text-[clamp(2.6rem,6vw,6.8rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
              Upcoming Battles
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-white/55 sm:text-base">
              Live arena matchups, elite squads, and competitive prize events.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 w-full max-w-[1500px]">
            <div className="mb-4 hidden px-10 font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.22em] text-white/35 lg:grid lg:grid-cols-[140px_1fr_90px_1fr_280px]">
              <span>Event</span>
              <span>Team Alpha</span>
              <span className="text-center">Versus</span>
              <span className="text-right">Team Omega</span>
              <span className="text-right">Match Info</span>
            </div>

            <div className="space-y-4">
              {matches.slice(0, 3).map((match, index) => (
                <motion.div
                  key={match.event}
                  initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.72, delay: index * 0.08, ease: smooth }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-[#ff5a1f]/35 transition-all duration-500 group-hover:bg-[#ff5a1f] group-hover:shadow-[0_0_60px_rgba(255,90,31,0.22)] [clip-path:polygon(0_0,calc(100%-34px)_0,100%_50%,calc(100%-34px)_100%,0_100%,22px_50%)]" />

                  <div className="relative m-px bg-[#0e101b]/95 px-8 py-7 backdrop-blur-xl transition-all duration-500 group-hover:bg-[#151522] sm:px-10 lg:px-12 lg:py-8 [clip-path:polygon(0_0,calc(100%-34px)_0,100%_50%,calc(100%-34px)_100%,0_100%,22px_50%)]">
                    <div className="absolute left-0 top-1/2 h-14 w-7 -translate-y-1/2 bg-[#ff5a1f] transition-all duration-500 group-hover:w-10 [clip-path:polygon(0_0,100%_50%,0_100%)]" />

                    <div className="relative grid items-center gap-7 lg:grid-cols-[140px_1fr_90px_1fr_280px]">
                      <div>
                        <p className="font-['Orbitron'] text-xs font-black uppercase tracking-[0.2em] text-[#ff5a1f]">
                          {match.date}
                        </p>
                        <p className="mt-2 font-['Orbitron'] text-lg font-black uppercase">
                          {match.event}
                        </p>
                        <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-white/35">
                          {match.stage}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="grid h-14 w-16 shrink-0 place-items-center border border-white/10 bg-white/[0.04] text-[#ff5a1f] transition-all duration-500 group-hover:border-[#ff5a1f] group-hover:bg-[#ff5a1f]/10 [clip-path:polygon(0_0,78%_0,100%_50%,78%_100%,0_100%,18%_50%)]">
                          <Trophy size={22} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35">
                            Challenger
                          </p>
                          <h3 className="mt-1 font-['Orbitron'] text-2xl font-black uppercase tracking-[-0.04em] sm:text-3xl">
                            {match.teamA}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center justify-start lg:justify-center">
                        <div className="grid h-14 w-[72px] place-items-center border border-[#ff5a1f]/30 bg-[#101420] transition-all duration-500 group-hover:border-[#ff5a1f] group-hover:bg-[#ff5a1f] [clip-path:polygon(18%_0,82%_0,100%_50%,82%_100%,18%_100%,0_50%)]">
                          <span className="font-['Orbitron'] text-lg font-black text-[#ff5a1f] transition-colors group-hover:text-white">
                            VS
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 lg:justify-end">
                        <div className="lg:text-right">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35">
                            Opponent
                          </p>
                          <h3 className="mt-1 font-['Orbitron'] text-2xl font-black uppercase tracking-[-0.04em] sm:text-3xl">
                            {match.teamB}
                          </h3>
                        </div>
                        <div className="grid h-14 w-16 shrink-0 place-items-center border border-white/10 bg-white/[0.04] text-[#ff5a1f] transition-all duration-500 group-hover:border-[#ff5a1f] group-hover:bg-[#ff5a1f]/10 [clip-path:polygon(22%_0,100%_0,82%_50%,100%_100%,22%_100%,0_50%)]">
                          <Gamepad2 size={22} />
                        </div>
                      </div>

                      <div className="grid gap-3 lg:justify-end lg:text-right">
                        <p className="inline-flex items-center gap-2 font-['Orbitron'] text-xs font-black uppercase text-white/65 lg:justify-end">
                          <Clock size={15} className="text-[#ff5a1f]" />
                          {match.time}
                        </p>
                        <p className="font-['Orbitron'] text-xs font-black uppercase tracking-[0.14em] text-white/45">
                          {match.map} / Prize {match.prize}
                        </p>
                        <div className="flex items-center gap-4 lg:justify-end">
                          <span className="inline-flex items-center gap-2 font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.18em] text-[#ff5a1f]">
                            <Radio size={13} />
                            {match.status}
                          </span>
                          <motion.a
                            href="#match"
                            whileHover={{ x: 5 }}
                            className="inline-flex items-center gap-2 font-['Orbitron'] text-xs font-black uppercase text-white/70 transition hover:text-[#ff5a1f]"
                          >
                            Details
                            <ArrowUpRight size={14} />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setDrawerOpen(true)}
            className="mx-auto mt-14 inline-flex items-center justify-center gap-3 bg-[#ff5a1f] px-9 py-5 font-['Orbitron'] text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-[#090817] [clip-path:polygon(10%_0,90%_0,100%_50%,90%_100%,10%_100%,0_50%)]"
          >
            View Full Schedule
            <ArrowUpRight size={17} />
          </button>
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
        {drawerOpen && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDrawerOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.55, ease: smooth }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-full overflow-y-auto border-l border-[#ff5a1f]/30 bg-[#090817] p-5 text-white shadow-[0_0_90px_rgba(255,90,31,0.18)] sm:w-[560px] lg:w-[920px]"
            >
              <div className="sticky top-0 z-10 -mx-5 mb-8 border-b border-white/10 bg-[#090817]/95 px-5 pb-5 pt-2 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-['Orbitron'] text-xs font-black uppercase tracking-[0.26em] text-[#ff5a1f]">
                      Full Schedule
                    </p>
                    <h3 className="mt-2 font-['Orbitron'] text-3xl font-black uppercase">
                      Match Calendar
                    </h3>
                  </div>

                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="grid h-12 w-12 place-items-center border border-white/10 bg-white/[0.06] text-white transition hover:border-[#ff5a1f] hover:text-[#ff5a1f]"
                    aria-label="Close schedule drawer"
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>

            {/* Drawer shaped match list */}
            <div className="space-y-4">
            {matches.map((match, index) => (
                <motion.div
                key={match.event}
                initial={{
                    opacity: 0,
                    x: 70,
                    clipPath: "inset(0 0 0 35%)",
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                    clipPath: "inset(0 0 0 0%)",
                }}
                transition={{
                    delay: 0.12 + index * 0.07,
                    duration: 0.65,
                    ease: smooth,
                }}
                className="group relative"
                >
                {/* Orange outer shape */}
                <div
                    className="
                    absolute
                    inset-0
                    bg-white/10
                    transition-all
                    duration-500
                    group-hover:bg-[#ff5a1f]
                    group-hover:shadow-[0_0_45px_rgba(255,90,31,0.2)]
                    [clip-path:polygon(0_0,calc(100%-34px)_0,100%_34px,100%_100%,34px_100%,0_calc(100%-34px))]
                    "
                />

                {/* Main dark shaped body */}
                <div
                    className="
                    relative
                    m-px
                    overflow-hidden
                    bg-[#0d0c19]/95
                    px-5
                    py-5
                    transition-all
                    duration-500
                    group-hover:bg-[#13111f]
                    sm:px-7
                    sm:py-6
                    [clip-path:polygon(0_0,calc(100%-34px)_0,100%_34px,100%_100%,34px_100%,0_calc(100%-34px))]
                    "
                >
                    {/* Animated energy sweep */}
                    <motion.div
                    initial={{ x: "-180%" }}
                    whileHover={{ x: "550%" }}
                    transition={{
                        duration: 1.15,
                        ease: smooth,
                    }}
                    className="pointer-events-none absolute inset-y-0 left-0 w-16 -skew-x-[20deg] bg-gradient-to-r from-transparent via-[#ff5a1f]/15 to-transparent"
                    />

                    {/* Top accent */}
                    <div className="absolute left-0 top-0 h-[3px] w-24 bg-[#ff5a1f] transition-all duration-500 group-hover:w-[45%]" />

                    {/* Bottom triangle */}
                    <div
                    className="
                        absolute
                        bottom-0
                        left-0
                        h-8
                        w-8
                        bg-[#ff5a1f]
                        transition-all
                        duration-500
                        group-hover:h-11
                        group-hover:w-11
                        [clip-path:polygon(0_0,0_100%,100%_100%)]
                    "
                    />

                    {/* Top row */}
                    <div className="relative flex items-start justify-between gap-4">
                    <div>
                        <div className="flex flex-wrap items-center gap-3">
                        <span
                            className="
                            bg-[#ff5a1f]
                            px-4
                            py-2
                            font-['Orbitron']
                            text-[10px]
                            font-black
                            uppercase
                            tracking-[0.2em]
                            text-white
                            [clip-path:polygon(0_0,calc(100%-10px)_0,100%_50%,calc(100%-10px)_100%,0_100%,8px_50%)]
                            "
                        >
                            {match.date}
                        </span>

                        <span className="font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.18em] text-white/35">
                            {match.stage}
                        </span>
                        </div>

                        <h4 className="mt-4 font-['Orbitron'] text-xl font-black uppercase tracking-[-0.04em] sm:text-2xl">
                        {match.event}
                        </h4>
                    </div>

                    <span className="inline-flex shrink-0 items-center gap-2 font-['Orbitron'] text-[9px] font-black uppercase tracking-[0.15em] text-[#ff5a1f] sm:text-[10px]">
                        <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff5a1f] opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff5a1f]" />
                        </span>

                        {match.status}
                    </span>
                    </div>

                    {/* Battle area */}
                    <div className="relative mt-6 grid items-center gap-4 sm:grid-cols-[1fr_70px_1fr]">
                    {/* Team A */}
                    <div className="flex items-center gap-3">
                        <div
                        className="
                            grid
                            h-12
                            w-14
                            shrink-0
                            place-items-center
                            border
                            border-white/10
                            bg-white/[0.04]
                            text-[#ff5a1f]
                            transition-all
                            duration-500
                            group-hover:border-[#ff5a1f]/70
                            group-hover:bg-[#ff5a1f]/10
                            [clip-path:polygon(0_0,75%_0,100%_50%,75%_100%,0_100%,16%_50%)]
                        "
                        >
                        <Trophy size={19} />
                        </div>

                        <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                            Alpha
                        </p>

                        <p className="mt-1 font-['Orbitron'] text-base font-black uppercase leading-tight sm:text-lg">
                            {match.teamA}
                        </p>
                        </div>
                    </div>

                    {/* VS shape */}
                    <div className="flex justify-start sm:justify-center">
                        <div
                        className="
                            relative
                            grid
                            h-12
                            w-16
                            place-items-center
                            bg-[#151522]
                            transition-all
                            duration-500
                            group-hover:bg-[#ff5a1f]
                            [clip-path:polygon(18%_0,82%_0,100%_50%,82%_100%,18%_100%,0_50%)]
                        "
                        >
                        <span className="font-['Orbitron'] text-sm font-black text-[#ff5a1f] transition-colors duration-500 group-hover:text-white">
                            VS
                        </span>

                        <span className="absolute inset-0 border border-[#ff5a1f]/25 [clip-path:polygon(18%_0,82%_0,100%_50%,82%_100%,18%_100%,0_50%)]" />
                        </div>
                    </div>

                    {/* Team B */}
                    <div className="flex items-center gap-3 sm:flex-row-reverse">
                        <div
                        className="
                            grid
                            h-12
                            w-14
                            shrink-0
                            place-items-center
                            border
                            border-white/10
                            bg-white/[0.04]
                            text-[#ff5a1f]
                            transition-all
                            duration-500
                            group-hover:border-[#ff5a1f]/70
                            group-hover:bg-[#ff5a1f]/10
                            [clip-path:polygon(25%_0,100%_0,84%_50%,100%_100%,25%_100%,0_50%)]
                        "
                        >
                        <Gamepad2 size={19} />
                        </div>

                        <div className="sm:text-right">
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                            Omega
                        </p>

                        <p className="mt-1 font-['Orbitron'] text-base font-black uppercase leading-tight sm:text-lg">
                            {match.teamB}
                        </p>
                        </div>
                    </div>
                    </div>

                    {/* Bottom match information */}
                    <div className="relative mt-6 grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-3 sm:items-center">
                    <span className="inline-flex items-center gap-2 font-['Orbitron'] text-[10px] font-black uppercase text-white/55">
                        <Clock size={13} className="text-[#ff5a1f]" />
                        {match.time}
                    </span>

                    <span className="font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.1em] text-white/40 sm:text-center">
                        {match.map}
                    </span>

                    <span className="font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.1em] text-[#ff5a1f] sm:text-right">
                        Prize {match.prize}
                    </span>
                    </div>

                    {/* Hover bottom energy line */}
                    <div className="absolute bottom-0 right-12 h-px w-0 bg-[#ff5a1f] transition-all duration-700 group-hover:w-[45%]" />
                </div>
                </motion.div>
            ))}
            </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}