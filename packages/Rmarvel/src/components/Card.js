import React from "react";
import { withStyles } from "@material-ui/styles";
import {
  Container,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  CardActions,
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
  },
  
};

// render()
const CardComponent = ({ classes, history, item }) => {
  return (
    <Container maxWidth="sm" className={classes.container} fixed>
      <Card className={classes.containerCard}>
        <CardActionArea onClick={() => history.push({pathname: "/sobre", state: item})}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="240"
            image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default withStyles(styles)(CardComponent);
