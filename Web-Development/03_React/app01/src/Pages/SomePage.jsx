import React from "react";
import { PieChart, LineChart, BarChart } from "react-chartjs-2";

const Dashboard = () => {
  const data = {
    labels: ["2017", "2018", "2019"],
    datasets: [
      {
        label: "Total Order Value",
        data: [1.48, 1.2, 1.6],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Total Order Value",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="dashboard">
      <div className="section">
        <h2>Total Order Value</h2>
        <PieChart data={data} options={options} />
      </div>
      <div className="section">
        <h2>Year on Year Growth</h2>
        <LineChart data={data} options={options} />
      </div>
      <div className="section">
        <h2>Quarterly Stats of 2019</h2>
        <BarChart data={data} options={options} />
      </div>
      <div className="section">
        <h2>Revenue Trend</h2>
        <LineChart data={data} options={options} />
      </div>
      <div className="section">
        <h2>Revenue share chart</h2>
        <PieChart data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
