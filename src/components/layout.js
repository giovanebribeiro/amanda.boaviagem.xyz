import React from "react"
import { Helmet } from "react-helmet"

import { useSiteMetadata } from "../hooks/use-site-metadata"

import Header from "./header/header"
import Footer from "./footer"

import "../styles/default.css"
import "../styles/layout.css"
import "../styles/media-queries.css"
import "../styles/animate.css"
import "../styles/prettyPhoto.css"

import 'typeface-open-sans';
import 'typeface-montserrat';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Layout ({ children }){

  const { title, description, author, favicon } = useSiteMetadata()

  return(
    <>
    <Helmet>
      <meta charSet="utf-8"/>
      <html lang="en" />
      <link rel="canonical" href="https://amanda.boaviagem.xyz"/>
    	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

      <meta name="facebook-domain-verification" content="1c1b34t00xiyv4fd1u3ibjzfk2uw3w" />
      <link rel="shortcut icon" href={'/' + favicon } type="image/png" />
    </Helmet>

    <Header />

      <main id="top">
        {children}
      </main>

    <Footer />
  </>
  )
}
