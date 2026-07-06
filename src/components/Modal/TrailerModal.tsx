// components/TrailerModal.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

const smooth = [0.16, 1, 0.3, 1] as const;

export default function TrailerModal({
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
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 40 }}
            transition={{ duration: 0.45, ease: smooth }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl overflow-hidden border border-[#ff5a1f]/40 bg-[#090817] shadow-[0_0_100px_rgba(255,90,31,0.25)]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.28em] text-[#ff5a1f]">
                  Official Trailer
                </p>
                <h3 className="mt-1 font-['Orbitron'] text-xl font-black uppercase text-white">
                  Arena Gameplay Preview
                </h3>
              </div>

              <button
                onClick={onClose}
                className="grid h-11 w-11 place-items-center border border-white/10 bg-white/[0.06] text-white transition hover:border-[#ff5a1f] hover:bg-[#ff5a1f]"
              >
                <X size={22} />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/2gUtfBmw86Y?autoplay=1&rel=0"
                title="Gaming trailer"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}