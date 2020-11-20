import { Card, CardContent, Grid, Typography } from "@material-ui/core";

const Cards = ({ CovidData: [data] }) => {
  // const newdata = data[0];
  const { confirmed, deaths, recovered } = data;
  const info = ["Confirmed", "deaths", "recovered"];
  return data.map((item) => {
    return (
      <Grid container spacing={10}>
        <Grid item xs={12} sm={4} md={4}>
          <Card className="cards">
            <CardContent>
              <Typography>
                {info.map((name) => name)} {confirmed}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  });
};

export default Cards;
