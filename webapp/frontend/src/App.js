import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GAN from './gan/gan'
import TopBar from './topbar/topbar';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/">
            <TopBar title="Gallery of Totally Real Animals"/>
            <GAN/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
