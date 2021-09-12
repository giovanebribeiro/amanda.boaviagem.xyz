import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

import content from '../../../content/bio.yaml'

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
      <section id="bio">

        <div className="row bio">
          <h2>{ content.title }</h2>
          <br/>
          <br/>
          <p style={{textAlign: "justify"}}>{ content.body }</p>
        </div>

      </section>
    );
  }
}
