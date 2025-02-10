import { Card, Text, Center, ActionIcon } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";

export const FeatureCard = ({ title, icon }) => {
  return (
    <Card
      shadow="md"
      radius="md"
      padding="lg"
      withBorder
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        textAlign: "center",
        height: 160,
      }}
    >
      <Center style={{ fontSize: "20px", marginBottom: "10px" }}>{icon}</Center>
      <Text size="md" weight={500}>
        {title}
      </Text>
      <ActionIcon
        variant="subtle"
        color="gray"
        size="md"
        style={{ position: "absolute", top: 5, right: 5 }}
      >
        <IconArrowUpRight stroke={1.5} size={16} />
      </ActionIcon>
    </Card>
  );
};
