import React, { ReactNode, useState } from "react";
import { IconSun, IconMoonStars } from "@tabler/icons";
import {
  AppShell,
  Navbar,
  Header,
  Group,
  ActionIcon,
  useMantineColorScheme,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { MainLinks } from "../components/MainLinks";
import { Brand } from "./Brand";
import { useRouter } from "next/router";
import Image from "next/image";
import ES from "../public/images/spain-flag-icon.svg";
import FR from "../public/images/france-flag-icon.svg";
import US from "../public/images/united-states-flag-icon.svg";

export function Shell({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  const changeLanguage = (language: "es" | "fr" | "en") => {
    router.push("/", "/", { locale: language });
  };

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      zIndex={0}
      padding="md"
      navbar={
        <Navbar
          zIndex={0}
          width={{ sm: 250, lg: 300 }}
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
        >
          <Navbar.Section grow mt="xs">
            <MainLinks />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60}>
          <Group sx={{ height: "100%" }} px={20} position="apart">
            <Group>
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Brand></Brand>
            </Group>

            <Group>
              {router.locale != "es" && (
                <ActionIcon onClick={() => changeLanguage("es")}>
                  <Image src={ES} alt="Spanish" />
                </ActionIcon>
              )}
              {router.locale != "fr" && (
                <ActionIcon onClick={() => changeLanguage("fr")}>
                  <Image src={FR} alt="French" />
                </ActionIcon>
              )}
              {router.locale != "en" && (
                <ActionIcon onClick={() => changeLanguage("en")}>
                  <Image src={US} alt="English" />
                </ActionIcon>
              )}
              <ActionIcon
                variant="default"
                onClick={() => toggleColorScheme()}
                size={30}
              >
                {colorScheme === "dark" ? (
                  <IconSun size={16} />
                ) : (
                  <IconMoonStars size={16} />
                )}
              </ActionIcon>
            </Group>
          </Group>
        </Header>
      }
    >
      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        {children}
      </MediaQuery>
    </AppShell>
  );
}
