import Head from "next/head";
import MainBanner from "../components/banner/MainBanner";
import Cards from "../components/CardSlide/Cards";
import MetaTags from "../components/MetaTags";
import bannerData from "../data/bannerData";

export default function Home() {
  const metaData = {
    title:
      "ब्रिटेन के साथ मुक्त व्यापार समझौते के भारतीय अर्थव्यवस्था और कृषि के लिए क्या मायने?",
    description:
      "प्रधानमंत्री नरेंद्र मोदी ने इस महत्वाकांक्षी और आपसी लाभकारी व्यापार समझौते को 'ऐतिहासिक मील का पत्थर' बताया है।",
    keywords:
      "India, UK, United Kingdom, UK, India-UK Free Trade Agreement, UK-India FTA, tariff, agriculture exports, automobiles, textiles, footwear, whisky, food products, marine products, Prime Minister Narendra Modi, FIEO",
    author: "Ajeet Singh",
    url: "https://www.groundconnect.in/article/crop-damage-due-to-heavy-rain-government-is-providing-compensation-2938635",
    image:
      "https://demo.nuovasoft.in/aslibharat/wp-content/uploads/2023/09/Picture1.png",
    publishedTime: "2025-05-07 19:12:27",
    modifiedTime: "2025-05-08 12:53:59",
    tags: [
      "India",
      "UK",
      "United Kingdom",
      "UK",
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
    canonical:
      "https://www.groundconnect.in/article/crop-damage-due-to-heavy-rain-government-is-providing-compensation-2938635",
    ampUrl:
      "https://www.groundconnect.in/article/crop-damage-due-to-heavy-rain-government-is-providing-compensation-2938635",
  };
  return (
    <>
      <Head>
        <title>Ground Connect</title>
        <meta
          name="description"
          content="प्रधानमंत्री नरेंद्र मोदी ने इस महत्वाकांक्षी ..."
        />
        <meta
          name="keywords"
          content="India, UK, United Kingdom, India-UK Free Trade Agreement, tariff, agriculture exports, automobiles, textiles, footwear, whisky, food products, marine products, Prime Minister Narendra Modi, FIEO"
        />
        <meta name="author" content="Codingest" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Ground Connect" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="ब्रिटेन के साथ मुक्त व्यापार समझौते के भारतीय अर्थव्यवस्था और कृषि के लिए क्या मायने?"
        />
        <meta
          property="og:description"
          content="प्रधानमंत्री नरेंद्र मोदी ने इस महत्वाकांक्षी ..."
        />
        <meta
          property="og:url"
          content="https://www.groundconnect.in/article/crop-damage-due-to-heavy-rain-government-is-providing-compensation-2938635"
        />
        <meta
          property="og:image"
          content="https://demo.nuovasoft.in/aslibharat/wp-content/uploads/2023/09/Picture1.png"
        />
        <meta property="og:image:width" content="750" />
        <meta property="og:image:height" content="422" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RuralVoice" />
        <meta name="twitter:creator" content="@Ajeet Singh" />
        <meta
          name="twitter:title"
          content="ब्रिटेन के साथ मुक्त व्यापार समझौते के भारतीय अर्थव्यवस्था और कृषि के लिए क्या मायने?"
        />
        <meta
          name="twitter:description"
          content="प्रधानमंत्री नरेंद्र मोदी ने इस महत्वाकांक्षी ..."
        />
        <meta
          name="twitter:image"
          content="https://demo.nuovasoft.in/aslibharat/wp-content/uploads/2023/09/Picture1.png"
        />
        <link
          rel="canonical"
          href="https://www.groundconnect.in/article/crop-damage-due-to-heavy-rain-government-is-providing-compensation-2938635"
        />
        <link
          rel="shortcut icon"
          href="https://demo.nuovasoft.in/aslibharat/wp-content/uploads/2023/09/Picture1.png"
        />
      </Head>

      <MainBanner data={bannerData[0]} />
      <Cards />
    </>
  );
}
