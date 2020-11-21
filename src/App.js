import { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./API";

import styles from "./App.module.css";
class App extends Component {
  state = {
    data: [],
    Country: "",
  };

  async componentDidMount() {
    const newData = await fetchData();
    this.setState({ data: newData });
  }
  //handle country hanlder
  handleCountryChange = async (country) => {
    const countryData = await fetchData(country);
    this.setState({ data: countryData, country: country });
  };

  render() {
    const { data, country } = this.state;
    // console.log(data);
    return (
      data.length > 0 && (
        <div className={styles.container}>
          <Cards covidData={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart covidData={data} country={country} />
        </div>
      )
    );
  }
}
export default App;
