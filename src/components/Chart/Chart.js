import { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { fetchDailyData } from "../../API";

import styles from "./Chart.module.css";
const Chart = ({ covidData, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    //asynce fetchapi function setting dailydata state
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchApi();
  }, []);
  //Line Chart for global data
  const lineChart = () =>
    dailyData && (
      //line chart accpets data prop which is an object which contains
      //labels, datasets array of objects
      <Line
        data={{
          labels: dailyData.map(({ reportDate }) => reportDate),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed.total),
              label: "infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths.total),
              label: "deaths",
              borderColor: "red",
              backgroundColor: "rgba(250,0,0,0.5)",
              fill: true,
            },
          ],
        }}
      />
    );
  const barChart = () => {
    const [confirmed, deaths, recovered] = covidData.map((item) =>
      Object.values(item)
    );
    return covidData ? (
      <Bar
        data={{
          labels: ["confirmed", "deaths", "recovered"],
          datasets: [
            {
              label: "People",
              backgroundColor: [
                "rgba(2, 81, 252,0.8)",
                "rgba(252, 19, 2,0.8)",
                " rgba(2, 252, 148,0.8)",
              ],
              data: [confirmed[0], deaths[0], recovered[0]],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null;
  };

  return (
    <div className={styles.container}>{country ? barChart() : lineChart()}</div>
  );
};

export default Chart;
