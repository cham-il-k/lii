import React, { useEffect, useRef, useState } from 'react';
import { selectWordsSelected, selectProducts  } from '../../store/selectors/ismWords';
import IsmMenuItem from '../IsmMenuItem/IsmMenuItem';
import { CanvasContainer } from './ismProgramCanva.styled';
import DialogInterface from '../IsmDialogInterface/IsmDialogInterface'
import InputManager  from './../../ismManager/ismInputManager'
import createWebStorage from 'redux-persist/es/storage/createWebStorage';

const IsmProgramCanva = ({ width=300, height=300, tileSize=10}) => {
const canvasRef = useRef()
const [player, setPlayer] = useState({x:28, y:126})
let inputManager = new InputManager()
const handleInput = (action, data) => {  
  console.log(`handle input ${action} : ${JSON.stringify(data)}`)
  let newPlayer = {...player}
  newPlayer.x += data.x * tileSize 
  newPlayer.y += data.y *tileSize
  setPlayer(newPlayer)
}
useEffect(() => {
  console.log('bind Effect')
  inputManager.bindKeys()
  inputManager.subscribe( handleInput)
  return () => {
    inputManager.unbindKeys()
    inputManager.unsubscribe()
  }
} )
 useEffect(() => {
  console.log('draw vanvas')
  const ctx =  canvasRef.current.getContext('2d')
  ctx.clearRect(0, 0, width * tileSize, height * tileSize)
  ctx.fillStyle = '#000';
  ctx.fillRect(player.x, player.y, 16, 16 )

 })
 return (
  <CanvasContainer> 
    <div>un truc</div>
  <canvas ref={canvasRef} width={width * tileSize} height={height * tileSize} style={{border:'1px solid black'}}>
    </canvas>
    </CanvasContainer> 
  )
}


export default IsmProgramCanva;
