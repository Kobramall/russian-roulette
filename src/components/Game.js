import { connect } from 'react-redux'
import { SetPlayer, assignBullet, assignOrder, nextPlayer, nextPhase } from "../redux/Action";

const Game = (props) => {

   const { SetPlayer, playersArray, bulletPlayer, assignBullet, assignOrder, turnOrder, currentPlayer, nextPlayer, message, nextPhase } = props
   
   let numberOfPlayer = 3

      if(turnOrder[currentPlayer] === 'Next Phase'){
            nextPhase()
      }

    const setUp = (numberOfPlayer) => {
    for(let i = 1; i <= numberOfPlayer; i++){
        let name = `player ${i}`
        let cards = ['test 1', 'test 2', 'test 3', 'test 4', 'test 5']
        let player = { id: i, playerName: name, cards: cards }   
          SetPlayer(player)
      }
       assignBullet(numberOfPlayer)
       assignOrder(numberOfPlayer)
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
                         <button key={index} className='card' onClick={() => nextPlayer()} disabled={turnOrder[currentPlayer] === player.playerName ? false : true}>
                         <p>{card}</p>
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
        message: state.message
    }
}

export default connect(mapStateToProps, { SetPlayer, assignBullet, assignOrder, nextPlayer, nextPhase })(Game)