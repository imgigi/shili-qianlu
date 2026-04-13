import { motion } from "motion/react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    id: "senluo",
    title: "森罗万象",
    subtitle: "SHINRA BANSHŌ",
    image: "https://i.postimg.cc/XYYFhCvf/Image-1775984966053-606.png",
    description: "STAGE 01 — 万物有灵 / 画面探索",
    tags: ["ILLUST", "WORLD"],
  },
  {
    id: "fanhua",
    title: "繁花颂歌",
    subtitle: "FLOWER HYMN",
    image: "https://i.postimg.cc/bNHH4P9G/Image-1776004263566-999.png",
    description: "STAGE 02 — 花语与颂诗 / 视觉设计",
    tags: ["VISUAL", "COLOR"],
  },
  {
    id: "xinghuan",
    title: "星环律动",
    subtitle: "ORBITAL PULSE",
    image: "https://i.postimg.cc/q7CtVXHx/Image-1776004707368-226.png",
    description: "STAGE 03 — 星轨与节律 / 动态图形",
    tags: ["MOTION", "GRID"],
  },
  {
    id: "xinxiang",
    title: "心象投影",
    subtitle: "INNER PROJECTION",
    image: "https://i.postimg.cc/XNKCY8Gh/IMG-9934.png",
    description: "STAGE 04 — 内观与呈相 / 概念艺术",
    tags: ["CONCEPT", "INNER"],
  },
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
      className="min-h-screen bg-[#f0ead6] p-8 md:p-20 relative"
    >
      <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[10px] opacity-50 block mb-2 tracking-[0.3em]">/ 02</span>
            <h2 className="text-5xl font-pixel-cn tracking-tight">SELECTED WORKS</h2>
            <p className="mt-4 text-xs opacity-70 max-w-md font-pixel-cn leading-relaxed">
              点击每一张封面，进入对应项目详情。
            </p>
          </div>
          <button
            onClick={onNext}
            className="pixel-border-sm px-5 py-2 bg-white hover:bg-black hover:text-white transition-colors text-[10px] tracking-[0.3em]"
          >
            NEXT &gt;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.35, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-white p-4 pixel-border cursor-pointer group"
              onClick={() => onSelect(project.id)}
            >
              <div className="aspect-[4/3] bg-gray-100 mb-4 overflow-hidden pixel-border-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-[9px] opacity-40 tracking-[0.2em]">{project.subtitle}</span>
                <span className="text-[9px] opacity-40 tracking-[0.2em]">VIEW &gt;</span>
              </div>
              <h3 className="text-xl font-pixel-cn mb-2">{project.title}</h3>
              <p className="text-[10px] opacity-60 leading-relaxed font-pixel-cn">{project.description}</p>

              <div className="mt-4 flex gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="px-2 py-1 bg-gray-100 text-[8px] tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-4 left-8 text-[9px] opacity-30 tracking-[0.2em]">
        BGM · STARDEW VALLEY / OVERTURE
      </div>
    </motion.div>
  );
}
