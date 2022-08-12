import React from "react";
import {
  IconDashboard,
  IconBuildingCommunity,
  IconBook,
  IconCurrencyCent,
  IconCrown,
  IconMessageCircle2,
} from "@tabler/icons";
import { ThemeIcon, UnstyledButton, Group, Text, NavLink } from "@mantine/core";
import { useTranslation } from "next-i18next";
import Link from "next/link";

interface MainLinkProps {
  icon: React.ReactNode;
  label: string;
  route?: string;
}

function MainLink({ icon, label, route }: MainLinkProps) {
  const { t } = useTranslation("navbar");
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xl,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[2],
        },
      })}
    >
      <Link href={route || ""} style={{ textDecoration: "none" }}>
        <Group>
          <ThemeIcon variant="light">{icon}</ThemeIcon>
          <Text size="md">{t(label)}</Text>
        </Group>
      </Link>
    </UnstyledButton>
  );
}

const data = [
  { icon: <IconDashboard size={16} />, label: "dashboard", route: "/" },
  { icon: <IconCrown size={16} />, label: "staking", route: "/staking" },
  { icon: <IconCurrencyCent size={16} />, label: "xcm", route: "/xcm" },
  { icon: <IconBook size={16} />, label: "resources" },
  {
    icon: <IconBuildingCommunity size={16} />,

    label: "governance",
  },
  {
    icon: <IconMessageCircle2 size={16} />,

    label: "feedback",
  },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
