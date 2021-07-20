import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

import content from '../../content/screenshots.yaml'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { AnchorLink } from "gatsby-plugin-anchor-links"
import contentHero from "./hero/hero.yaml"

const screenshots = content.screenshots


export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <section id="screenshots">

        <div className="row section-head">
          <h1><q>{ content.title }</q></h1>
          <p style={{textAlign: "justify"}}>{ content.body }</p>
          <p style={{textAlign: "justify"}}>{ content.body2 }</p>
          <p style={{textAlign: "justify"}}>{ content.body3 }</p>
          <p style={{textAlign: "justify"}}>{ content.body4 }</p>
        </div>

        <div className="row">
        <div className="twelve columns">
          <div className="buttons">
            <AnchorLink className="button trial animated shake" to={ contentHero.button1.to }>{ contentHero.button1.label }</AnchorLink>
          </div>
        </div>
      </div>
      </section>
    );
  }
}
