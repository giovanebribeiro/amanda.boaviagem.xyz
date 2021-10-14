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
      <Header />
      <main id="top"> {children} </main>
      <Footer />
    </>
  )
}
