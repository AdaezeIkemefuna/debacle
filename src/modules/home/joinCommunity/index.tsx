import { JoinComm } from "assets";
import { Button, Section } from "components";
import React from "react";

const JoinCommunity = () => {
  return (
    <Section sectionClassName=" lg:grid grid-cols-2 w-full items-center gap-16 pt-20 !md:px-10 !lg:px-0">
      <div data-aos="fade-right">
        <img
          src={JoinComm}
          alt=""
          className="drop-shadow-xl order-1 lg:order-2 mx-auto mb-10 lg:mx-0"
        />
      </div>{" "}
      hamsaikemefuna@gmail.com
      <aside
        className="text-center lg:text-left lg:max-w-[478px] flex flex-col gap-4"
        data-aos="fade-left"
      >
        <h2 className="text-[32px] leading-7 tracking-tight lg:text-[40px] lg:leading-[48px]">
          Join The Rise Community
        </h2>
        <p className="text-base mb-4">
          If you want to go far, go together. Our Telegram community surrounds
          you with others who can help you along your financial journey with
          tips, support, advice and learning. It's completely free and open to
          new and seasoned investors.
        </p>

        <Button
          variant="primary"
          className="h-12 mx-auto justify-center !text-riseDark !px-0 lg:mx-0 !w-[218px] bg-risePrimary2 rounded-md"
        >
          Join Our Community
        </Button>
      </aside>{" "}
    </Section>
  );
};

export { JoinCommunity };
