import React from 'react';
import { withStyles } from "@material-ui/styles";
import {CircularProgress, Container} from '@material-ui/core';

const useStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 10,
    marginBottom: 10
  },
};

const Loading = ({classes}) =>  {

  return (
    <Container maxWidth="md" className={classes.container}>
      <CircularProgress className={classes.progress} />
    </Container>
  );
}

export default withStyles(useStyles)(Loading)
