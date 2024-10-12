import { Future } from "assets";
import { Button, Section } from "components";
import React from "react";

const SaveFuture = () => {
  return (
    <Section sectionClassName="hidden lg:grid grid-cols-2 w-full items-center gap-16 pt-20 !md:px-10 !lg:px-0">
      <div data-aos="fade-right">
        <img src={Future} alt="" className="drop-shadow-xl" />
      </div>
      <aside
        className="text-center lg:text-left max-w-[430px] flex flex-col gap-4"
        data-aos="fade-left"
      >
        <p className="text-lg">The Rise App</p>
        <h2 className="text-[32px] leading-7 tracking-tight lg:text-[40px] lg:leading-[48px]">
          Save for your <span className="text-[#A080FF]">future</span>
        </h2>
        <p className="text-base mb-4">
          With Rise, you achieve your financial goals faster. Save for school,
          your home, vacations, your children’s future and more.
        </p>

        <Button
          variant="primary"
          className="py-3 mx-auto lg:mx-0 text-white w-[160px] rounded-md"
        >
          Start Saving
        </Button>
      </aside>{" "}
    </Section>
  );
};

export { SaveFuture };
