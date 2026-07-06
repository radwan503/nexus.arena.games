// components/TopStreamersSection.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Radio,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";

const smooth = [0.16, 1, 0.3, 1] as const;

const streamers = [
  {
    name: "Sky Hunter",
    role: "FPS Commander",
    viewers: "18.4K",
    image:
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=90&w=1200&auto=format&fit=crop",
  },
  {
    name: "Phoenix",
    role: "Battle Royale",
    viewers: "15.2K",
    image:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=90&w=1200&auto=format&fit=crop",
  },
  {
    name: "Max Jett",
    role: "Speed Runner",
    viewers: "12.8K",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=90&w=1200&auto=format&fit=crop",
  },
  {
    name: "Brimstone",
    role: "Tactical Leader",
    viewers: "10.9K",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=90&w=1200&auto=format&fit=crop",
  },
  {
    name: "Mad Raze",
    role: "Arena Slayer",
    viewers: "9.6K",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=90&w=1200&auto=format&fit=crop",
  },
  {
    name: "Nova Ghost",
    role: "Ranked Pro",
    viewers: "8.7K",
    image:
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=90&w=1200&auto=format&fit=crop",
  },
];

function StreamerFX() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 45,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: false,
        powerPreference: "high-performance",
      }}
    >
      <ambientLight intensity={1} />

      <Stars
        radius={90}
        depth={45}
        count={650}
        factor={3}
        fade
        speed={0.35}
      />
    </Canvas>
  );
}

