import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections, selectProducts  } from './../../store/selectors/selection';
import MenuItem from '../MenuItem/Menu-Item';
import { SelectionMenuContainer } from './selection-styled';


class Selection extends Component {

  render() {
    const { collections } = this.props
      const menus = collections.map(collection =>{
        const {id , ...otherProps} = collection;
          return <MenuItem key={id} {...otherProps}></MenuItem>
    })
    return (
      <SelectionMenuContainer>
        { menus }
      </SelectionMenuContainer>
    )  
   }  
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections 
})


export default connect(mapStateToProps)(Selection);
