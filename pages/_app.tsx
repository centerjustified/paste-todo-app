import { Theme } from "@twilio-paste/core/theme";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { StrictMode } from "react";

const MyApp: React.FC<React.PropsWithChildren<AppProps>> = ({ Component, pageProps }) => {
  return (
    <StrictMode>
      <Theme.Provider theme="default">
        <Component {...pageProps} />
      </Theme.Provider>
    </StrictMode>
  );
};

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  // eslint-disable-next-line no-console
  console.log(metric);
}

export default MyApp;
