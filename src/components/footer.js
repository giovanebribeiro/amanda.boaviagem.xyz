import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import scrollTo from "gatsby-plugin-smoothscroll"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import FooterSocial from "./footer-social"

export default () => {
  const { footer} = useSiteMetadata()
  return (
    <footer>

      <div className="footer-logo">
        <AnchorLink to="/">
          <img src={ footer.logo } alt="" />
        </AnchorLink>
      </div>
      
      <FooterSocial/>
    
      <p className="copyright">&copy; 2021 Woo | Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a> | Ported to Gatsby by <a href="https://github.com/desmukh/gatsby-starter-woo" title="Fahad Desmukh">Fahad Desmukh</a> | Customized by <a href="https://about.me/giovanebribeiro" title="Giovane Boaviagem">Giovane Boaviagem</a></p>

      <div id="go-top">
        <button title="Back to Top" onClick={() => scrollTo('#top')}>
          <FontAwesomeIcon icon={ faChevronUp } />
        </button>
      </div>
    </footer>

)}
