import { Group, Skeleton, Box, Flex, Stack, Card, Grid } from "@mantine/core";
import { IconChevronLeft, IconHeart, IconShare } from "@tabler/icons-react";

export const PropertyLoader = () => {
  return (
    <>
      <Group justify="space-between">
        <Skeleton height={36} width={86} radius="sm" />
        <Group>
          <Skeleton height={36} width={86} radius="sm" />
          <Skeleton height={36} width={86} radius="sm" />
        </Group>
      </Group>
      <Box visibleFrom="sm" mt={15}>
        <Skeleton height={550} radius="md" />
        <Group justify="center" mt="md">
          <Skeleton radius="md" height={160} width={240} />
          <Skeleton radius="md" height={160} width={240} />
          <Skeleton radius="md" height={160} width={240} />
          <Skeleton radius="md" height={160} width={250} />
          <Skeleton radius="md" height={160} width={250} />
        </Group>
        <Flex
          mt={80}
          flex="grow"
          h="100%"
          gap={20}
          direction="row"
          align="stretch"
        >
          <Stack flex="2" gap={20}>
            <Stack>
              <Skeleton height={15} radius="xl" width="18%" />
              <Skeleton height={8} radius="xl" />
              <Skeleton height={8} radius="xl" />
              <Skeleton height={8} radius="xl" width="50%" />
            </Stack>
            <Card shadow="sm" radius="md" p="lg" mt={70} withBorder>
              <Group justify="space-between">
                <Skeleton height={15} radius="xl" width="18%" />
                <Skeleton height={15} radius="xl" width="15%" />
              </Group>
              <Group mt="xl">
                <Skeleton height={10} radius="xl" width="15%" />
                <Skeleton height={10} radius="xl" width="15%" />
              </Group>
            </Card>
          </Stack>
          <Card shadow="sm" radius="md" p="lg" withBorder flex="1" w="30%">
            <Stack>
              <Skeleton height={15} radius="xl" />
              <Skeleton height={15} radius="xl" width="30%" />
              <Skeleton height={8} radius="xl" />
              <Skeleton height={8} radius="xl" />
              <Skeleton height={8} radius="xl" width="50%" />
              <Skeleton height={36} radius="sm" />
              <Skeleton height={36} radius="sm" />
            </Stack>
          </Card>
        </Flex>
        <Card shadow="sm" radius="md" p="lg" withBorder h="50%" w={816} mt={40}>
          <Skeleton height={15} radius="xl" width="18%" />
          <Grid mt="sm">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Grid.Col span={4} key={index}>
                  <Skeleton height={8} radius="xl" />
                </Grid.Col>
              ))}
          </Grid>
        </Card>
        <Card
          shadow="sm"
          radius="md"
          p="lg"
          withBorder
          h="auto"
          w={816}
          mt={40}
        >
          <Group justify="space-between" mb={20}>
            <Skeleton height={15} radius="xl" width="18%" />
            <Skeleton height={15} radius="xl" width="30%" />
          </Group>
          <Stack>
            <Skeleton height={15} radius="xl" width="35%" />
            <Stack>
              <Skeleton height={8} radius="xl" width="40%" />
              <Skeleton height={8} radius="xl" width="40%" />
              <Skeleton height={8} radius="xl" width="40%" />
            </Stack>
          </Stack>
        </Card>
      </Box>
      <Box hiddenFrom="sm" mt={20}>
        <Skeleton height={300} />
        <Flex gap="md" justify="center" direction="column" wrap="wrap">
          <Stack mt={20} gap={15}>
            <Skeleton height={15} radius="xl" width="30%" />
            <Skeleton height={8} radius="xl" />
            <Skeleton height={8} radius="xl" />
            <Skeleton height={8} radius="xl" width="20%" />
            <Card shadow="sm" radius="md" p="lg" withBorder>
              <Group justify="space-between">
                <Skeleton height={13} radius="xl" width="30%" />
                <Skeleton height={13} radius="xl" width="25%" />
              </Group>
              <Group mt="xl">
                <Skeleton height={10} radius="xl" width="20%" />
                <Skeleton height={10} radius="xl" width="20%" />
              </Group>
            </Card>
            <Card shadow="sm" radius="md" p="lg" withBorder>
              <Stack>
                <Skeleton height={15} radius="xl" />
                <Skeleton height={36} radius="sm" />
                <Skeleton height={36} radius="sm" />
              </Stack>
            </Card>
          </Stack>
          <Card shadow="sm" radius="md" p="lg" withBorder h="50%" w="100%">
            <Skeleton height={15} radius="xl" width="18%" />
            <Grid mt="sm">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <Grid.Col span={4} key={index}>
                    <Skeleton height={8} radius="xl" />
                  </Grid.Col>
                ))}
            </Grid>
          </Card>
          <Card shadow="sm" radius="md" p="lg" withBorder h="auto" w="100%" mt={40}>
            <Group justify="space-between" mb={20}>
              <Skeleton height={15} radius="xl" width="18%" />
              <Skeleton height={15} radius="xl" width="30%" />
            </Group>
            <Stack>
              <Skeleton height={15} radius="xl" width="35%" />
              <Stack>
                <Skeleton height={8} radius="xl" width="40%" />
                <Skeleton height={8} radius="xl" width="40%" />
                <Skeleton height={8} radius="xl" width="40%" />
              </Stack>
            </Stack>
          </Card>
        </Flex>
      </Box>
    </>
  );
};
