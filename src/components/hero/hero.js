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
      <div className="row content">
        <span><i className="quote-left fa"><FontAwesomeIcon icon={ faQuoteLeft } /></i></span>
        <div className="text-container">
          <div className="twelve columns">
            <h1>{ content.title }</h1>
          </div>
          <div className="twelve columns flex-container">
          <Slider {...settings} style={{ userSelect: 'text' }}>
            { content.quotes.map((quote, index) => (
              <div className="row offset-3">
                <div className="pricing-tables bgrid-halves">

                  <div className="column">
                    <div className="price-block">
                      <img src={ quote.img } alt={quote.alt} />
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </Slider>
          </div>

        </div>
        <span><i className="quote-right fa"><FontAwesomeIcon icon={ faQuoteRight } /></i></span>
      </div>
    </section>
  )
}

export default MySlider
