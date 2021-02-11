import React from 'react';


class CurrencyRate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          rates: {}
        };
      }


    componentDidMount() {
        fetch("https://api.exchangeratesapi.io/latest?base=USD") // data source is an object, not an array.
          .then(res => res.json())
          .then(
            result => {
              this.setState({
                isLoaded: true,
                rates: result.rates
              });
            },
            error => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          );
      }


      prettyCurrency = (crr, action) => {
        if (action === 0) {
          crr = (crr * 102) / 100;
        } else if (action === 1) {
          crr = (crr * 98) / 100;
        } else {
          // Do nothing...
        }
        var fixedCrr = crr.toFixed(4).toString();
        while (fixedCrr.length < 8) {
          fixedCrr = "0" + fixedCrr;
        }
    
        return fixedCrr;
      };

      createTable = () => {
        const rates = this.state;
        let ratesArr = Object.keys(rates).map(i => rates[i])[2];
        let table = [];
        let children = [];
        // let displayedCurrencies = ["RUB", "CAD", "USD", "CHF", "JPY", "EUR"];
    
        // The following loop is used to create inner structure (children) of the table.
        for (var key in ratesArr) {
          if (ratesArr.hasOwnProperty(key)) {
            children.push(
              <tr>
                <td>{key}</td>
                {/* <td>{this.prettyCurrency(ratesArr[key], 0)}</td> */}
                <td>{this.prettyCurrency(ratesArr[key])}</td>
                {/* <td>{this.prettyCurrency(ratesArr[key], 1)}</td> */}
              </tr>
            );
          }
        }
        table.push(<tbody>{children}</tbody>); // We create the parent tbody tags and add the inner loop (children).
    
        return table;
      };

    
  render() {
    const { error, isLoaded } = this.state;

    if (error) {
      return <div>Oops: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <main>
          <div className="App-body">
              <h1> US Dollar (USD) Live Exchange Rate. </h1>
            <table class="currencyTable">
              <thead>
                <tr>
                  <th>Currency Name</th>
                
                  <th>Exchange Rate = 1 USD</th>
                 
                </tr>
              </thead>
              {this.createTable()}
            </table>

          </div>
        </main>
      );
    }
  }
}
    
export default CurrencyRate;