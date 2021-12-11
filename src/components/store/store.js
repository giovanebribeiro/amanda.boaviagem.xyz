import React from "react"
import content from "../../../content/store.yaml"

export default () => (

  <section id='store'>

    <h2><img border="0" src="/images/store/loja_title.png" alt="loja_title"/></h2>


    {content.itens.map((value, index) => {

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
        <div className={ 'row store' }>
          <div className={ 'eight columns ' + pos }>
            <h3>{ value.title + ' - ' + value.author }</h3>
            <br/>
            <p style={{textAlign: "justify"}}>{ value.body }</p>
            <br/>
            <ul>
              {value.links.map((link, index) => {
                return (<li><a className="button button-sale" target="blank" href={link.link}>Link {link.name}</a></li>)
              })}
            </ul>
          </div>

          <div className={ 'four columns feature-media ' + imagepos}>
            { media }
          </div>
        </div>
     )
   })}

    
  </section>
)
