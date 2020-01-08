import React from 'react'
import './grille.scss'

export default function Grille() {
    const mater= () => {
       const tet= document.getElementById("#grille")
       const nbCase = tet.childElementCount
       const cases= tet.getElementsByTagName('div')
       for(let cas of cases) {
           console.log(cas)
       } 
       console.log(`ma griille ${tet}`)
    }
    //mater()   
    return (
        <div id="grille">
            <div className="grid1">grid 1</div>
            <div className="grid2">grid 2</div>
            <div className="grid3">grid 3</div>
            <div className="grid4">grid 4</div>
            <div className="grid5">grid 5</div>
            <div className="grid6">grid 6</div>
            <div className="grid7">grid 7</div>
            <div className="grid8">grid 8</div>
            <div className="grid9">grid 9</div>
            <div className="grid10">grid 10</div>
            <div className="grid11">grid 11</div>
            <div className="grid12">grid 12</div>
            <div className="grid13">grid 13</div>
            <div className="grid14">grid 14</div>
            <div className="grid15">grid 15</div>
            <div className="grid16">grid 16</div>
            <div className="grid17">grid 17</div>
            <div className="grid18">grid 18</div>
            <div className="grid19">grid 19</div>
            <div className="grid20">grid 20</div>
            <div className="grid21">grid 21</div>
            <div className="grid22">grid 22</div>
            <div className="grid23">grid 23</div>
            <div className="grid24">grid 24</div>
            <div className="grid25">grid 25</div>
        </div>
    )
}
