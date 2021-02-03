import React from 'react'
import './App.css';
import {Route, Link, Switch} from "react-router-dom"
import Display from "./Display"
// import axios from 'axios'

function App() {
  const url = "https://boxinggloves-mern.herokuapp.com"
  const [gloves, setGloves] = React.useState([])
 	//function that does a fetch call to fetch items
   const getGloves = () => {
		fetch(url + '/gloves/')
			.then((response) => response.json())
			.then((data) => {
				setGloves(data);
			});
	};

	//get items on page load
	React.useEffect(() => {
		getGloves();
	}, []);


  

  return (
    <div className="App">
<Switch>
<Route exact path="/" render={(rp) => <Display 
          {...rp} gloves={gloves.data}  />} />


</Switch>
    </div>
  );
}

export default App;
