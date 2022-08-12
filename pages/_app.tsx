import { GetServerSidePropsContext } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import {
  ColorSchemeProvider,
  MantineProvider,
  ColorScheme,
  BackgroundImage,
} from "@mantine/core";
import { getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { appWithTranslation } from "next-i18next";
import { useLocalStorage } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";

const App = (props: AppProps & { colorScheme: ColorScheme }) => {
  const [brandColor, setBrandColor] = useState<string>();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme
  );
  const [colorTheme] = useLocalStorage<string>({
    key: "color-theme",
    defaultValue: "red",
  });
  const [background, setBackground] = useState<string>();

  useEffect(() => {
    setBrandColor(colorTheme);
    setBackground(
      colorTheme == "yellow"
        ? "/images/BG-moonriver.png"
        : colorTheme == "blue"
        ? "/images/BG-moonbeam.png"
        : "/images/BG-moonbase.png"
    );
  }, [colorTheme]);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    setCookie("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

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
            <BackgroundImage src={background || ""}>
              <Component {...pageProps} />
            </BackgroundImage>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie("mantine-color-scheme", ctx) || "dark",
});

export default appWithTranslation(App);
