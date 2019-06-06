import React from "react";
import { withStyles } from "@material-ui/styles";
import {ArrowBack} from "@material-ui/icons";
import { Container, Fab } from "@material-ui/core";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10
  },

};

// render()
const HeaderComponent = ({ classes, goBack }) => {
  return (
    <Container title="Description" maxWidth="md" className={classes.container} fixed>
      <Fab  onClick={goBack} color="primary" aria-label="arrow-back" className={classes.fab}>
        <ArrowBack />
      </Fab>
    </Container>
  );
};

export default withStyles(styles)(HeaderComponent);
