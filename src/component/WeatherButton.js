import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity}) => {
  console.log("cities?", cities);
  
  return (
    <div>
        <Button variant='warning'>Current Location</Button>
        
        {cities.map((item, index) => (
          <Button 
            variant="warning" 
            key={index} 
            onClick={() => setCity(item)}
            >
              {item}
            </Button>
        ))}
    </div>
  )
}

export default WeatherButton