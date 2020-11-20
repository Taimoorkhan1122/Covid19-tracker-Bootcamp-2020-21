import { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./API";

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
    const covidData = data[0];
    return (
      data.length > 0 && (
        <div className="container">
          <Cards covidData={covidData} />
          <Chart />
          <CountryPicker />
        </div>
      )
    );
  }
}
export default App;
