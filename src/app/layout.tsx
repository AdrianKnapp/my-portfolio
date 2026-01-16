import "../styles/globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({
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
      <head>{/* <GTMInjection /> */}</head>
      <body className={`${inter.className} bg-stone-200`}>
        {/* <noscript>
          <iframe
            className="hidden"
            title="gtm"
            height="0"
            src="https://www.googletagmanager.com/ns.html?id=GTM-WZ9CXZN5"
            width="0"
          />
        </noscript> */}
        {children}
      </body>
    </html>
  );
}
