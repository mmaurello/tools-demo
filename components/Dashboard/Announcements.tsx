import { Box, Card, Center, Group, Title } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { useFlags } from "flagsmith/react";

interface AnnoucementInterface {
  title: string;
  link: string;
  important: boolean;
}

const Announcement = ({
  announcement,
}: {
  announcement: AnnoucementInterface;
}) => {
  return (
    <Card>
      <Title order={4}>{announcement.title}</Title>
      <NextLink href={announcement.link}>Click to visit</NextLink>
    </Card>
  );
};
export const Announcements = () => {
  const { announcements } = useFlags(["announcements"]);
  const activeAnnouncementes: AnnoucementInterface[] = JSON.parse(
    announcements.value as string
  );
  console.log(announcements);
  return (
    <Center>
      <Group>
        {activeAnnouncementes &&
          announcements.enabled &&
          activeAnnouncementes.map((ann, index) => (
            <Announcement key={index} announcement={ann} />
          ))}
      </Group>
    </Center>
  );
};
