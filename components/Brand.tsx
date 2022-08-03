import React, { ReactNode, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Menu, UnstyledButton } from "@mantine/core";
import Moonbeam from "../public/images/moonbeam-logo.png";
import Moonriver from "../public/images/moonriver-logo.png";
import MoonbaseAlpha from "../public/images/moonbase-alpha-logo.png";
import { useLocalStorage } from "@mantine/hooks";

export function Brand() {
  const [colorTheme, setColorTheme] = useLocalStorage<string>({
    key: "color-theme",
  });
  const logos = useMemo(
    () => ({
      moonbeam: <Image src={Moonbeam} alt="moonbeam"></Image>,
      moonriver: <Image src={Moonriver} alt="moonriver"></Image>,
      moonbaseAlpha: <Image src={MoonbaseAlpha} alt="moonbase-alpha"></Image>,
    }),
    []
  );
  const [selectedLogo, setSelectedLogo] = useState<ReactNode>();

  useEffect(
    () =>
      setSelectedLogo(
        colorTheme == "yellow"
          ? logos.moonriver
          : colorTheme == "blue"
          ? logos.moonbeam
          : logos.moonbaseAlpha
      ),
    [logos, colorTheme]
  );

  return (
    <Menu width={200} shadow="lg">
      <Menu.Target>
        <UnstyledButton>{selectedLogo}</UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          component="a"
          onClick={() => {
            setSelectedLogo(logos.moonbeam);
            setColorTheme("blue");
          }}
        >
          {logos.moonbeam}
        </Menu.Item>
        <Menu.Item
          component="a"
          onClick={() => {
            setSelectedLogo(logos.moonriver);
            setColorTheme("yellow");
          }}
        >
          {logos.moonriver}
        </Menu.Item>
        <Menu.Item
          component="a"
          onClick={() => {
            setSelectedLogo(logos.moonbaseAlpha);
            setColorTheme("red");
          }}
        >
          {logos.moonbaseAlpha}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
