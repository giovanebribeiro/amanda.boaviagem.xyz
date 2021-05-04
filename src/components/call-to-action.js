import React from "react"
import content from "../../content/call-to-action.yaml"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift } from '@fortawesome/free-solid-svg-icons'
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default () => (
  <section id="call-to-action">
    <div className="row">
      <div className="two columns header-col">
        <h1><FontAwesomeIcon icon={faGift} /><span>Get Hosting.</span></h1>
      </div>
      <div className="seven columns">
        <h2><span class="fas fa-calendar"></span>{ content.title.text }</h2>
        <p
          dangerouslySetInnerHTML={{ __html: content.body }}
        />
      </div>

      <div className="three columns action">
        <AnchorLink className="button" to={ content.button.url }>{ content.button.label }</AnchorLink>
      </div>
    </div>
  </section>
)
