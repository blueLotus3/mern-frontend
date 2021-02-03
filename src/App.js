import React from 'react'
import './App.css';
import {Route, Link, Switch} from "react-router-dom"
import Display from "./Display"
import axios from 'axios'
import Form from "./Form"

function App() {
  const url = "https://boxinggloves-mern.herokuapp.com"
  const [gloves, setGloves] = React.useState([])
  const emptyGlove = {
    brand: "",
    size: 0,
    img: "",
  };

  const [selectedGlove, setSelectedGlove] = React.useState(emptyGlove);
  //  const getGloves = () => {
	// 	fetch(url + '/gloves/')
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setGloves(data);
	// 		});
  // };
  const getGloves = () => {
    axios.get(url + "/gloves").then((response) => {
      setGloves(response.data)
    })
  }



	React.useEffect(() => {
		getGloves();
  }, []);

  const handleCreate = (newGlove) => {
    fetch(url + "/gloves/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGlove),
    })
    .then(() => {
      
      getGloves();
    });
  };
  const handleUpdate = (glove) => {
    fetch(url + "/gloves/" + glove._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(glove),
    }).then(() => {
      
      getGloves();
    });
  };
  
  const selectGlove = (glove) => {
    setSelectedGlove(glove);
  };


  

  return (
    <div className="App">
      <h1>Boxing Merch</h1>
      <Link to="/create">
      <button>Craft Some Gloves</button>
      </Link>
      <hr />
<Switch>
<Route exact path="/" render={(rp) => <Display 
          {...rp} gloves={gloves.data} selectGlove={selectGlove}  />} />
<Route
  exact
  path="/create"
  render={(rp) => (
    <Form {...rp} label="create" glove={{emptyGlove}} handleSubmit={handleCreate} />
  )}
/>
<Route
    exact
    path="/edit"
    render={(rp) => (
      <Form
        {...rp}
        label="update"
        glove={selectedGlove}
        handleSubmit={handleUpdate}
      />
    )}
  />

</Switch>
    </div>
  );
}

export default App;
