import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
}

const PROJECTS: Record<string, ProjectData> = {
  senluo: {
    title: "森罗万象",
    subtitle: "SHINRA BANSHŌ",
    description: "万物有灵，山川草木皆有所寄。",
    images: [
      "https://i.postimg.cc/XYYFhCvf/Image-1775984966053-606.png",
      "https://i.postimg.cc/4x2tTxK5/Image-1775984973251-489.png",
      "https://i.postimg.cc/3xfpHxyf/Image-1775984983609-704.png",
      "https://i.postimg.cc/P55Zcwqc/Image-1775984993638-241.png",
      "https://i.postimg.cc/Hkv5CkJz/Image-1776004691064-55.png",
      "https://i.postimg.cc/FHCcQHdQ/IMG-9897.png",
      "https://i.postimg.cc/dVNdKVkV/IMG-9907.png",
      "https://i.postimg.cc/TPyb2vgx/IMG-9908.png",
    ],
  },
  fanhua: {
    title: "繁花颂歌",
    subtitle: "FLOWER HYMN",
    description: "以花为语，以色为诗。",
    images: [
      "https://i.postimg.cc/bNHH4P9G/Image-1776004263566-999.png",
      "https://i.postimg.cc/6QTr7vJX/IMG-9872.png",
      "https://i.postimg.cc/0NrY6wgL/IMG-9873.png",
      "https://i.postimg.cc/pLsQXBSg/IMG-9874.png",
      "https://i.postimg.cc/RZg1VTYL/IMG-9882.png",
      "https://i.postimg.cc/jj9zySt5/IMG-9910.png",
      "https://i.postimg.cc/DzDq1wnq/IMG-9911.png",
      "https://i.postimg.cc/QMPpcdh4/IMG-9914.png",
    ],
  },
  xinghuan: {
    title: "星环律动",
    subtitle: "ORBITAL PULSE",
    description: "星轨流转，律动成章。",
    images: [
      "https://i.postimg.cc/q7CtVXHx/Image-1776004707368-226.png",
      "https://i.postimg.cc/KzS1ZkmW/IMG-9888.png",
      "https://i.postimg.cc/NMqKg9QP/IMG-9889.png",
      "https://i.postimg.cc/85Q71JTy/IMG-9890.png",
      "https://i.postimg.cc/nzbXHjnR/IMG-9894.png",
      "https://i.postimg.cc/d1PhqkqK/IMG-9896.png",
      "https://i.postimg.cc/ZRtWTBTJ/IMG-9919.png",
      "https://i.postimg.cc/W3GhtN4C/IMG-9931.png",
    ],
  },
  xinxiang: {
    title: "心象投影",
    subtitle: "INNER PROJECTION",
    description: "心之所象，投影于外。",
    images: [
      "https://i.postimg.cc/tRdx45ZB/IMG-9932.png",
      "https://i.postimg.cc/595C23YK/IMG-9933.png",
      "https://i.postimg.cc/XNKCY8Gh/IMG-9934.png",
      "https://i.postimg.cc/L5SgVq7N/Image-1775984960284-775.png",
      "https://i.postimg.cc/FzxdCr5B/Image-1776004603932-994.png",
      "https://i.postimg.cc/FzxdCr5w/Image-1776004608228-607.png",
      "https://i.postimg.cc/sxJQHjCF/Image-1776004660909-379.png",
      "https://i.postimg.cc/hv0zZDRB/Image-1776004672464-83.png",
      "https://i.postimg.cc/wx5mjVyL/Image-1776004720963-127.png",
    ],
  },
};

export default function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const project = PROJECTS[projectId];
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      className="min-h-screen bg-white p-8 md:p-20 relative"
    >
      <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <button
            onClick={onBack}
            className="pixel-border-sm p-2 bg-white hover:bg-black hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <span className="block text-[10px] opacity-50 tracking-[0.3em] mb-1">{project.subtitle}</span>
            <h2 className="text-4xl font-pixel-cn">{project.title}</h2>
            <p className="mt-2 text-[11px] opacity-60 font-pixel-cn">{project.description}</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {project.images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="pixel-border bg-white p-2"
            >
              <img
                src={src}
                alt={`${project.title}-${i + 1}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain pixel-border-sm"
                style={{ imageRendering: "pixelated" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
