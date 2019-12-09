import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom' ;
import Recommendations from './components/Recommendations'
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

const routing = (
    <Router>
      <div className="App">
          <header className="App-header">
             <Route exact path="/Recommendations" component={Recommendations} /> 
             <Route exact path="/" component={App} />
        
         </header>
    </div>
    </Router>
  )
//serviceWorker.unregister();
ReactDOM.render(routing, document.getElementById('root'))
