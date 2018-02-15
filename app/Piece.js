import React from 'react';
import PieceRow from './PieceRow.js'

class Piece extends React.Component{
  constructor(props){
    super(props);
    this.moveListen = this.moveListen.bind(this);
    this.clickListen = this.clickListen.bind(this);
    this.keyListen = this.keyListen.bind(this);

    this.state = {
      pieceShape: this.props.pieceShape
    }
  }


  flip(){
    var newShape = [[],[],[]];
    if(this.state.pieceShape.length === 5){
      var newShape = [[],[],[],[],[]];
    }
    for(var i = 0; i < this.state.pieceShape.length; i++){
      for(var j = 0; j < this.state.pieceShape[i].length; j++){
        newShape[i][this.state.pieceShape[i].length-1-j] = this.state.pieceShape[i][j];
      }
    }
    console.log(newShape);
    this.setState({
      pieceShape: newShape
    })
  }

  rotate(num){
    if(this.state.pieceShape.length === 3){
      var newShape = [[],[],[],[],[]];
      for(var i = 0; i < this.state.pieceShape.length; i++){
        for(var j = 0; j < this.state.pieceShape[i].length; j++){
          newShape[j][this.state.pieceShape.length - 1 -i] = this.state.pieceShape[i][j];
        }
      }
    } else {
      console.log('33333');
      var newShape = [[],[],[]];
      for(var i = 0; i < this.state.pieceShape.length; i++){
        for(var j = 0; j < this.state.pieceShape[i].length; j++){
          newShape[j][this.state.pieceShape.length-1-i] = this.state.pieceShape[i][j];
        }
      }
    }
    
    console.log(newShape);
    this.setState({
      pieceShape: newShape
    });
  }

  moveWith(node){
    node.style.position = 'absolute';
    this.node = node;
    if(this.props.pieceSelected !== 1){
      window.addEventListener('mousemove',this.moveListen, true);
      console.log('add it');
    }
  }
  moveListen(e,){
    var x = 95;
    var y = 50;
    if(this.state.pieceShape.length === 5){
      console.log(this.state.pieceShape.length);
      x = 65;
      y = 80;
    }
    this.node.style.left = e.pageX - x + 'px';
    this.node.style.top = e.pageY - y + 'px';
  }

  keyListen(e){
    if(e.keyCode === 70){
      console.log('flip');
      this.flip();
      //this.props.flip(this.props.i);
    } else if(e.keyCode === 82){
      this.rotate();
      // this.props.rotate(this.props.i);
    }
  }

  clickListen(e){
    if(e.pageX > 50 && e.pageX < 690 && e.pageY > 10 && e.pageY < 650){
      var that = this;
      this.props.attempt(e, this.props.i, this.state.pieceShape, () => {
        window.removeEventListener('mousemove',this.moveListen, true);
        window.removeEventListener('keyup', this.keyListen, true)
      });
    } else{
      this.node.style.position = 'static';
    }
  }

  startTracking(e){
    console.log(this.props);
    this.props.toggle();
    if(this.props.pieceSelected !== 1){
      var node = e.target;
      while(node.className !== 'piece'){
        node = node.parentNode;
      }
      var that = this;
      node.addEventListener('click', this.clickListen, true)
      window.addEventListener('keyup', this.keyListen, true)
      node.style.left = e.pageX - 95 + 'px';
      node.style.top = e.pageY - 50 + 'px';
      this.moveWith(node);
    } else{
      console.log('else');
      window.removeEventListener('mousemove',this.moveListen, true);
      window.removeEventListener('keyup', this.keyListen, true)
    }
  }

  render(){
    var rowNum = this.props.pieceNum === this.props.i && this.props.shouldRotate === 1 ? 5 : 3;
    return (
      <div onClick={this.startTracking.bind(this)} className="piece" style={{top: this.top, left: this.left, margin: '0 0 10px -23px', display: 'inline-block', position: this.pos}}>
        {[...Array(this.state.pieceShape.length)].map((x,i) => <PieceRow color={this.props.color} shouldRotate={this.props.shouldRotate} i={i} key={i} pieceNum={this.props.pieceNum} line={this.state.pieceShape[i]}/>)}
      </div>
    );
  }
}

export default Piece