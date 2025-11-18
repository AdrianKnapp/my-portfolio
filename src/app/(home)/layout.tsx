import type { Metadata } from "next";
import { subtitle } from "./copy";

export const metadata: Metadata = {
  title: "Adrian Knapp | Software Engineer",
  description: subtitle,
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="container">{children}</div>;
};

export default Layout;
