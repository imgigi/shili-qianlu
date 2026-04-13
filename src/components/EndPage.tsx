import { motion } from "motion/react";

export default function EndPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#e8e1c8] flex items-center justify-center p-8 relative"
    >
      <div className="absolute inset-0 scanlines opacity-15 pointer-events-none" />

      <div className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Business Card featuring vertical logo */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-[#fffaf0] p-10 pixel-border shadow-[12px_12px_0_rgba(0,0,0,0.15)] relative overflow-hidden flex flex-col items-center justify-between aspect-[2/3] max-w-sm mx-auto"
        >
          <div className="absolute top-4 right-4 w-8 h-8 border border-red-800/40 flex items-center justify-center">
            <span className="text-[8px] text-red-800/70">印</span>
          </div>

          <div className="w-full flex-1 flex items-center justify-center py-6">
            <img
              src="/images/logo-vertical.png"
              alt="十里千路"
              className="h-full max-h-[340px] w-auto object-contain"
              style={{ imageRendering: "pixelated" }}
            />
          </div>

          <div className="w-full text-center">
            <div className="h-px w-12 bg-black/70 mx-auto mb-4" />
            <p className="text-[10px] tracking-[0.3em] opacity-70 font-pixel">SHILI QIANLU</p>
            <p className="text-[9px] opacity-50 mt-2 font-pixel-cn">十里不辞远 · 千路皆可期</p>
          </div>
        </motion.div>

        {/* Right: Thank-you / QR */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col items-center md:items-start justify-center space-y-8"
        >
          <div className="w-full h-px bg-black/20" />

          <div>
            <span className="text-[10px] tracking-[0.3em] opacity-50">/ END</span>
            <h3 className="text-5xl font-pixel-cn mt-4 leading-tight">THANK&nbsp;YOU<br />FOR&nbsp;WALKING</h3>
            <p className="mt-6 text-xs opacity-70 font-pixel-cn leading-relaxed max-w-sm">
              十里千路，步履不停。<br />
              感谢你陪我看完这段像素旅程。
            </p>
          </div>

          <div className="w-full h-px bg-black/20" />

          <a
            href="https://www.mihuashi.com/profiles/1643305"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-col items-center"
          >
            <div className="aspect-square w-48 bg-white p-3 pixel-border-sm transition-transform group-hover:-translate-y-1">
              <img
                src="/images/qrcode.jpg"
                alt="米画师 QR"
                className="w-full h-full object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <span className="mt-3 text-[9px] tracking-[0.3em] opacity-60 font-pixel group-hover:opacity-100">
              SCAN / VISIT MIHUASHI &gt;
            </span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
