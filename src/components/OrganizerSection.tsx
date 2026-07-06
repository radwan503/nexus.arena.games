// components/OrganizerSection.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Banknote,
  Brackets,
  Cog,
  Palette,
  Radio,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useState } from "react";
import LearnMoreModal from "./Modal/LearnMoreModal";
import GetStartedModal from "./Modal/GetStartedModal";

const smooth = [0.16, 1, 0.3, 1] as const;

const features = [
  {
    icon: Cog,
    title: "Save Costs",
    text: "Automate registrations, brackets, scoring, and admin work.",
  },
  {
    icon: Brackets,
    title: "All Formats",
    text: "Run solo, duo, squad, league, knockout, or custom events.",
  },
  {
    icon: Palette,
    title: "Custom Spaces",
    text: "Create branded tournament hubs for teams, fans, and sponsors.",
  },
  {
    icon: Banknote,
    title: "Payout Ready",
    text: "Handle prize pools, payments, rewards, and monetized events.",
  },
];

function OrganizerFX() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1} />
      <Stars radius={90} depth={45} count={600} factor={3} fade speed={0.35} />
    </Canvas>
  );
}

export default function OrganizerSection() {
  const [openStart, setOpenStart] = useState(false);
  const [openLearn, setOpenLearn] = useState(false);
  return (
    <>
    <section
      id="organizers"
      className="relative left-1/2 min-h-screen w-screen -translate-x-1/2 overflow-hidden bg-[#090817] text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(255,90,31,0.18),transparent_30%),radial-gradient(circle_at_18%_78%,rgba(124,92,255,0.16),transparent_32%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-20">
        <OrganizerFX />
      </div>

      <div className="relative z-10 px-4 pb-36 pt-24 sm:px-6 sm:pb-44 lg:px-10 lg:pb-52 xl:px-16 2xl:px-20">
        <div className="grid min-h-[520px] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: smooth }}
          >
            <p className="font-['Orbitron'] text-xs font-black uppercase tracking-[0.28em] text-[#ff5a1f]">
              Organizers
            </p>

            <h2 className="mt-5 max-w-3xl font-['Orbitron'] text-[clamp(2.6rem,5.4vw,5.8rem)] font-black uppercase leading-[0.92] tracking-[-0.06em]">
              Automate Tournament
              <span className="block text-[#ff5a1f]">Operations</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-white/60 sm:text-lg">
              Build branded competitions, manage brackets, publish schedules,
              track teams, and run prize events from one powerful arena system.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <motion.button 
                type="button"
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setOpenStart(true)}
                className="inline-flex items-center justify-center gap-3 bg-[#ff5a1f] px-8 py-5 font-['Orbitron'] text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-[#090817] [clip-path:polygon(10%_0,90%_0,100%_50%,90%_100%,10%_100%,0_50%)]"
              >
                Get Started
                <ArrowUpRight size={17} />
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center border border-white/10 bg-white/[0.06] px-8 py-5 font-['Orbitron'] text-sm font-black uppercase tracking-[0.1em] text-white/80 transition hover:border-[#ff5a1f] hover:text-[#ff5a1f]"
                onClick={() => setOpenLearn(true)}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.12, ease: smooth }}
            className="relative mx-auto w-full max-w-[860px]"
          >
            <div className="absolute -right-4 top-8 h-[78%] w-[80%] bg-[#ff5a1f] opacity-80 [clip-path:polygon(8%_0,100%_8%,92%_100%,0_90%)]" />

            <div className="relative overflow-hidden border border-white/10 bg-[#111420] shadow-[0_45px_130px_rgba(0,0,0,0.45)] [clip-path:polygon(0_0,92%_0,100%_16%,94%_100%,8%_100%,0_86%)]">
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=90&w=1600&auto=format&fit=crop"
                alt="Tournament management dashboard"
                className="h-[320px] w-full object-cover opacity-80 sm:h-[430px] lg:h-[520px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#090817]/90 via-[#090817]/20 to-[#ff5a1f]/20" />

              <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full border border-white/10 bg-black/35 px-4 py-2 backdrop-blur">
                <Radio size={14} className="text-[#ff5a1f]" />
                <span className="font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.18em]">
                  Live Tournament Hub
                </span>
              </div>

              <div className="absolute bottom-5 right-5 grid gap-3 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Users size={18} className="text-[#ff5a1f]" />
                  <span className="font-['Orbitron'] text-sm font-black">
                    2,738 Players
                  </span>
                </div>
                <div className="h-1.5 w-44 bg-white/10">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "78%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: smooth }}
                    className="h-full bg-[#ff5a1f]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: index * 0.06, ease: smooth }}
                className="group border border-white/10 bg-white/[0.035] p-6 transition hover:border-[#ff5a1f]/60 hover:bg-white/[0.06]"
              >
                <div className="grid h-12 w-12 place-items-center border border-white/10 text-[#ff5a1f] transition group-hover:border-[#ff5a1f] group-hover:bg-[#ff5a1f] group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 font-['Orbitron'] text-lg font-black uppercase">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-white/55">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.85, ease: smooth }}
          className="relative mt-20 overflow-hidden border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:p-10"
        >
          <img
            src="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=90&w=1800&auto=format&fit=crop"
            alt="Large esports arena"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#090817] via-[#090817]/75 to-[#090817]/35" />

          <div className="relative grid min-h-[300px] items-end gap-8 lg:grid-cols-[1fr_280px]">
            <div>
              <div className="grid h-20 w-20 place-items-center border border-[#ff5a1f]/50 bg-[#ff5a1f]/10 text-[#ff5a1f]">
                <ShieldCheck size={34} />
              </div>

              <h3 className="mt-10 max-w-3xl font-['Orbitron'] text-[clamp(1.8rem,3vw,3.4rem)] font-black uppercase leading-tight">
                Major finals powered by automated tournament systems
              </h3>

              <a
                href="#story"
                className="mt-6 inline-flex items-center gap-3 font-['Orbitron'] text-sm font-black uppercase tracking-[0.12em] text-[#ff5a1f]"
              >
                Read full story
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom shape matching previous sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-1 z-20 h-[70px] w-full overflow-hidden sm:h-[90px] md:h-[110px] lg:h-[140px] xl:h-[170px]"
      >
        <div className="absolute inset-0 bg-[#ff5a1f] [clip-path:polygon(0_82%,28%_82%,31%_62%,48%_62%,50%_34%,52%_62%,69%_62%,72%_82%,100%_82%,100%_100%,0_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[calc(100%-6px)] bg-[#090817] [clip-path:polygon(0_86%,29%_86%,32%_68%,48%_68%,50%_42%,52%_68%,68%_68%,71%_86%,100%_86%,100%_100%,0_100%)]" />

        <motion.div
          animate={{ x: ["-100%", "420%"], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1,
          }}
          className="absolute bottom-[15%] left-0 h-px w-[28%] bg-gradient-to-r from-transparent via-[#ff5a1f] to-transparent"
        />
      </div>
    </section>
    <GetStartedModal open={openStart} onClose={() => setOpenStart(false)} />
    <LearnMoreModal open={openLearn} onClose={() => setOpenLearn(false)} />
    </>
  );
}