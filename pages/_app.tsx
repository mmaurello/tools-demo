import { AppProps } from "next/app";
import Head from "next/head";
import {
  ColorSchemeProvider,
  MantineProvider,
  ColorScheme,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { appWithTranslation } from "next-i18next";
import { useLocalStorage } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";

const App = (props: AppProps) => {
  const [brandColor, setBrandColor] = useState<string>();
  const [colorTheme] = useLocalStorage<string>({
    key: "color-theme",
    defaultValue: "red",
  });
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useEffect(() => setBrandColor(colorTheme), [colorTheme]);

  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Tools POC</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            primaryColor: brandColor,
            components: {
              ThemeIcon: {
                styles: (theme) => ({
                  root: {
                    color:
                      theme.colorScheme === "dark"
                        ? theme.colors[theme.primaryColor][3]
                        : theme.colors[theme.primaryColor][9],
                  },
                }),
              },
              ActionIcon: {
                styles: (theme) => ({
                  root: {
                    color:
                      theme.colorScheme === "dark"
                        ? theme.colors[theme.primaryColor][5]
                        : theme.colors[theme.primaryColor][7],
                  },
                }),
              },
            },
          }}
        >
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

export default appWithTranslation(App);
