import React from 'react';
import Board from './Board.js';
import PieceArea from './PieceArea.js';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      turn: 1,
      pieceSelected: 0,
      piecesLeft: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      board: [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      ]
    }
    this.update();
  }

  update(){
    var that = this;
    setInterval(() => {
      axios.get('/data').then(function(response){
        console.log(response.data);
        that.setState({
          board: response.data.board,
          turn: response.data.turn
        })
      })
    }, 2000);
  }

  selectedToggle(){
    console.log('toggle');
    this.setState({
      pieceSelected: this.state.pieceSelected === 1 ? 0 : 1
    });
    console.log(this);
  }
  checkSpot(x,y,pieceShape){
    var valid = false;
    for(var i = 0; i < pieceShape.length; i++){
      for(var j = 0; j < pieceShape[i].length; j++){
        //console.log(i,j);
        if(this.state.board[y-1+i-1]){
          if(this.state.board[y-1+i-1][x-2+j] === this.props.playerNum && pieceShape[i][j] !== 0){
            console.log('1');
            return false
          }
        }
        if(this.state.board[y-1+i+1]){
          if(this.state.board[y-1+i+1][x-2+j] === this.props.playerNum && pieceShape[i][j] !== 0){
            console.log('2');
            return false
          }
        }
        if(this.state.board[y-1+i]){
          if(this.state.board[y-1+i][x-2+j-1]){
            if(this.state.board[y-1+i][x-2+j-1] === this.props.playerNum && pieceShape[i][j] !== 0){
              console.log('3');
              return false
            }
          }
        }
        if(this.state.board[y-1+i]){
          if(this.state.board[y-1+i][x-2+j+1]){
            if(this.state.board[y-1+i][x-2+j+1] === this.props.playerNum && pieceShape[i][j] !== 0){
              console.log('4',i,j);
              return false
            }
          }
        }

        if(this.state.board[y-1+i-1] && this.state.board[y-1+i-1][x-2+j-1] && this.state.board[y-1+i-1][x-2+j-1] === this.props.playerNum && pieceShape[i][j] !== 0){
          valid = true;
        }
        if(this.state.board[y-1+i-1] && this.state.board[y-1+i-1][x-2+j+1] && this.state.board[y-1+i-1][x-2+j+1] === this.props.playerNum && pieceShape[i][j] !== 0){
          valid = true;
        }
        if(this.state.board[y-1+i+1] && this.state.board[y-1+i+1][x-2+j+1] && this.state.board[y-1+i+1][x-2+j+1] === this.props.playerNum && pieceShape[i][j] !== 0){
          valid = true;
        }
        if(this.state.board[y-1+i+1] && this.state.board[y-1+i+1][x-2+j-1] && this.state.board[y-1+i+1][x-2+j-1] === this.props.playerNum && pieceShape[i][j] !== 0){
          valid = true;
        }
        if((y-1+i === 0 && x-2+j === 0) || (y-1+i === 0 && x-2+j === 19) || (y-1+i === 19 && x-2+j === 0) || (y-1+i === 19 && x-2+j === 19)){
          console.log('here',i,j)
          if(pieceShape[i][j] !== 0){
            valid = true;
          }
        }
      }
    }
    return valid;
  }

  attemptPlace(e, pieceNum, pieceShape, callback){
    console.log(this.props.playerNum, this.state.turn)
    if(this.props.playerNum == this.state.turn){
      var x = Math.floor((e.pageX - 50)/32);
      var y = Math.floor((e.pageY - 10)/32);
      if(pieceShape.length === 5){
        x = Math.floor((e.pageX - 15)/32);
        y = Math.floor((e.pageY - 50)/32);
      }
      var newBoard = [];
      this.state.board.forEach((x)=> newBoard.push(x.slice()));
      var checked = [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0]
      ];
      if(pieceShape.length === 5){
        checked = [
          [0,0,0],
          [0,0,0],
          [0,0,0],
          [0,0,0],
          [0,0,0]
        ];
      }
      var quit = 0;
      var recursePlace = function(row,col){
        if(y+row-1 < 20 && y+row-1 >= 0 && x+col-2 < 20 && x+col-2 >= 0 && newBoard[y+row-1][x+col-2] === 0){
          newBoard[y+row-1][x+col-2] = this.props.playerNum;
          checked[row][col] = 1;
          if(pieceShape[row+1] && pieceShape[row+1][col] !== 0 && checked[row+1][col] === 0){
            recursePlace(row+1,col);
          }
          if(pieceShape[row-1] && pieceShape[row-1][col] !== 0 && checked[row-1][col] === 0){
            recursePlace(row-1,col);
          }
          if(pieceShape[row][col+1] && pieceShape[row][col+1] !== 0 && checked[row][col+1] === 0){
            recursePlace(row,col+1);
          }
          if(pieceShape[row][col-1] && pieceShape[row][col-1] !== 0 && checked[row][col-1] === 0){
            recursePlace(row,col-1);
          }
        } else{
          quit = 1;
        }
      }.bind(this);
      if(pieceShape.length === 3){
        recursePlace(1,2);
      } else {
        recursePlace(2,1);
      }
      if(quit === 1 || !this.checkSpot(x,y,pieceShape)){
        console.log('in quit');
        this.setState({
          pieceSelected: 0,
          piecesLeft: this.state.piecesLeft,
          board: this.state.board,
          flip: 0
        });
      } else{
        callback();
        var newPieces = this.state.piecesLeft;
        newPieces[pieceNum] = 0;
        this.setState({
          pieceSelected: 0,
          piecesLeft: newPieces,
          board: newBoard,
          flip: 0
        });
        axios.post('/data', {
          board: this.state.board
        }).then(function(response){
          console.log(response);
        })
      }
      console.log('attempt', e)
    }
  }

  render(){
    return (
      <div>
        <Board boardState={this.state.board} pieceSelected={this.state.pieceSelected}/>
        <PieceArea piecesLeft={this.state.piecesLeft}
          toggle={this.selectedToggle.bind(this)}
          attempt={this.attemptPlace.bind(this)}
          pieceSelected={this.state.pieceSelected}
          color={this.props.playerNum}/>
      </div>
    );
  }
}

export default App