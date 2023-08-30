"use client";
import HeroImgContainer from "./components/home/HeroImgContainer";
import HomeMainBody from "./components/home/HomeMainBody";
import { SlantedTopContainer } from "./components/home/SlantedTopContainer";
import styles from "./components/home/style.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroImgContainer />
      <HomeMainBody />
      <SlantedTopContainer />
    </main>
  );
}
