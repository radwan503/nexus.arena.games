// components/BuildLogModal.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  Cpu,
  Play,
  Radio,
  ShieldCheck,
  Terminal,
  X,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type SVGProps,
} from "react";

const smooth = [0.16, 1, 0.3, 1] as const;

const terminalLogs = [
  "[BOOT] Nexus arena runtime initialized",
  "[SYNC] Loading Season 04 environment mesh",
  "[AI] Enemy behavior tree compiled successfully",
  "[MAP] Neon District collision pass complete",
  "[NET] Live tournament server connected",
  "[RENDER] Lighting pipeline optimized",
  "[CACHE] Arena textures cached successfully",
  "[AUTH] Player session token verified",
  "[SHADER] Compiling environment materials",
  "[WORLD] Streaming sector NX-04",
  "[AUDIO] Spatial combat audio initialized",
  "[PHYSICS] Runtime simulation stable",
  "[MATCH] Competitive lobby synchronized",
  "[SERVER] Arena node latency: 18ms",
  "[GPU] Dynamic shadows optimized",
  "[AI] Tactical navigation mesh updated",
  "[DATA] Player telemetry stream connected",
  "[BUILD] Deploying arena environment patch",
  "[SECURITY] Runtime integrity verified",
  "[SYSTEM] All combat systems operational",
];

type ConsoleLog = {
  id: number;
  text: string;
  time: string;
};

