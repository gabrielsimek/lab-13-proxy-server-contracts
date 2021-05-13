/* eslint-disable no-console */
// import dependencies
import   express  from 'express';
import cors from 'cors';
import morgan from 'morgan';
import{ formatLocation, formatWeather, formatYelp } from './munge-utils.js';
import request from 'superagent';


// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());
// read JSON from body of request when indicated by Content-Type
app.use(express.json());
// enhanced logging
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Proxy API');
});


app.get('/location', async (req, res) => {
  
  try {
  
    const response = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_IQ_API_KEY}&q=${req.query.search}&format=json`);
      
    console.log(formatLocation);
    const location = formatLocation(response.body);
    console.log(location);
    
  
    
    res.json(location);


  }
  catch (err) {
    console.log(err);
    res.status(500).send({ error: err });

  }



});
app.get('/weather', async (req, res) => {
  
  try {
  
    const response = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${req.query.latitude}&lon=${req.query.longitude}&key=${process.env.WEATHER_BIT_API_KEY}`);
    // const response = await request.get('https://api.weatherbit.io/v2.0/forecast/daily?&lat=18.12682065&lon=76.5374011517765&key=83e21797e0db4136b6e07db618d83e52');
      
    //  https://api.weatherbit.io/v2.0/forecast/daily?&lat=18.12682065&lon=76.5374011517765&key=83e21797e0db4136b6e07db618d83e52';
    const weather = formatWeather(response.body);
   
    
  
    
    res.json(weather);


  }
  catch (err) {
    console.log(err);
    res.status(500).send({ error: err });

  }


  app.get('/reviews', async (req, res) => {
  
    try {
  
      const response = await request.get(`https://api.yelp.com/v3/businesses/search?latitude=${req.query.latitude}&longitude=${req.query.longitude}`)
        .set('Authorization', `Bearer ${process.env.YELP_API_KEY}`);
    
      const yelp = formatYelp(response.body);
    
    
  
    
      res.json(yelp);


    }
    catch (err) {
      console.log(err);
      res.status(500).send({ error: err });

    }



  });
});
export default app;