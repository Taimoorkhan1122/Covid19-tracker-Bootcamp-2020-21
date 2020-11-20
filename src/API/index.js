import axios from "axios";

const url = "https://covid19.mathdro.id/api";
// fetch daily data
export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);
    const { confirmed, deaths, recovered } = data;
    // console.log(confirmed.value);

    return [confirmed, deaths, recovered];
  } catch (error) {}
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
export const dailData = async () => {
  const url = "https://covid-19-data.p.rapidapi.com/help/countries";

  const key = "b662097fcbmsha603613b817c347p163a48jsn7791597368ed";

  try {
    const { data } = await axios({
      method: "GET",
      //   url: "https://covid-19-data.p.rapidapi.com/totals",
      url,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "b662097fcbmsha603613b817c347p163a48jsn7791597368ed",
        useQueryString: true,
      },
      params: {
        format: "json",
      },
    });
    // console.log("daily data ==> ", dailyData);
    const dailyData = data.map((serverData) => serverData);
    return dailData;
  } catch (error) {}
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
