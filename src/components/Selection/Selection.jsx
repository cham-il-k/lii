import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectWordsSelected, selectProducts  } from '../../store/selectors/words';
import MenuItem from '../MenuItem/Menu-Item';
import { SelectionMenuContainer } from './selection-styled';
//import FormInput from '../__FormInput/FormInput';


class Selection extends Component {

  render() {
    const { words } = this.props
      const menus = words.map(w =>{
        const {id , ...otherProps} = w;
          return <MenuItem key={id} {...otherProps}></MenuItem>
    })
    return (
      <SelectionMenuContainer>
      <div>START</div>
      </SelectionMenuContainer>
    )  
   }  
}

const mapStateToProps = createStructuredSelector({
  words: selectWordsSelected 
})


export default connect(mapStateToProps)(Selection);
