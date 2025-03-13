import React, { useState } from "react";
import { Container, Stack, Title, Group, Button, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import Trends from "./components/trends";


export const Blog = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div style={{ backgroundColor: "#EFF1F3", minHeight: "100vh", paddingBottom: "2rem" }}>
      
      <div style={{ backgroundColor: "white", padding: "2rem 0", borderBottom: "1px solid #D3D3D3" }}>
        <Container size="lg">
          <Stack spacing="xl" align="center">
            <Title
              order={1}
              style={{
                background: "linear-gradient(92.29deg, #002147 -18.32%, #6689B3 122.1%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "3rem",
                fontWeight: 500,
                lineHeight: 1.2,
                paddingBottom: "20px",
                textAlign: "center",
              }}
            >
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
      <Trends />
      
    </div>
  );
  
};
export default Blog;