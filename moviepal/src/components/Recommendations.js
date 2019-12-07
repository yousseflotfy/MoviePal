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
                    result :JSON.parse(this.props.location.state.res).Similar.Results,
                    moviesDetails: []
                  };    
  }

  async componentDidMount(){
    var moviesDetails = []
    for(var i = 0; i < this.state.result.length; i++){
      var movieInfo = {}
      var url = new URL("https://api.themoviedb.org/3/search/movie?api_key=7092d8d8e167437f265b4cdbe744981b&query="+this.state.result[i].Name);
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

      var Movies = []
      if(this.state.moviesDetails.length == 20){
        //console.log(this.state.moviesDetails)
        for(var i = 0; i < this.state.result.length; i++){
          Movies.push( <Paper elevation="15" style = {{width: "15%", height : "300px", backgroundColor :"#B0C4DE", margin: "30px"}}>
                        <Typography component="p">
                          <h3 style={{fontFamily:"Lucida Bright"}}>{this.state.result[i].Name}</h3> 
                          <img height="230px" src={"http://image.tmdb.org/t/p/w185/"+this.state.moviesDetails[i].poster}/>
                        </Typography>
                       </Paper>)
        }
      }
      
  return (
   <div className="center">
      <div className = "movies">
        {this.state.moviesDetails.length == 20? Movies: null}
      </div>
  </div>
  );
  }
}

export default Recommendations;
