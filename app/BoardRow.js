import React from 'react';
import BoardTile from './BoardTile';

class BoardRow extends React.Component{
  render(){
    return (
      <div>
        <ul style={{margin: '0', listStyleType: 'none'}}>
          {[...Array(20)].map((x,i) => <BoardTile tileState={this.props.rowState[i]} key={i}/>)}
        </ul>
      </div>
    );
  }
}

export default BoardRow