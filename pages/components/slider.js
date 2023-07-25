import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Image } from '@nextui-org/react';


const Slider = ({images = [], css = {}}) => {
  return (
    <div className='Slider'>
        <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} showArrows={false} showStatus={false} swipeable={true} dynamicHeight={true}>
            {images.map((image) => (
                <div key={image.id}>
                    <Image src={image.src} alt={image.title} containerCss={css ? css : ""}>
                    </Image>
                </div>
            ))}       
        </Carousel>
    </div>
  )
}

export default Slider