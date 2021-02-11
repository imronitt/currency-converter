import React from "react";
import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import converter from "./converter.css";
class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      fromCurrency: "USD",
      toCurrency: "GBP",
      amount: 1,
      amount1: 1,
      currencies: []
    };
    //this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange (e) {
  //   console.log('handle change called');
  //   this.setState({amount: e.target.value});
  // }

  // this.handleChange = this.handleChange.bind(this);
  handleChange(event) {
    this.setState({amount: event.target.value});
    console.log("dnjsdjfj");
    this.convertHandler();
  }

  componentDidMount() {
    axios
      .get("https://api.openrates.io/latest")
      .then(response => {
        const currencyAr = ["EUR"];
        for (const key in response.data.rates) {
          currencyAr.push(key);
        }
        this.setState({ currencies: currencyAr });
      })
      .catch(err => {
        console.log("oppps", err);
      });
  }
  convertHandler = () => {
    if (this.state.fromCurrency !== this.state.toCurrency) {
      axios
        .get(
          `https://api.openrates.io/latest?base=${
            this.state.fromCurrency
          }&symbols=${this.state.toCurrency}`
        )
        .then(response => {
          const result =
            this.state.amount * response.data.rates[this.state.toCurrency];
          this.setState({ result: result.toFixed(5) });
        })
        .catch(error => {
          console.log("Opps", error.message);
        });
    } else {
      this.setState({ result: "You cant convert the same currency!" });
    }
  };
 
  selectHandler = event => {
    if (event.target.name === "from") {
      this.setState({ fromCurrency: event.target.value });
    } else {
      if (event.target.name === "to") {
        this.setState({ toCurrency: event.target.value });
      }
    }
  };
  render() {
    return (
      
      <div class="demo">
        <h2> Currency Converter</h2>
        <h3> Please enter the amount you want to convert.</h3>

      <div class="Card1">
      
      <select
            name="to"
            onChange={event => this.selectHandler(event)}
            value={this.state.toCurrency}
          >
            {this.state.currencies.map(cur => (
              <option key={cur}>{cur}</option>
            ))}
          </select>

          <input
            name="to"
            type="text"
            value={this.state.result}
            onChange={event => this.setState({ amount1: event.target.value })}
            //onChange={event => this.setState({ amount: event.target.value })}
          />
  
      </div>

      <div class="Card2">
      
          


          <select
            name="from"
            onChange={event => this.selectHandler(event)}
            value={this.state.fromCurrency}
          >
            {this.state.currencies.map(cur => (
              <option key={cur}>{cur}</option>
            ))}
       

          </select>

          <input
            name="amount"
            type="text"
            //value={this.state.result}
            value={this.state.amount}
           
            onChange={this.handleChange}
            
          />




      </div>
      </div>

    );
  }
}
export default Converter;
