import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme as appTheme } from "../constants/theme";

export const MantineThemeProvider = (props) => {
    const theme = createTheme({ ...appTheme })
    return (
        <MantineProvider theme={theme}>
            <Notifications position="top-right" />
            { props.children }
        </MantineProvider>
    )
}