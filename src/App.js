import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Secured from './Secured';
import './App.css';
import { Divider, Grid, Paper, Typography } from '@material-ui/core';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          
       
            <Grid container style={{marginTop:'50px'}}>
              <Grid item md={2}></Grid>

              <Grid item md={8} xs={12}>
                <Paper elevation={3} > 
                  <Typography variant="h5" style={{paddingTop:'20px',textAlign:'center'}}>
                    Welcome to Secured login app
                  </Typography>
                  <Divider/>
                  <Typography style={{textAlign:'center',marginTop:'20px'}}>Please login to proceed</Typography>
                  <div style={{width:'100%',textAlign:'center',paddingBottom:'50px'}}>
                  <Link to="/secured">Click here to login</Link>
                      <br/>
                      <br/>
                      <Divider/>
                      <br/>
                       <Typography>Home page</Typography>
                       <Link to="/">public component</Link>
                  </div>
                </Paper>
              </Grid>

              <Grid item md={2}></Grid>
            </Grid>
        
          
          <Route exact path="/" component={Welcome} />
          <Route path="/secured" component={Secured} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
