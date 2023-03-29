import React from "react";
import FreeBanner from "./FreeBanner";
import LatestArticles from "./LatestArticles";
import LatestBooks from "./LatestBooks";
import MainHero from "./MainHero";
import PopularBooks from "./PopularBooks";
import WhyChoose from "./WhyChoose";
const Home = () => {
  return (
    // tempo height
    <main>
      <MainHero />
      <FreeBanner />
      <PopularBooks />
      <WhyChoose />
      <LatestBooks />
      <LatestArticles />
    </main>
  );
};

export default Home;
