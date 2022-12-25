import { connect } from 'react-redux'
import { SetPlayer, assignBullet, assignOrder, nextPlayer, nextPhase, actionCard } from "../redux/Action";


const Game = (props) => {

   const { SetPlayer, playersArray, bulletPlayer, assignBullet, assignOrder, turnOrder, currentPlayer, nextPlayer, message, nextPhase, actionCard } = props
   
   let numberOfPlayer = 5

      if(turnOrder[currentPlayer] === 'Next Phase'){
         if(message === 'Phase 1'){    
            nextPhase()
           }else{
               
           }
      }

    const setUp = (numberOfPlayer) => {
    for(let i = 1; i <= numberOfPlayer; i++){
        let name = `player ${i}`
        let cards = [{cardName:'test 1', ability: 'Mix cards'}, {cardName:'test 2', ability: 'shuffle cards'}, {cardName:'test 3'}, {cardName:'test 4'}, {cardName:'test 5'}]
        let player = { id: i, playerName: name, cards: cards }   
          SetPlayer(player)
      }
       assignBullet(numberOfPlayer)
       assignOrder(numberOfPlayer)
    }

    
    
    const next = (str) => {
      actionCard(str)
      nextPlayer()
    }

    

     return(
      <div>
           <h1>{message}</h1>
           <div className="player">
             {playersArray.map(player =>{
               return (<div key={player.id}>
                <h3>{player.playerName}</h3>
                   <div className="players-hand">
                    <div>{turnOrder[currentPlayer] === player.playerName ? 'current player' : ''}</div>
                    <div className="main-cards">{player.cards.map((card, index) => {
                       return(
                         <button key={index} className='card' onClick={() => next(card.ability)} disabled={turnOrder[currentPlayer] === player.playerName ? false : true}>
                         <p>{card.cardName}</p>
                         </button>)
                    })}</div>
                <div className="bullet-card">{bulletPlayer === player.playerName ? 'Bullet' : 'Nope'}</div>
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
        actionCardPlayed: state.actionCardPlayed
    }
}

export default connect(mapStateToProps, { SetPlayer, assignBullet, assignOrder, nextPlayer, nextPhase, actionCard })(Game)