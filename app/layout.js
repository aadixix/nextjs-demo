import { Mukta } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { headers } from "next/headers";

const mukta = Mukta({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Ground Connect",
  description:
    "प्रधानमंत्री नरेंद्र मोदी ने इस महत्वाकांक्षी और आपसी लाभकारी व्यापार समझौते को 'ऐतिहासिक मील का पत्थर' बताया है।",
  icons: {
    icon: "/fav.png",
  },
};

export default async function RootLayout({ children, params }) {
  return (
    <html lang="en">
      <body className={`${mukta.variable}  `}>
        <Header currentPath={params} />
        <main>{children}</main>
      </body>
    </html>
  );
}
