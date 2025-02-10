import React from "react";
import { SimpleGrid, Container } from "@mantine/core";
import {
  IconBuilding,
  Icon360View,
  IconHeartHandshake,
  IconHeartStar,
} from "@tabler/icons-react";
import { FeatureCard } from "../../../components/feature-card";
import classes from '../../styles/index.module.css'

const features = [
  {
    title: "Find Your Perfect Property",
    icon: <IconBuilding color="#00c898" size="5rem" />,
  },
  {
    title: "Personalized Recommendations",
    icon: <IconHeartStar color="#00c898" size="5rem" />,
  },
  { title: "Virtual Tours", icon: <Icon360View color="#00c898" size="5rem" /> },
  {
    title: "Simplified Buying & Renting",
    icon: <IconHeartHandshake color="#00c898" size="5rem" />,
  },
];

export const FeatureGrid = () => (
  <>
    <Container className={classes.featuredGrid} size="xl">
      <SimpleGrid
        spacing="lg"
        breakpoints={[{ maxWidth: "sm", cols: 2 }]}
        cols={{ base: 1, xs: 2, md: 2, xl: 4 }}
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} icon={feature.icon} />
        ))}
      </SimpleGrid>
    </Container>
  </>
);
