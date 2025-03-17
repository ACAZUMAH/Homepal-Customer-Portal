import {
  Card,
  Group,
  Image,
  Skeleton,
  Text,
  Stack,
  ActionIcon,
  Button,
} from "@mantine/core";
import {
  IconBed,
  IconBath,
  IconMapPin,
  IconPlus,
  IconHeart,
  IconChevronRight,
  IconHeartFilled,
} from "@tabler/icons-react";
import React from "react";
import { useAppNavigation } from "../../hooks";
import { getPropertytUrl } from "./helper";
import { Conditional } from "../conditional";
import useAppAuthentication from "../../hooks/useAppAuthentication";
import classes from "./styles/inde.module.css";
import { useSavePropertyMutation } from "./hooks/useSavePropertyMutation";
import { useAppFavoriteProperty } from "../../hooks/useAppFavoriteProperty";
import { useLocation } from "react-router-dom";
/**
 * 
 * @param {*} props 
 * @returns 
 */
export const PropertiesCard = (props) => {
  const propertyurl = getPropertytUrl(props._id);

  const location = useLocation()
  
  const navigateToProperty = useAppNavigation(propertyurl, location.pathname);

  const { isAuthenticated } = useAppAuthentication();

  const { favorites, toggleFavorite } = useAppFavoriteProperty();

  const isFavorite = favorites.includes(props._id);


  const photo = props.imageUrls[0] ? props.imageUrls[0] : "";

  const { handleSaveProperty, loading } = useSavePropertyMutation();

  const handleFavorite = (e) => {
    e.preventDefault();
    toggleFavorite(props._id);
  };

  const savePropertyHandler = (e) => {
    e.preventDefault();
    handleSaveProperty(props._id);
  };

  return (
    <>
      <Card shadow="xs" padding="xs" radius="md" withBorder h={450}>
        <Card.Section>
          <Image src={photo} h={250} alt={props.name} />
        </Card.Section>
        <Conditional condition={isAuthenticated}>
          <ActionIcon
            variant="filled"
            radius="xl"
            size={40}
            color="white"
            component="a"
            underline="never"
            onClick={handleFavorite}
            style={{
              background: "white",
              position: "absolute",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
              top: 15,
              right: 60,
            }}
          >
            {isFavorite ? (
              <IconHeartFilled color="#00c898" stroke={1.5} size={20} />
            ) : (
              <IconHeart color="#00c898" stroke={1.5} size={20} />
            )}
          </ActionIcon>
          <ActionIcon
            variant="filled"
            radius="xl"
            size={40}
            color="white"
            component="a"
            underline="never"
            onClick={savePropertyHandler}
            style={{
              background: "white",
              position: "absolute",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
              top: 15,
              right: 13,
            }}
            loading={loading}
            loaderProps={{ color: "#00c898" }}
          >
            <IconPlus color="#00c898" stroke={1.5} size={20} />
          </ActionIcon>
        </Conditional>
        <Stack justify="space-between" pt="10" gap={15}>
          <Text fw="medium" size="lg">
            {props.name}
          </Text>

          <Group gap={4}>
            <IconMapPin size={20} stroke={1.5} />
            <Text size="md">{props.address}</Text>
          </Group>

          <Group gap={5}>
            <IconBed size={20} stroke={1.5} />
            <Text size="md">{props.bedrooms} bedrooms</Text>

            <IconBath size={20} stroke={1.5} />
            <Text fz="md">{props.bathrooms} bathrooms</Text>
          </Group>
          <Group justify="space-between">
            <Text fw={400} size="xl" c="#00c898">
              GH¢ {props.price}
            </Text>
            <Button
              component="a"
              href={propertyurl}
              variant="transparent"
              c="#00c898"
              classNames={{
                label: classes.btn,
              }}
              onClick={(e) => {
                e.preventDefault();
                navigateToProperty();
              }}
              size="md"
              rightSection={<IconChevronRight size={15} stroke={1.5} />}
            >
              view more
            </Button>
          </Group>
        </Stack>
      </Card>
    </>
  );
};

export const PropertiesLoader = ({ h }) => {
  return <Skeleton h={h || 450} />;
};
