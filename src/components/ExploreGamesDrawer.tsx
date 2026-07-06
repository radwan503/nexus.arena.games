"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Gamepad2,
  Radio,
  Search,
  Star,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const smooth = [0.16, 1, 0.3, 1] as const;

const categories = ["All", "Shooter", "Racing", "Arena", "RPG", "Strategy"];

const games = [
  {
    title: "Shadow Core",
    category: "Shooter",
    players: "24.6K",
    rating: "4.9",
    status: "Live",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=90&w=1400&auto=format&fit=crop",
    desc: "Tactical FPS battles, ranked squads, fast maps, and live arena pressure.",
  },
  {
    title: "Cyber Drift",
    category: "Racing",
    players: "12.8K",
    rating: "4.7",
    status: "Hot",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=90&w=1400&auto=format&fit=crop",
    desc: "Neon speed tracks, drift combat, time trials, and team boost racing.",
  },
  {
    title: "Neon Arena",
    category: "Arena",
    players: "18.4K",
    rating: "4.8",
    status: "New",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=90&w=1400&auto=format&fit=crop",
    desc: "A competitive arena built for squads, creators, and seasonal events.",
  },
  {
    title: "Void Legacy",
    category: "RPG",
    players: "9.2K",
    rating: "4.6",
    status: "Beta",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=90&w=1400&auto=format&fit=crop",
    desc: "Dark RPG missions, raids, hero builds, and cinematic world progression.",
  },
  {
    title: "Iron Command",
    category: "Strategy",
    players: "7.8K",
    rating: "4.5",
    status: "Ranked",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=90&w=1400&auto=format&fit=crop",
    desc: "Tactical command battles with ranked leagues and squad coordination.",
  },
  {
    title: "Pulse Runner",
    category: "Racing",
    players: "11.5K",
    rating: "4.7",
    status: "Live",
    image:
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=90&w=1400&auto=format&fit=crop",
    desc: "High-speed cyber tracks, player ghosts, and weekly speed challenges.",
  },
];

type Game = (typeof games)[number];

function DrawerFX() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1} />
      <Stars radius={90} depth={45} count={650} factor={3} fade speed={0.28} />
    </Canvas>
  );
}

