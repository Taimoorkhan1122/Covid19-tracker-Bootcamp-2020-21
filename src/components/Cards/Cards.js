import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import cx from "classnames";
import CountUp from "react-countup";

import styles from "./Cards.module.css";

const Cards = ({ covidData: { confirmed, recovered, deaths } }) => {
  console.log("destructred ", confirmed);
  const info = [{ confirmed }, { deaths }, { recovered }];

  // MUI Styles
  const useStyles = makeStyles((theme) => ({
    heading: {
      textAlign: "center",
    },
    card: {
      color: theme.palette.dark,
      backgroundColor: theme.palette.light,
      textAlign: "center",
    },
  }));
  const themeStyles = useStyles();

  return (
    <>
      <Typography variant="h3" align="center">
        Covid19 Tracker
      </Typography>
      <Grid container spacing={2}>
        {info.map((item, key) => {
          const keys = Object.keys(item);
          const values = Object.values(item);

          return (
            <Grid key={key} item xs={12} sm={4} md={4}>
              <Card className={cx(themeStyles.card, styles[keys])}>
                <CardContent>
                  <Typography variant="h5">{keys}</Typography>
                  <Typography variant="body1">
                    <CountUp
                      start={0}
                      end={values}
                      duration={2.5}
                      separator=","
                    >
                      {values}
                    </CountUp>
                  </Typography>
                  <Typography
                    variant="body2"
                    letterSpacing={1}
                    className={styles.details}
                  >
                    Covid19 {keys}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Cards;
