import { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./API";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const newData = await fetchData();
    this.setState({ ...this.state, data: newData });
  }

  render() {
    const { data, country } = this.state;
    console.log("data => ", data);
    return (
      data.length > 0 && (
        <div className="container">
          <Cards CovidData={data} />
          <Chart />
          <CountryPicker />
        </div>
      )
    );
  }
}
export default App;
