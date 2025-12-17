import { GTMInjection } from "@/components/common/GTMInjection";
import "../styles/globals.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <GTMInjection />
      </head>
      <body className={`${poppins.className} bg-black-lightest`}>
        <noscript>
          <iframe
            className="hidden"
            title="gtm"
            height="0"
            src="https://www.googletagmanager.com/ns.html?id=GTM-WZ9CXZN5"
            width="0"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
