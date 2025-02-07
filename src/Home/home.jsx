import { useEffect, useState } from "react";
import { HeroSection } from "./components/hero-section";
import { FeaturedProperties } from "./components/featuresProperties";
import { FeatureGrid } from "./components/featured-Grid";
import { usePropertiesQuery } from "./components/hooks/usePropertyQuery";
import { FAQSection } from "./components/FAQs/FAQSection";

export const Home = () => {
  const [filter, setFilter] = useState({ limit: 12 });

  const getSerachData = (data) => {
    setFilter({
      ...data,
      price: data.price ? Number(data.price): null,
      search: data.type || data.address,
      limit: 12
    })
  };
  
  const { properties, loading, error } = usePropertiesQuery(filter);

  useEffect(() => {}, [filter])

  return (
    <>
      <HeroSection onSearch={getSerachData} />
      <FeatureGrid />
      <FeaturedProperties properties={properties} loading={loading} />
      <FAQSection />
    </>
  );
};