export default function TopStreamersSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const visibleStreamers = useMemo(() => {
    return [
      ...streamers.slice(active),
      ...streamers.slice(0, active),
    ].slice(0, 5);
  }, [active]);

  const next = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % streamers.length);
  };

  const prev = () => {
    setDirection(-1);

    setActive(
      (prev) =>
        (prev - 1 + streamers.length) % streamers.length
    );
  };

  const goToSlide = (index: number) => {
    if (index === active) return;

    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  return (
    <section
      id="streamers"
      className="
        relative
        left-1/2
        w-screen
        max-w-none
        -translate-x-1/2
        overflow-hidden
        bg-[#090817]
        text-white
      "
    >
      {/* Background image */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          scale-105
          bg-cover
          bg-center
          bg-no-repeat
          opacity-[0.12]
        "
        style={{
          backgroundImage:
            "url('/banner_bg.f969e99a.jpg')",
        }}
      />

      {/* Main dark overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-[#090817]/95
          via-[#10102a]/92
          to-[#090817]
        "
      />

      {/* Ambient gaming glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_16%,rgba(255,90,31,0.15),transparent_28%),radial-gradient(circle_at_12%_78%,rgba(124,92,255,0.14),transparent_30%)]
        "
      />

      {/* Three.js stars */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <StreamerFX />
      </div>

      {/* Left decorative line */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-[45%]
          h-px
          w-20
          bg-gradient-to-r
          from-[#ff5a1f]
          to-transparent
          sm:w-32
          lg:w-40
        "
      />

      {/* Right decorative line */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-[30%]
          h-px
          w-20
          bg-gradient-to-l
          from-[#ff5a1f]
          to-transparent
          sm:w-32
          lg:w-40
        "
      />

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

          pt-16
          pb-28

          sm:pt-20
          sm:pb-36

          lg:pt-20
          lg:pb-40

          xl:pt-24
          xl:pb-44

          2xl:pt-28
          2xl:pb-48
        "
      >
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 28,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.8,
            ease: smooth,
          }}
          className="
            w-full
            px-5
            text-center
            sm:px-8
            lg:px-10
          "
        >
          <p
            className="
              font-['Orbitron']
              text-[10px]
              font-black
              uppercase
              tracking-[0.28em]
              text-[#ff5a1f]
              sm:text-xs
              sm:tracking-[0.34em]
            "
          >
            Our Top Streamers
          </p>

          <h2
            className="
              mx-auto
              mt-4
              max-w-[1500px]
              font-['Orbitron']
              text-[clamp(2.4rem,5.5vw,6.5rem)]
              font-black
              uppercase
              leading-[0.88]
              tracking-[-0.06em]
              sm:mt-5
            "
          >
            Top Rated Streamers
          </h2>

          <div
            className="
              mx-auto
              mt-6
              h-2
              w-16
              bg-[#ff5a1f]
              sm:mt-7
              sm:w-20
              [clip-path:polygon(0_0,100%_0,85%_100%,15%_100%)]
            "
          />
        </motion.div>

        {/* Slider */}
        <div
          className="
            relative
            mt-10
            w-full
            overflow-hidden
            sm:mt-12
            lg:mt-14
            2xl:mt-16
          "
        >
          <AnimatePresence
            initial={false}
            mode="wait"
            custom={direction}
          >
            <motion.div
              key={active}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction > 0 ? 100 : -100,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -100 : 100,
                filter: "blur(8px)",
              }}
              transition={{
                duration: 0.65,
                ease: smooth,
              }}
              className="
                grid
                w-full
                grid-cols-1
                gap-3
                px-4

                sm:grid-cols-2
                sm:gap-4
                sm:px-6

                lg:grid-cols-4
                lg:gap-3
                lg:px-8

                xl:gap-4
                xl:px-10

                2xl:grid-cols-5
                2xl:gap-5
                2xl:px-12
              "
            >
              {visibleStreamers.map(
                (streamer, index) => (
                  <motion.article
                    key={`${streamer.name}-${active}`}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.05,
                      ease: smooth,
                    }}
                    className={`
                      group
                      relative
                      min-h-[420px]
                      overflow-hidden
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-1.5
                      shadow-[0_30px_90px_rgba(0,0,0,0.35)]

                      sm:min-h-[460px]
                      lg:min-h-[410px]
                      xl:min-h-[460px]
                      2xl:min-h-[520px]

                      ${
                        index === 4
                          ? "lg:hidden 2xl:block"
                          : ""
                      }
                    `}
                  >
                    {/* Hover border */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        z-30
                        border
                        border-[#ff5a1f]
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    {/* Card inner */}
                    <div
                      className="
                        relative
                        h-full
                        min-h-[inherit]
                        overflow-hidden
                        bg-[#151926]
                      "
                    >
                      <img
                        src={streamer.image}
                        alt={streamer.name}
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                          object-center
                          opacity-75
                          grayscale
                          transition
                          duration-700
                          ease-out

                          group-hover:scale-[1.065]
                          group-hover:opacity-100
                          group-hover:grayscale-0
                        "
                      />

                      {/* Image overlay */}
                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#090817]
                          via-[#090817]/30
                          to-transparent
                        "
                      />

                      {/* Orange hover glow */}
                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#ff5a1f]/18
                          via-transparent
                          to-transparent
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover:opacity-100
                        "
                      />

                      {/* Live indicator */}
                      <div
                        className="
                          absolute
                          left-4
                          top-4
                          z-20
                          inline-flex
                          -translate-y-2
                          items-center
                          gap-2
                          bg-[#ff5a1f]
                          px-3
                          py-2
                          font-['Orbitron']
                          text-[9px]
                          font-black
                          uppercase
                          tracking-[0.16em]
                          text-white
                          opacity-0
                          transition-all
                          duration-300

                          group-hover:translate-y-0
                          group-hover:opacity-100

                          sm:left-5
                          sm:top-5
                        "
                      >
                        <span className="relative flex h-2 w-2">
                          <span
                            className="
                              absolute
                              inline-flex
                              h-full
                              w-full
                              animate-ping
                              bg-white
                              opacity-70
                            "
                          />

                          <span className="relative inline-flex h-2 w-2 bg-white" />
                        </span>

                        <Radio size={11} />

                        Live
                      </div>

                      {/* Number */}
                      <span
                        className="
                          absolute
                          right-4
                          top-4
                          z-10
                          font-['Orbitron']
                          text-xs
                          font-black
                          text-white/25

                          sm:right-5
                          sm:top-5
                        "
                      >
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      {/* Card content */}
                      <div
                        className="
                          absolute
                          inset-x-0
                          bottom-0
                          z-20
                          p-5
                          sm:p-6
                          xl:p-7
                        "
                      >
                        <p
                          className="
                            translate-y-3
                            font-['Orbitron']
                            text-[9px]
                            font-black
                            uppercase
                            tracking-[0.2em]
                            text-[#ff5a1f]
                            opacity-0
                            transition-all
                            duration-300

                            group-hover:translate-y-0
                            group-hover:opacity-100

                            sm:text-[10px]
                          "
                        >
                          {streamer.role}
                        </p>

                        <h3
                          className="
                            mt-2
                            font-['Orbitron']
                            text-xl
                            font-black
                            uppercase
                            leading-none
                            tracking-[-0.03em]

                            sm:text-2xl
                            lg:text-xl
                            xl:text-2xl
                            2xl:text-[1.65rem]
                          "
                        >
                          {streamer.name}
                        </h3>

                        <p
                          className="
                            mt-3
                            flex
                            items-center
                            gap-2
                            text-xs
                            font-bold
                            text-white/55
                            sm:text-sm
                          "
                        >
                          <Users
                            size={15}
                            className="shrink-0 text-[#ff5a1f]"
                          />

                          {streamer.viewers} viewers
                        </p>
                      </div>
                    </div>
                  </motion.article>
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider controls */}
        <div
          className="
            mt-9
            flex
            items-center
            justify-center
            gap-3
            px-4

            sm:mt-10
            sm:gap-5

            lg:mt-12
          "
        >
          <button
            type="button"
            onClick={prev}
            aria-label="Previous streamers"
            className="
              group
              grid
              h-11
              w-11
              shrink-0
              place-items-center
              border
              border-white/10
              bg-white/[0.06]
              text-white
              transition
              duration-300

              hover:border-[#ff5a1f]
              hover:bg-[#ff5a1f]

              sm:h-12
              sm:w-12
            "
          >
            <ChevronLeft
              size={22}
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />
          </button>

          {/* Pagination */}
          <div className="flex items-center gap-2 sm:gap-3">
            {streamers.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${
                  index + 1
                }`}
                className={`
                  h-1.5
                  transition-all
                  duration-500

                  ${
                    active === index
                      ? "w-7 bg-[#ff5a1f] sm:w-10"
                      : "w-3 bg-white/25 hover:bg-white/60 sm:w-4"
                  }
                `}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next streamers"
            className="
              group
              grid
              h-11
              w-11
              shrink-0
              place-items-center
              border
              border-white/10
              bg-white/[0.06]
              text-white
              transition
              duration-300

              hover:border-[#ff5a1f]
              hover:bg-[#ff5a1f]

              sm:h-12
              sm:w-12
            "
          >
            <ChevronRight
              size={22}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </div>
      </div>

      {/* Responsive bottom gaming transition */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-[90px]
          overflow-hidden
          sm:h-[110px]
          lg:h-[130px]
          xl:h-[150px]

        "
      >
        {/* Orange outline */}
        <div
          className="
            absolute
            inset-0
            bg-[#ff5a1f]

            [clip-path:polygon(0_68%,16%_68%,20%_34%,47%_34%,50%_0,53%_34%,80%_34%,84%_68%,100%_68%,100%_72%,83%_72%,79%_40%,54%_40%,50%_8%,46%_40%,21%_40%,17%_72%,0_72%)]
          "
        />

  
    


      </div>
    </section>
  );
}