import { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./API";

import styles from "./App.module.css";
class App extends Component {
  state = {
    data: [],
    country: "",
  };

  async componentDidMount() {
    const newData = await fetchData();
    this.setState({ ...this.state, data: newData });
  }

  render() {
    const { data, country } = this.state;

    const covidData = data;
    return (
      data.length > 0 && (
        <div className={styles.container}>
          <Cards covidData={covidData} />
          <CountryPicker />
          <Chart covidData={covidData} />
        </div>
      )
    );
  }
}
export default App;
