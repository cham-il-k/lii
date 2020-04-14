import React from 'react'
import './program.scss'

function Program( props) {
  
  const tags = props.program.tags.map( (tag, index) => {
    return (
      <label htmlFor={tag} key = { index } className="tag">
        <input type="checkbox"   name={tag}/>
        {tag}
      </label>
      

      )
    }
  )  

  return (
    <section className="prog" >
        <div className="name" >
          <h2> {props.program.name} </h2> 
          <p>  soura : {props.program.soura}</p>
        </div>
        <div className="tags">
            { tags }
        </div>   
        <div className="type">
          <p>type : {props.program.type}      </p>
        </div>
    </section>
   
  )
}

export default Program
