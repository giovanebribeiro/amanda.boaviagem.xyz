import React from "react"

import Layout from "../components/layout"

import Hero from "../components/hero/hero"
import About from "../components/about/about"
import Store from "../components/store/store"
import Bio from "../components/bio/bio"
import CV from "../components/cv/cv"
import Testimonials from "../components/testimonials/testimonials"
import Subscribe from "../components/subscribe/subscribe"
import SEO from "../components/seo"

import { useSiteMetadata } from "../hooks/use-site-metadata"

export default () => {
  const { sections } = useSiteMetadata()
  const availableSections = {
    "hero": Hero,
    "about": About,
    "store": Store,
    "bio": Bio,
    "cv": CV,
    "testimonials": Testimonials,
    "subscribe": Subscribe
  }

  return(
    <>
      <Layout>
        <SEO title="Home" keywords={[
              `escritora`,
              `escritora brasileira`,
              `escritora famosa`,
              `escritora ou autora`,
              `autora ou escritora`,
              `autora`,
              `escrita`,  
              `writing`, 
              `literature`, 
              `author`, 
              `livro`, 
              `book`, 
              `amanda`, 
              `boaviagem`, 
              `literatura`,
              `pagina90`]}/> 
        {/* Style Guide Section
        ================================================== */}
        <section id="styles"
          style= {{
            padding: '90px 0 72px',
            background: '#fff'
          }}
        >
          { 
            sections.map(section => {
              let Tagname = availableSections[section]
              return <Tagname />
            }) 
          }

        </section>

      </Layout>
    </>
  )
}