type StatusItem = {
  label: string;
  value: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const statusItems: StatusItem[] = [
  {
    label: "CPU",
    value: "87%",
    icon: Cpu,
  },
  {
    label: "SECURE",
    value: "ON",
    icon: ShieldCheck,
  },
  {
    label: "LIVE",
    value: "04",
    icon: Activity,
  },
];

export default function BuildLogModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [consoleLogs, setConsoleLogs] = useState<ConsoleLog[]>([]);
  const logIndexRef = useRef(0);
  const logIdRef = useRef(0);
  const consoleEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setConsoleLogs([]);
      logIndexRef.current = 0;
      return;
    }

    const printLog = () => {
      const text =
        terminalLogs[logIndexRef.current % terminalLogs.length];

      const time = new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      logIdRef.current += 1;

      setConsoleLogs((currentLogs) => {
        const updatedLogs = [
          ...currentLogs,
          {
            id: logIdRef.current,
            text,
            time,
          },
        ];

        return updatedLogs.slice(-14);
      });

      logIndexRef.current += 1;
    };

    printLog();

    const interval = window.setInterval(() => {
      printLog();
    }, 900);

    return () => {
      window.clearInterval(interval);
    };
  }, [open]);

  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [consoleLogs]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="
            fixed inset-0 z-[10000]
            overflow-y-auto
            bg-black/85
            backdrop-blur-xl
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div
            className="
              flex min-h-full
              items-start justify-center
              p-2
              sm:p-4
              lg:items-center
              lg:p-6
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 40,
                scale: 0.96,
              }}
              transition={{
                duration: 0.45,
                ease: smooth,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                grid
                w-full
                max-w-[1400px]
                overflow-hidden
                border border-[#ff5a1f]/40
                bg-[#090817]
                shadow-[0_0_120px_rgba(255,90,31,0.24)]

                lg:h-[min(92vh,850px)]
                lg:grid-cols-[1.05fr_0.95fr]
              "
            >
              {/* Background glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,90,31,0.18),transparent_32%),radial-gradient(circle_at_88%_82%,rgba(124,92,255,0.14),transparent_34%)]" />

              {/* LEFT SIDE */}
              <div
                className="
                  relative
                  border-b border-white/10
                  lg:flex lg:min-h-0 lg:flex-col
                  lg:border-b-0 lg:border-r
                "
              >
                {/* Header */}
                <div
                  className="
                    flex shrink-0
                    items-center justify-between
                    gap-3
                    border-b border-white/10
                    px-3 py-3
                    sm:px-5 sm:py-4
                  "
                >
                  <div className="min-w-0">
                    <p
                      className="
                        flex items-center gap-2
                        font-['Orbitron']
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.18em]
                        text-[#ff5a1f]
                        sm:text-[10px]
                        sm:tracking-[0.28em]
                      "
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff5a1f] opacity-70" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff5a1f]" />
                      </span>

                      Live Dev Console
                    </p>

                    <h3
                      className="
                        mt-1
                        truncate
                        font-['Orbitron']
                        text-base
                        font-black
                        uppercase
                        text-white
                        sm:text-xl
                        xl:text-2xl
                      "
                    >
                      Arena Build Log
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close build log modal"
                    className="
                      grid
                      h-10 w-10
                      shrink-0
                      place-items-center
                      border border-white/10
                      bg-white/[0.06]
                      text-white
                      transition
                      hover:border-[#ff5a1f]
                      hover:bg-[#ff5a1f]
                      sm:h-11 sm:w-11
                    "
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Video */}
                <div
                  className="
                    relative
                    aspect-video
                    w-full
                    overflow-hidden
                    bg-black
                    lg:min-h-0
                    lg:flex-1
                    lg:aspect-auto
                  "
                >
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube.com/embed/2gUtfBmw86Y?autoplay=1&rel=0"
                    title="Gaming build log video"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#090817] to-transparent sm:h-24" />
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div
                className="
                  relative
                  flex
                  min-h-0
                  flex-col
                  p-3
                  sm:p-5
                  lg:overflow-hidden
                  lg:p-6
                  xl:p-8
                "
              >
                {/* System status */}
                <div
                  className="
                    mb-3
                    flex shrink-0
                    items-center justify-between
                    border border-white/10
                    bg-white/[0.035]
                    p-3
                    sm:mb-5
                    sm:p-4
                  "
                >
                  <div>
                    <p className="font-['Orbitron'] text-[8px] font-black uppercase tracking-[0.18em] text-white/35 sm:text-[10px] sm:tracking-[0.24em]">
                      System Status
                    </p>

                    <h4 className="mt-1 font-['Orbitron'] text-lg font-black uppercase text-white sm:mt-2 sm:text-2xl">
                      Build Active
                    </h4>
                  </div>

                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff5a1f] opacity-70" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[#ff5a1f]" />
                  </span>
                </div>

                {/* Status */}
                <div
                  className="
                    grid shrink-0
                    grid-cols-3
                    gap-2
                    sm:gap-3
                  "
                >
                  {statusItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.label}
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.15 + index * 0.08,
                          ease: smooth,
                        }}
                        className="
                          border border-white/10
                          bg-black/25
                          p-2.5
                          sm:p-4
                        "
                      >
                        <Icon
                          className="text-[#ff5a1f]"
                          width={18}
                          height={18}
                        />

                        <p className="mt-2 font-['Orbitron'] text-[7px] font-black uppercase tracking-[0.14em] text-white/35 sm:mt-4 sm:text-[9px] sm:tracking-[0.2em]">
                          {item.label}
                        </p>

                        <p className="mt-1 font-['Orbitron'] text-sm font-black uppercase text-white sm:text-xl">
                          {item.value}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* LIVE TERMINAL */}
                <div
                  className="
                    mt-3
                    flex
                    min-h-[240px]
                    flex-1
                    flex-col
                    overflow-hidden
                    border border-white/10
                    bg-black/45
                    sm:mt-5
                    sm:min-h-[300px]
                    lg:min-h-0
                  "
                >
                  {/* Terminal header */}
                  <div
                    className="
                      flex shrink-0
                      items-center justify-between
                      border-b border-white/10
                      px-3 py-2.5
                      sm:px-4 sm:py-3
                    "
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Terminal
                        size={16}
                        className="text-[#ff5a1f]"
                      />

                      <p className="font-['Orbitron'] text-[8px] font-black uppercase tracking-[0.16em] text-white/45 sm:text-[10px] sm:tracking-[0.2em]">
                        Runtime Feed
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff5a1f] opacity-70" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff5a1f]" />
                      </span>

                      <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#ff5a1f] sm:text-[9px]">
                        Streaming
                      </span>
                    </div>
                  </div>

                  {/* Continuous logs */}
                  <div
                    className="
                      min-h-0
                      flex-1
                      overflow-y-auto
                      p-3
                      [scrollbar-color:#ff5a1f_transparent]
                      [scrollbar-width:thin]
                      sm:p-4
                    "
                  >
                    <AnimatePresence initial={false}>
                      {consoleLogs.map((log) => (
                        <motion.div
                          key={log.id}
                          initial={{
                            opacity: 0,
                            x: -10,
                            filter: "blur(4px)",
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                          }}
                          transition={{
                            duration: 0.25,
                            ease: smooth,
                          }}
                          className="
                            mb-2
                            flex
                            items-start
                            gap-2
                            font-mono
                            text-[9px]
                            leading-5
                            text-white/55
                            sm:text-[11px]
                            xl:text-xs
                          "
                        >
                          <span className="shrink-0 text-white/20">
                            {log.time}
                          </span>

                          <span className="shrink-0 text-[#ff5a1f]">
                            &gt;
                          </span>

                          <span className="break-words">
                            {log.text}
                          </span>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {/* Typing cursor */}
                    <div className="flex items-center gap-2 font-mono text-[10px] text-[#ff5a1f] sm:text-xs">
                      <span>&gt;</span>

                      <motion.span
                        animate={{
                          opacity: [1, 0, 1],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                        }}
                        className="h-4 w-2 bg-[#ff5a1f]"
                      />
                    </div>

                    <div ref={consoleEndRef} />
                  </div>
                </div>

                {/* Footer */}
                <div
                  className="
                    mt-3
                    flex shrink-0
                    items-center gap-3
                    border border-white/10
                    bg-white/[0.035]
                    p-3
                    sm:mt-5
                    sm:p-4
                  "
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center bg-[#ff5a1f] text-white sm:h-10 sm:w-10">
                    <Play size={14} fill="currentColor" />
                  </span>

                  <p className="font-['Orbitron'] text-[7px] font-black uppercase leading-4 tracking-[0.12em] text-white/45 sm:text-[9px] sm:leading-5 sm:tracking-[0.18em]">
                    Live studio build log / map pipeline / gameplay systems
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}