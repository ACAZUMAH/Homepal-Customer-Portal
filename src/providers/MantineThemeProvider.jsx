import { MantineProvider, createTheme } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { theme as appTheme } from "../constants/theme";

export const MantineThemeProvider = (props) => {
  const theme = createTheme({ ...appTheme });
  return (
    <MantineProvider theme={theme}>
      <Notifications position="top-right" />
      <ModalsProvider>{props.children}</ModalsProvider>
    </MantineProvider>
  );
};
