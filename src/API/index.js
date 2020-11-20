import axios from "axios";

export const fetchData = async () => {
  const url = "https://covid-19-data.p.rapidapi.com/totals";
  //covid-19-data.p.rapidapi.com/help/countries
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
    // console.log(data);
    return data.map(({ confirmed, recovered, deaths }) => {
      return { confirmed, recovered, deaths };
    });
  } catch (error) {}
};

// axios({
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
