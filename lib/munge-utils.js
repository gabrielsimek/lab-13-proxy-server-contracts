export function formatWeather(data) {
  return data.data.map((item) => {
    return {
      forecast: item.weather.description,
      time: item.valid_date

    };
    
  });
  
}

export function formatLocation(data) {
  const returnData = data.map((item) => {
    return {
      formatted_query: item.display_name,
      latitude: item.lat,
      longitude: item.lon
        
    };

  });
  return returnData[0];
  
}

export function formatYelp(data) {
  return data.businesses.map((item) => {
    return {
      name: item.name,
      image_url: item.image_url,
      price: `${item.price}`,
      rating: item.rating,
      url: item.url
            
    };
  });
 
  
}