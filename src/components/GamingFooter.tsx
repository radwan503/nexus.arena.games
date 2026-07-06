// components/GamingFooter.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  Gamepad2,
  Instagram,
  MessageCircle,
  Twitch,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { FormEvent, useRef, useState } from "react";

const smooth = [0.16, 1, 0.3, 1] as const;

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "#home" },
      { label: "Games", href: "#games" },
      { label: "Streamers", href: "#streamers" },
      { label: "Matches", href: "#matches" },
    ],
  },
  {
    title: "Arena",
    links: [
      { label: "Tournaments", href: "#tournaments" },
      { label: "Moments", href: "#moments" },
      { label: "News", href: "#news" },
      { label: "Leaderboard", href: "#leaderboard" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Studio", href: "#studio" },
      { label: "Partners", href: "#brands" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const socialLinks: {
  label: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    label: "Discord",
    href: "#",
    icon: MessageCircle,
  },
  {
    label: "Twitch",
    href: "#",
    icon: Twitch,
  },
  {
    label: "YouTube",
    href: "#",
    icon: Youtube,
  },
  {
    label: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    label: "X",
    href: "#",
    icon: Twitter,
  },
];

function FooterFX() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1} />

      <Stars
        radius={90}
        depth={45}
        count={500}
        factor={3}
        fade
        speed={0.3}
      />
    </Canvas>
  );
}

