import { Anchor, Card, Group, Image, Text } from "@mantine/core";
import { IconBed, IconCurrencyDollar, IconLocation } from "@tabler/icons-react";
import React from "react";

export const PropertyCard = (props) => {
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={props.imageUrl} height={150} alt="property" />
        </Card.Section>
      </Card>

      <Text>{props.name}</Text>

      <Text>
        <IconLocation stroke={1.5} />
        {props.address}
      </Text>

      <Text c="00c898">
        <IconCurrencyDollar stroke={1.5} />
        {props.price}
      </Text>

      <Group>
        <Text>
          <IconBed stroke={1.5} />
          {props.bedrooms}
        </Text>
        <Text>
          <IconBath stroke={1.5} />
          {props.Bathrooms}
        </Text>
        <Anchor component="a" onClick={() => {}}>View Details</Anchor>
      </Group>
    </>
  );
};
