import { motion } from "motion/react";

interface HomeProps {
  onNext: () => void;
}

export default function Home({ onNext }: HomeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center cursor-pointer"
      onClick={onNext}
    >
      {/* Background Image — tiled / cover */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="/images/bg.jpg"
          alt="十里千路"
          className="w-full h-full object-cover"
          style={{ imageRendering: "pixelated" }}
        />
        {/* Fade lower half to page background */}
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#f0ead6] via-[#f0ead6]/70 to-transparent" />
        <div className="absolute inset-0 scanlines opacity-25" />
      </motion.div>

      {/* Horizontal Logo — slow fade in */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 2.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center px-6"
      >
        <img
          src="/images/logo-horizontal.png"
          alt="十里千路"
          className="max-w-[80vw] md:max-w-[640px] w-full h-auto drop-shadow-[4px_4px_0_rgba(0,0,0,0.15)]"
          style={{ imageRendering: "pixelated" }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-10 text-[10px] tracking-[0.4em] font-pixel animate-pulse"
        >
          CLICK TO START
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
