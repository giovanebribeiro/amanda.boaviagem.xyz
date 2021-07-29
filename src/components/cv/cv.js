import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import content from "../../../content/cv.yaml"

export default () => (

  <section id='cv'>

    {content.itens.map((value, index) => {

      return(
        <div className={ 'row cv' }>

          <div className={ 'six columns'}>
            <h1><FontAwesomeIcon icon={faAward} /></h1>
          </div>

          <div className={ 'six columns ' }>
            <h3>{ value.title }</h3>
            <p style={{textAlign: "justify"}}>{ value.body }</p>
          </div>

        </div>
     )
   })}

    
  </section>
)
