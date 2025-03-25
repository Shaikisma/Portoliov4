import React from "react";
import { ArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Octanet() {
  const tasks = [
    {
      text: "Gained hands-on experience in various web technologies such as HTML, CSS, JavaScript and React.js, which is being used in 42% of web-based projects.",
    },
    {
      text: "Led the creation of key projects, such as a To-Do List app and a 3D iPhone Landing Page, integrating modern designtechniques and interactive features.",

      
    },
    {
      text: "Optimized applications to ensure top-tier performance, enhancing load speeds, scalability, and overall reliability.",
    }
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-between gap-3 px-4 md:px-0 lg:flex-row xl:gap-5"
      >
        <div className="flex w-full flex-col space-y-3 ">
          <div className="spacey-y-2 flex flex-col">
            {/* Title */}
            <div className="flex items-center justify-between">
              <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
               Web Development Intern
              </span>
              <span className="text-sm">Remote</span>
            </div>
            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
              {/* Company name */}
              <span>OCTANET Services Pvt Ltd </span>

              {/* Date */}
              <span>Sep 2024 – Oct 2024</span>
            </div>
          </div>
          <div className="flex flex-col space-y-1 text-sm sm:text-base">
            {/* Tasks Description 1 */}
            {tasks?.map((item, index) => {
              return (
                <div key={index} className="flex flex-row space-x-2">
                  <ArrowRight className={"h-5 w-4 flex-none"} />
                  <span>{item.text}</span>
                </div>
              );
            })}
            <div className="flex flex-row space-x-2">
              <ArrowRight className={"h-5 w-4 flex-none"} />
              <span className="font-bold text-heading">
                Technologies used: React.js, JavaScript, Three.js, Tailwind CSS, GSAP, Git, GitHub.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
