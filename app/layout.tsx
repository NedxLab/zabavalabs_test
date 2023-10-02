import "./globals.css";
import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";

const montserrat = Montserrat_Alternates({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

export const metadata: Metadata = {
  title: "ZabavaLabs Listings",
  description:
    "This is an Interview to List NFTs with ZabavaLabs from OpenSea.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#150e28] text-white`}>
        {children}
      </body>
    </html>
  );
}
