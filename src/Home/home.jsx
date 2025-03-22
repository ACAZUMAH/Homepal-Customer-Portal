import { useEffect, useState } from "react"; // Importing React hooks
import { HeroSection } from "./components/hero-section"; // Importing HeroSection component
import { FeaturedProperties } from "./components/featuredProperties/featuresProperties"; // Importing FeaturedProperties component
import { FeatureGrid } from "./components/featured-Grid"; // Importing FeatureGrid component
import { usePropertiesQuery } from "./components/hooks/usePropertyQuery"; // Custom hook to query properties
import { FAQSection } from "./components/FAQs/FAQSection"; // Importing FAQSection component

export const Home = () => {
  const [filter, setFilter] = useState({ limit: 12 }); // State for managing property filters

  const getSerachData = (data) => { // Function to handle search data
    setFilter({
      ...data,
      price: data.price ? Number(data.price): null, // Convert price to number if it exists
      search: data.type || data.address, // Set search term based on type or address
      limit: 12 // Limit the number of properties
    });
  };
  
  const { properties, loading } = usePropertiesQuery(filter); // Fetch properties based on filter

  useEffect(() => {}, [filter]); // Effect to run when filter changes

  return (
    <>
      <HeroSection onSearch={getSerachData} /> // Render HeroSection with search handler
      <FeatureGrid /> // Render FeatureGrid component
      <FeaturedProperties properties={properties} loading={loading} /> // Render FeaturedProperties with fetched data
      <FAQSection /> // Render FAQSection component
    </>
  );
};
