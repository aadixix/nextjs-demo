import Head from "next/head";
import MainBanner from "../components/banner/MainBanner";
import Cards from "../components/CardSlide/Cards";
import MetaTags from "../components/MetaTags";
import bannerData from "../data/bannerData";

export const metadata = {
  title: "Ground Connect",
  description:
    "प्रधानमंत्री नरेंद्र मोदी ने इस महत्वाकांक्षी और आपसी लाभकारी व्यापार समझौते को 'ऐतिहासिक मील का पत्थर' बताया है।",
  keywords: [
    "India",
    "UK",
    "United Kingdom",
    "India-UK Free Trade Agreement",
    "UK-India FTA",
    "tariff",
    "agriculture exports",
    "automobiles",
    "textiles",
    "footwear",
    "whisky",
    "food products",
    "marine products",
    "Prime Minister Narendra Modi",
    "FIEO",
  ],
  authors: [{ name: "Codingest", url: "https://www.groundconnect.in" }],
  robots: "index, follow",
  applicationName: "Ground Connect",
  metadataBase: new URL("https://www.groundconnect.in"),
  alternates: {
    canonical:
      "/article/crop-damage-due-to-heavy-rain-government-is-providing-compensation-2938635",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    siteName: "Ground Connect",
    url: "https://www.groundconnect.in/article/crop-damage-due-to-heavy-rain-government-is-providing-compensation-2938635",
    title:
      "ब्रिटेन के साथ मुक्त व्यापार समझौते के भारतीय अर्थव्यवस्था और कृषि के लिए क्या मायने?",
    description:
      "प्रधानमंत्री नरेंद्र मोदी ने इस महत्वाकांक्षी और आपसी लाभकारी व्यापार समझौते को 'ऐतिहासिक मील का पत्थर' बताया है।",
    images: [
      {
        url: "https://demo.nuovasoft.in/aslibharat/wp-content/uploads/2023/09/Picture1.png",
        width: 750,
        height: 422,
        alt: "Article thumbnail",
      },
    ],
    authors: ["Ajeet Singh"],
    publishedTime: "2025-05-07T19:12:27Z",
    modifiedTime: "2025-05-08T12:53:59Z",
    tags: [
      "India",
      "UK",
      "United Kingdom",
      "UK-India FTA",
      "tariff",
      "agriculture exports",
      "automobiles",
      "textiles",
      "footwear",
      "whisky",
      "food products",
      "marine products",
      "Prime Minister Narendra Modi",
      "FIEO",
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@RuralVoice",
    creator: "@Ajeet Singh",
    title:
      "ब्रिटेन के साथ मुक्त व्यापार समझौते के भारतीय अर्थव्यवस्था और कृषि के लिए क्या मायने?",
    description:
      "प्रधानमंत्री नरेंद्र मोदी ने इस महत्वाकांक्षी और आपसी लाभकारी व्यापार समझौते को 'ऐतिहासिक मील का पत्थर' बताया है।",
    images: [
      "https://demo.nuovasoft.in/aslibharat/wp-content/uploads/2023/09/Picture1.png",
    ],
  },
  icons: {
    icon: "/fav.png",
    shortcut:
      "https://demo.nuovasoft.in/aslibharat/wp-content/uploads/2023/09/Picture1.png",
  },
  other: {
    "fb:app_id": "104841141528181",
  },
};

export default function Home() {
  return (
    <>
      <MainBanner data={bannerData[0]} />
      <Cards />
    </>
  );
}
