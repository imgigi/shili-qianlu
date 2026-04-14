import { motion } from "motion/react";

interface Project {
  id: string;
  image: string;
  offsetY: string;
}

const PROJECTS: Project[] = [
  { id: "senluo",   image: "/images/covers/senluo.png",   offsetY: "mt-0"  },
  { id: "fanhua",   image: "/images/covers/fanhua.png",   offsetY: "mt-24" },
  { id: "xinghuan", image: "/images/covers/xinghuan.png", offsetY: "mt-8"  },
  { id: "xinxiang", image: "/images/covers/xinxiang.png", offsetY: "mt-32" },
];

interface ProjectListProps {
  onSelect: (projectId: string) => void;
  onNext: () => void;
}

export default function ProjectList({ onSelect, onNext }: ProjectListProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white p-8 md:p-20 relative"
    >
      <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[10px] opacity-50 block mb-2 tracking-[0.3em]">/ 02</span>
            <h2 className="text-5xl font-pixel-cn tracking-tight">执裁录</h2>
            <p className="mt-4 text-xs opacity-70 max-w-md font-pixel-cn leading-relaxed">
              以星象捕风格碎片，以匠心织时代衣魂。
            </p>
          </div>
          <button
            onClick={onNext}
            className="pixel-border-sm px-5 py-2 bg-white hover:bg-black hover:text-white transition-colors text-[10px] tracking-[0.3em]"
          >
            NEXT &gt;
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 items-start">
          {PROJECTS.map((project, index) => (
            <motion.button
              key={project.id}
              type="button"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.6, duration: 0.9, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.25 } }}
              onClick={() => onSelect(project.id)}
              className={`${project.offsetY} block w-full cursor-pointer bg-transparent border-0 p-0`}
            >
              <img
                src={project.image}
                alt=""
                className="w-full h-auto object-contain"
                style={{ imageRendering: "pixelated" }}
              />
            </motion.button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-4 left-8 text-[9px] opacity-30 tracking-[0.2em]">
        BGM · STARDEW VALLEY / OVERTURE
      </div>
    </motion.div>
  );
}
