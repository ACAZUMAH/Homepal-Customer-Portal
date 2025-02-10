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

export const FAQSection = () => {
  return (
    <Container size="xl" mt={60} mb={60}>
      <Stack gap="md">
        <Title order={2} ta="center" c="#05af87">
          Frequently Asked Questions
        </Title>
        <Accordion mt="lg">
          {faqs.map((faq, index) => (
            <Accordion.Item key={index} value={faq.question}>
              <Accordion.Control>
                <Text c="#00c898"  size="md">
                  {faq.question}
                </Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text size="md">{faq.answer}</Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
    </Container>
  );
};
