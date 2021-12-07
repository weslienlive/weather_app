import { LineChartPlot } from "./StyledComponents";
import { Line } from "react-chartjs-2";

export default function WeatherTrend({ currentTrend, isCelsius }) {
  let labels = [
    currentTrend.today,
    currentTrend.tomorrow,
    currentTrend.daythree,
    currentTrend.dayfour,
    currentTrend.dayfive,
    currentTrend.daysix
  ];

  const dailyTemp = [
    currentTrend.cardzero,
    currentTrend.cardone,
    currentTrend.cardtwo,
    currentTrend.cardthree,
    currentTrend.cardfour,
    currentTrend.cardfive
  ];

  const dailyTempFah = [
    Math.trunc(currentTrend.cardzero * 1.8 + 32),
    Math.trunc(currentTrend.cardone * 1.8 + 32),
    Math.trunc(currentTrend.cardtwo * 1.8 + 32),
    Math.trunc(currentTrend.cardthree * 1.8 + 32),
    Math.trunc(currentTrend.cardfour * 1.8 + 32),
    Math.trunc(currentTrend.cardfive * 1.8 + 32)
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        data: isCelsius ? dailyTemp : dailyTempFah,
        fill: true,
        backgroundColor: "transparent",
        borderWidth: 3,
        borderColor: "#8C92AC",
        pointBorderWidth: 0,
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <LineChartPlot id="linechart">
      <Line data={data} options={options} />
    </LineChartPlot>
  );
}
