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
      "/images/senluo/IMG_9915.PNG",
      "/images/senluo/IMG_9897.PNG",
      "/images/senluo/IMG_9907.PNG",
      "/images/senluo/IMG_9908.PNG",
      "/images/senluo/Image_1775984966053_606.png",
      "/images/senluo/Image_1775984973251_489.png",
      "/images/senluo/Image_1775984983609_704.png",
      "/images/senluo/Image_1775984993638_241.png",
      "/images/senluo/Image_1776004691064_55.png",
    ],
  },
  fanhua: {
    title: "繁花颂歌",
    subtitle: "FLOWER HYMN",
    description: "以花为语，以色为诗。",
    images: [
      "/images/fanhua/IMG_9916.PNG",
      "/images/fanhua/IMG_9872.PNG",
      "/images/fanhua/IMG_9873.PNG",
      "/images/fanhua/IMG_9874.PNG",
      "/images/fanhua/IMG_9882.PNG",
      "/images/fanhua/IMG_9910.PNG",
      "/images/fanhua/IMG_9911.PNG",
      "/images/fanhua/IMG_9914.PNG",
      "/images/fanhua/Image_1776004263566_999.png",
    ],
  },
  xinghuan: {
    title: "星环律动",
    subtitle: "ORBITAL PULSE",
    description: "星轨流转，律动成章。",
    images: [
      "/images/xinghuan/IMG_9918.PNG",
      "/images/xinghuan/IMG_9888.PNG",
      "/images/xinghuan/IMG_9889.PNG",
      "/images/xinghuan/IMG_9890.PNG",
      "/images/xinghuan/IMG_9894.PNG",
      "/images/xinghuan/IMG_9896.PNG",
      "/images/xinghuan/IMG_9919.PNG",
      "/images/xinghuan/IMG_9931.PNG",
      "/images/xinghuan/Image_1776004707368_226.png",
    ],
  },
  xinxiang: {
    title: "心象投影",
    subtitle: "INNER PROJECTION",
    description: "心之所象，投影于外。",
    images: [
      "/images/xinxiang/IMG_9934.PNG",
      "/images/xinxiang/IMG_9917.PNG",
      "/images/xinxiang/IMG_9932.PNG",
      "/images/xinxiang/IMG_9933.PNG",
      "/images/xinxiang/Image_1775984960284_775.png",
      "/images/xinxiang/Image_1776004603932_994.png",
      "/images/xinxiang/Image_1776004608228_607.png",
      "/images/xinxiang/Image_1776004660909_379.png",
      "/images/xinxiang/Image_1776004672464_83.png",
      "/images/xinxiang/Image_1776004720963_127.png",
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
      className="min-h-screen bg-[#f0ead6] p-8 md:p-20 relative"
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
