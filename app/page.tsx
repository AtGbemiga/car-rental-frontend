import HeroImgContainer from "./components/home/HeroImgContainer";
import HomeMainBody from "./components/home/HomeMainBody";
import { SlantedTopContainer } from "./components/home/SlantedTopContainer";

export default function Home() {
  return (
    <main>
      <HeroImgContainer />
      <HomeMainBody />
      <SlantedTopContainer />
    </main>
  );
}
