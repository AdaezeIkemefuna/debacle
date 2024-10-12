import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  AnchorHTMLAttributes,
} from "react";
import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";
import { ArrowGreen } from "assets";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "primary" | "transparent";
  icon?: boolean;
}

interface LinkButtonProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  variant: "primary" | "transparent";
  icon?: boolean;
  to?: string;
}

// Button component
const Button = (props: ButtonProps) => {
  const {
    onClick,
    variant = "transparent",
    children,
    className,
    icon,
    ...rest
  } = props;
  return (
    <button
      {...rest}
      className={`${className} text-lg font-clash text-risePrimary rounded-full flex gap-4 hover:gap-6 justify-start items-center relative px-6 transition-all ${
        variant === "primary" ? "bg-risePrimary" : ""
      }`}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick(e);
      }}
    >
      {children}
      {icon && (
        <span className="flex justify-center items-center">
          <img src={ArrowGreen} alt="" />
        </span>
      )}
    </button>
  );
};

// LinkButton component
const LinkButton = (props: LinkButtonProps) => {
  const { href, to, variant, children, className, icon, ...rest } = props;
  return (
    <>
      {to ? (
        <Link
          to={to}
          {...rest}
          className={`${className} h-11 lg:h-[56px] min-w-[160px] lg:min-w-[166px] rounded-full flex justify-start items-center relative px-6 transform transition-all hover:scale-[.98] cursor-pointer ${
            variant === "primary" ? "bg-[#154D34]" : ""
          }`}
        >
          {children}
          {icon && (
            <span
              className="h-[33px] w-[33px] lg:h-[43px] lg:w-[43px] rounded-full bg-white absolute top-[6px] right-[6px] flex justify-center items-center text-xs lg:text-sm"
              style={{
                background:
                  "linear-gradient(180deg, rgba(252, 252, 253, 0.8) 53.71%, rgba(252, 252, 253, 0.536) 135%)",
              }}
            >
              <ArrowRight size="22" color="#2F384C" />
            </span>
          )}
        </Link>
      ) : (
        <a
          href={href}
          {...rest}
          className={`${className} h-11 lg:h-[56px] min-w-[130px] lg:min-w-[166px] rounded-full flex justify-start items-center relative px-3 lg:px-6 transform text-xs lg:text-[14px] transition-all hover:scale-[.98] cursor-pointer ${
            variant === "primary" ? "bg-[#154D34]" : ""
          }`}
        >
          {children}
          {icon && (
            <span
              className="h-[33px] w-[33px] lg:h-[43px] lg:w-[43px] rounded-full bg-white absolute  top-[4px] lg:top-[6px] right-[4px] lg:right-[6px] flex justify-center items-center text-xs lg:text-sm"
              style={{
                background:
                  "linear-gradient(180deg, rgba(252, 252, 253, 0.8) 53.71%, rgba(252, 252, 253, 0.536) 135%)",
              }}
            >
              <ArrowRight size="22" color="#2F384C" />
            </span>
          )}
        </a>
      )}
    </>
  );
};

export { LinkButton, Button };
