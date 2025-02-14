import { Paper, Title, Group, Image, Box } from "@mantine/core";
import { Auth } from "./auth";
import logo from "../../assets/images/HomePal Svg.svg";

export const AuthPage = ({ phoneNumber, onChangePhoneNumber, onSuccess }) => {
  return (
    <Box>
      <Group justify="center" align="center">
        <Image h="xl" fit="contain" src={logo} />{" "}
        <Title c="#00c898" fs="italic">
          HomePal
        </Title>
      </Group>
      <Paper mt="md" p="xl" maw={500} withBorder>
        <Auth
          phoneNumber={phoneNumber}
          onChangePhoneNumber={onChangePhoneNumber}
          onSuccess={onSuccess}
        />
      </Paper>
    </Box>
  );
};
