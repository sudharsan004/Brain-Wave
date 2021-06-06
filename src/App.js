import React from 'react'
import { Route, Switch } from 'react-router'
import Homepage from './pages/Homepage/Homepage'
import Namepage from './pages/Namepage/Namepage'

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/Name'>
          <Namepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
