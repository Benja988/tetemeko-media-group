"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      label: "Users",
      data: [400, 600, 800, 1200],
      borderColor: "#8884d8",
      backgroundColor: "rgba(136, 132, 216, 0.5)",
      fill: true,
    },
    {
      label: "Revenue ($)",
      data: [2400, 3200, 4000, 5000],
      borderColor: "#82ca9d",
      backgroundColor: "rgba(130, 202, 157, 0.5)",
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" as const },
    title: { display: true, text: "User Growth & Revenue" },
  },
};

export function DashboardCharts() {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md mt-6">
      <Line data={data} options={options} />
    </div>
  );
}
