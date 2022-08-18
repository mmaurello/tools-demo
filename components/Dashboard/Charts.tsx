import React from "react";
import "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";
import { Box, Container, Group, useMantineTheme } from "@mantine/core";

export function Charts() {
  const theme = useMantineTheme();
  const data = {
    labels: ["Free", "Reserved", "Locked"],
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
        borderWidth: 0,
      },
    ],
  };
  const options = {
    cutout: 60,
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          padding: 30,
          color: "white",
          font: {
            padding: 4,
            size: 15,
          },
        },
      },
    },
  };

  const dataLine = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Staking rewards",
        data: [33, 53, 68, 41, 44, 65],
        fill: true,
        backgroundColor: theme.colors[theme.primaryColor][8] + "33",
        borderColor: theme.primaryColor,
      },
    ],
  };

  const optionsLine = {
    tension: 0.2,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <Group>
      <Container>
        <Doughnut data={data} options={options} />
      </Container>
      <Container>
        <Line data={dataLine} options={optionsLine} />
      </Container>
      <Box sx={{ maxWidth: 300 }} mx="auto"></Box>
    </Group>
  );
}
