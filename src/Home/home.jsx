import React from "react";
import { HeroSection } from "./components/hero-section";
import { SearchSection } from "./components/search-section";
//import { FeaturedSection } from "./components/featuredSection";
import { FeaturesProperties } from "./components/featuresProperties";
import { FeatureGrid } from "./components/featured-Grid";

export const Home = () => {

  const getSerachData = (data) => {
    console.log(data)
  }

  const searchMode = (mode) => {
    console.log(mode)
  }

  return (
    <>
      <HeroSection OnChangeMode={searchMode}/>
      <SearchSection OnSearch={getSerachData} />
      <FeatureGrid />
      <FeaturesProperties />
    </>
  );
};
