"use client";
import { useState, useTransition, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "@mui/icons-material";
import ImageSwiper from "./ImageSwiper";
import about from "@/assets/about.png";
import { SiCodechef, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const About = () => {
  const refHeading = useRef(null);
  const refContent = useRef(null);
  const inViewHeading = useInView(refHeading);
  const inViewContent = useInView(refContent, { once: true });

  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-[80px] sm:px-6" id="about">
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <h3 className="text-3xl font-[800] text-textWhite sm:text-5xl">
          About Me
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-textWhite"></div>
      </motion.div>
      <div className="mt-16 flex flex-col items-center justify-between gap-10 py-6 lg:flex-row">
        <motion.div
          ref={refContent}
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.8,
            filter: "blur(10px)",
          }}
          animate={
            inViewContent
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }
              : { opacity: 0, y: 20, scale: 0.8, filter: "blur(10px)" }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative"
        >
          <Image
            src={about}
            alt="About"
            width={300}
            height={400}
            className="size-[300px] rotate-[2.5deg] cursor-pointer rounded-full transition-all duration-300 ease-in-out hover:scale-[1.02] sm:size-[350px]"
            priority
          />
        </motion.div>
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={
            inViewContent
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 30, scale: 0.9 }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex-1 xl:px-4"
        >
          <p>
            I&apos;m{" "}
            <span className="font-semibold text-heading"> Ismail Shaik </span>
            , a passionate software developer with over 6 months of experience
            as an intern with startups from India. I have hands-on
            experience in crafting seamless web applications, with expertise
            spanning across frontend technologies like React.js and Next.js,
            coupled with backend proficiency in Node.js and Express.js. <br />{" "}
            From enhancing user interfaces to optimizing backend performance, I
            specialize in delivering robust, scalable, and user-friendly
            solutions. My passion for staying ahead in the tech world drives me
            to integrate innovative approaches into every project, ensuring
            efficient and effective outcomes.
          </p>
          <div className="mt-6 w-full sm:mt-0">
            <div className="w-full">
              <h5 className="mt-4 text-xl font-bold text-textWhite">
                Education
              </h5>
              <div className="">
                <h5 className="text-lg font-medium">
                  Nimra College of Engineering and Technology(JNTUK)
                </h5>
                <div className=" flex w-full items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div
                    className="flex w-full items-start justify-between gap-5 text-sm font-bold text-heading
                  "
                  >
                    <p>
                      Bachelor of Technology in Computer Science & Engineering{" "}
                      <br />
                      <small>2022 - 2026</small>
                    </p>
                    <span>GPA:8.5/10.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 w-full">
              <h5 className="mb-0.5 mt-2 text-xl font-bold text-textWhite">
                Achievements
              </h5>
              <div className="space-y-1.5">
                <div className="flex items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                    Solved{" "}
                    <span className="font-bold text-heading">
                      200+ DSA questions{" "}
                    </span>
                    on various OJ’s.
                  </div>
                </div>
                <div className="flex items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                  Participated in National Well {" "}
                    <span className="font-bold text-heading">
                    Spell Bee{" "}
                    </span>
                    Competition.
                  </div>
                </div>
                <div className="flex items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                     Participated in{" "}
                    <span className="font-bold text-heading">
                    Flipkart Grid 5.0 Tech Quiz{" "}
                    </span>
                    Software Development Challenge .
                  </div>
                </div>
                <div className="flex items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                    Completed{" "}
                    <span className="font-bold text-heading">
                    Databases for Developers: Foundations{" "}
                    </span>
                    by Oracle, strengthening{" "}
                    <a
                      href="https://www.linkedin.com/posts/shaik-ismail-84b786304_databases-activity-7275954671544897536-5eF-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE22iTsBKQlC1l3ka2ZFhu-1N6vHCE4Fv0s"
                      target="_blank"
                      className="text-heading underline"
                    >
                      {" "}
                      SQL skills.
                    </a>
                    .
                  </div>
                </div>
                <div className="flex items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                    <span className="font-bold text-heading">
                      <a
                        href="https://unstop.com/certificate-preview/df3a2424-bc44-4375-a7fd-6445ee6ea870"
                        target="_blank"
                        className="underline"
                      >
                         TATA Crucible Campus Quiz{" "}
                      </a>
                    </span>
                    - Software Development Challenge - 2024.
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 w-full">
              <h5 className="text-xl font-bold text-textWhite">
                Coding Profiles
              </h5>
              <div className="mt-2 flex items-center gap-3">
                <a
                  href="https://leetcode.com/u/shaik_ismail09/"
                  target="_blank"
                  title="Leetcode"
                  className="flex items-center gap-1 rounded-md bg-[#1d1d1d] px-3 py-2 text-sm font-medium text-orange-300 transition-all duration-200 ease-in-out hover:scale-[1.05]"
                >
                  <SiLeetcode className="size-6" />
                </a>
                <a
                  href="https://www.geeksforgeeks.org/user/shaikism30vs/"
                  target="_blank"
                  title="GeeksForGeeks"
                  className="flex items-center gap-1 rounded-md bg-green-700 px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:scale-[1.05]"
                >
                  <SiGeeksforgeeks className="size-6" />
                </a>

                {/* <a
                  href="https://www.codechef.com/users/ismail_00"
                  target="_blank"
                  title="Codechef"
                  className="flex items-center gap-1 rounded-md bg-slate-800 px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:scale-[1.05] "
                >
                  <SiCodechef className="size-6" />
                </a> */}
              </div>
            </div>
            </div>
            </motion.div>
            </div>
            </section>
  );
};
        
      
  




export default About;
