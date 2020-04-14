import React from "react"
import "./tablet.scss"


const Tablet = props => {
 
  const tags = [...props.tab.tags]
  const tagsChecks =  tags.map((tag, index) => {
  
    return (
      <div key={index} className="check">
          <label>{tag}</label>
          <input type="checkbox" name={tag} value={tag}/>
      </div>
      
    )
  }) 

  return (
    <div className="tablet">
      <h2>  {props.tab.name} </h2>
       <p>
         {props.tab.description}
       </p>
        <div className="check-container">
          {tagsChecks}
          </div> 
          <div className="soura">
            { props.tab.soura}
          </div>
             
       </div>
  );
};
export default Tablet;
