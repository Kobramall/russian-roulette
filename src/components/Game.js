import { useState, useEffect } from "react"
import { connect } from 'react-redux'
import { SetPlayer } from "../redux/Action";

const Game = (props) => {

  const { SetPlayer, playersArray } = props

   const [currentPlayer, setCurrentPlayer] = useState('player 1')
   const playerArry  = [];
   let bulletPlayer = ''
   let numberOfPlayer = 6
   let playerObject = {}
   let playerOrder = {
    1: 'player 1',
    2: 'player 2',
    3: 'player 3',
   }

   const assignBullet = (players) => {
    let number = (Math.random() * 100) 
    let matchingObj = {}
    let addCount = Math.round(100/players) - 1
    let currentCount = Math.round(100/players)
    let numberArr = [];
    
    for(let i = 1; i <= players; i++){
      if(i === 1){
        numberArr.push(0, currentCount)
        matchingObj = {0: `player ${i}`, [currentCount]: `player ${i}`}
      }else{
        matchingObj = {...matchingObj, [currentCount]: `player ${i}`,
    [currentCount = currentCount + addCount]: `player ${i}`}
        numberArr.push(currentCount)
      }
      currentCount++
      numberArr.push(currentCount)
    }
   
 let closest = numberArr.reduce(function(prev, curr) {
  return (Math.abs(curr - number) < Math.abs(prev - number) ? curr : prev);
});

  bulletPlayer = matchingObj[closest]
    }

   
   
    const setUp = (numberOfPlayer) =>{
  
    for(let i = 1; i <= numberOfPlayer; i++){
      let name = `player ${i}`
      let cards = ['test 1', 'test 2', 'test 3', 'test 4', 'test 5']
      playerObject = { id: i, playerName: name, cards: cards }   
      SetPlayer(playerObject)
    }
  
  }


     
    
    
     return(
      <div className="bg-white min-h-screen">
           <div className="">
           {playerArry.map(player =>{
             return (<div key={player.playerName} className="flex flex-col text-center items-center p-3">
                <h1>{player.playerName}</h1>
                   <div className="flex">
                    <div>{currentPlayer === player.playerName ? 'current player' : ''}</div>
                    <div className="flex">{player.cards.map(card =>{
                       return(
                         <div key={card} className='p-2'>
                         <p>{card}</p>
                         </div>)
                    })}</div>
                <div className="ml-2 border-2 w-12 text-white hover:text-black">{bulletPlayer === player.playerName ? 'Bullet' : 'Nope'}</div>
                </div>
             </div>)
           })}
        </div>
      </div>
    )
}

const mapStateToProps = state => {
    return{
        playersArray: state.playersArray
    }
}

export default connect(mapStateToProps, {SetPlayer})(Game)