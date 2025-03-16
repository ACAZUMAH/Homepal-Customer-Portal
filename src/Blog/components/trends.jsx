import { Container, Grid, Text, Image, Title, Stack, Divider } from "@mantine/core";
import trends2 from "../../assets/images/trends2.png";
import trends1 from "../../assets/images/trends1.png";

const newsCategories = [
  { 
    title: "Buying",
    author: "Tech Property Review",
    description: "2025 Forecast: AI-powered home valuation tools expected to reduce buyer research time by 60%"
  },
  { 
    title: "Selling",
    author: "Green Housing Digest",
    description: "Coming 2025: New EU sustainability regulations that will impact home listings"
  },
  { 
    title: "Renting",
    author: "Future Cities Report",
    description: "2025 Trend Alert: Co-living spaces predicted to dominate urban rental markets"
  },
  { 
    title: "Guides",
    author: "Financial Times Property",
    description: "Preparing for 2025: How new property tax reforms will affect homeowners"
  },
  { 
    title: "Agents",
    author: "Pro Agent Magazine",
    description: "2025 Career Outlook: VR certification becomes essential for real estate professionals"
  }
];


const articles = [
  {
    category: "Buying",
    title: "Navigating Competitive Markets: Strategies for First-Time Homebuyers",
    content: "With inventory levels at record lows, buyers are adopting new tactics including pre-inspection offers and flexible closing dates. Learn how to strengthen your bid in today's fast-paced market.",
    image: trends2,
    author: "Maria Gonzalez",
  },
  {
    category: "Renting",
    title: "The Rise of Flexi-Leases: How Landlords Are Adapting to New Demands",
    content:
      "Property managers report 30% increase in requests for short-term leases and pet-friendly accommodations. Discover how adaptive leasing strategies benefit both tenants and owners.",
    image: trends1,
    author: "James Wilson",
  },
];

const Trends = () => {
  return (
    <Container size="xl" mt="xl" style={{backgroundColor:"white"}}>
      <Grid gutter="xl">
        
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Stack spacing="xs">
            <Title order={2} style={{ color: "#00c898" }}>Latest News</Title>
            {newsCategories.map((item, index) => (
              <Stack key={index} spacing={2}>
                <Text fw={600} c="#00c898">{item.title}</Text>
                <Text size="sm" c="gray.6">{item.description}</Text>
                <Text size="xs" c="gray.5">{item.author}</Text>
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
                  <Text fw={600} c="#00c898">{article.category}</Text>
                  <Title order={3}>{article.title}</Title>
                  <Text size="sm" c="gray.7">{article.content}</Text>
                  <Text size="xs" c="gray.5">{article.author}</Text>
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
