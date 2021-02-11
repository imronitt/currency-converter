import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

// constructor(props) {
//     super(props);
//     this.state = {
//       result: null,
//       fromCurrency: "USD",
//       toCurrency: "GBP",
//       amount: 1,
//       currencies: []
//     };
//   }

export default function OutlinedCard() {

   
    
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

  return (
      <div class="demo">
          <div class="Card1">
          <Card >
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>

          </div>

          <div class="Card2">

              <Card >
      <CardContent>
      {/* <select
            name="from"
            onChange={event => this.selectHandler(event)}
            value={this.state.fromCurrency}
          >
            {this.state.currencies.map(cur => (
              <option key={cur}>{cur}</option>
            ))}
          </select> */}
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
          </div>
          </div>

   
    
  );

  
}
