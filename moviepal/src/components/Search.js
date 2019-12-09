import React, { Component } from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
var config = require('../config');

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '' ,
                  result :[]};
    this.tastedive = this.tastedive.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.routeChange = this.routeChange.bind(this);
  
  }
  handleChange(event) {
    this.setState({title: event.target.value});
  }

  sendData = () => {
    this.props.callback(this.state.result);
}
// componentWillUnmount() {
//   this.routeChange();
// }

  async  tastedive(){
    console.log("c:"+JSON.stringify(config.api));
    const type = config.api.tasteDive.type; 
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = new URL("https://tastedive.com/api/similar?"),
    params = {"q":this.state.title , "type":type,"limit": config.api.tasteDive.limit,"k":config.api.tasteDive.key}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
     await fetch(proxyurl + url)
    .then(response => response.text())
    .then(contents =>this.setState({result:contents}))
    //.then(this.props.callback(this.state.title))
    //.then(console.log(this.state.result))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
   //console.log(this.state.result);
   //this.props.setRenderFlag();
   this.routeChange();
    
    
    
  }

  routeChange() {
    this.props.history.push({
      pathname: '/Recommendations',
      state: { res: this.state.result }
    })
  }
  
 
 
  render(){
    return (      
      <div className="center">
        <h1 className = "title">Welcome to MoviePal!</h1>
        <TextField id="standard-basic" onChange={this.handleChange} value={this.state.title} label="Enter your favorite movie to explore your new favorite!" className ="text"  />
        <div className = "margin">
          <Button variant="contained" color="primary" onClick={this.tastedive}>Go!</Button>
        </div>
      </div> 
    );
  }

}
export default withRouter(Search);
//export default Search;