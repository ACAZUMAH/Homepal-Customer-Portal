import React from 'react'
import { Conditional } from '../../components/conditional'
import { Container, Text, Title, Stack } from '@mantine/core'

export const FeaturesProperties = () => {
  return (
    <Conditional condition={true}>
      <Container size="90%" py={40}>
        <Stack>
          <Title c="#00c898" order={1} size="2.5rem">Featured Properties</Title>
          <Text size="xl">
            Explore our curated selection of featured properties. Each listing
            showcases exceptional <br/>homes and investment opportunities availabel.
            Click "view Details" for more information
          </Text>
        </Stack>
      </Container>
    </Conditional>
  );
}
