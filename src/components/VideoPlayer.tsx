import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { Play, Pause } from "lucide-react";

interface VideoPlayerProps {
  onNext: () => void;
}

export default function VideoPlayer({ onNext }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full h-screen bg-black flex items-center justify-center cursor-pointer"
      onClick={onNext}
    >
      <video
        ref={videoRef}
        src="/video.mp4"
        poster="/images/bg.jpg"
        className="w-full h-full object-contain"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />

      {/* Play/Pause Button */}
      <button
        className="absolute bottom-10 right-10 p-4 bg-white/10 backdrop-blur-sm border-2 border-white/40 cursor-pointer hover:bg-white/25 transition-colors"
        onClick={togglePlay}
      >
        {isPlaying ? <Pause className="text-white" size={20} /> : <Play className="text-white" size={20} />}
      </button>

      <div className="absolute top-10 left-10 text-white font-pixel text-[10px] tracking-[0.3em] opacity-60">
        CLICK ANYWHERE TO CONTINUE
      </div>
    </motion.div>
  );
}
