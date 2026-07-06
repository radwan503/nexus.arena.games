// components/BrandsSection.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowUpRight, Gamepad2, ShieldCheck } from "lucide-react";
import { useState } from "react";
import BrandGetStartedModal from "./Modal/BrandGetStartedModal";
import BrandLearnMoreModal from "./Modal/BrandLearnMoreModal";

const smooth = [0.16, 1, 0.3, 1] as const;

const brands = [
  "PGL",
  "RIOT GAMES",
  "CORSAIR",
  "RED BULL",
  "TENCENT",
  "MAN CITY",
  "KRAFTON",
  "UBISOFT",
  "AMAZON",
  "DISCORD",
  "EA",
  "TWITCH",
];

function BrandsFX() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1} />
      <Stars
        radius={90}
        depth={45}
        count={520}
        factor={3}
        fade
        speed={0.3}
      />
    </Canvas>
  );
}

function BrandItem({
  brand,
  index,
}: {
  brand: string;
  index: number;
}) {
  return (
    <div className="flex shrink-0 items-center">
      <motion.span
        whileHover={{ y: -4, scale: 1.04 }}
        transition={{ duration: 0.3, ease: smooth }}
        className="
          whitespace-nowrap
          px-6
          font-['Orbitron']
          text-[24px]
          font-black
          uppercase
          leading-none
          tracking-[-0.06em]
          text-[#090817]
          transition-colors
          duration-300
          hover:text-white
          sm:px-8
          sm:text-[32px]
          md:px-10
          md:text-[40px]
          lg:px-12
          lg:text-[50px]
          xl:text-[58px]
        "
      >
        {brand}
      </motion.span>

      <span
        aria-hidden="true"
        className="
          block
          h-2.5
          w-2.5
          shrink-0
          rotate-45
          bg-[#090817]
          sm:h-3
          sm:w-3
          lg:h-4
          lg:w-4
        "
      />
    </div>
  );
}

export default function BrandsSection() {
  const [openStart, setOpenStart] = useState(false);
const [openLearn, setOpenLearn] = useState(false);
  return (
    <>
    <section
      id="brands"
      className="
        relative
        left-1/2
        min-h-screen
        w-screen
        max-w-[100vw]
        -translate-x-1/2
        overflow-hidden
        bg-[#090817]
        text-white
      "
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,90,31,0.13),transparent_32%),radial-gradient(circle_at_88%_22%,rgba(0,210,255,0.11),transparent_34%),radial-gradient(circle_at_55%_82%,rgba(124,92,255,0.1),transparent_34%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
        <BrandsFX />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[repeating-radial-gradient(circle_at_50%_50%,transparent_0,transparent_22px,white_23px,transparent_24px)]" />

      {/* Main content */}
      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          w-full
          flex-col
          justify-center
          px-4
          pb-[210px]
          pt-24
          sm:px-6
          sm:pb-[260px]
          sm:pt-28
          md:pb-[290px]
          lg:px-10
          lg:pb-[330px]
          lg:pt-32
          xl:px-16
          xl:pb-[350px]
          2xl:px-20
        "
      >
        <div
          className="
            grid
            items-center
            gap-16
            sm:gap-20
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-14
            xl:gap-20
            2xl:gap-28
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: smooth }}
            className="max-w-4xl"
          >
            <p className="font-['Orbitron'] text-xs font-black uppercase tracking-[0.3em] text-[#ff5a1f]">
              Trusted Infrastructure
            </p>

            <h2 className="mt-5 font-['Orbitron'] text-[clamp(2.7rem,6vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.07em]">
              Competitive Gaming
              <span className="block text-[#ff5a1f]">At Any Scale</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-white/60 sm:text-lg">
              Power tournaments, branded hubs, community events, and global
              esports campaigns with a modern competition platform.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <motion.button
                type="button"
                onClick={() => setOpenStart(true)}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 bg-[#ff5a1f] px-8 py-5 font-['Orbitron'] text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-[#090817] [clip-path:polygon(10%_0,90%_0,100%_50%,90%_100%,10%_100%,0_50%)]"
              >
                Get Started
                <ArrowUpRight size={17} />
              </motion.button>

              <motion.button
                type="button"
                onClick={() => setOpenLearn(true)}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center rounded-none border border-white/10 bg-white/[0.035] px-8 py-5 font-['Orbitron'] text-sm font-black uppercase tracking-[0.1em] text-white/80 shadow-[0_18px_70px_rgba(0,0,0,0.18)] transition hover:border-[#ff5a1f] hover:text-[#ff5a1f]"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: smooth }}
            className="relative mx-auto w-full max-w-[920px]"
          >
            <div className="absolute -right-5 top-8 h-[82%] w-[86%] rounded-[2.2rem] bg-[#ff5a1f]/55 blur-[1px] [clip-path:polygon(12%_0,100%_10%,86%_100%,0_86%)]" />

            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#101420]/75 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl [clip-path:polygon(1%_3%,88%_0,100%_22%,92%_100%,12%_100%,0_78%)]">
              <img
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=90&w=1700&auto=format&fit=crop"
                alt="Gaming platform dashboard"
                className="h-[320px] w-full object-cover opacity-70 sm:h-[430px] lg:h-[540px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#090817]/90 via-[#090817]/34 to-[#ff5a1f]/10" />

              <div className="absolute left-5 top-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
                <ShieldCheck size={15} className="text-[#ff5a1f]" />

                <span className="font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.18em]">
                  Esports Control Hub
                </span>
              </div>

              <motion.div
                initial={{ y: 25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: smooth }}
                className="absolute bottom-5 right-5 w-[230px] rounded-2xl border border-white/10 bg-black/35 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <p className="font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.18em] text-white/50">
                    Live Capacity
                  </p>

                  <Gamepad2 size={16} className="text-[#ff5a1f]" />
                </div>

                <p className="mt-3 font-['Orbitron'] text-3xl font-black">
                  18,000
                </p>

                <div className="mt-3 h-1.5 rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "82%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: smooth }}
                    className="h-full rounded-full bg-[#ff5a1f]"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

{/* Full-width single-background angled marquee */}
<div
  className="
    absolute
    inset-x-0
    bottom-0
    z-30
    h-[165px]
    w-full
    overflow-hidden
    sm:h-[205px]
    md:h-[230px]
    lg:h-[270px]
  "
>
  {/* Dark transition shape */}
  <div
    className="
      absolute
      inset-0
      bg-[#090817]
      [clip-path:polygon(0_24%,100%_0,100%_100%,0_100%)]
    "
  />

  {/* One continuous orange marquee background */}
  <div
    className="
      absolute
      -left-[8vw]
      top-[48px]
      h-[88px]
      w-[116vw]
      origin-center
      rotate-[3deg]
      overflow-hidden
      bg-[#fa6736]
      sm:top-[62px]
      sm:h-[105px]
      md:top-[70px]
      md:h-[120px]
      lg:top-[84px]
      lg:h-[140px]
    "
  >
    {/* subtle top highlight */}
    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-white/30" />

    {/* subtle bottom depth */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-px bg-[#090817]/20" />

    {/* moving brand text */}
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        flex
        h-full
        w-max
        items-center
      "
    >
      {[0, 1].map((group) => (
        <div
          key={group}
          aria-hidden={group === 1}
          className="
            flex
            h-full
            shrink-0
            items-center
          "
        >
          {brands.map((brand, index) => (
            <BrandItem
              key={`${group}-${brand}-${index}`}
              brand={brand}
              index={index}
            />
          ))}
        </div>
      ))}
    </motion.div>

    {/* animated shine */}
    <motion.div
      animate={{
        x: ["-30vw", "130vw"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 2,
      }}
      className="
        pointer-events-none
        absolute
        inset-y-0
        z-20
        w-[18vw]
        -skew-x-[25deg]
        bg-gradient-to-r
        from-transparent
        via-white/15
        to-transparent
        blur-xl
      "
    />
  </div>
</div>
    </section>
    <BrandGetStartedModal open={openStart} onClose={() => setOpenStart(false)} />
    <BrandLearnMoreModal open={openLearn} onClose={() => setOpenLearn(false)} />
    </>
  );
}