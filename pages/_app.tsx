import * as React from "react";
import { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import { Global } from "@emotion/react";
import createCache from "@emotion/cache";

export const cache = createCache({ key: "css", prepend: true });
// cache.compat = true;

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const [darkmode, setDarkMode] = React.useState(false);

  return (
    <CacheProvider value={cache}>
      <Global
        styles={{
          body: {
            color: darkmode ? "pink" : "red",
            backgroundColor: darkmode ? "#000" : "#fff",
          },
        }}
      />

      <Component {...pageProps} />
      <button onClick={() => setDarkMode((prevState) => !prevState)}>
        switch to {darkmode ? "light" : "dark"} mode!
      </button>
    </CacheProvider>
  );
}
