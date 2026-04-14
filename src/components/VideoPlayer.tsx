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
      className="relative w-full min-h-screen bg-white flex items-center justify-center cursor-pointer py-16"
      onClick={onNext}
    >
      <div
        className="pixel-border bg-black p-2 relative"
        style={{ width: "min(55vw, 900px)" }}
      >
        <video
          ref={videoRef}
          src="/video.mp4"
          poster="/images/bg.jpg"
          className="w-full h-auto block"
          style={{ maxHeight: "60vh", objectFit: "contain" }}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 scanlines opacity-25 pointer-events-none" />
      </div>

      {/* Play/Pause Button */}
      <button
        className="absolute bottom-10 right-10 p-3 bg-white pixel-border-sm cursor-pointer hover:bg-black hover:text-white transition-colors"
        onClick={togglePlay}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </button>

      <div className="absolute top-10 left-10 font-pixel text-[10px] tracking-[0.3em] opacity-50">
        CLICK ANYWHERE TO CONTINUE
      </div>
    </motion.div>
  );
}
