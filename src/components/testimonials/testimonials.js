import React from "react"
import Slider from "react-slick"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

import content from '../../../content/testimonials.yaml'


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
    <section id="testimonials">
      <h2><img border="0" src="/images/testimonials/title.png" alt="testimonials_title"/></h2>
      <div style={{backgroundColor: "#E3EAEF"}}>
          <Slider {...settings} style={{ userSelect: 'text' }}>
            { content.quotes.map((quote, index) => (

              <img src={ quote.img } alt={quote.alt} />
                  
            ))}
          </Slider>

      </div>
    </section>
  )
}

export default MySlider
