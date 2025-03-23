import React, { useState } from "react"; // Importing React and useState hook for managing component state
import {
  Container,
  Stack,
  Title,
  Group,
  Button,
  TextInput,
} from "@mantine/core"; // Importing Mantine UI components for layout and styling
import { IconSearch } from "@tabler/icons-react"; // Importing search icon from Tabler Icons
import Trends from "./components/trends"; // Importing Trends component
import { OtherTrends } from "./components/otherTrends"; // Importing OtherTrends component

export const Blog = () => {
  const [searchText, setSearchText] = useState(""); // State variable to manage search input

  const scrollToSection = (sectionId) => { // Function to scroll to a specific section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" }); // Smooth scrolling to the section
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        paddingBottom: "2rem",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem 0",
          borderBottom: "1px solid #D3D3D3",
        }}
      >
        <Container size="xl">
          <Stack spacing="xl" align="center">
            <Title
              order={1}
              style={{
                color: "#00c898",
                fontSize: "3rem",
                fontWeight: 500,
                lineHeight: 1.2,
                paddingBottom: "20px",
                textAlign: "center",
              }}
            >
              Real Estate Insights & <br /> Tips
            </Title>

            <Group
              spacing="sm"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <Button 
                onClick={() => scrollToSection("trends")}
                variant="filled" 
                color="#00c898" 
                radius="xl" 
                size="md"
              >
                Trends
              </Button>
              <Button 
                onClick={() => scrollToSection("buying")}
                variant="outline" 
                color="#00c898" 
                radius="xl" 
                size="md"
              >
                Buying
              </Button>
              <Button 
                onClick={() => scrollToSection("selling")}
                variant="outline" 
                color="#00c898" 
                radius="xl" 
                size="md"
              >
                Selling
              </Button>
              <Button 
                onClick={() => scrollToSection("renting")}
                variant="outline" 
                color="#00c898" 
                radius="xl" 
                size="md"
              >
                Renting
              </Button>
              <Button 
                onClick={() => scrollToSection("guide")}
                variant="outline" 
                color="#00c898" 
                radius="xl" 
                size="md"
              >
                Guides
              </Button>
              <Button variant="outline" color="#00c898" radius="xl" size="md">
                More
              </Button>

              <TextInput
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                radius="xl"
                size="md"
                style={{ width: "150px" }}
                rightSection={
                  <IconSearch size={18} style={{ color: "#465E79" }} />
                }
                styles={{ input: { borderColor: "#00c898" } }}
              />
            </Group>
          </Stack>
        </Container>
      </div>

      <Trends />
      <OtherTrends />
    </div>
  );
};