export default function GamingFooter() {
  const footerRef = useRef<HTMLElement | null>(null);

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });

  const logoX = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const logoY = useTransform(scrollYProgress, [0, 1], ["12%", "-8%"]);
  const glowX = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");

    window.setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden bg-[#090817] text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(255,90,31,0.16),transparent_30%),radial-gradient(circle_at_88%_70%,rgba(124,92,255,0.13),transparent_32%)]" />

      {/* Stars */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <FooterFX />
      </div>

      {/* Moving glow */}
      <motion.div
        style={{ x: glowX }}
        className="pointer-events-none absolute -bottom-[30%] left-[20%] h-[600px] w-[60%] rounded-full bg-[#ff5a1f]/10 blur-[160px]"
      />

      {/* Top orange line */}
      {/* <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff5a1f] to-transparent" /> */}

      {/* Main footer */}
      <div className="relative z-20 px-4 pb-[220px] pt-20 sm:px-6 sm:pb-[270px] sm:pt-24 lg:px-10 lg:pb-[340px] lg:pt-28 xl:px-16 2xl:px-20">
        {/* Top CTA */}
        <div className="grid gap-12  lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              filter: "blur(12px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.85,
              ease: smooth,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff5a1f] opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#ff5a1f]" />
              </span>

              <p className="font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.3em] text-[#ff5a1f] sm:text-xs">
                Arena Network Online
              </p>
            </div>

            <h2 className="mt-6 max-w-6xl font-['Orbitron'] text-[clamp(2.7rem,7vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]">
              Ready To Enter
              <span className="block text-[#ff5a1f]">The Arena?</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: smooth,
            }}
            className="lg:pb-2"
          >
            <p className="max-w-xl text-base font-medium leading-8 text-white/55">
              Get tournament updates, game releases, match schedules, exclusive
              arena drops, and the latest competitive gaming news.
            </p>

            <form
              onSubmit={handleSubmit}
              className="relative mt-7 flex max-w-xl items-center border border-white/10 bg-white/[0.045] p-2 backdrop-blur-xl transition focus-within:border-[#ff5a1f]/70"
            >
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="ENTER YOUR EMAIL"
                required
                className="min-w-0 flex-1 bg-transparent px-4 py-3 font-['Orbitron'] text-xs font-bold uppercase tracking-[0.1em] text-white outline-none placeholder:text-white/25 sm:px-5"
              />

              <motion.button
                type="submit"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.96 }}
                aria-label="Subscribe"
                className="grid h-12 w-14 shrink-0 place-items-center bg-[#ff5a1f] text-white transition hover:bg-white hover:text-[#090817] [clip-path:polygon(16%_0,100%_0,84%_100%,0_100%)]"
              >
                <ArrowRight size={20} />
              </motion.button>
            </form>

            <AnimatePresence>
              {submitted && (
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  className="mt-3 font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.16em] text-[#ff5a1f]"
                >
                  Transmission received. Welcome to the arena.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Links area */}
        <div className="grid gap-14  sm:py-16 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          {/* Brand info */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: smooth,
            }}
          >
            <a href="#home" className="inline-flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center bg-[#ff5a1f] [clip-path:polygon(20%_0,100%_0,100%_80%,80%_100%,0_100%,0_20%)]">
                <Gamepad2 size={27} strokeWidth={2.5} />
              </div>

              <div>
                <p className="font-['Orbitron'] text-2xl font-black uppercase leading-none tracking-[-0.06em]">
                  NEXUS
                </p>

                <p className="mt-1 font-['Orbitron'] text-[9px] font-black uppercase tracking-[0.3em] text-[#ff5a1f]">
                  Gaming Network
                </p>
              </div>
            </a>

            <p className="mt-7 max-w-md text-sm font-medium leading-7 text-white/45">
              A global competitive gaming ecosystem built for players,
              streamers, teams, tournaments, and the next generation of arena
              experiences.
            </p>

            {/* Socials */}
            <div className="mt-8 flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.94 }}
                    className="group grid h-12 w-12 place-items-center border border-white/10 bg-white/[0.035] text-white/50 transition duration-300 hover:border-[#ff5a1f] hover:bg-[#ff5a1f] hover:text-white"
                  >
                    <Icon size={19} strokeWidth={2.2} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footerLinks.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{
                  opacity: 0,
                  y: 28,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: groupIndex * 0.08,
                  ease: smooth,
                }}
              >
                <p className="font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.26em] text-[#ff5a1f]">
                  {group.title}
                </p>

                <ul className="mt-6 space-y-4">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 7 }}
                        className="group/link inline-flex items-center gap-3 font-['Orbitron'] text-sm font-black uppercase tracking-[-0.02em] text-white/55 transition hover:text-white"
                      >
                        <span className="h-px w-0 bg-[#ff5a1f] transition-all duration-300 group-hover/link:w-5" />
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom info */}
        <div className="flex flex-col gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-['Orbitron'] text-[9px] font-bold uppercase tracking-[0.16em] text-white/30 sm:text-[10px]">
            © {new Date().getFullYear()} Nexus Arena. All systems operational.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#privacy"
              className="font-['Orbitron'] text-[9px] font-bold uppercase tracking-[0.14em] text-white/30 transition hover:text-[#ff5a1f]"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="font-['Orbitron'] text-[9px] font-bold uppercase tracking-[0.14em] text-white/30 transition hover:text-[#ff5a1f]"
            >
              Terms
            </a>

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-3 font-['Orbitron'] text-[9px] font-black uppercase tracking-[0.16em] text-white/45 transition hover:text-[#ff5a1f]"
            >
              Back To Top

              <span className="grid h-10 w-10 place-items-center border border-white/10 bg-white/[0.04] transition group-hover:border-[#ff5a1f] group-hover:bg-[#ff5a1f] group-hover:text-white">
                <ArrowUp size={16} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* HUGE BACKGROUND LOGO */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[210px] overflow-hidden sm:h-[270px] md:h-[320px] lg:h-[390px]"
      >
        <motion.div
          style={{
            x: logoX,
            y: logoY,
          }}
          className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-['Orbitron'] text-[clamp(7rem,23vw,27rem)] font-black uppercase leading-[0.7] tracking-[-0.1em] text-white/[0.035]"
        >
          NEXUS
        </motion.div>

        <motion.div
          style={{ x: logoX }}
          className="absolute bottom-[4%] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-['Orbitron'] text-[clamp(7rem,23vw,27rem)] font-black uppercase leading-[0.7] tracking-[-0.1em] text-transparent opacity-[0.12] [-webkit-text-stroke:1px_#ff5a1f]"
        >
          NEXUS
        </motion.div>


      </div>

      {/* Bottom gaming angle */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-3 bg-[#ff5a1f] [clip-path:polygon(0_70%,32%_70%,35%_0,65%_0,68%_70%,100%_70%,100%_100%,0_100%)]" />
    </footer>
  );
}