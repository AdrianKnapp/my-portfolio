import type { Metadata } from "next";
import { SUBTITLE } from "./page";

export const metadata: Metadata = {
  title: "Find Me | Adrian Knapp",
  description: SUBTITLE,
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="container">{children}</div>;
};

export default Layout;
