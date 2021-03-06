class Game{
    constructor(playerX,playerO){
        this.playerX = playerX
        this.playerO = playerO
        this.current_player= playerX 
    }

    changePlayer(){
        if (this.current_player.char==='X'){
            this.current_player=this.playerO
        }
        else{
            this.current_player = this.playerX
        }
    }
}

class Player{
    constructor(char,clr){
        this.char = char
        this.clr = clr
    }
}

function play(e){
    if (isGameContinue){
        let position
        for(var key of BoardItems.keys()) {
            if (e.target === BoardItems.item(key)){
                position = key
                break
            }
        }
        let row=Math.floor(position/3) //floor division by 3
        let column=(position%3)
        if (board[row][column]===0){
            e.target.innerHTML=`${g.current_player.char}`
            e.target.style.color=g.current_player.clr
            board[row][column]=g.current_player.char
            
            
            if (checkWinner()){
                console.log(checkWinner())
                document.getElementById('currentPlayer').innerHTML=`Player ${g.current_player.char} won`
                isGameContinue=false
            }
            else{
                
                g.changePlayer()
                document.getElementById('currentPlayer').innerHTML=`Player ${g.current_player.char}'s Turn`
            }
        }
    }
}


function checkWinner(){
    for (var i=0;i<=3;i++){
        
            if (board[0][i]===board[1][i] && board[1][i]===board[2][i] && board[0][i]!=0){ 
                return board[0][i]
                
            }
            else if (board[i][0]===board[i][1] && board[i][1]===board[i][2] && board[i][0]!=0){
                // #Checking row
                return board[i][0]
                
            } 
            
            else {
                
                    if (board[0][0]===board[1][1] && board[1][1]===board[2][2] && board[1][1]!=0){
                        return board[1][1]
                        
                    } 
                        
                    else if (board[0][2]===board[1][1] && board[2][0]===board[1][1] && board[1][1]!=0){
                        return board[1][1]
                        
                        }
                        
                    else {
                        continue
                    }
                }
            }
            
        }
    
    


                
let isGameContinue = true;

playerX=new Player('X', 'red')
playerO=new Player('O', 'blue')
g= new Game(playerX,playerO)

board=[ [0,0,0] , [0,0,0] , [0,0,0] ]
const BoardItems =document.querySelectorAll('.board-item')
BoardItems.forEach( function (boardItem){boardItem.addEventListener('click', play)})

