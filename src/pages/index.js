import React from "react"

import Layout from "../components/layout"

import Hero from "../components/hero/hero"
import About from "../components/about/about"
import Store from "../components/store/store"
import Bio from "../components/bio/bio"


import Features from "../components/features"
import Pricing from "../components/pricing"
import CalltoAction from "../components/call-to-action"
import Screenshots from "../components/screenshots"
import Testimonials from "../components/testimonials"
import Subscribe from "../components/subscribe"

import { useSiteMetadata } from "../hooks/use-site-metadata"

export default () => {
  const { sections } = useSiteMetadata()
  const availableSections = {
    "hero": Hero,
    "about": About,
    "store": Store,
    "bio": Bio,
    "features": Features,
    "pricing": Pricing,
    "call-to-action": CalltoAction,
    "screenshots": Screenshots,
    "testimonials": Testimonials,
    "subscribe": Subscribe
  }

  return(
    <>
      <Layout>
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
