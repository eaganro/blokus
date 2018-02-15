import React from 'react';
import PieceTile from './PieceTile.js'

class PieceRow extends React.Component{
  render(){
    var colNum = this.props.pieceNum === this.props.i && this.props.shouldRotate === 1 ? 3 : 5;
    return (
      <div>
        <ul style={{margin: '0'}}>
          {[...Array(this.props.line.length)].map((x,i) => <PieceTile color={this.props.color} key={i} filled={this.props.line[i]}/>)}
        </ul>
      </div>
    );
  }
}

export default PieceRow