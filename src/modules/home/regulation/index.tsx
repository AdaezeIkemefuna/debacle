import {
  BottomLeftEclipse,
  BottomRightEclipse,
  TopLeftEclipse,
  TopRightEclipse,
} from "assets";
import { Section } from "components";
import React from "react";

const Regulation = () => {
  return (
    <Section
      bgClassName="!min-h-[372px] !relative"
      sectionClassName="flex  flex-col items-center justify-center !mt-20  !md:px-10 !lg:px-0"
    >
      <BackgroundPattern />
      <div className="text-center z-10 !max-w-[510px] mt-20" data-aos="fade-up">
        <h2 className="text-[32px] leading-7 tracking-tight lg:text-[40px] lg:leading-[48px] mb-4">
          How we are Regulated
        </h2>
        <p className="text-base">
          Rise is registered and regulated both in the US and in Nigeria. Our
          team is made up of US registered investment advisers, our Nigerian
          users are covered by our SEC licensed trustees, ARM Trustees and all
          our assets are held with regulated third parties, in all relevant
          jurisdictions
        </p>
      </div>{" "}
    </Section>
  );
};

export { Regulation };

const BackgroundPattern = () => {
  const eclipses = [
    {
      src: TopLeftEclipse,
      size: 1000,
      position: { top: "40%", left: "0%", transform: "translate(-50%, -50%)" },
    },
    {
      src: TopRightEclipse,
      size: 1000,
      position: { top: "40%", right: "0%", transform: "translate(50%, -50%)" },
    },
    {
      src: BottomLeftEclipse,
      size: 1000,
      position: {
        bottom: "40%",
        left: "0%",
        transform: "translate(-50%, 50%)",
      },
    },
    {
      src: BottomRightEclipse,
      size: 1000,
      position: {
        bottom: "40%",
        right: "0%",
        transform: "translate(50%, 50%)",
      },
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {eclipses.map((eclipse, index) => (
        <img
          src={eclipse.src}
          alt="Eclipse"
          className="absolute"
          style={{
            width: `${eclipse.size}px`,
            height: `${eclipse.size}px`,
            ...eclipse.position, // applies top, right, bottom, left values dynamically
          }}
        />
      ))}
    </div>
  );
};
