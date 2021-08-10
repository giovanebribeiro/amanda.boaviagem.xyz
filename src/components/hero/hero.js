import React from "react"
import Slider from "react-slick"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faQuoteLeft, faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons'
import content from "./hero.yaml"

const MySlider = () =>{

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 7000,
    draggable: false,
    appendDots: dots => (
      <ol> {dots} </ol>
    ),
    customPaging: i => (
      <button>
        {i + 1}
      </button>
    ),
  }

  return (
    <section id="hero">
        
          <div>
          <Slider {...settings}>
            { content.quotes.map((quote, index) => (
                    
              <img src={ quote.img } alt={quote.alt} />
              
            ))}
          </Slider>
          </div>

    </section>
  )
}

export default MySlider
