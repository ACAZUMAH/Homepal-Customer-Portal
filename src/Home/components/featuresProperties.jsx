import React from "react";
import { Conditional } from "../../components/conditional";
import {
  Container,
  Text,
  Title,
  Stack,
  SimpleGrid,
  Group,
  Button,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useAppNavigation } from "../../hooks";
import { routesEndPoints } from "../../constants";
import classes from "../styles/index.module.css"
import { PropertyCard, PropertyLoader } from "../../components/property-card";

export const FeaturedProperties = (props) => {
  //const { properties, loading } = usePropertiesQuery({ limit: 10 })


  const navigateToProperties = useAppNavigation(routesEndPoints.PROPERTIES);

  return (
    <Conditional condition={ props.loading || props.properties.length }>
      <Container size="87%" py={40}>
        <Stack>
          <Title c="#00c898" order={1} size="2.5rem">
            Featured Properties
          </Title>
          <Text size="xl">
            Explore our curated selection of featured properties. Each listing
            showcases exceptional <br />
            homes and investment opportunities availabel. Click "View Details"
            for more information.
          </Text>
        </Stack>
          <Group justify="space-between" mb="xl" mt="xl">
            <Title fw={500}>Properties:</Title>
            <Button
              component="a"
              variant="transparent"
              c="#00c898"
              fz="lg"
              classNames={{
                label: classes.morePBtn,
              }}
              href={routesEndPoints.PROPERTIES}
              rightSection={<IconArrowRight stroke={1.5} />}
              onClick={(e) => {
                e.preventDefault();
                navigateToProperties();
              }}
            >
              view all properties
            </Button>
          </Group>
        <SimpleGrid cols={{ base: 1, xs: 2, md: 3, xl: 4}}>
          {props.properties.map((property, index) => (<PropertyCard key={index} { ...property } />))}
          <Conditional condition={props.loading}>
            {Array(10).fill(1).map((_, index) => ( <PropertyLoader key={index}/>))}
          </Conditional>
        </SimpleGrid>
      </Container>
    </Conditional>
  );
};
