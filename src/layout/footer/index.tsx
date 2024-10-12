import { Link } from "react-router-dom";
import { Section } from "components";
import { Logodark } from "assets";
import { LinkTypes, webLinks } from "lib";
import { ArrowRight } from "iconsax-react";

const exploreLinks: LinkTypes[] = [
  {
    name: (
      <span className="flex gap-2">
        <span>Investment Club</span>{" "}
        <ArrowRight color="#2D2D2D" size={18} className="-rotate-45" />
      </span>
    ),
    url: "products",
  },
  {
    name: (
      <span className="flex gap-2">
        <span>Blog</span>{" "}
        <ArrowRight color="#2D2D2D" size={18} className="-rotate-45" />
      </span>
    ),
    url: "products",
  },
];

const productLinks: LinkTypes[] = [
  {
    name: "Rise App",
    url: "products",
  },
  {
    name: "Wallets",
    url: "products",
  },
  {
    name: "Asset Classes",
    url: "products",
  },
];

const contactLinks: LinkTypes[] = [
  {
    name: (
      <span className="flex gap-2">
        <span>0818 714 7405</span>{" "}
        <ArrowRight color="#2D2D2D" size={18} className="-rotate-45" />
      </span>
    ),
    url: "products",
  },
  {
    name: (
      <span className="flex gap-2">
        <span>hello@rise.capital</span>{" "}
        <ArrowRight color="#2D2D2D" size={18} className="-rotate-45" />
      </span>
    ),
    url: "products",
  },
  {
    name: (
      <span className="flex gap-2">
        <span>Newsletter</span>{" "}
        <ArrowRight color="#2D2D2D" size={18} className="-rotate-45" />
      </span>
    ),
    url: "products",
  },
  {
    name: (
      <span className="flex gap-2">
        <span>Instagram</span>{" "}
        <ArrowRight color="#2D2D2D" size={18} className="-rotate-45" />
      </span>
    ),
    url: "products",
  },
  {
    name: (
      <span className="flex gap-2">
        <span>Twitter</span>{" "}
        <ArrowRight color="#2D2D2D" size={18} className="-rotate-45" />
      </span>
    ),
    url: "products",
  },
];

const Footer = () => {
  return (
    <Section
      bgClassName="py-[53px]"
      sectionClassName="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full  !md:px-10 !lg:px-0"
    >
      <div className="gap-4 font-medium flex flex-col mb-8">
        <img src={Logodark} alt="" className="w-14 mb-4" />

        {webLinks.map((link, i) => (
          <Link key={i} to={link.url}>
            {link.name}
          </Link>
        ))}
      </div>

      <div className="gap-4 font-medium flex flex-col">
        <h2 className="mb-4">Explore</h2>
        {exploreLinks.map((link, i) => (
          <Link key={i} to={link.url}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="gap-4 font-medium flex flex-col">
        <h2 className="mb-4">Products</h2>
        {productLinks.map((link, i) => (
          <Link key={i} to={link.url}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="gap-4 font-medium flex flex-col">
        <h2 className="mb-4">Contact Us</h2>
        {contactLinks.map((link, i) => (
          <Link key={i} to={link.url}>
            {link.name}
          </Link>
        ))}
      </div>
    </Section>
  );
};

export { Footer };
