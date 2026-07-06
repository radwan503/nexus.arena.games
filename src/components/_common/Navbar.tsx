// components/EsportsNavbar.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ExploreGamesDrawer from "../ExploreGamesDrawer";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Games", href: "#games" },
  { label: "Studio", href: "#studio" },
  { label: "Streamers", href: "#streamers" },
  { label: "Matches", href: "#matches" },
  { label: "News", href: "#news" },
];

const smooth = [0.16, 1, 0.3, 1] as const;

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      aria-label="Nexus Arena home"
      className="group flex shrink-0 items-center gap-3"
    >
      {/* Gaming symbol */}
      <div className="relative h-[50px] w-[54px] shrink-0">
        {/* Glow */}
        <div className="absolute inset-1 bg-[#ff5a1f]/40 blur-xl transition-all duration-500 group-hover:bg-[#ff5a1f]/60" />

        {/* Dark outer shell */}
        <div
          className={`absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04] ${
            light ? "bg-[#121212]" : "bg-white"
          }`}
          style={{
            clipPath:
              "polygon(16% 0, 84% 0, 100% 20%, 88% 78%, 50% 100%, 12% 78%, 0 20%)",
          }}
        />

        {/* Orange inner core */}
        <div
          className="absolute inset-[2px] overflow-hidden bg-[#ff5a1f]"
          style={{
            clipPath:
              "polygon(17% 0, 83% 0, 100% 21%, 87% 76%, 50% 100%, 13% 76%, 0 21%)",
          }}
        >
          {/* Dark diagonal cut */}
          <div
            className={`absolute -right-2 -top-3 h-[70px] w-[24px] rotate-[18deg] ${
              light ? "bg-[#121212]" : "bg-[#090817]"
            }`}
          />

          {/* Subtle highlight */}
          <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-br from-white/20 to-transparent" />

          {/* NX monogram */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="relative -translate-y-[1px] font-['Orbitron'] text-[14px] font-black italic tracking-[-0.12em] text-white">
              NX
            </span>
          </div>
        </div>

        {/* Top tactical notch */}
        <div
          className={`absolute left-1/2 top-0 h-[5px] w-[14px] -translate-x-1/2 ${
            light ? "bg-[#f4f1ea]" : "bg-[#090817]"
          }`}
          style={{
            clipPath: "polygon(20% 0, 80% 0, 100% 100%, 0 100%)",
          }}
        />

        {/* Energy points */}
        <span className="absolute -left-1 top-[19px] h-[2px] w-[8px] bg-[#ff5a1f] transition-all duration-500 group-hover:-left-2 group-hover:w-[12px]" />

        <span className="absolute -right-1 top-[19px] h-[2px] w-[8px] bg-[#ff5a1f] transition-all duration-500 group-hover:-right-2 group-hover:w-[12px]" />

        {/* Bottom core */}
        <span className="absolute bottom-[7px] left-1/2 h-[4px] w-[4px] -translate-x-1/2 rotate-45 bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
      </div>

      {/* Wordmark */}
      <div className="relative leading-none">
        <div className="mb-[5px] flex items-center gap-2">
          <span className="h-[2px] w-4 bg-[#ff5a1f] transition-all duration-500 group-hover:w-7" />

          <span className="font-['Orbitron'] text-[8px] font-black uppercase tracking-[0.42em] text-[#ff5a1f]">
            Nexus
          </span>
        </div>

        <div className="flex items-end gap-1">
          <span
            className={`font-['Orbitron'] text-[21px] font-black uppercase leading-[0.8] tracking-[-0.08em] transition-colors duration-300 ${
              light ? "text-[#121212]" : "text-white"
            }`}
          >
            Arena
          </span>

          <span className="mb-[1px] h-[5px] w-[5px] bg-[#ff5a1f]" />
        </div>
      </div>
    </a>
  );
}

export default function EsportsNavbar() {
  const [open, setOpen] = useState(false);
  const [openGames, setOpenGames] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-10 xl:px-10 2xl:px-16">
        <nav className="mx-auto flex h-[76px] max-w-[1800px] items-center justify-between border border-white/10 bg-[#090817]/70 px-4 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:px-5 lg:px-6">
          <Logo />

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative flex h-11 items-center gap-2 px-4 font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.16em] text-white/55 transition hover:text-white xl:px-5"
              >
                <span className="text-[8px] text-[#ff5a1f]/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 bg-[#ff5a1f] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
            type="button"
            onClick={() => setOpenGames(true)}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.97 }}
            className="hidden h-12 items-center gap-3 bg-[#ff5a1f] px-6 font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#090817] md:flex [clip-path:polygon(10%_0,90%_0,100%_50%,90%_100%,10%_100%,0_50%)]"
            >
            Explore
            <ArrowUpRight size={15} />
            </motion.button>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="group grid h-12 w-12 place-items-center border border-white/10 bg-white/[0.06] text-white transition hover:border-[#ff5a1f] hover:bg-[#ff5a1f]"
            >
              <Menu size={24} strokeWidth={1.8} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] overflow-y-auto bg-[#f4f1ea]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-24 items-center justify-between border-b border-[#121212]/10 px-5 sm:px-8 lg:px-16 xl:px-24">
              <Logo light />

              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-12 w-12 place-items-center border border-[#121212]/15 text-[#121212] transition hover:border-[#ff5a1f] hover:bg-[#ff5a1f] hover:text-white"
              >
                <X size={22} />
              </button>
            </div>

            <div className="px-5 py-8 sm:px-8 lg:px-16 xl:px-24">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: index * 0.06, ease: smooth }}
                  className="group flex items-center justify-between border-b border-[#121212]/10 py-5 sm:py-6"
                >
                  <div className="flex items-start gap-4 sm:gap-7">
                    <span className="mt-2 font-['Orbitron'] text-[10px] font-black tracking-[0.2em] text-[#ff5a1f] sm:mt-4">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-['Orbitron'] text-[clamp(2.2rem,7vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.08em] text-[#121212] transition duration-500 group-hover:translate-x-3 group-hover:text-[#ff5a1f]">
                      {item.label}
                    </span>
                  </div>

                  <div className="grid h-10 w-10 shrink-0 place-items-center border border-[#121212]/15 transition group-hover:border-[#ff5a1f] group-hover:bg-[#ff5a1f] group-hover:text-white sm:h-14 sm:w-14">
                    <ArrowUpRight size={20} />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        <ExploreGamesDrawer
        open={openGames}
        onClose={() => setOpenGames(false)}
      />
    </>
  );
}