import React from "react";
import { ArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function PW() {
  const tasks = [
    {
      text: "Managed club finances, budgeting, and resource allocation, ensuring smooth execution of sports and cultural events.",
    },
    {
      text: "Organized multiple college-level events and competitions, collaborating with teams to enhance student engagement.",
    },
    {
      text: "Provided financial insights and strategic planning, contributing to the overall growth and success of the club.",
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
        <div className="flex w-full flex-col space-y-3 lg:max-w-xl xl:max-w-2xl ">
          <div className="spacey-y-2 flex flex-col">
            {/* Title */}
            <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
             Treasurer 
            </span>
            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
              {/* Company name */}
              <span>Sports & Cultural Club</span>

              {/* Date */}
              <span>Aug 20 – Aug 25, 2024</span>
            </div>
          </div>
          <div className="flex flex-col space-y-1 text-sm sm:text-base">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
              return (
                <div key={index} className="flex flex-row space-x-2">
                  <ArrowRight className={"h-5 w-4 flex-none"} />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
}