export default function ExploreGamesDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchCategory =
        activeCategory === "All" || game.category === activeCategory;
      const matchSearch = game.title.toLowerCase().includes(query.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [activeCategory, query]);

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
          className="fixed inset-0 z-[9999] h-[100dvh] w-screen overflow-y-auto bg-[#090817] text-white"
          initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
          exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.65, ease: smooth }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,90,31,0.2),transparent_30%),radial-gradient(circle_at_86%_78%,rgba(124,92,255,0.16),transparent_34%)]" />

          <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
            <DrawerFX />
          </div>

          <div className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-white/10 bg-[#090817]/80 px-4 backdrop-blur-xl sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
            <div>
              <p className="font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.28em] text-[#ff5a1f]">
                Game Vault
              </p>

              <h2 className="mt-1 font-['Orbitron'] text-xl font-black uppercase tracking-[-0.06em]">
                Explore Games
              </h2>
            </div>

            <button
              onClick={onClose}
              className="grid h-12 w-12 place-items-center border border-white/10 bg-white/[0.06] transition hover:border-[#ff5a1f] hover:bg-[#ff5a1f]"
              aria-label="Close explore games drawer"
            >
              <X size={22} />
            </button>
          </div>

          <section className="relative z-10 px-4 pb-24 pt-12 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <motion.div
                initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: smooth }}
              >
                <p className="font-['Orbitron'] text-xs font-black uppercase tracking-[0.3em] text-[#ff5a1f]">
                  Pick Your Arena
                </p>

                <h1 className="mt-5 font-['Orbitron'] text-[clamp(3.2rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.09em]">
                  Game
                  <span className="block text-[#ff5a1f]">Vault</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: smooth }}
                className="max-w-2xl lg:ml-auto"
              >
                <p className="text-sm font-medium leading-7 text-white/55 sm:text-base sm:leading-8">
                  Browse ranked titles, live arenas, player activity, and
                  featured worlds from one reusable full-screen drawer.
                </p>

                <div className="mt-7 flex border border-white/10 bg-white/[0.045] p-2 backdrop-blur-xl">
                  <div className="grid w-12 place-items-center text-[#ff5a1f]">
                    <Search size={18} />
                  </div>

                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="SEARCH GAME"
                    className="min-w-0 flex-1 bg-transparent font-['Orbitron'] text-xs font-bold uppercase tracking-[0.12em] text-white outline-none placeholder:text-white/25"
                  />
                </div>
              </motion.div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-3 font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.16em] transition ${
                    activeCategory === category
                      ? "bg-[#ff5a1f] text-white"
                      : "border border-white/10 bg-white/[0.035] text-white/50 hover:border-[#ff5a1f] hover:text-[#ff5a1f]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:gap-6">
              {filteredGames.map((game, index) => (
                <motion.article
                  key={game.title}
                  initial={{
                    opacity: 0,
                    y: 42,
                    filter: "blur(12px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.06,
                    ease: smooth,
                  }}
                  className="group relative"
                >
                  <div
                    className="pointer-events-none absolute -bottom-2 -right-2 h-[88%] w-[82%] bg-[#ff5a1f]/0 transition-all duration-500 group-hover:bg-[#ff5a1f]"
                    style={{
                      clipPath:
                        "polygon(12% 0, 100% 0, 100% 86%, 88% 100%, 0 100%, 0 14%)",
                    }}
                  />

                  <div
                    className="relative overflow-hidden border border-white/10 bg-[#0d0c19] transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border-[#ff5a1f]/60 group-hover:shadow-[0_35px_100px_rgba(255,90,31,0.12)]"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 46px) 0, 100% 46px, 100% 100%, 46px 100%, 0 calc(100% - 46px))",
                    }}
                  >
                    <div className="relative h-[300px] overflow-hidden sm:h-[340px] xl:h-[360px]">
                      <motion.img
                        src={game.image}
                        alt={game.title}
                        className="h-full w-full object-cover opacity-75 grayscale-[35%] transition-all duration-700 group-hover:scale-[1.07] group-hover:opacity-100 group-hover:grayscale-0"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#090817] via-[#090817]/20 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#090817]/55 via-transparent to-transparent" />

                      <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: "500%" }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                          repeatDelay: 1.5,
                        }}
                        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-transparent via-[#ff5a1f]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />

                      <div className="absolute left-0 top-0 z-20">
                        <div
                          className="grid h-[72px] w-[78px] place-items-start bg-[#ff5a1f] p-4"
                          style={{
                            clipPath: "polygon(0 0, 100% 0, 0 100%)",
                          }}
                        >
                          <span className="font-['Orbitron'] text-xs font-black text-white">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      <div className="absolute right-4 top-4 flex items-center gap-2">
                        <span className="inline-flex items-center gap-2 border border-white/10 bg-[#090817]/70 px-3 py-2 font-['Orbitron'] text-[9px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ff5a1f]" />
                          {game.status}
                        </span>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <p className="font-['Orbitron'] text-[9px] font-black uppercase tracking-[0.24em] text-[#ff5a1f]">
                              {game.category} / Nexus World
                            </p>

                            <h2 className="mt-2 max-w-[90%] font-['Orbitron'] text-[clamp(1.8rem,3vw,3rem)] font-black uppercase leading-[0.88] tracking-[-0.07em] text-white">
                              {game.title}
                            </h2>
                          </div>

                          <motion.div
                            animate={{ rotate: [0, 4, 0] }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="hidden h-12 w-12 shrink-0 place-items-center border border-white/15 bg-white/[0.08] text-[#ff5a1f] backdrop-blur-xl sm:grid"
                          >
                            <Gamepad2 size={20} />
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    <div className="relative px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
                      <p className="line-clamp-2 min-h-12 text-sm font-medium leading-6 text-white/45">
                        {game.desc}
                      </p>

                      <div className="mt-5 flex items-center gap-6 border-y border-white/10 py-4">
                        <div className="flex items-center gap-2.5">
                          <Users size={15} className="text-[#ff5a1f]" />

                          <div>
                            <p className="font-['Orbitron'] text-[8px] font-black uppercase tracking-[0.15em] text-white/30">
                              Online
                            </p>

                            <p className="mt-1 font-['Orbitron'] text-xs font-black uppercase text-white/80">
                              {game.players}
                            </p>
                          </div>
                        </div>

                        <div className="h-7 w-px bg-white/10" />

                        <div className="flex items-center gap-2.5">
                          <Star
                            size={15}
                            className="text-[#ff5a1f]"
                            fill="currentColor"
                          />

                          <div>
                            <p className="font-['Orbitron'] text-[8px] font-black uppercase tracking-[0.15em] text-white/30">
                              Rating
                            </p>

                            <p className="mt-1 font-['Orbitron'] text-xs font-black uppercase text-white/80">
                              {game.rating} / 5
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-[1fr_auto]">
                        <motion.button
                          type="button"
                          onClick={() => setSelectedGame(game)}
                          whileHover="hover"
                          whileTap={{ scale: 0.98 }}
                          className="group/game relative flex min-h-14 items-center justify-between overflow-hidden bg-[#ff5a1f] px-5 text-left"
                        >
                          <motion.span
                            variants={{
                              hover: {
                                x: "100%",
                              },
                            }}
                            transition={{ duration: 0.5, ease: smooth }}
                            className="absolute inset-0 -translate-x-full bg-white"
                          />

                          <span className="relative z-10">
                            <span className="block font-['Orbitron'] text-[8px] font-black uppercase tracking-[0.2em] text-white/60 transition-colors group-hover/game:text-[#090817]/45">
                              Discover
                            </span>

                            <span className="mt-1 block font-['Orbitron'] text-[11px] font-black uppercase tracking-[0.1em] text-white transition-colors group-hover/game:text-[#090817]">
                              Explore Game
                            </span>
                          </span>

                          <ArrowUpRight
                            size={18}
                            className="relative z-10 text-white transition-all duration-300 group-hover/game:rotate-45 group-hover/game:text-[#090817]"
                          />
                        </motion.button>

                        <motion.button
                          type="button"
                          onClick={() => setSelectedGame(game)}
                          whileHover="hover"
                          whileTap={{ scale: 0.97 }}
                          className="group/world relative flex min-h-14 items-center justify-between gap-4 overflow-hidden border border-white/10 bg-white/[0.035] px-5 transition-colors hover:border-[#ff5a1f]/60 sm:w-[155px]"
                        >
                          <span>
                            <span className="block font-['Orbitron'] text-[8px] font-black uppercase tracking-[0.2em] text-white/25">
                              Enter
                            </span>

                            <span className="mt-1 block font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.1em] text-white/70 transition-colors group-hover/world:text-white">
                              Explore World
                            </span>
                          </span>

                          <motion.span
                            variants={{
                              hover: {
                                rotate: 90,
                                scale: 1.1,
                              },
                            }}
                            transition={{ duration: 0.4, ease: smooth }}
                            className="text-[#ff5a1f]"
                          >
                            <ArrowRight size={17} />
                          </motion.span>
                        </motion.button>
                      </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-[3px] overflow-hidden bg-white/[0.04]">
                      <div className="h-full w-0 bg-[#ff5a1f] transition-all duration-700 ease-out group-hover:w-full" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-16 grid gap-5 lg:grid-cols-3">
              {[
                [
                  "Ranked Combat",
                  "Jump into live competitive queues with active squads.",
                ],
                [
                  "Season Drops",
                  "Unlock badges, cosmetics, arena titles, and rewards.",
                ],
                [
                  "Pro Events",
                  "Join brackets, team battles, and seasonal tournaments.",
                ],
              ].map(([title, text], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: smooth,
                  }}
                  className="border border-white/10 bg-white/[0.035] p-6"
                >
                  <div className="mb-6 grid h-12 w-12 place-items-center bg-[#ff5a1f]">
                    {index === 0 ? (
                      <Gamepad2 />
                    ) : index === 1 ? (
                      <Trophy />
                    ) : (
                      <Radio />
                    )}
                  </div>

                  <h3 className="font-['Orbitron'] text-xl font-black uppercase">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-white/50">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          <AnimatePresence>
            {selectedGame && (
              <motion.div
                className="fixed inset-0 z-[10000] bg-black/70 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedGame(null)}
              >
                <motion.aside
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.55, ease: smooth }}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute right-0 top-0 h-full w-full overflow-y-auto border-l border-[#ff5a1f]/30 bg-[#090817] text-white shadow-[0_0_90px_rgba(255,90,31,0.18)] sm:w-[560px] lg:w-[760px]"
                >
                  <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#090817]/95 p-5 backdrop-blur-xl">
                    <div>
                      <p className="font-['Orbitron'] text-xs font-black uppercase tracking-[0.26em] text-[#ff5a1f]">
                        Game Details
                      </p>

                      <h3 className="mt-2 font-['Orbitron'] text-3xl font-black uppercase">
                        {selectedGame.title}
                      </h3>
                    </div>

                    <button
                      onClick={() => setSelectedGame(null)}
                      className="grid h-12 w-12 place-items-center border border-white/10 bg-white/[0.06] transition hover:border-[#ff5a1f] hover:text-[#ff5a1f]"
                    >
                      <X size={22} />
                    </button>
                  </div>

                  <div className="p-5">
                    <div className="relative overflow-hidden border border-white/10 bg-white/[0.04]">
                      <img
                        src={selectedGame.image}
                        alt={selectedGame.title}
                        className="h-[380px] w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#090817]/80 via-transparent to-transparent" />
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                      {[
                        ["Mode", selectedGame.category],
                        ["Players", selectedGame.players],
                        ["Rating", selectedGame.rating],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="border border-white/10 bg-white/[0.04] p-4"
                        >
                          <p className="font-['Orbitron'] text-[10px] font-black uppercase tracking-[0.2em] text-[#ff5a1f]">
                            {label}
                          </p>

                          <p className="mt-2 font-['Orbitron'] text-lg font-black uppercase">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="mt-6 text-base font-medium leading-8 text-white/65">
                      {selectedGame.desc}
                    </p>

                    <button className="mt-8 inline-flex items-center gap-3 bg-[#ff5a1f] px-8 py-5 font-['Orbitron'] text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-[#090817]">
                      Enter Arena
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.aside>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}