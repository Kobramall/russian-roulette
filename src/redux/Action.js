export const SET_PLAYER = 'SET_PLAYER'
export const ASSIGN_BULLET = 'ASSIGN_BULLET'
export const ASSIGN_ORDER = 'ASSIGN_ORDER'
export const NEXT_PLAYER = 'NEXT_PLAYER'
export const NEXT_PHASE = 'NEXT_PHASE'
export const ACTION_CARD = 'ACTION_CARD'

export const SetPlayer = (player) => {
    return {type: SET_PLAYER, payload: player } 
}

export const assignBullet = (players) => {
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

  return{ type:ASSIGN_BULLET, payload:matchingObj[closest]}
    }

    export const assignOrder = (players) =>{
        let placeHolderArr = []
        let turnOrderObj = {}
        
        for(let i = 1; i <= players; i++){
          let p = `player ${i}`
          placeHolderArr.push(p)
        }
      
        function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
      
        while (currentIndex !== 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
        
        placeHolderArr = shuffle(placeHolderArr)
        
        for(let i = 0; i <= players; i++){
          if(i === players){
            turnOrderObj = {...turnOrderObj, [i]: 'Next Phase'}
          }else{
          turnOrderObj = {...turnOrderObj, [i]: placeHolderArr[i]}
          }
        }
        
        return {type: ASSIGN_ORDER , payload:turnOrderObj}
      }

      export const nextPlayer = () => {
        return {type: NEXT_PLAYER}
      }

      export const nextPhase = () => {
            return {type: NEXT_PHASE} 
      }

      export const actionCard = (str) => {
        return {type: ACTION_CARD, payload: str}
      }