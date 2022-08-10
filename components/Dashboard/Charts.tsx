import React from "react";
import "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";
import {
  BackgroundImage,
  Box,
  Center,
  Container,
  Group,
  Text,
  useMantineTheme,
} from "@mantine/core";

export function Charts() {
  const theme = useMantineTheme();
  const data = {
    labels: ["I", "II", "III"],
    datasets: [
      {
        data: [700, 500, 500],
        backgroundColor: [
          theme.colors[theme.primaryColor][2],
          theme.colors[theme.primaryColor][5],
          theme.colors[theme.primaryColor][8],
        ],
        hoverBackgroundColor: [
          theme.colors[theme.primaryColor][3],
          theme.colors[theme.primaryColor][6],
          theme.colors[theme.primaryColor][9],
        ],
        borderWidth: 1,
      },
    ],
  };

  const dataLine = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Staking rewards",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: theme.primaryColor,
      },
    ],
  };
  return (
    <Group>
      <Container>
        <Doughnut data={data} />
      </Container>
      <Container>
        <Line data={dataLine} />
      </Container>
      <Box sx={{ maxWidth: 300 }} mx="auto"></Box>
    </Group>
  );
}
