import {
  Container,
  Group,
  Button,
} from "@mantine/core";
import {
  IconChevronLeft,
  IconHeart,
  IconShare,
} from "@tabler/icons-react";
import { useParams } from "react-router-dom";
import { usePropertyQuery } from "./hooks";
import { Conditional } from "../components/conditional";
import { useAppNavigation } from "../hooks";
import { routesEndPoints } from "../constants";
import { HiddenFromSm, VisbleFromSm } from "./components/";
import { PropertyError } from "./components/propertyError";
import { PropertyLoader } from "./components/propertyLoader";

export const Property = () => {
  const parems = useParams();

  const navigateToProperties = useAppNavigation(routesEndPoints.PROPERTIES);

  const { property, loading, error } = usePropertyQuery(parems.id);

  const photos = property.imageUrls ? property.imageUrls : [];

  const data = { ...property, photos}

  const showData = !loading && !error;

  const showError = error && !loading 

  return (
    <>
      <Container size="xl" mt={30} mb={50}>
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
        <Conditional condition={showError}>
          <PropertyError />
        </Conditional>
        <Conditional condition={loading}>
          <PropertyLoader />
        </Conditional>
      </Container>
    </>
  );
};
