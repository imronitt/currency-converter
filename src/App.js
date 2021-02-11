import React, { Component } from "react";
import "./App.css";
import Converter from "./component/converter";
import CurrencyRate from "./component/CurrencyRate";
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
       
      <div class="topnav">
        <a class="active" href="/">Currency Converter</a>
        <a href="/rate">Current Exchange Rate</a>

      </div>
       <Switch> 
         <Route exact path='/' component={Converter}></Route> 
         <Route exact path='/rate' component={CurrencyRate}></Route> 
       </Switch> 
     </div> 
  </Router> 
); 


  }
}

export default App;
