 import React, { Component } from 'react'
 import {submitProgram} from './../../store/actions/program';
 import { connect } from 'react-redux';
 import './addProgram.css';
 
class AddProgram extends Component {
   render() {
     return (
        <React.Fragment>
             <h2> Create Program </h2>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="name">name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" onChange={this.props.nameChanged}/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="type">Type</label>
                        <select id="type"  className="form-control" onChange={this.props.typeChanged}>
                            <option   defaultValue >O-mot</option>
                            <option>Or-donné</option>
                            <option>li-és </option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="soura">Soura</label>
                        <input type="number" name="soura" min="1" max="114" value={this.props.soura} onChange={this.props.souraChanged}/>
                    </div>
                <button type="submit" className="btn-lg btn-primary mx-auto"  onSubmit={this.props.submited}>Submit </button>
            </div>
        </form>
    </React.Fragment>
    )
   }
 }
 
 const mapStateToProps = ( state ) => {
     return {
        prg: state.programs
     }
 }

 const mapDispatchToProps = dispatch => {
    return {
        submited: (program) => dispatch(submitProgram({program: program}))
        }

 } 


 export default connect(mapStateToProps, mapDispatchToProps)(AddUser);