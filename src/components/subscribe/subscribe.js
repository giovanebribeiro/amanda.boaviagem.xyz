import React from "react"
import ScrollAnimation from 'react-animate-on-scroll'
import { AnchorLink } from "gatsby-plugin-anchor-links"

import content from '../../../content/subscribe.yaml'

export default () => (
  <section id="subscribe">

    <div className="row">
      <div className={ 'five columns left zap'}>
        <a href="https://wa.me/message/AKIVPN2G3U6JF1"><img src="/images/contact/zap_button.svg" alt="zap_button"/></a>
      </div>

      <div className="six columns right">

        <iframe 
          src='https://us1.list-manage.com/contact-form?u=9e534ff37fa43868c9fce8138&form_id=720d09deabdd3fca227392573473c493' frameborder='0'
          className={'frame'}>
        </iframe> 

        <p><small>{ content.small } <AnchorLink to="/politica-privacidade">política de privacidade</AnchorLink></small></p>

      </div>

    </div>

   </section>
)
