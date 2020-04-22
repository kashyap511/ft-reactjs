import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import classes from './App.module.scss';
import FundsTransfer from 'components/FundsTransfer/FundsTransfer';

function App() {
  return (
    <div className="App">
      <Container fixed className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} >
            <Paper elevation={3} className={classes.paper}>
              <FundsTransfer/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} >
            <Paper elevation={3} className={classes.paper}>
              {/* <h1>Shopping Cart</h1> */}
              Shopping Cart
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
