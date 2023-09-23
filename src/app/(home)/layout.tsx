import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links | Adrian Knapp",
  description:
    "Access and see more about the senior software engineer Adrian Knapp.",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="container">{children}</div>;
};

export default Layout;
