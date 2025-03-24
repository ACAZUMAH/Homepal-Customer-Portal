import { Container, Group, Button } from "@mantine/core";
import { IconChevronLeft, IconHeart, IconShare } from "@tabler/icons-react";
import { useParams } from "react-router-dom";
import { usePropertyQuery } from "./hooks";
import { Conditional } from "../components/conditional";
import { HiddenFromSm, VisbleFromSm } from "./components/";
import { PropertyLoader } from "./components/propertyLoader";
import { useState } from "react";
import { RequestModal } from "./components/requestModal";
import { MakeOfferModal } from "./components/makeOfferModal";
import { useLocation } from "react-router-dom";
import { useAppNavigation } from "../hooks";
import { FetchError } from "../components/Errors/fetchError";

export const Property = () => {
  const [opened, setOpened] = useState(false);
  const [openedMakeOffer, setOpendMakeOffer] = useState(false);

  const location = useLocation()

  const back = location.state?.from || '/'; 

  const navigateBack = useAppNavigation(back)

  const parems = useParams();
  const { property, loading, error } = usePropertyQuery(parems.id);

  const photos = property.imageUrls ? property.imageUrls : [];

  const data = { ...property, photos };

  const showData = !loading && !error;

  const showError = error && !loading;

  return (
    <>
      <Container size="xl" mt={30} mb={50}>
        <Conditional condition={showData}>
          <Group justify="space-between">
            <Button
              variant="outline"
              color="#00c898"
              radius="md"
              leftSection={<IconChevronLeft stroke={1.5} />}
              component="a"
              href={back}
              onClick={(e) => {
                e.preventDefault();
                navigateBack();
              }}
            >
              Back
            </Button>
            <Group>
              <Button
                variant="outline"
                color="#00c898"
                radius="md"
                leftSection={<IconHeart troke={1.5} />}
              >
                Save
              </Button>
              <Button
                variant="outline"
                color="#00c898"
                radius="md"
                leftSection={<IconShare troke={1.5} />}
              >
                Share
              </Button>
            </Group>
          </Group>
          <HiddenFromSm
            {...data}
            setOpened={() => setOpened(!opened)}
            setOpendMakeOffer={() => setOpendMakeOffer(!openedMakeOffer)}
          />
          <VisbleFromSm
            {...data}
            setOpened={() => setOpened(!opened)}
            setOpendMakeOffer={() => setOpendMakeOffer(!openedMakeOffer)}
          />
        </Conditional>
        <Conditional condition={showError}>
          <FetchError
            message="We encountered an issue while fetching this property. Our technical
            team is working to resolve it as quickly as possible."
          />
        </Conditional>
        <Conditional condition={loading}>
          <PropertyLoader />
        </Conditional>
        <RequestModal
          property={property}
          opened={opened}
          onClose={() => setOpened(!opened)}
        />
        <MakeOfferModal
          property={property}
          opened={openedMakeOffer}
          onClose={() => setOpendMakeOffer(!openedMakeOffer)}
        />
      </Container>
    </>
  );
};
