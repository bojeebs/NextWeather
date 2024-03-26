import React from 'react'
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"


const Maincard = () => {
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