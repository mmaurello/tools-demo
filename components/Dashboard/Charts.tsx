import React from "react";
import "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";
import { Container, Group } from "@mantine/core";

const data = {
  labels: ["I", "II", "III"],
  datasets: [
    {
      data: [700, 500, 500],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      borderWidth: 2,
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
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};
export function Charts() {
  return (
    <Group>
      <Container>
        <Doughnut data={data} />
      </Container>
      <Container>
        <Line data={dataLine} />
      </Container>
    </Group>
  );
}
