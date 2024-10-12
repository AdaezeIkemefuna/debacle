import { Applestore, Download, Playstore } from "assets";
import { Section } from "components";
import React from "react";

const DownloadApp = () => {
  return (
    <Section
      bgClassName="!my-24 "
      sectionClassName="flex flex-col lg:flex-row justify-between w-full items-center pt-8 lg:pt-20 !md:px-10 rounded-[50px] bg-[#ECFEFE] overflow-hidden max-h-[394px]"
    >
      <aside className="text-center lg:text-left max-w-[478px] flex flex-col gap-4 ml-6">
        <p className="text-[#07969E] text-base">Download The Rise App</p>
        <h2 className="text-[32px] leading-7 tracking-tight lg:text-[40px] lg:leading-[48px]">
          Join our 100,000 users investing and setting long term goals!
        </h2>
        <p className="text-base mb-4">Dollar investments that help you grow.</p>

        <div className="flex justify-center lg:justify-start gap-4 mb-10">
          <a href="http://rise.com" target="_blank" rel="noopener noreferrer">
            <img src={Applestore} alt="apple" />
          </a>
          <a href="http://rise.com" target="_blank" rel="noopener noreferrer">
            <img src={Playstore} alt="logo" />
          </a>
        </div>
      </aside>{" "}
      <div>
        <img
          src={Download}
          alt=""
          className="lg:mr-32 -pt-20  border-t-[15px] border-x-[15px] rounded-3xl border-white"
        />
      </div>
    </Section>
  );
};

export { DownloadApp };
