import React from 'react'
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import { useWeatherStore } from '@/lib/store'

const interface

const Maincard = () => {

  const { setWeatherData } = useWeatherStore
  const apiKey = process.env.WEATHER_API

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=38.781151&lon=-90.486931&appid=${apiKey}&units=metric`);
      const data = await response.json();
      setWeatherData(data); 
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };







  return (
    <div>
      <Card className='main-card w-72 bg-custom-dark border-custom transform translate-x-16 translate-y-16 '>
        <CardHeader>
          <CardTitle className='card-title text-white'>Day and Time</CardTitle>
          <CardDescription className='location  text-white'>Location</CardDescription>
        </CardHeader>
        <CardContent className='temp  text-white'>
          <p>Temperature</p>
        </CardContent>
        <CardFooter className='current  text-white'>
          <p>Current Weather and High/Low</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Maincard