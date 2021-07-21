import React from "react"
import Slider from "react-slick"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import content from "./hero.yaml"

const MySlider = () =>{

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
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
      <div className="row">
        
        
          <div className="twelve columns flex-container">
          <Slider {...settings} style={{ userSelect: 'text' }}>
            { content.quotes.map((quote, index) => (
              
                

                  
                    
                      <img src={ quote.img } alt={quote.alt} />
                    
                  
                  
                
              
            ))}
          </Slider>
          </div>

      </div>
    </section>
  )
}

export default MySlider
