import React, { useState } from 'react'
import './level.scss'


export default function Level(props) {

    const [fast, setFast] = useState(props.level.fast)
    const [qtt, setQtt] = useState(props.level.qtt)

    return (
        <div className="level-container">
            <div className="diff">
                <div className="level-item">
                    <p>Level choice : 0-10</p>
                </div>
                <div className=" level-item fast-choice">
                    <input type="range" id="fast" name="fast"
                        min="0" max="10" onChange={(e) => setFast(e.target.value)} value={fast} />
                    <label htmlFor="volume">fast : {fast}</label>
                </div>
                <div className=" level-item qtt-choice"    >
                    <input type="range" id="quantity" name="quantity"
                        min="0" max="10" onChange={(e) => setQtt(e.target.value)} value={qtt} step="1" />
                    <label htmlFor="quantity">quantity : {qtt}</label>
                </div>
            </div>
            <div className="src">
                <div className="level-item">
                    <p>Source</p>
                </div>

                <div className=" level-item fast-choice">
                    <input type="range" id="fast" name="fast"
                        min="0" max="10" onChange={(e) => setFast(e.target.value)} value={fast} />
                    <label htmlFor="volume">soura : {fast}</label>
                </div>
                <div className=" level-item qtt-choice"    >
                    <input type="range" id="quantity" name="quantity"
                        min="0" max="10" onChange={(e) => setQtt(e.target.value)} value={qtt} step="1" />
                    <label htmlFor="quantity">ayah : {qtt}</label>
                </div>
            </div>
            <div className="rithm">

                <div className="level-item">
                    <p>velo : 0-10</p>

                </div>

                <div className=" level-item fast-choice">
                    <input type="range" id="fast" name="fast"
                        min="0" max="10" onChange={(e) => setFast(e.target.value)} value={fast} />
                    <label htmlFor="volume">velo : {fast}</label>
                </div>
                <div className=" level-item qtt-choice"    >
                    <input type="range" id="quantity" name="quantity"
                        min="0" max="10" onChange={(e) => setQtt(e.target.value)} value={qtt} step="1" />
                    <label htmlFor="quantity">direction : {qtt}</label>
                </div>
            </div>
        </div>
    )
}


