import React from "react";
import { Conditional } from "../../../components/conditional";
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
import { useAppNavigation } from "../../../hooks";
import { routesEndPoints } from "../../../constants";
import classes from "../../styles/index.module.css"
import { PropertiesCard, PropertiesLoader } from "../../../components/property-card";

export const FeaturedProperties = (props) => {

  const navigateToProperties = useAppNavigation(routesEndPoints.BUY);

  return (
    <Conditional condition={ props.loading || props.properties.length }>
      <Container size="xl" py={40}>
        <Stack>
          <Title c="#00c898" order={1} size="2rem">
            Featured Properties
          </Title>
          <Text size="md">
            Explore our curated selection of featured properties. Each listing
            showcases exceptional <br />
            homes and investment opportunities availabel. Click "View Details"
            for more information.
          </Text>
        </Stack>
          <Group justify="space-between" mb="xl" mt="xl">
            <Title fw={400} visibleFrom="sm">Properties:</Title>
            <Button
              component="a"
              variant="transparent"
              c="#00c898"
              classNames={{
                label: classes.morePBtn,
              }}
              href={routesEndPoints.BUY}
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
          {props.properties.map((property, index) => (<PropertiesCard key={index} { ...property } />))}
          <Conditional condition={props.loading}>
            {Array(12).fill(1).map((_, index) => ( <PropertiesLoader key={index}/>))}
          </Conditional>
        </SimpleGrid>
      </Container>
    </Conditional>
  );
};
