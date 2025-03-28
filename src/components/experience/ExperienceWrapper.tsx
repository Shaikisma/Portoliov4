import React from "react";
import CompaniesBar from "./CompaniesBar";
import SlashMark from "./SlashMark";
import ExcelR from "./ExcelR";
import Treasurer  from "./Treasurer";
import Octanet from "./Octanet";
import Zidio from "./Zidio";

interface Props {}

const ExperienceWrapper = (props: Props) => {
  const barRef = React.useRef<HTMLDivElement>(null);

  const GetDescription = () => {
    switch (DescriptionJob) {
      case "Zidio":
        return <Zidio />;
      case "Octanet":
        return <Octanet />;
      case "SlashMark":
        return <SlashMark />;
      case "ExcelR":
        return <ExcelR />;
      case "Treasurer":
        return <Treasurer  />;
    }
  };
  const [DescriptionJob, setDescriptionJob] = React.useState("ExcelR");
  return (
    <section
      className="flex w-full flex-col items-center justify-center space-y-4
      overflow-hidden lg:flex-row lg:items-start lg:justify-between lg:space-y-0 lg:px-20 xl:space-x-6"
    >
      {/* Left side of Where I've Worked, contains the bar and name of companies */}
      <CompaniesBar setDescriptionJob={setDescriptionJob} />
      {/* Description for The job */}
      <div className="w-full flex-1 px-2">{GetDescription()}</div>
    </section>
  );
};

export default ExperienceWrapper;
