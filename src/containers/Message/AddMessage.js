 import React, { Component } from 'react'
 import {submitProgram} from '../../store/actions/program';
 import { connect } from 'react-redux';
 import './addProgram.css';
 
class AddProgram extends Component {
   render() {
     return (
        <React.Fragment>
             <h2> Envoyerun message au groupe </h2>
            <form>
                <div className="message-container">
                    <div className="message-name">
                        <label htmlFor="name">name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" onChange={this.props.nameChanged}/>
                    </div>
                    <div className="message-type">
                        <label htmlFor="type">Type</label>
                        <select id="type"  className="form-control" onChange={this.props.typeChanged}>
                            <option   defaultValue >groupe</option>
                            <option>profil</option>
                            <option>tous </option>
                        </select>
                    </div>
                    <div className="message">
                        <label htmlFor="message">Message</label>
                        <textarea id="story" name="story"
                                rows="10" cols="51">
                        Message...
                        </textarea>
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


 export default connect(mapStateToProps, mapDispatchToProps)(AddProgram);