import {
  Chart,
  LineController,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Title,
  Tooltip,
  SubTitle,
  BarElement,
} from "chart.js";
import { getFoodTimesKeys, getFoodTimesValues } from "./food";

Chart.register(
  LineController,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Title,
  Tooltip,
  SubTitle,
  BarElement
);

const renderFoodTimesChart = () => {
  // Find the element
  let chartElement = document.querySelector("#food-times-chart");
  // Format the data
  const data = {
    labels: getFoodTimesKeys(),
    datasets: [
      {
        label: "How hungry I am",
        data: getFoodTimesValues(),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  // Create the config
  const config = {
    type: "line",
    data: data,
  };
  // Create the chart
  const myChart = new Chart(chartElement, config);
};

export { renderFoodTimesChart };
