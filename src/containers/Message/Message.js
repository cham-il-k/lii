import React from 'react'
import './collection.scss'

function Collection( props) {
  
  const tags = props.message.tags.map( (tag, index) => {
    return (
      <label htmlFor={tag} key = { index } className="tag">
        <input type="checkbox"   name={tag}/>
        {tag}
      </label>
      

      )
    }
  )  

  return (
    <section className="message-container" >
        <div className="name" >
          <h2> {props.collection.title} </h2> 
          <p>  title : {props.collection.title}</p>
        </div>
        <div className="tags">
            { tags }
        </div>   
        <div className="type">
          <p>type : {props.collection.type}      </p>
        </div>
    </section>
   
  )
}

export default Collection
