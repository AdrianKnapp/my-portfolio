import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Me | Adrian Knapp",
  description:
    "With over 6 years of experience in software development, I create solutions that combine performance, scalability, and simplicity.",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="container">{children}</div>;
};

export default Layout;
