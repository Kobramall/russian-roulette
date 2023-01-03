import { connect } from 'react-redux'
import { SetPlayer, assignBullet, assignOrder, nextPlayer, nextPhase, actionCard, setTitle, setDirections} from "../redux/Action";


const Game = (props) => {

   const { SetPlayer, playersArray, bulletPlayer, assignBullet, assignOrder, turnOrder, currentPlayer, nextPlayer, setTitle, message, nextPhase, directions, setDirections} = props
   
   let numberOfPlayer = 5

      if(turnOrder[currentPlayer] === 'Next Phase'){
         if(message === 'Phase 1'){    
            nextPhase()
           }else{
               
           }
      }

    const setUp = (numberOfPlayer) => {
          setTitle('Phase 1')
          setDirections('Pick a action card')
      for(let i = 1; i <= numberOfPlayer; i++){
        let name = `player ${i}`
        let cards = [{id: 0, cardName:'mix up all bullet cards Randomly', ability: 'mixBullet'}, {id: 1, cardName:'test 2', ability: 'shuffle cards'}, {id: 2, cardName:'test 3', ability: 'shuffle cards'}, {id: 3, cardName:'test 4', ability: 'shuffle cards'}, {id: 4, cardName:'test 5'}]
        let player = { id: i, playerName: name, cards: cards,  }   
          SetPlayer(player)
      }
       assignBullet(numberOfPlayer)
       assignOrder(numberOfPlayer)
    }

    const actionCardPlay = (str) =>{
        if(str === 'mixBullet'){
           assignBullet(numberOfPlayer)
        }else {
          return null
        }
    }
    
    
    const next = (str, id, playerNum) => {
      actionCardPlay(str)
      playersArray[playerNum].cards.splice(id, 1)
      nextPlayer()
      console.log(playersArray[playerNum].cards)
    }

    
  
     return(
      <div>
           <h1>{message}</h1>
           <h3>{directions}</h3>
           <div className="player">
             {playersArray.map(player =>{
               return (<div key={player.id}>
                <h3>{player.playerName}</h3>
                   <div className="players-hand">
                    <div>{turnOrder[currentPlayer] === player.playerName ? 'current player' : ''}</div>
                    <div className="main-cards">{player.cards.map((card) => {
                       return(
                         <button key={card.id} className='card' onClick={() => next(card.ability, card.id, (player.id - 1))} disabled={turnOrder[currentPlayer] === player.playerName ? false : true}>
                         <p>{card.cardName}</p>
                         </button>)
                    })}</div>
                <div className={turnOrder[currentPlayer] === player.playerName ? "bullet-card" : "hidden-card"}>{bulletPlayer === player.playerName ? 'Bullet' : 'Empty'}</div>
                </div>
             </div>)
           })}
        </div>
        <button onClick={() =>setUp(numberOfPlayer)}>Start</button>
      </div>
    )
}

const mapStateToProps = state => {
    return{
        playersArray: state.playersArray,
        bulletPlayer: state.bulletPlayer,
        turnOrder: state.turnOrder,
        currentPlayer: state.currentPlayer,
        message: state.message, 
        actionCardPlayed: state.actionCardPlayed, 
        bulletViewable: state.bulletViewable,
        directions: state.directions
    }
}

export default connect(mapStateToProps, { SetPlayer, assignBullet, assignOrder, nextPlayer, nextPhase, actionCard,  setTitle, setDirections})(Game)