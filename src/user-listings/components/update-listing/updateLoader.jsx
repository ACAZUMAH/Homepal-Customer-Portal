import { Card, Group, Paper, SimpleGrid, Skeleton, Space } from "@mantine/core";

export const UpdateListingSkeleton = () => {
    
  return (
    <>
      <Group justify="space-between" grow>
        <Card withBorder>
          <Skeleton height={40} mt={10} width="100%" />
          <Space h={20} />
          <Skeleton height={40} mt={10} width="100%" />
          <Space h={20} />
          <SimpleGrid cols={{ base: 1, sm: 2 }}>
            <Skeleton height={40} mt={10} width="100%" />
            <Skeleton height={40} mt={10} width="100%" />
            <Skeleton height={40} mt={10} width="100%" />
            <Skeleton height={40} mt={10} width="100%" />
          </SimpleGrid>
          <Space h={20} />
          <Skeleton height={80} mt={10} width="100%" />
          <Space h={20} />
          <Skeleton height={40} mt={10} width="100%" />
          <Space h={20} />
          <Skeleton height={40} mt={10} width="100%" />
        </Card>
        <Paper
          shadow="md"
          radius="sm"
          withBorder
          style={{ width: 300, height: 530 }}
        >
          <Skeleton height={530} width="100%" />
        </Paper>
      </Group>
      <Group mt={20} justify="flex-end">
        <Skeleton height={30} width={60} />
      </Group>
    </>
  );
};
