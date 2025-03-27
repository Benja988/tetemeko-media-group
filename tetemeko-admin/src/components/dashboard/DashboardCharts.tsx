"use client";

import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { PlayCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Labels for days of the week
const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Define Chart Data
const data: ChartData<"bar" | "line"> = {
  labels,
  datasets: [
    {
      type: "bar" as const,
      label: "Total Engagement",
      data: [300, 500, 450, 700, 680, 900, 850],
      backgroundColor: [
        "rgba(255, 99, 132, 0.8)",  // Red
        "rgba(54, 162, 235, 0.8)",  // Blue
        "rgba(255, 206, 86, 0.8)",  // Yellow
        "rgba(75, 192, 192, 0.8)",  // Teal
        "rgba(153, 102, 255, 0.8)", // Purple
        "rgba(255, 159, 64, 0.8)",  // Orange
        "rgba(34, 197, 94, 0.8)",   // Green
      ],
      borderRadius: 6,
    },
    {
      type: "line" as const,
      label: "Trending News",
      data: [100, 200, 150, 300, 250, 400, 350],
      borderColor: "#4F46E5",
      backgroundColor: "rgba(79, 70, 229, 0.2)",
      fill: true,
      tension: 0.4,
      borderWidth: 3,
      pointRadius: 5,
      pointBackgroundColor: "#4F46E5",
      pointBorderColor: "#fff",
      pointHoverRadius: 7,
    },
    {
      type: "line" as const,
      label: "Popular Shows",
      data: [120, 250, 300, 350, 280, 450, 420],
      borderColor: "#E63946",
      backgroundColor: "rgba(230, 57, 70, 0.2)",
      fill: true,
      tension: 0.4,
      borderWidth: 3,
      pointRadius: 5,
      pointBackgroundColor: "#E63946",
      pointBorderColor: "#fff",
      pointHoverRadius: 7,
    },
  ],
};

// Chart options
const options: ChartOptions<"bar" | "line"> = {
  responsive: true,
  maintainAspectRatio: false, // Allows height adjustment
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          size: 14,
        },
        color: "#333",
      },
    },
    title: {
      display: true,
      text: "Daily/Weekly Content Performance",
      font: {
        size: 18,
        weight: "bold",
      },
      color: "#222",
    },
    tooltip: {
      mode: "index",
      intersect: false,
      backgroundColor: "rgba(0,0,0,0.8)",
      titleFont: { size: 14 },
      bodyFont: { size: 12 },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        font: {
          size: 12,
        },
        color: "#555",
      },
      grid: {
        color: "rgba(200, 200, 200, 0.2)",
      },
    },
    x: {
      ticks: {
        font: {
          size: 12,
        },
        color: "#555",
      },
      grid: {
        color: "rgba(200, 200, 200, 0.2)",
      },
    },
  },
};

// Sample Live Shows Data
const liveShows = [
  { id: 1, title: "Morning Vibes", host: "DJ Alex", listeners: "2.5K" },
  { id: 2, title: "Hip Hop Hour", host: "DJ Mike", listeners: "1.9K" },
  { id: 3, title: "Classic Hits", host: "DJ Lisa", listeners: "3.2K" },
];

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
      {/* Live Shows Card */}
      <Card className="lg:col-span-1 bg-white dark:bg-gray-900 p-4 shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            🔴 Ongoing Live Shows
          </CardTitle>
        </CardHeader>
        <CardContent>
          {liveShows.map((show) => (
            <div key={show.id} className="flex items-center justify-between py-3 border-b last:border-none">
              <div>
                <h4 className="text-md font-medium text-gray-700 dark:text-gray-300">{show.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Host: {show.host}</p>
              </div>
              <div className="flex items-center gap-2">
                <PlayCircle size={20} className="text-red-500 animate-pulse" />
                <span className="text-md font-semibold text-gray-800 dark:text-gray-200">{show.listeners}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Chart Card */}
      <Card className="lg:col-span-3 bg-white dark:bg-gray-900 p-5 shadow-md rounded-lg h-[350px]">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            📊 Content Performance Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="h-[280px]">
          <Chart type="bar" data={data} options={options} />
        </CardContent>
      </Card>
    </div>
  );
}
