import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Welcome from "./welcome/Welcome";

import './App.scss';
import {Game} from "./game/Game";

function App() {
  return (
     <Router>
       <Switch>
         <Route path='/welcome'>
           <Welcome />
         </Route>
         <Route path='/game'>
           <Game />
         </Route>
       </Switch>
     </Router>
  );
}

export default App;
