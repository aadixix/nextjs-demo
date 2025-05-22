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
      <MetaTags {...metaData} />
      <MainBanner data={bannerData[0]} />
      <Cards />
    </>
  );
}
