import {
  Paper,
  Text,
  Grid,
  Container,
  Title,
  Button,
  Center,
} from "@mantine/core";
import styles from "../../styles/Home.module.css";
import { useTranslation, Trans } from "next-i18next";
import { showNotification } from "@mantine/notifications";

export const Profile = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Title className={styles.title} order={1}>
        {t("profile")}
      </Title>

      <Container>
        <Grid>
          <Grid.Col md={6} lg={3}>
            <Paper>
              <Text size="xl">0xb926E36D....E44AFE00</Text>
              <Text color="gray" size="xs">
                {t("loggedWith")}
              </Text>
            </Paper>
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
            <Paper>
              <Text size="xl">1,627.1944 DEV</Text>
              <Text color="gray" size="sm">
                {t("freeBalance")}
              </Text>
            </Paper>
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
            <Paper>
              <Text size="xl">54.55 DEV</Text>
              <Text color="gray" size="sm">
                {t("reservedInStaking")}
              </Text>
            </Paper>
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
            <Paper>
              <Text size="xl">0 DEV</Text>
              <Text color="gray" size="sm">
                {t("lockedInDemocracy")}
              </Text>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
      <Container pt={30}>
        <Center>
          <Button
            onClick={() =>
              showNotification({
                title: "Roadmap",
                message: (
                  <Trans i18nKey="link">
                    Click{" "}
                    <a
                      href="https://roadmap.moonbeam.network/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>{" "}
                    to open the board.
                  </Trans>
                ),
              })
            }
          >
            {t("notifications")}
          </Button>
        </Center>
      </Container>
    </div>
  );
};
