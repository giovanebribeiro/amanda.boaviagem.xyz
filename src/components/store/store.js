import React from "react"
import ScrollAnimation from 'react-animate-on-scroll'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import content from "./store.yaml"

/*
<a target="blank"  href=""><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=BR&ASIN=B095L64BDN&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=amandaboaviag-20&tag=amandaboaviag-20" ></a>

<div className="row">
      <div className="twelve columns">
        <div className="buttons">
          <AnchorLink className="button trial animated shake" to={ contentHero.button1.to }>{ contentHero.button1.label }</AnchorLink>
        </div>
      </div>
    </div>
*/

export default () => (

  <section id='store'>

    {content.map((value, index) => {

      let pos, imagepos
      if (index%2 === 0){
        pos = "right"
        imagepos = "left"
      }else{
        pos = "left"
        imagepos = "right"
      }

      let media = ( <img border="0" src={ value.cover } alt="" /> )

      return(
        <div className={ 'row feature store' }>
          <div className={ 'six columns ' + pos }>
            <h3>{ value.title + ' - ' + value.author }</h3>
            <br/><br/>
            <p style={{textAlign: "justify"}}>{ value.body }</p>
            <br/>
            <a target="blank" href={value.link}>Quero ler</a>
          </div>

          <ScrollAnimation
            animateIn="pulse"
            animateOnce={true}
            initiallyVisible={true}
            className={ 'six columns feature-media ' + imagepos }
            >
            { media }
          </ScrollAnimation>
       </div>
     )
   })}
    
  </section>
)
