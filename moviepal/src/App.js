import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'


class App extends Component  {
  constructor(props){
    super(props);
    this.state = {renderFlag:false,
                  recommendations : []};
    this.setRenderFlag = this.setRenderFlag.bind(this);
  }
  setRenderFlag(){
    this.setState({renderFlag:true});
    console.log(this.state.renderFlag);
  } 
  callbackFunction = (result) => {
    this.setState({recommendations: result})
}
  render(){
  return (
    
    <div className="App">
      <header className="App-header">
        {/* {this.state.renderFlag === false && */}
           <Search setRenderFlag = {this.setRenderFlag} callback = {this.callbackFunction}></Search>   }
        {/* {this.state.renderFlag ===true &&
            <div>
            <h1>recommendations</h1>
            {this.state.recommendations}
            </div>}    */}
      </header>
    </div>
  );
  }
}

export default App;
