import React from "react"
import { Link } from "gatsby"
import content from "../../content/pricing.yaml"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { AnchorLink } from "gatsby-plugin-anchor-links"
import contentHero from "../../content/hero.yaml"

export default () => {

  library.add(fas)

  return (
    <section id="pricing">
      <div className="row section-head">
        <h1>{ content.title }</h1>
        <p>{ content.body }</p>
      </div>

      <div className="row offset-4">
        <div className="pricing-tables bgrid-halves">
          { content.plans.map((plan, index) =>
            <div className="column">
              <div className="price-block">

                <ul className="features">
                  { plan.features.map((value, index) =>
                    <li>{ value }</li>
                  )}
                </ul>
              </div>
            </div>
          )
          }
        </div>
      </div>

      <div className="row">
        <div className="twelve columns">
          <div className="buttons">
            <AnchorLink className="button trial animated shake" to={ contentHero.button1.to }>{ contentHero.button1.label }</AnchorLink>
          </div>
        </div>
      </div>
    </section>
  )
}
