import {
  Container,
  Group,
  Button,
  Box,
  Image,
  Stack,
  Title,
  Text,
  Paper,
  Flex,
  Card,
} from "@mantine/core";
import {
  IconChevronLeft,
  IconCurrencyDollar,
  IconHeart,
  IconMapPin,
  IconShare,
} from "@tabler/icons-react";
import { useParams } from "react-router-dom";
import { usePropertyQuery } from "./hooks";
import { Conditional } from "../components/conditional";
import { useAppNavigation } from "../hooks";
import { routesEndPoints } from "../constants";
import { HiddenFromSm, VisbleFromSm } from "./components/";

export const Property = () => {
  const parems = useParams();

  const navigateToProperties = useAppNavigation(routesEndPoints.PROPERTIES);

  const { property, loading, error } = usePropertyQuery(parems.id);

  const photos = property.imageUrls ? property.imageUrls : [];

  const data = { ...property, photos}

  const showData = !loading && !error;

  return (
    <>
      <Container size="xl" mt={30} mb={30}>
        <Conditional condition={showData}>
          <Group justify="space-between">
            <Button
              variant="outline"
              color="#00c898"
              leftSection={<IconChevronLeft stroke={1.5} />}
              component="a"
              href={routesEndPoints.PROPERTIES}
              onClick={(e) => {
                e.preventDefault();
                navigateToProperties();
              }}
            >
              Back
            </Button>
            <Group>
              <Button
                variant="outline"
                color="#00c898"
                leftSection={<IconHeart troke={1.5} />}
              >
                Save
              </Button>
              <Button
                variant="outline"
                color="#00c898"
                leftSection={<IconShare troke={1.5} />}
              >
                Share
              </Button>
            </Group>
          </Group>
          <HiddenFromSm { ...data }/>
          <VisbleFromSm { ...data }/>
        </Conditional>
      </Container>
    </>
  );
};
