import React from 'react';
import Piece from './Piece.js'

class PieceArea extends React.Component{
  render(){
    var pieceShapes = [
      [
        [0,0,1,0,0],
        [0,1,1,1,0],
        [0,0,1,0,0]
      ],
      [
        [0,1,0,0,0],
        [0,1,1,1,0],
        [0,0,1,0,0]
      ],
      [
        [0,1,0,0,0],
        [0,1,1,1,0],
        [0,0,0,1,0]
      ],
      [
        [0,1,1,0,0],
        [0,0,1,1,0],
        [0,0,0,1,0]
      ],
      [
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,1,1]
      ],
      [
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,1,1,1,0]
      ],
      [
        [0,1,0,0,0],
        [1,1,1,1,1],
        [0,0,0,0,0]
      ],
      [
        [0,1,1,0,0],
        [0,0,1,0,0],
        [0,1,1,0,0]
      ],
      [
        [0,0,1,0,0],
        [0,1,1,0,0],
        [0,1,1,0,0]
      ],
      [
        [0,0,0,0,0],
        [0,1,1,1,0],
        [0,0,0,1,1]
      ],
      [
        [0,0,0,0,0],
        [1,1,1,1,0],
        [0,0,0,1,0]
      ],
      [
        [0,0,0,0,0],
        [1,1,1,1,1],
        [0,0,0,0,0]
      ],
      [
        [0,0,0,0,0],
        [0,1,1,0,0],
        [0,0,1,1,0]
      ],
      [
        [0,0,0,0,0],
        [0,1,1,0,0],
        [0,1,1,0,0]
      ],
      [
        [0,0,1,0,0],
        [0,0,1,1,0],
        [0,0,1,0,0]
      ],
      [
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,1,1,0,0]
      ],
      [
        [0,0,0,0,0],
        [0,1,1,1,1],
        [0,0,0,0,0]
      ],
      [
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0]
      ],
      [
        [0,0,0,0,0],
        [0,0,1,0,0],
        [0,0,1,1,0]
      ],
      [
        [0,0,0,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0]
      ],
      [
        [0,0,0,0,0],
        [0,0,1,0,0],
        [0,0,0,0,0]
      ]
    ];

    if(this.props.shouldFlip){
      var num = this.props.pieceNum;
      var newShape = [[],[],[]];
      for(var i = 0; i < pieceShapes[num].length; i++){
        for(var j = 0; j < pieceShapes[num][i].length; j++){
          newShape[i][pieceShapes[num][i].length-1-j] = pieceShapes[num][i][j];
        }
      }
      pieceShapes[num] = newShape;
    }
    if(this.props.shouldRotate){
      var num = this.props.pieceNum;
      if(this.props.shouldRotate === 1){
        var newShape = [[],[],[],[],[]];
        for(var i = 0; i < pieceShapes[num].length; i++){
          for(var j = 0; j < pieceShapes[num][i].length; j++){
            newShape[j][i] = pieceShapes[num][i][j];
          }
        }
      }
      pieceShapes[num] = newShape;
    }
    return (
      <div style={{display: 'inline-block',
        border: '1px solid black',
        width: '550px',
        height: '810px',
        marginLeft: '10px'}}>
        <h2 style={{textAlign: 'center'}}>Your Pieces:</h2>
        {[...Array(21)].map((x,i) => <Piece i={i}
          toggle={this.props.toggle}
          key={i}
          attempt={this.props.attempt}
          pieceSelected={this.props.pieceSelected}
          pieceShape={pieceShapes[i]}
          flip={this.props.flip}
          rotate={this.props.rotate}
          pieceNum={this.props.pieceNum}
          shouldRotate={this.props.shouldRotate}
          color={this.props.color}/>).filter((x,i) => this.props.piecesLeft[i])}

      </div>
    );
  }
}

export default PieceArea