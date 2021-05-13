/* eslint-disable no-console */
// import dependencies
import   express  from 'express';
import cors from 'cors';
import morgan from 'morgan';



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


// app.get('/location', async (req, res) => {
//   res.send('hello world');
//   try {
//     const LOCATION_KEY = process.env.LOCATION_IQ_API_KEY;
//     const response = await request.get('https://us1.locationiq.com/v1/search.php')
//       .query({ search: req.query.search })
//       .query({ key: LOCATION_KEY });
//     // key=pk.d84f553f6a86252ea5f70e6880822eca&q=seattle&format=json');
//     // const response = await request.get('https://us1.locationiq.com/v1/search.php?key=pk.d84f553f6a86252ea5f70e6880822eca&q=seattle&format=json');
    
//     console.log(response.body);
    
//     res.json.send(response.body);


//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).send({ error: err });

//   }



// });

export default app;