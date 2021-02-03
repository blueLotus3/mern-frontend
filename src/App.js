import React from 'react'
import './App.css';
import {Route, Link, Switch} from "react-router-dom"
import Display from "./Display"

function App() {
  const url = "https://boxinggloves-mern.herokuapp.com"
  return (
    <div className="App">
<Switch>
<Route exact path ="/">
<Display />
</Route>

</Switch>
    </div>
  );
}

export default App;
