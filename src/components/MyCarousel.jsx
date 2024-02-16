// import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import { Heading } from '@chakra-ui/react' 


import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'

const headingOptions = {
    pos:'absolute',
     left:'30%',
      top:'50%',
      Transform:'translate(-50%,-50%)',
      textTransform:'uppercase',
      p:'4',
}



const MyCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false} >
        <Box w={'full'} h={'100vh'} >
            <Image src={img1} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} { ...headingOptions }  >
                Watch The Future
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'} >
            <Image src={img2} />
            <Heading bgColor={'whiteAlpha.900'} color={'black'} { ...headingOptions } >
               Future is Gaming
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'} >
            <Image src={img3} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} { ...headingOptions } >
               Gaming on Console
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'} >
            <Image src={img4} />
            <Heading bgColor={'whiteAlpha.900'} color={'black'} { ...headingOptions } >
               Night life is cool
            </Heading>
        </Box>
      
    </Carousel>
  )
}

export default MyCarousel
