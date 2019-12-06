import React, { Component } from 'react';
import '../App.css';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { width } from '@material-ui/system';




class Recommendations extends Component  {
    constructor(props) {
        super(props);
        this.state = {
                      result :JSON.parse(this.props.location.state.res).Similar.Results};
      
      }

  render(){
      //console.log(JSON.parse(this.state.result));
      var Movies = []
      for(var i = 0; i < this.state.result.length; i++){
        Movies.push( <Paper elevation="15" style = {{width: "20%", height : "300px", backgroundColor :"#B0C4DE", margin: "30px"}}>
                    <Typography component="p">
                      <h1>{JSON.stringify(this.state.result[i].Name)}</h1> 
                    </Typography>
                  </Paper>)
      }
  return (
   <div className="center">
       {/* <header className="App-header">
       <Grid container direction="row"justify="space-between"  alignItems="flex-start">
          <h1>{JSON.stringify(this.state.result[4])}</h1> 
      </Grid> */}
      <div className = "movies">
        {Movies}
      </div>
       {/* </header> */}
  </div>
  );
  }
}

export default Recommendations;