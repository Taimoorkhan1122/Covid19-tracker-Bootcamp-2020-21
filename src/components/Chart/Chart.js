import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { fetchDailyData } from "../../API";

import styles from "./Chart.module.css";
const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    //asynce fetchapi function setting dailydata state
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchApi();
  }, []);
  console.log("daily data", dailyData);
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

  return <div className={styles.container}>{lineChart()}</div>;
};

export default Chart;
