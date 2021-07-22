import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

import content from './about.yaml'

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {

    return (
      <section id='about'>

        <div className={ 'row about' }>

          <div className="ten offset-1 columns left about-box">

            <div className={ 'eight columns left' }>
              <h3>{ content.title }</h3>
              
              <p style={{textAlign: "justify"}}>{ content.body }</p>
              <p style={{textAlign: "justify"}}>{ content.body2 }</p>
            </div>

            <ScrollAnimation
              animateIn="pulse"
              animateOnce={true}
              initiallyVisible={true}
              className={ 'four columns right'}>
              <img src={ content.image } alt="" />
            </ScrollAnimation>

          </div>
          
        </div>
      
      </section>
    );
  }
}
