import { Container, Grid, Text, Image, Title, Stack, Divider } from "@mantine/core";
import trends2 from "../../assets/images/trends2.png";
import trends1 from "../../assets/images/trends1.png";

const newsCategories = [
  { title: "Buying" },
  { title: "Selling" },
  { title: "Renting" },
  { title: "Guides" },
  { title: "Agents" },
];

const articles = [
  {
    category: "Buying",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei usmod",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: trends2,
    author: "Wade Warren",
  },
  {
    category: "Renting",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei usmod",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: trends1,
    author: "Wade Warren",
  },
];

const Trends = () => {
  return (
    <Container size="lg" mt="xl" style={{backgroundColor:"white"}}>
      <Grid gutter="xl">
        
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Stack spacing="xs">
            <Title order={2} style={{ color: "#00c898" }}>Latest News</Title>
            {newsCategories.map((item, index) => (
              <Stack key={index} spacing={2}>
                <Text fw={600} color="#00c898">{item.title}</Text>
                <Text size="sm" color="gray.6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei usmod
                </Text>
                <Text size="xs" color="gray.5">Wade Warren</Text>
                {index !== newsCategories.length - 1 && <Divider />}
              </Stack>
            ))}
          </Stack>
        </Grid.Col>

        
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Stack spacing="xl">
            {articles.map((article, index) => (
              <div key={index}>
                <Image src={article.image} radius="md" alt={article.category} />
                <Stack mt="md" spacing="xs">
                  <Text fw={600} color="#00c898">{article.category}</Text>
                  <Title order={3}>{article.title}</Title>
                  <Text size="sm" color="gray.7">{article.content}</Text>
                  <Text size="xs" color="gray.5">{article.author}</Text>
                </Stack>
              </div>
            ))}
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Trends;
