import React from 'react';

class PieceTile extends React.Component{
  render(){
    const COLORS = {
      1: 'red',
      2: 'blue',
      3: 'green',
      4: 'orange'
    }
    const VISIBILITY = {
      0: 'hidden',
      1: 'visible'
    }
    return (
      <li style={{backgroundColor: COLORS[this.props.color],
        display: 'inline-block',
        verticalAlign: 'top',
        border: '1px solid black',
        padding: '15px',
        visibility: VISIBILITY[this.props.filled]
      }}></li>
    );
  }
}

export default PieceTile