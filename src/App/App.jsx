import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AppRouter } from "../router/router"
import { MantineThemeProvider } from "../providers/MantineThemeProvider"
import store from "../redux/store";
import { persistor } from "../redux/store";

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MantineThemeProvider>
          <AppRouter />
        </MantineThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App
