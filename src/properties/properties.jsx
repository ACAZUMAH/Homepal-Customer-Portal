import {
  Center,
  Container,
  Title,
  Text,
  Stack,
  SimpleGrid,
  Pagination,
  Group,
  Select,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconArrowRight,
  IconChevronDown,
} from "@tabler/icons-react";
import { PropertiesCard, PropertiesLoader } from "../components/property-card";
import { Conditional } from "../components/conditional";
import { EmptyProperties } from "./components/emptyProperties";
import { PropertiesError } from "./components/propertiesError";
import { SearchBar } from "./components/searchBar";

export const Properties = (props) => {

  const showErrorAlert = !props.loading && props.error;
  const showEmptyAlert = !props.properties.length && !props.loading && !props.error;
  const showPagenation =  props.properties.length && !props.loading && !props.error;
  const showSortAndData = props.properties.length || (props.loading && !props.error);

  const totalPages = Math.ceil(props.pageInfo?.totalCount / props.pageInfo?.limit) || 0

  return (
    <>
      <Container size="xl" py="xl" pos="relative">
        <Center mt={30}>
          <Stack gap={15}>
            <Title c="#00c898" fw="bold" size="4rem" visibleFrom="sm">
              Find Your Perfect Property
            </Title>
          </Stack>
        </Center>
        <SearchBar onSearch={props.search} mode={props.mode}/>
        <Conditional condition={showSortAndData}>
          <Group justify="space-between" pt={50} gap="xs">
            <Title c="#00c898" order={1} size="2rem">
              Explore available Properties:
            </Title>
            <Group justify="flex-end">
              <Text size="md">Sort By:</Text>
              <Select
                data={["Newest", "Oldest"]}
                defaultValue="Oldest"
                value={props.sort}
                onChange={props.setSort}
                rightSection={<IconChevronDown stroke={1.5} />}
                rightSectionWidth={20}
                radius="xl"
              />
            </Group>
          </Group>
          <SimpleGrid mt="xl" cols={{ base: 1, xs: 2, md: 3, xl: 4 }}>
            {props.properties.map((property, index) => (
              <PropertiesCard key={index} {...property} />
            ))}
            <Conditional condition={props.loading}>
              {Array(16)
                .fill(1)
                .map((_, index) => (
                  <PropertiesLoader key={index} />
                ))}
            </Conditional>
          </SimpleGrid>
        </Conditional>
        <Conditional condition={showErrorAlert}>
          <PropertiesError />
        </Conditional>
        <Conditional condition={showEmptyAlert}>
          <EmptyProperties />
        </Conditional>
        <Conditional condition={showPagenation}>
          <Group gap={10} my={40} justify="flex-end">
            <Pagination
              color="#00c898"
              size="md"
              total={totalPages}
              siblings={1}
              defaultValue={1}
              previousIcon={IconArrowLeft}
              nextIcon={IconArrowRight}
              value={props.page}
              onChange={props.setPage}
            />
          </Group>
        </Conditional>
      </Container>
    </>
  );
};
