import React from "react";
import Header from "./../components/Header";
import { withStyles } from "@material-ui/styles";
import {
  Container,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography
} from "@material-ui/core";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  containerCard: {
    marginBottom: 20,
    marginTop: 20,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)"
  }
};

// render()
const DescriptionComponent = ({ classes, history }) => {
  const { state } = history.location;
  const { goBack } = history;

  return (
    <div>
      <Header goBack={goBack} />
      {console.log(state)}
      <Container maxWidth="md" className={classes.container} fixed>
        <Card className={classes.containerCard}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="340"
              image={`${state.thumbnail.path}.${state.thumbnail.extension}`}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {state.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {state.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Series
            </Typography>
            {state.series.items.map((value, index) => {
              return (
                <div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {value.name}
                  </Typography>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default withStyles(styles)(DescriptionComponent);
