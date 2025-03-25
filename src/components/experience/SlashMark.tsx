import React from "react";
import { ArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function SlashMark() {
  const tasks = [
    {
      text: "Developed and deployed 5+ AI projects, including NLP chatbots, computer vision models, and predictive analytics solutions, focusing on real-world applications.",
    },
    {
      text: "Worked on data preprocessing, model training, optimization, and deployment, ensuring high accuracy and efficiency in AI solutions",
    },
    {
      text: "Integrated AI models with Flask and FastAPI, enabling seamless interaction through APIs while leveraging deep learning frameworks for enhanced performance..",
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
            <div className="flex items-center justify-between">
              {/* Title */}
              <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
              Artificial Intelligence Intern
              </span>
              <span className="text-sm">Remote</span>
            </div>
            <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
              {/* Company name */}
              <span>Slash Mark IT Startup</span>

              {/* Date */}
              <span>Jul 2024 – Sep 2024</span>
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
                Technologies used: Python, TensorFlow, PyTorch, OpenCV, Scikit-Learn, Flask, 
                   FastAPI, Pandas, Matplotlib, Jupyter Notebooks, Git.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
