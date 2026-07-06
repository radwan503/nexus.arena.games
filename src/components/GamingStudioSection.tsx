// components/GamingStudioSection.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play, Radio } from "lucide-react";
import { useRef, useState } from "react";
import ExploreGamesDrawer from "./ExploreGamesDrawer";
import BuildLogModal from "./Modal/BuildLogModal";

const smooth = [0.16, 1, 0.3, 1] as const;

const imageShape =
  "polygon(0% 8%, 88% 0%, 100% 18%, 92% 100%, 8% 92%)";

const stats = [
  { value: "40K", label: "Members" },
  { value: "12K", label: "Players" },
  { value: "30K", label: "Matches" },
];

function StudioFX() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: false }}
    >
      <Stars
        radius={90}
        depth={45}
        count={850}
        factor={3}
        fade
        speed={0.45}
      />
    </Canvas>
  );
}

export default function GamingStudioSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
   const [openGames, setOpenGames] = useState(false);
   const [openBuildLog, setOpenBuildLog] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-4%", "7%"]
  );

  const frameRotate = useTransform(
    scrollYProgress,
    [0, 1],
    ["-8deg", "5deg"]
  );

  const imageRotate = useTransform(
    scrollYProgress,
    [0, 1],
    ["3deg", "-2deg"]
  );

  const cutLineX = useTransform(
    scrollYProgress,
    [0, 1],
    ["-35%", "35%"]
  );

  return (
    <>
    <section
      ref={sectionRef}
      id="studio"
      className="relative min-h-screen w-full overflow-hidden bg-[#090817] px-4 py-24 text-white sm:px-6 lg:px-10 xl:px-16 2xl:px-20"
    >
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/banner_bg.f969e99a.jpg')",
        }}
      />

      {/* Background overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#090817]/95 via-[#111032]/90 to-[#090817]/82" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_38%,rgba(255,90,31,0.2),transparent_32%),radial-gradient(circle_at_18%_72%,rgba(124,92,255,0.18),transparent_34%)]" />

      {/* Stars */}
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <StudioFX />
      </div>

      {/* Bottom shape */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-[#070611] [clip-path:polygon(0_48%,100%_100%,100%_100%,0_100%)]" />

      <div className="relative z-10 grid min-h-[calc(100vh-12rem)] w-full items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] xl:gap-20">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 36,
            clipPath: "inset(0 0 20% 0)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            clipPath: "inset(0 0 0% 0)",
          }}
          viewport={{
            once: true,
            margin: "-120px",
          }}
          transition={{
            duration: 0.9,
            ease: smooth,
          }}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 font-['Orbitron'] text-xs font-black uppercase tracking-[0.22em] text-[#ff5a1f] backdrop-blur">
            <Radio size={13} />
            Studio Protocol
          </p>

          <h2 className="mt-6 font-['Orbitron'] text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.07em]">
            Forge The

            <span className="block text-[#ff5a1f] drop-shadow-[0_0_28px_rgba(255,90,31,0.35)]">
              Next Arena
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-white/65 sm:text-lg">
            Build cinematic worlds, ranked events, hero systems, and real-time
            tournament experiences for modern players.
          </p>

          {/* Stats */}
          <div className="mt-9 grid max-w-lg grid-cols-3 gap-3 sm:gap-5">
            {stats.map((item) => (
              <div
                key={item.label}
                className="border-l border-white/10 pl-3 sm:pl-4"
              >
                <p className="font-['Orbitron'] text-xl font-black text-white sm:text-3xl">
                  {item.value}
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white/50 sm:text-xs sm:tracking-[0.18em]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <motion.button
              type="button"
              onClick={() => setOpenGames(true)}
              initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              whileHover={{ x: 8 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 bg-[#ff5a1f] px-9 py-5 font-['Orbitron'] text-sm font-black uppercase tracking-[0.1em] text-white hover:bg-white hover:text-[#090817] [clip-path:polygon(10%_0,90%_0,100%_50%,90%_100%,10%_100%,0_50%)]"
            >
              Explore Worlds
              <ArrowUpRight size={17} />
            </motion.button>

            <motion.button
              type="button"
              onClick={() => setOpenBuildLog(true)}
              whileHover={{ x: 8 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-4 font-['Orbitron'] text-sm font-black uppercase tracking-[0.08em] text-white/85 transition-colors hover:text-[#ff5a1f] sm:justify-start"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 bg-white/10 text-[#ff5a1f] backdrop-blur-md">
                <Play size={17} fill="currentColor" />
              </span>
              Watch Build Log
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE AREA */}
        <motion.div
          initial={{
            opacity: 0,
            x: 70,
            clipPath: "inset(0 0 0 35%)",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            clipPath: "inset(0 0 0 0%)",
          }}
          viewport={{
            once: true,
            margin: "-120px",
          }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: smooth,
          }}
          className="relative mx-auto w-full max-w-[860px]"
        >
          {/* Orange background frame */}
          <motion.div
            style={{
              rotate: frameRotate,
              clipPath: imageShape,
            }}
            className="absolute -right-4 top-8 h-[82%] w-[84%] bg-[#ff5a1f] shadow-[0_0_90px_rgba(255,90,31,0.28)]"
          />

          {/* Image movement wrapper */}
          <motion.div
            style={{
              y: imageY,
              rotate: imageRotate,
            }}
            whileHover={{
              scale: 1.025,
            }}
            transition={{
              duration: 0.5,
              ease: smooth,
            }}
            className="relative mx-auto w-[92%]"
          >
            {/* 
              Animated border.
              Same exact polygon shape as image.
            */}
            <div
              className="gaming-image-border pointer-events-none absolute -inset-[4px]"
              style={{
                clipPath: imageShape,
              }}
            >
              <div className="gaming-image-border__light" />
            </div>

            {/* Dark gap between border and image */}
            <div
              className="pointer-events-none absolute -inset-[1px] bg-[#090817]"
              style={{
                clipPath: imageShape,
              }}
            />

            {/* Actual image */}
            <div
              className="group relative overflow-hidden bg-[#151926] shadow-[0_45px_130px_rgba(0,0,0,0.55)]"
              style={{
                clipPath: imageShape,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=90&w=1400&auto=format&fit=crop"
                alt="Modern gaming studio character"
                className="h-[320px] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 sm:h-[470px] lg:h-[560px]"
              />

              {/* Image overlays */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090817]/88 via-transparent to-[#ff5a1f]/18" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#090817]/25 via-transparent to-transparent" />

              {/* Scroll controlled light */}
              <motion.div
                style={{
                  x: cutLineX,
                }}
                className="pointer-events-none absolute inset-y-0 left-1/2 w-20 -skew-x-12 bg-white/10 blur-xl"
              />
            </div>
          </motion.div>

          {/* Bottom reveal line */}
          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.45,
              ease: smooth,
            }}
            className="absolute -bottom-5 left-[12%] h-px w-[76%] origin-left bg-gradient-to-r from-transparent via-[#ff5a1f] to-transparent"
          />

          {/* Live Build tag */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              delay: 0.35,
              ease: smooth,
            }}
            className="absolute bottom-8 right-4 hidden border border-white/10 bg-[#090817]/65 px-5 py-4 backdrop-blur-xl sm:block"
          >
            <p className="font-['Orbitron'] text-xs font-black uppercase tracking-[0.22em] text-[#ff5a1f]">
              Live Build
            </p>

            <p className="mt-1 text-sm font-bold text-white/70">
              Season 04 Environment
            </p>
          </motion.div>

          <span className="absolute -top-8 left-1/2 h-3 w-3 rounded-full bg-[#ff5a1f] shadow-[0_0_30px_rgba(255,90,31,0.8)]" />
        </motion.div>
      </div>
    </section>
      <ExploreGamesDrawer
        open={openGames}
        onClose={() => setOpenGames(false)}
      />
      <BuildLogModal
        open={openBuildLog}
        onClose={() => setOpenBuildLog(false)}
      />
    </>
  );
}