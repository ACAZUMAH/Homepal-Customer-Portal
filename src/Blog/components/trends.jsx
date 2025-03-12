import { useState } from "react";
import { Container, Grid, Text, Image, Title, Stack, Divider, Button, Group, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import trends2 from '../../assets/images/trends2.png';
import trends1 from '../../assets/images/trends1.png';

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
  const [searchText, setSearchText] = useState("");

  return (
    <div style={{ backgroundColor: "#EFF1F3", minHeight: "100vh", paddingBottom: "2rem" }}>
      
      <div style={{ backgroundColor: "white", padding: "2rem 0", borderBottom: "1px solid #D3D3D3" }}>
        <Container size="lg">
          <Stack spacing="xl" align="center">
            <Title order={1} style={{ 
              background: "linear-gradient(92.29deg, #002147 -18.32%, #6689B3 122.1%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "3rem", 
               fontWeight: 500, 
               lineHeight: 1.2, 
               paddingBottom:"20px",
              textAlign: "center" }}>
              Real Estate Insights & <br /> Tips
            </Title>

            
            <Group spacing="sm" style={{ width: "100%", justifyContent: "center" }}>
              <Button variant="filled" color="#002147" radius="xl" size="md">Trends</Button>
              <Button variant="outline" color="#002147" radius="xl" size="md">Buying</Button>
              <Button variant="outline" color="#002147" radius="xl" size="md">Selling</Button>
              <Button variant="outline" color="#002147" radius="xl" size="md">Renting</Button>
              <Button variant="outline" color="#002147" radius="xl" size="md">Guides</Button>
              <Button variant="outline" color="#002147" radius="xl" size="md">More</Button>

              
              <TextInput
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                radius="xl"
                size="md"
                
                style={{ width: "150px" }} 
                rightSection={<IconSearch size={18} style={{ color: "#465E79" }} />}
                styles={{ input: { borderColor: "#A7911B" } }}
              />
            </Group>
          </Stack>
        </Container>
      </div>

      
      <Container size="lg" mt="xl">
        <Grid gutter="xl">
          
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack spacing="xs">
              <Title order={2} style={{ color: "#002147" }}>Latest News</Title>
              {newsCategories.map((item, index) => (
                <Stack key={index} spacing={2}>
                  <Text fw={600} color="#002147">{item.title}</Text>
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
                    <Text fw={600} color="#002147">{article.category}</Text>
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
    </div>
  );
};

export default Trends;