import React from "react";
import { ArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function ExcelR() {
  const tasks = [
    {
      text: "Contributed to the development and optimization of full-stack web applications using Java, Spring Boot, and React.js. Ensured seamless integration of frontend and backend, enhancing performance and user experience.",
    },
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
              Java Full Stack Intern
              </span>
              <span className="text-sm">Remote</span>
            </div>

            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
              {/* Company name */}
              <span>Zidio</span>

              {/* Date */}
              <span>Feb 2025 – May 2025</span>
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
                Technologies used: Java, Spring Boot, React.js, MySQL, AWS, Docker, REST APIs, Git.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
