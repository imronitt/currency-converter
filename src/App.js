import React, { Component } from "react";
import "./App.css";
import Converter from "./component/converter";

import { 
	BrowserRouter as Router, 
	Route, 
	Link, 
	Switch 
} from 'react-router-dom'; 
import CurrencyRate from "./component/CurrencyRate";



export class App extends Component
{
  render() {
    // return <SimpleCard />;

// return <Converter/>
return ( 
  <Router> 
      <div className="App"> 
       
      <div class="topnav">
        <a class="active" href="/">Currency Converter</a>
        <a href="/CurrencyRate">Current Exchange Rate</a>

      </div>
       <Switch> 
         <Route exact path='/' component={Converter}></Route> 
         <Route exact path='/CurrencyRate' component={CurrencyRate}></Route> 
       </Switch> 
     </div> 
  </Router> 
); 


  }
}

export default App;
