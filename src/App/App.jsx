import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AppRouter } from "../router/router";
import { MantineThemeProvider } from "../providers/MantineThemeProvider";
import store from "../redux/store";
import { persistor } from "../redux/store";
import { ApolloProvider } from "@apollo/client";
import { client } from "../services/apollo-client";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { RollbarProvider } from "../providers/rollbar";

function App() {
  return (
    <RollbarProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApolloProvider client={client}>
            <MantineThemeProvider>
              <AppRouter />
              <SpeedInsights />
            </MantineThemeProvider>
          </ApolloProvider>
        </PersistGate>
      </Provider>
    </RollbarProvider>
  );
}

export default App;
