/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Home from "./components/Home";
import VideoPlayer from "./components/VideoPlayer";
import ProjectList from "./components/ProjectList";
import ProjectDetail from "./components/ProjectDetail";
import EndPage from "./components/EndPage";

type Page = "home" | "video" | "list" | "detail" | "end";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  const handleProjectSelect = (id: string) => {
    setSelectedProjectId(id);
    navigateTo("detail");
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-black selection:text-white">
      {/* Scanline Overlay */}
      <div className="fixed inset-0 scanlines z-50 pointer-events-none opacity-20" />
      
      <AnimatePresence mode="wait">
        {currentPage === "home" && (
          <motion.div key="home" className="w-full">
            <Home onNext={() => navigateTo("video")} />
          </motion.div>
        )}
        
        {currentPage === "video" && (
          <motion.div key="video" className="w-full">
            <VideoPlayer onNext={() => navigateTo("list")} />
          </motion.div>
        )}
        
        {currentPage === "list" && (
          <motion.div key="list" className="w-full">
            <ProjectList 
              onSelect={handleProjectSelect} 
              onNext={() => navigateTo("end")} 
            />
          </motion.div>
        )}
        
        {currentPage === "detail" && selectedProjectId && (
          <motion.div key="detail" className="w-full">
            <ProjectDetail 
              projectId={selectedProjectId} 
              onBack={() => navigateTo("list")} 
            />
          </motion.div>
        )}
        
        {currentPage === "end" && (
          <motion.div key="end" className="w-full">
            <EndPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
