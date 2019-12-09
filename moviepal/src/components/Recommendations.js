import React, { Component } from 'react';
import '../App.css';

import Simplemodal from "./Simple-modal";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
// import config from '../config.json'
var config = require('../config');



// const styles = theme =>  ({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     flexGrow: 1,
//     display: 'none',
//     // [theme.breakpoints.up('sm')]: {
//     //   display: 'block',
//     // },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     width: theme.spacing(7),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 7),
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: 120,
//       '&:focus': {
//         width: 200,
//       },
//     },
//   },
// });




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
     // const { classes } = this.props;
      var Movies = []
      if(this.state.moviesDetails.length == 15){
        //console.log(this.state.moviesDetails)
        for(var i = 0; i < this.state.result.length; i++){
          Movies.push( <div style = {{width: "15%", height : "300px", margin:"30px"} } >
                        
                          {/* <h3 style={{fontFamily:"Lucida Bright"}}>{this.state.result[i].Name}</h3>  */}
                          <img src={"http://image.tmdb.org/t/p/w185/"+this.state.moviesDetails[i].poster}/>
                        
                       <Simplemodal moviesDetails = {this.state.moviesDetails[i]} />
                       </div>
                        )
        }
      }
      
  return (
  
  <div className="center" >
      {/* <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
        {/* </Toolbar>
      </AppBar>
    </div> */}
      <div className = "movies">
        {this.state.moviesDetails.length == 15? Movies: null}
      </div>
  </div>
  );
  }
}
// Recommendations.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default Recommendations;

//withStyles(styles)
