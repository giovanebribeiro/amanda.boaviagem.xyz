import React from "react"
import ScrollAnimation from 'react-animate-on-scroll'
import { AnchorLink } from "gatsby-plugin-anchor-links"

import content from '../../content/subscribe.yaml'

export default () => (
  <section id="subscribe">
    <div className="row section-head">
      <div className="twelve columns">
        <h1>{ content.title }</h1>
        <p>{ content.body }</p>
    </div>
  </div>

  <div className="row">
    <div className="twelve columns">

      <div id="mc_embed_signup">
        <form
          action="https://gmail.us1.list-manage.com/subscribe/post?u=9e534ff37fa43868c9fce8138&amp;id=fdcdd440d4"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <ScrollAnimation animateIn="fadeInLeftBig" animateOnce={true}>
            <input
              type="email"
              defaultValue=""
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
              placeholder="digite aqui seu melhor e-mail"
              required
            />
          </ScrollAnimation>
             
             <div style={{position: "absolute", left: "-5000px"}}>
               <input type="text" name="b_cdb7b577e41181934ed6a6a44_e65110b38d" defaultValue="" />
             </div>
             <div className="clear">
               <ScrollAnimation
                 animateIn="fadeInRightBig"
                 animateOnce={true}
               >
                 <input
                   type="submit"
                   value="Inscrever"
                   name="subscribe"
                   id="mc-embedded-subscribe"
                   className="button"
                 />
               </ScrollAnimation>
             </div>

           </form>
        </div>

         <p><small>{ content.small } <AnchorLink to="/politica-privacidade">política de privacidade</AnchorLink></small></p>

       </div>

     </div>

   </section>
)
