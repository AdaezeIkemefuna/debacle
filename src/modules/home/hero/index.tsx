import { Applestore, Hero, Playstore } from "assets";
import { Section } from "components";

const HeroSection = () => {
  return (
    <Section
      bgClassName="!min-h-screen !relative"
      sectionClassName="flex flex-col items-center justify-start pt-40  !md:px-10 !lg:px-0"
    >
      <BubbleBackground />
      <div className="z-10 flex flex-col text-center lg:text-left lg:flex-row justify-center lg:justify-between items-center w-full">
        <aside className=" lg:max-w-[478px]" data-aos="fade-right">
          <h1 className="relative text-4xl lg:text-[56px] lg:leading-[60px] tracking-tighter mb-4">
            Dollar investments that help you grow
            <span className="absolute h-3 w-3 rounded-full right-0 bg-risePrimary2 bottom-[30px]"></span>
          </h1>
          <p className="font-medium text-base  lg:max-w-[420px] mb-4 lg:mb-8">
            <span className="lg:hidden">
              Your personal wealth manager. Get started with a minimum of $10
              and
            </span>
            <span className="hidden lg:block">
              We put your money in high quality assets that help you build
              wealth and achieve your financial goals.
            </span>
          </p>

          <div className="flex justify-center lg:justify-start gap-4 mb-10">
            <a href="http://rise.com" target="_blank" rel="noopener noreferrer">
              <img src={Applestore} alt="apple" />
            </a>
            <a href="http://rise.com" target="_blank" rel="noopener noreferrer">
              <img src={Playstore} alt="logo" />
            </a>
          </div>
        </aside>
        <div data-aos="fade-left">
          <img src={Hero} alt="mock" className="drop-shadow-xl" />
        </div>
      </div>
    </Section>
  );
};

export { HeroSection };

const BubbleBackground = () => {
  const bubbles = [
    { size: 32, top: "22%", left: "26%", delay: "1s" },
    { size: 56, top: "15%", left: "49%", delay: "0s" },
    { size: 56, top: "85%", left: "29%", delay: "1s" },
    { size: 32, top: "75%", left: "55%", delay: "0s" },
    { size: 56, top: "80%", left: "74%", delay: "1s" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className={`absolute bg-[#A0DDE2] rounded-full animate-twinkle `}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            top: bubble.top,
            left: bubble.left,
            animationDelay: bubble.delay,
          }}
        />
      ))}
    </div>
  );
};
