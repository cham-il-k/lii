import React, { Component} from 'react'
import './app.scss'
import Level from './level/Level'
import Grille from './grille/Grille'
import { lire } from './../util'
class App extends Component {
    state= {
        loading: false,
        error:'',
        qtt:10,
        fast:2
    }
componentDidMount(){

      new Promise((resolve, reject) => {
        try {
            const liv =  lire()
            if(liv) {
                resolve(liv)
            }
            reject('non lecture')

      }  
     catch(e) {
        console.log(e.message)
    }
      
})
}
    render(){
        return (
            <div className="container">
               <div className="header">
                   <h1>User Programation  </h1>
                   <div style={{height:'100px', width:'100px', backgroundColor:'green',top: '0', left:'0',position:'absolute'}} id="outer" className="outer">
                      
                       </div> 
                       <div style={{height:'30px', width:'30px', top: '0', left:'0', backgroundColor:'yellow', position:'absolute'}} id="inner" className="outer">
                       
                       </div>  
                </div>
                <div className="content">
                    <div className="level">
                        <Level level= {{qtt:this.state.qtt, fast: this.state.fast}}/>
                    </div>
                    <div className="items">
                        <div className="item">
                        <h1>asma1</h1>  
                        <Grille />

                        </div>
                    </div>
                    </div>  
            </div>
        )
    }

}
export default App