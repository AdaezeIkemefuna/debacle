import { FixedInc, Realestate, Stocks } from "assets";
import { Button, Section } from "components";
import { useNavigate } from "react-router-dom";
interface AssetsTypes {
  title: string;
  color: string;
  image: string;
  desc: string;
  historicalReturns: number;
  riskLevel: string;
  link: string;
}

const assetLinks: AssetsTypes[] = [
  {
    title: "Stocks",
    color: "#FFF4F0",
    image: Stocks,
    desc: "We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.",
    historicalReturns: 14,
    riskLevel: "Medium",
    link: "/products",
  },
  {
    title: "Real Estate",
    color: "#F6F2FF",
    image: Realestate,
    desc: "Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.",
    historicalReturns: 14,
    riskLevel: "Medium",
    link: "/products",
  },
  {
    title: "Fixed Income",
    color: "#ECFEFE",
    image: FixedInc,
    desc: "A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.",
    historicalReturns: 14,
    riskLevel: "Medium",
    link: "/products",
  },
];
const AssetClasses = () => {
  const navigate = useNavigate();
  return (
    <Section
      bgClassName="my-20"
      sectionClassName="flex flex-col items-center justify-start  !md:px-10 !lg:px-0"
    >
      <div className="text-center space-y-3 mb-10">
        <h2 className="text-[32px] leading-7 tracking-tight lg:text-[40px] lg:leading-[48px]">
          Asset Classes
        </h2>
        <p>It’s your money, choose where you invest it</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-[46px] justify-center lg:gap-14">
        {assetLinks.map((asset) => (
          <div
            key={asset.color}
            className="sm:w-[300px] h-[515px] border-2 border-[#919FB533] rounded-md overflow-hidden text-center"
            data-aos="flip-left"
          >
            <p
              className={"h-32 w-full relative"}
              style={{ backgroundColor: asset.color }}
            >
              <img
                src={asset.image}
                alt=""
                className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 border-[14px] border-white rounded-full"
              />
            </p>
            <div className=" px-2 pt-20 h-[387px] flex flex-col justify-between">
              <h3 className=" text-riseDarkText font-medium text-2xl tracking-tight font-clash">
                {asset.title}
              </h3>
              <p className="text-base tracking-tight">{asset.desc}</p>

              <div>
                <p>
                  <span className="text-riseDarkText/50 tracking-tight">
                    Historical returns:
                  </span>{" "}
                  ${asset.historicalReturns}% per annum
                </p>
                <p>
                  <span className="text-riseDarkText/50 tracking-tight">
                    Risk Levl:
                  </span>{" "}
                  {asset.riskLevel}
                </p>
              </div>

              <Button
                variant="transparent"
                className="!px-0 py-3 mx-auto text-[14px] whitespace-nowrap"
                icon
                onClick={() => navigate(asset.link)}
              >
                Learn how {asset.title} work
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export { AssetClasses };
