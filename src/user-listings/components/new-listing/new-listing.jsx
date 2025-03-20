import { 
  Button, Container, Group, Stepper, Text, Title, Grid, Paper,
  Image, SimpleGrid, Flex, Box, rem, ThemeIcon
} from "@mantine/core";
import React, { useState } from "react";
import { ListingForm } from "./listingForm";
import { ImageDropZone } from "./dropZone";
import { IconArrowRight, IconCircleCheck } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom"; 

export const NewListing = () => {
  const [active, setActive] = useState(0);
  const [images, setImages] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); 

  const form = useForm({
    initialValues: {
      name: "",
      description: "",
      address: "",
      price: "",
      bathrooms: 1,
      bedrooms: 1,
      type: "",
      mode: "",
      amenities: [],
    },
    validate: {
      name: (value) => (value.length < 3 ? "Name must be at least 3 characters" : null),
      description: (value) => (value.length < 10 ? "Description must be at least 10 characters" : null),
      address: (value) => (value.length < 5 ? "Enter a valid address" : null),
      price: (value) => (value <= 0 ? "Price must be greater than 0" : null),
      type: (value) => (!value ? "Please select property type" : null),
      mode: (value) => (!value ? "Please select listing mode" : null),
    },
  });

  const nextStep = () => {
    if (active === 1) {
      const validationResult = form.validate();
      if (!validationResult.hasErrors) {
        setActive((current) => current + 1);
      } else {
        alert("Please fill in all required fields correctly.");
      }
    } else if (active === 2) {
      setSubmitted(true);
      setActive(3); 
    } else {
      setActive((current) => current + 1);
    }
  };

  const handleFinish = () => {  
    navigate('/dashboard'); 
  };

  return (
    <Container size="md" py="xl">
      <Title order={2} c="#00c898" mb="xl">
        Add New Listing
      </Title>
      
      <Stepper 
        active={active} 
        allowNextStepsSelect={false} 
        color="#00c898"
      >
        <Stepper.Step label="Upload Images">
          <ImageDropZone images={images} setImages={setImages} />
        </Stepper.Step>
        
        <Stepper.Step label="Listing Information">
          <ListingForm form={form} />
        </Stepper.Step>

        <Stepper.Step label="Submit" completed={submitted}>
          <Box>
            <Title order={3} mb="xl" c="dimmed">Listing Summary</Title>
            
            {images.length > 0 && (
              <Paper withBorder p="md" radius="md" mb="xl">
                <Text fw={500} mb="sm">Uploaded Images ({images.length})</Text>
                <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
                  {images.map((img, index) => (
                    <Image
                      key={index}
                      src={img.url}
                      style={{ borderRadius: 'var(--mantine-radius-md)' }}
                      alt={`Listing image ${index + 1}`}
                    />
                  ))}
                </SimpleGrid>
              </Paper>
            )}

            <Grid gutter="xl">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Paper withBorder p="md" radius="md">
                  <Text fw={500} mb="sm">Basic Information</Text>
                  <SummaryItem label="Property Name" value={form.values.name} />
                  <SummaryItem label="Address" value={form.values.address} />
                  <SummaryItem label="Property Type" value={form.values.type} />
                  <SummaryItem label="Listing Mode" value={form.values.mode} />
                </Paper>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <Paper withBorder p="md" radius="md">
                  <Text fw={500} mb="sm">Details & Pricing</Text>
                  <Grid>
                    <Grid.Col span={6}>
                      <SummaryItem label="Price" value={`GHC ${form.values.price}`} />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <SummaryItem label="Bedrooms" value={form.values.bedrooms} />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <SummaryItem label="Bathrooms" value={form.values.bathrooms} />
                    </Grid.Col>
                  </Grid>
                </Paper>
              </Grid.Col>

              <Grid.Col span={12}>
                <Paper withBorder p="md" radius="md">
                  <Text fw={500} mb="sm">Description</Text>
                  <Text c="dimmed" lh={1.6}>{form.values.description}</Text>
                </Paper>
              </Grid.Col>

              {form.values.amenities.length > 0 && (
                <Grid.Col span={12}>
                  <Paper withBorder p="md" radius="md">
                    <Text fw={500} mb="sm">Amenities</Text>
                    <Group gap="sm">
                      {form.values.amenities.map((amenity, index) => (
                        <Text key={index} fw={500} c="dimmed" span>• {amenity}</Text>
                      ))}
                    </Group>
                  </Paper>
                </Grid.Col>
              )}
            </Grid>
          </Box>
        </Stepper.Step>

        <Stepper.Completed>
          <Flex
            direction="column"
            align="center"
            justify="center"
            mih={400}
            gap="md"
            py="xl"
          >
            <ThemeIcon variant="light" color="teal" size={120} radius="60px">
              <IconCircleCheck style={{ width: rem(80), height: rem(80) }} />
            </ThemeIcon>
            <Title order={3} c="dimmed" mt="md">
              Listing Submitted Successfully!
            </Title>
            <Text c="dimmed" ta="center" maw={500}>
              Your property listing has been submitted for review. You can track 
              its status in your dashboard. Thank you for choosing HomePal!
            </Text>
           
            <Button 
              onClick={handleFinish}
              color="#00c898"
              mt="xl"
              size="md"
              radius="md"
             
            >
              Finish
            </Button>
          </Flex>
        </Stepper.Completed>
      </Stepper>

      {active < 3 && (
        <Group justify="flex-end" mt="xl">
          <Button 
            onClick={nextStep} 
            color="#00c898" 
            radius="md" 
            rightSection={<IconArrowRight stroke={1.5} />}
          >
            {active === 2 ? 'Submit Listing' : 'Next Step'}
          </Button>
        </Group>
      )}
    </Container>
  );
};

const SummaryItem = ({ label, value }) => (
  <Flex justify="space-between" align="center" py={4}>
    <Text c="dimmed">{label}</Text>
    <Text fw={500}>{value || '-'}</Text>
  </Flex>
);