import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Spinner from './../../components/Spinner/Spinner'

import { connect, dispatch } from 'react-redux'

class Profil extends Component {


 componentDidMount() {
  /*  this.props.getProfil(this.props.params.name) */
  console.log(this.props.match.params)
 }

  
  render() {
    const { login, email, tablets, carts, status } = this.props.identite
    const loading  = this.props.loading

    return (
      loading ?  <Spinner /> : 
      <div className="profil-id">
        <div className="profil"> login : {login} </div>
        <div className="profil"> email : {email} </div>
        <div className="profil"> carts: {carts} </div>
        <div className="profil"> tablets : {tablets} </div>
        <div className="profil"> status : {status} </div>

      </div>
      
    )
  }
}
Profil.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  tablets: PropTypes.array.isRequired,
  carts: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  getProfil: PropTypes.func,
  programs: PropTypes.array.isRequired,
  users:PropTypes.array.isRequired
}


const mapStateToProps = ( state ) => {
  return {
      identite : state.profil.identite,
      error: state.profil.error,
      loading: state.profil.loading,
      carts: state.profil.carts,
      tablets: state.profil.tablets


    }
}
const mapDispatchToProps = ( dispatch) => {
  return {
      liismo: () => dispatch()
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profil);