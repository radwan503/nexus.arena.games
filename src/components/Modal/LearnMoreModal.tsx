"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Brackets, Radio, ShieldCheck, X } from "lucide-react";
import { useEffect } from "react";

const smooth = [0.16, 1, 0.3, 1] as const;

export default function LearnMoreModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 px-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.45, ease: smooth }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden border border-white/10 bg-[#090817] p-5 text-white shadow-[0_0_110px_rgba(255,90,31,0.18)] sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center border border-white/10 bg-white/[0.06] hover:bg-[#ff5a1f]"
            >
              <X size={22} />
            </button>

            <p className="font-['Orbitron'] text-xs font-black uppercase tracking-[0.28em] text-[#ff5a1f]">
              Organizer System
            </p>

            <h2 className="mt-5 max-w-3xl font-['Orbitron'] text-[clamp(2.4rem,6vw,5rem)] font-black uppercase leading-[0.9] tracking-[-0.07em]">
              Built For
              <span className="block text-[#ff5a1f]">Esports Ops</span>
            </h2>

            <div className="mt-8 space-y-4">
              {[
                ["Live Brackets", "Run knockout, league, solo, duo, and squad formats.", Brackets],
                ["Control Hub", "Manage registrations, teams, scoring, and schedules.", Radio],
                ["Secure Events", "Protect payouts, access, and tournament rules.", ShieldCheck],
              ].map(([title, text, Icon]: any) => (
                <div key={title} className="flex gap-5 border border-white/10 bg-white/[0.04] p-5">
                  <Icon className="mt-1 shrink-0 text-[#ff5a1f]" size={24} />
                  <div>
                    <h3 className="font-['Orbitron'] text-lg font-black uppercase">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/55">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}