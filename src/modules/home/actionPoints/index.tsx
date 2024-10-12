import { ChooseBest, Invest, Remember, SetGoals } from "assets";
import { Button, Section } from "components";
import { useMobile } from "hooks";
import React from "react";

const ActionPoints = () => {
  const { isMobile } = useMobile({ size: 768 });
  return (
    <Section sectionClassName="flex flex-col !md:px-10 !lg:px-0">
      <div
        className="flex flex-col-reverse lg:flex-row w-full justify-between items-center "
        data-aos="fade-right"
      >
        <aside className="text-center lg:text-left">
          <h2 className="text-xl lg:text-[32px] lg:leading-7 tracking-tighter mb-3">
            {isMobile ? "Superior Performance" : "Invest your money in dollars"}
          </h2>
          <p className="max-w-[318px] text-base mb-6">
            {isMobile
              ? "Rise outperforms your other alternatives in two ways. The first is through our expert, algorithm driven investment approach that picks through over 3,000 data sets to find the perfect investment for you. "
              : "By holding your investments in a stable currency, your money grows more over time and retains its value better."}
          </p>

          <Button
            variant="transparent"
            className="!px-0 py-3 mx-auto lg:mx-0 hidden md:flex"
            icon
          >
            Start Investing Now
          </Button>
        </aside>{" "}
        <div className="relative">
          <img src={Invest} alt="" />
          <div className="lg:hidden absolute bottom-16 left-0 right-0 w-[70%] mx-auto h-[22px] bg-riselightGreen"></div>
        </div>
      </div>

      <div
        className="flex flex-col lg:flex-row w-full justify-between items-center "
        data-aos="fade-left"
      >
        <div className="relative">
          <img src={ChooseBest} alt="" />
          <div className="lg:hidden absolute bottom-16 left-0 right-0 w-[70%] mx-auto h-[22px] bg-riselightGreen"></div>
        </div>
        <aside className="text-center lg:text-left">
          <h2 className="text-xl lg:text-[32px] lg:leading-7 tracking-tighter mb-3">
            {isMobile ? "Personalization" : "Choose what's best for you"}
          </h2>
          <p className="max-w-[432px] text-base mb-6">
            {isMobile
              ? "No two people are the same, and everyone’s financial goals are different. Rise understands this, which is why we tailor your journey to financial freedom to fit you."
              : "Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place."}
          </p>

          <Button
            variant="transparent"
            className="!px-0 py-3 mx-auto lg:mx-0 hidden md:flex"
            icon
          >
            Start Investing Now
          </Button>
        </aside>{" "}
      </div>

      <div
        className="flex flex-col-reverse lg:flex-row w-full justify-between items-center "
        data-aos="fade-right"
      >
        <aside className="text-center lg:text-left">
          <h2 className="text-xl lg:text-[32px] lg:leading-7 tracking-tighter mb-3">
            {isMobile ? "Diversification" : " Set goals and reach them"}
          </h2>
          <p className="max-w-[432px] text-base mb-6">
            {isMobile
              ? "Rise offers a choice of three asset classes: US equities, US real estate and fixed income assets to provide stability to your investments and protection from market declines. You can pick one asset class or"
              : "You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them."}
          </p>

          <Button
            variant="transparent"
            className="!px-0 py-3 mx-auto lg:mx-0 hidden md:flex"
            icon
          >
            Start Investing Now
          </Button>
        </aside>{" "}
        <div className="relative">
          <img src={SetGoals} alt="" />
          <div className="lg:hidden absolute bottom-16 left-0 right-0 w-[70%] mx-auto h-[22px] bg-riselightGreen"></div>
        </div>
      </div>

      <div
        className=" flex-col lg:flex-row w-full justify-between items-center hidden md:flex"
        data-aos="fade-left"
      >
        <div className="relative">
          <img src={Remember} alt="" />
          <div className="lg:hidden absolute bottom-16 left-0 right-0 w-[70%] mx-auto h-[22px] bg-riselightGreen"></div>
        </div>
        <aside className="text-center lg:text-left">
          <h2 className="text-xl lg:text-[32px] lg:leading-7 tracking-tighter mb-3">
            We remember so you dont have to
          </h2>
          <p className="max-w-[432px] text-base mb-6">
            Our Auto-invest feature makes it easy to stay consistent, even when
            you forget. Set a funding amount, frequency and payment method and
            Rise will automatically fund your investment, on schedule.
          </p>

          <Button
            variant="transparent"
            className="!px-0 py-3 mx-auto lg:mx-0 hidden md:flex"
            icon
          >
            Start Investing Now
          </Button>
        </aside>{" "}
      </div>
    </Section>
  );
};

export { ActionPoints };
