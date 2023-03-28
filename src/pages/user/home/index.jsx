import React from "react";
import FreeBanner from "./FreeBanner";
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
    </main>
  );
};

export default Home;
