import {
  Container,
  Group,
  Title,
  Stack,
  Accordion,
  Text,
  Badge,
  Grid,
} from "@mantine/core";
import { faqs } from "../constants";
import classes from "../../styles/index.module.css";
import { IconPlus } from "@tabler/icons-react";

export const FAQSection = () => {
  return (
    <Container size="87%" mt={60} mb={60}>
      <Stack gap="md">
        <Title order={2} ta="center" c="#05af87">
          Frequently Asked Questions
        </Title>
        <Accordion mt="lg">
          {faqs.map((faq, index) => (
            <Accordion.Item key={index} value={faq.question}>
              <Accordion.Control>
                <Text c="#00c898" fw="bold" size="xl">
                  {faq.question}
                </Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text size="xl">{faq.answer}</Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
    </Container>
  );
};
