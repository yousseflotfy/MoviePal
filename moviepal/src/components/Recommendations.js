import React, { Component } from 'react';
import '../App.css';

import Simplemodal from "./Simple-modal";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
var config = require('../config');



class Recommendations extends Component  {
  constructor(props) {
      super(props);
      this.state = {
                    result :JSON.parse(this.props.location.state.res).Similar.Results,
                    moviesDetails: []
                  };    
  }

  async componentDidMount(){
    
    
    var moviesDetails = []
    for(var i = 0; i < this.state.result.length; i++){
      var movieInfo = {}
      var url = new URL("https://api.themoviedb.org/3/search/movie?api_key="+config.api.theMoviedb.key+"&query="+this.state.result[i].Name);
      await fetch(url)
      .then(response => response.text())
      .then(contents => {
        var movie = JSON.parse(contents).results[0]
        movieInfo.title = movie.title
        movieInfo.overview = movie.overview
        movieInfo.releaseDate = movie.release_date
        movieInfo.rating = movie.vote_average
        movieInfo.poster = movie.poster_path
        moviesDetails.push(movieInfo)
        this.setState({moviesDetails: moviesDetails})
      })
      .catch(() => console.log("Can’t get movie details"))
    }
      console.log(this.state.moviesDetails)
  }
  
  render(){
      var errorLabel = null;
      var Movies = []
      if(this.state.moviesDetails.length !== 0){
        for(var i = 0; i < this.state.moviesDetails.length; i++){
          Movies.push( <div style = {{width: "15%", height : "300px", margin:"30px"} } >
                          <img src={"http://image.tmdb.org/t/p/w185/"+this.state.moviesDetails[i].poster}/>
                          <Simplemodal moviesDetails = {this.state.moviesDetails[i]} />
                       </div>
                        )
        }
      }
      else
        errorLabel = <label>Movie name is not correct!</label>
      
  return (
  
  <div className="center" >
      <div className = "movies">
        {this.state.moviesDetails.length !== 0? Movies: errorLabel}
      </div>
  </div>
  );
  }
}


export default Recommendations;

//withStyles(styles)
