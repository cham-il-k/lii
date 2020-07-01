import React, { useState, useEffect} from 'react'
import { IsmaiLeftContainer} from './ismLeftPad.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {createStructuredSelector} from 'reselect'
import { faRecycle, faComment, faUserFriends, faSearch  } from '@fortawesome/free-solid-svg-icons'


const IsmaiLeftPad = ({}) => {

return(
     <IsmaiLeftContainer>
        <div className="search">
         <FontAwesomeIcon icon={faSearch} />
       </div>
       <div className="comment">
         <FontAwesomeIcon icon={faComment} />
       </div>
       <div className="frinds">
         <FontAwesomeIcon icon={faUserFriends} />
       </div>
     </IsmaiLeftContainer>)
     
}
export default IsmaiLeftPad