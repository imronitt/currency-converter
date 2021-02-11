import React, { Component } from "react";
import "./App.css";
import Converter from "./component/converter";
import SimpleCard from "./component/demo";
import { 
	BrowserRouter as Router, 
	Route, 
	Link, 
	Switch 
} from 'react-router-dom'; 



export class App extends Component
{
  render() {
    // return <SimpleCard />;

// return <Converter/>
return ( 
  <Router> 
      <div className="App"> 
       
        
       <Switch> 
         <Route exact path='/' component={Converter}></Route> 
         <Route exact path='/demo' component={SimpleCard}></Route> 
       </Switch> 
     </div> 
  </Router> 
); 

  }
}

export default App;
