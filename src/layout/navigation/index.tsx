import { Link, useLocation } from "react-router-dom";
import { ArrowGreen, LogoColored, MenuClose, MenuOpen } from "assets";
import { Section } from "components";
import { Routes } from "router";
import { ReactNode, useState } from "react";

export const Navlinks: {
  name: string | ReactNode;
  path: "home" | "about" | "products" | "investment" | "faqs" | "blog";
}[] = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: (
      <span className="flex gap-1">
        <span>Products</span>{" "}
        <img src={ArrowGreen} alt="arrow" className="rotate-90" />
      </span>
    ),
    path: "products",
  },
  {
    name: "Investment Club",
    path: "investment",
  },
  {
    name: "Blog",
    path: "blog",
  },
  {
    name: "About Us",
    path: "about",
  },
  {
    name: "FAQs",
    path: "faqs",
  },
];

const Navigation = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Section
      sectionClassName="absolute w-full z-20 !px-0 top-0 left-0 right-0 width-full text-risePrimary"
      bgClassName="bg-white"
    >
      <nav>
        <section className="flex justify-between items-center border-b-[1.5px] border-[#a9f1e866] lg:border-none px-6 lg:px-8 xl:px-[120px] pt-7 pb-8 xl:pb-11 ">
          <Link to={Routes.home}>
            <img src={LogoColored} alt="logo" className="w-16 lg:w-auto " />
          </Link>
          <aside className="hidden lg:flex gap-6">
            {Navlinks.map((link, i) => (
              <Link
                key={i}
                to={Routes[link.path]}
                className={` transition-all ${
                  pathname === `/${link.path}` ? "glowing-underline" : "navlink"
                } ${
                  pathname === "/" && link.path === "home"
                    ? "glowing-underline"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </aside>

          <div className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <img
              src={menuOpen ? MenuClose : MenuOpen}
              alt="menu"
              className="w-6 pt-1.5"
            />
          </div>
        </section>
        {menuOpen && (
          <div className="h-dvh bg-white">
            <aside className="lg:hidden px-3 flex flex-col justify-center items-center gap-6 mt-6 ">
              {Navlinks.map((link, i) => (
                <Link
                  key={i}
                  to={Routes[link.path]}
                  className={`p-3 ${
                    pathname === `/${link.path}` ? "activeLink" : "navlink"
                  } ${
                    pathname === "/" && link.path === "home" ? "activeLink" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </aside>
          </div>
        )}
      </nav>
    </Section>
  );
};

export { Navigation };
