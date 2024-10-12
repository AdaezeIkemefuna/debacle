import { ReactNode } from "react";

export interface LinkTypes {
  name: string | ReactNode;
  url: string;
}

export const webLinks: LinkTypes[] = [
  {
    name: "About Us",
    url: "/about",
  },
  {
    name: "Careers",
    url: "/home",
  },
  {
    name: "FAQs",
    url: "/faqs",
  },
  {
    name: "Contact Info",
    url: "/home",
  },
  {
    name: "Press",
    url: "/home",
  },
  {
    name: "Rise Impact",
    url: "/home",
  },
];
