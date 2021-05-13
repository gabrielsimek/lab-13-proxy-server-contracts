
import { formatWeather, formatLocation, formatYelp } from '../lib/munge-utils.js';
import weatherData from '../data/weatherbit.js';
import locationsData from '../data/location.js';
import yelpData from '../data/yelp.js';


// const request = supertest(app);

describe('Data Wrangling', () => {
  const expectedWeather = [
    {
      'forecast': 'Broken clouds',
      'time': '2021-05-12'
    },
    {
      'forecast': 'Few clouds',
      'time': '2021-05-13'
    },
    {
      'forecast': 'Scattered clouds',
      'time': '2021-05-14'
    }];
    
     


  const expectedLocations = [
    {
      'formatted_query': 'Zurich, District Zurich, Zurich, Switzerland',
      'latitude': '47.3744489',
      'longitude': '8.5410422'
    },
    {
      'formatted_query': 'Zurich, Switzerland',
      'latitude': '47.4133024',
      'longitude': '8.656394'
    },
    {
      'formatted_query': 'Zurich, Rooks County, Kansas, USA',
      'latitude': '39.234454',
      'longitude': '-99.438161'
    }
  
  ];
  
  const expectedYelpData = [
    {
      'name': 'Hiltl',
      'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/wEC0Zexz4gfFm2yN4Petgg/o.jpg',
      'price': '$$',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/hiltl-z%C3%BCrich?adjust_creative=BooKEsdi_dk8wQe0ad1HVA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BooKEsdi_dk8wQe0ad1HVA'
    },
    {
      'name': 'Sprüngli',
      'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/SoXofJMA5ldnfWMRZhR0cA/o.jpg',
      'price': '$$$',
      'rating': 4.5,
      'url': 'https://www.yelp.com/biz/spr%C3%BCngli-z%C3%BCrich-12?adjust_creative=BooKEsdi_dk8wQe0ad1HVA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BooKEsdi_dk8wQe0ad1HVA'
    },
   
    {
      'name': 'Zeughauskeller',
      'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/DY61D8R-m6u9HwWfExrhwA/o.jpg',
      'price': '$$',
      'rating': 4.0,
      'url': 'https://www.yelp.com/biz/zeughauskeller-z%C3%BCrich?adjust_creative=BooKEsdi_dk8wQe0ad1HVA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BooKEsdi_dk8wQe0ad1HVA'
    }
   
  ];

  
  it('munges weather data', async () => {
    // arrange
    // expected is in variable above
    // movieData is imported from file

    // act 
    const output = formatWeather(weatherData);

    // assert
    expect(output).toEqual(expectedWeather);
  });

  it('munges location data', async () => {
    // arrange
    // expected is in variable above
    // movieData is imported from file

    // act 
    const output = formatLocation(locationsData);

    // assert
    expect(output).toEqual(expectedLocations[0]);
  });

  it('munges yelp data', async () => {
    // arrange
    // expected is in variable above
    // movieData is imported from file

    // act 
    const output = formatYelp(yelpData);

    // assert
    expect(output).toEqual(expectedYelpData);
  });


});