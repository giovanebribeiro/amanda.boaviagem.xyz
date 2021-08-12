import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import content from "../../../content/cv.yaml"

export default () => (

  <section id='cv'>

    {content.itens.map((value, index) => {

      return(
        <div className={ 'row cv' }>

          <div className={ 'six columns award-box'}>
            <div className={'center'}>
              <h1><img src="/images/cv/ICONE CURSO.svg" border="0"/></h1>
            </div>
          </div>

          <div className={ 'eight columns award-title' }>
            <h3>{ value.title }</h3>
            <p style={{textAlign: "justify"}}>{ value.body }</p>
          </div>

        </div>
     )
   })}

    
  </section>
)
