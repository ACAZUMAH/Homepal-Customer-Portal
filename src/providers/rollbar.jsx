import Rollbar from "rollbar";
import { Provider, ErrorBoundary } from "@rollbar/react";

const config = {
  autoInstrument: true,
  captureUncaught: true,
  captureUnhandledRejections: true,
  environment: `${import.meta.env.NODE_ENV}`,
  accessToken: `${import.meta.env.ROLLBAR_ACCESS_TOKEN}`,
  enabled: Boolean(import.meta.env.ROLLBAR_ACCESS_TOKEN),
};

export const rollbar = new Rollbar(config);

export const RollbarProvider = (props) => {
  const fallbackUI = () => <div>Oops, something went wrong</div>;

  return (
    <Provider config={config}>
        <ErrorBoundary fallbackUI={fallbackUI}>{props.children}</ErrorBoundary>
    </Provider>
  );
};
