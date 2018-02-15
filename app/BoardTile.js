import React from 'react';

class BoardTile extends React.Component{
  render(){
    const COLORS = {
      0: 'none',
      1: 'red',
      2: 'blue',
      3: 'green',
      4: 'orange'
    }
    return (
      <li style={{backgroundColor: COLORS[this.props.tileState],
          display: 'inline-block',
          verticalAlign: 'top',
          border: '1px solid black',
          padding: '15px',
        }}></li>
    );
  }
}

export default BoardTile