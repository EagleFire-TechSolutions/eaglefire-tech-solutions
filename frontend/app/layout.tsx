import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";



const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EagleFire Tech Solutions | Web Development & Digital Solutions",
  description:
    "EagleFire Tech Solutions builds modern web applications, dashboards, CMS platforms, and digital solutions for businesses.",
openGraph: {
  title: "EagleFire Tech Solutions | Web Development & Digital Solutions",
  description:
    "EagleFire Tech Solutions builds modern web applications, dashboards, CMS platforms, and digital solutions for businesses.",
  type: "website",
  images: [
    {
      url: "/images/og-image.png",
      width: 1200,
      height: 630,
      alt: "EagleFire Tech Solutions",
    },
  ],
},
metadataBase: new URL("https://your-domain.com"),
 
  };


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
     className={`${spaceGrotesk.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
