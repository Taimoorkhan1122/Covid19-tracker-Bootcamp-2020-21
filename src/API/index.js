import axios from "axios";

const url = "https://covid19.mathdro.id/api";
// fetch daily data
export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
    console.log(changeableUrl);
  }

  try {
    const { data } = await axios.get(changeableUrl);
    const { confirmed, deaths, recovered, lastUpdate } = data;

    return [
      { confirmed: confirmed.value },
      { deaths: deaths.value },
      { recovered: recovered.value },
      lastUpdate,
    ];
  } catch (error) {
    console.log(error);
  }
};

// daily data
export const fetchDailyData = async () => {
  try {
    let variableURL = `${url}/daily`;
    const { data } = await axios.get(variableURL);
    return data;
  } catch (error) {}
};

// Get countries data
export const fetchCountries = async () => {
  try {
    let countryURL = `${url}/countries`;
    const {
      data: { countries },
    } = await axios.get(countryURL);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log("fetch Countries error =>", error);
  }
};
//  axios({
//   method: "GET",
//   url: "https://covid-19-data.p.rapidapi.com/help/countries",
//   headers: {
//     "content-type": "application/octet-stream",
//     "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
//     "x-rapidapi-key": "b662097fcbmsha603613b817c347p163a48jsn7791597368ed",
//     useQueryString: true,
//   },
//   params: {
//     format: "json",
//   },
// });
