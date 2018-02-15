import React from 'react';
import BoardRow from './BoardRow.js';

class Board extends React.Component{
  render(){
    return (
      <div style={{float: 'left'}}>
        {[...Array(20)].map((x,i) => <BoardRow rowState={this.props.boardState[i]} key={i} />)}
      </div>
    );
  }
}

export default Board