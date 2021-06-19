class Game{

    

    constructor(playerX,playerO){
        this.playerX = playerX
        this.playerO = playerO
        this.current_player= playerX 
        this.board = [ [0,0,0] , [0,0,0] , [0,0,0] ]
    }

    play(e){
        let position=this.boardItems.indexOf(e.target)
        let row=Math.floor(position/3) //floor division by 3
        let column=(position%3)-1
        if (e.target.classList.includes('occupied')===false){
            e.target.innerHTML=`${this.current_player.char}`
            e.target.style.color=this.current_player.clr
            this.board[row][column]=this.current_player.char
            e.target.classList.add('occupied')
            this.changePlayer()

        }
    }

    checkWinner(){

    }
}

class Player{

    constructor(char,clr){
        this.char = char
        this.clr = clr
    }
}

playerX=new Player('X', 'red')
playerO=new Player('O', 'blue')
g= new Player(playerX, playerO)
boardItems =document.querySelectorAll('.board-item')
boardItems.forEach( function (boardItem){
    boardItem.addEventListener('click', g.play)})