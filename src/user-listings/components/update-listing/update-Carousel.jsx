import { Button, Paper, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from '../../styles/index.module.css'
import { Carousel } from "@mantine/carousel";

const Card = ({ image }) => {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="sm"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
    </Paper>
  );
}


export const UpdateCarousel = ({ imageUrls }) => {
  const theme = useMantineTheme();

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const slides = imageUrls.map((item, index) => (
    <Carousel.Slide key={index}>
      <Card image={item}/>
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: "100%" }}
      slideGap={{ base: 2, sm: "xl" }}
      align="start"
      
    >
      {slides}
    </Carousel>
  );
}


