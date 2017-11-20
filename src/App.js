import React, { Component } from 'react';
import GameBody from "./GameBody.js"
import GameController from "./GameController.js"
import GameTitle from "./GameTitle.js";
import LevelSelector from "./LevelSelector.js";
import PageEnd from "./PageEnd.js";
import './App.css';
import GameAttributes from "./GameAttributes.js";
var  points = 0;






class App extends Component {

  getInitialState(){
    return ({
      level: "1",
      up: 0,
      down:0,
      right: 0,
      left:0,
      upRight: 0,
      upLeft: 0,
      downRight: 0,
      downLeft: 0,
      undo:0,
      play: false,
      reset: false,
      status: "Click on Play To Start",
      usedSegs : 1,
      levelSegs: 30,
      dummyVariable : true,
      firstClickPlay: true,
     
    })
  }
  constructor(props){
    super(props);    
    this.state = this.getInitialState();
  }
  usedSegs(value){
    this.setState({usedSegs : value,dummyVariable : !this.state.dummyVariable});
    
  }
  points(value){
    points += value;
  }
  levelSegs(value){
    this.setState({levelSegs :  value,dummyVariable : !this.state.dummyVariable});
  }
  reset(){
    points = 0;
    this.setState(this.getInitialState());
    this.setState({reset: !this.state.reset });
  }
  level(levelNum){
    this.setState({level: levelNum,status: "remember this shape and redraw it witht the arrows"});
  }
  play(){
    if (this.state.firstClickPlay === true){
    
    this.setState({play:!this.state.play,status:"Chose Any Level",firstClickPlay: false});
    }else{
      this.setState({play:!this.state.play});
    }
  }
  up(){ 
    if(this.state.firstClickPlay ===false){
      this.setState({status: "Try to Redraw the Shape"});
    }
    this.setState({up: this.state.up + 1});
  }
  upRight(){
    if(this.state.firstClickPlay ===false){
      this.setState({status: "Try to Redraw the Shape"});
    }
    this.setState({upRight: this.state.upRight +1})
  }
  upLeft(){
    if(this.state.firstClickPlay ===false){
      this.setState({status: "Try to Redraw the Shape"});
    }
    this.setState({upLeft: this.state.upLeft +1})
  }
  down(){
    if(this.state.firstClickPlay ===false){
      this.setState({status: "Try to Redraw the Shape"});
    }
    this.setState({down: this.state.down + 1});    
  }
  downRight(){
    if(this.state.firstClickPlay ===false){
      this.setState({status: "Try to Redraw the Shape"});
    }
    this.setState({downRight: this.state.downRight +1})
  }
  downLeft(){
    if(this.state.firstClickPlay ===false){
      this.setState({status: "Try to Redraw the Shape"});
    }
    this.setState({downLeft: this.state.downLeft +1})
  }
  right(){
    if(this.state.firstClickPlay ===false){
      this.setState({status: "Try to Redraw the Shape"});
    }
    this.setState({right: this.state.right + 1});    

  }
  left(){
    if(this.state.firstClickPlay ===false){
      this.setState({status: "Try to Redraw the Shape"});
    }
    this.setState({left: this.state.left + 1});    
  }
  undo(){
    this.setState({undo: this.state.undo +1});
  }
  render() {
    
    return (
      <div className="App">
        <div id="header">
          <GameTitle />
          <h5 id="status">{this.state.status} </h5>
          <GameAttributes points = {points}
                          levelSegs = {this.state.levelSegs}
                          usedSegs = {this.state.usedSegs}
                          level = {this.state.level}

           
           
           
           />
          
        </div>
          <GameBody   up={this.state.up}
                      down={this.state.down}
                      right={this.state.right}
                      left={this.state.left} 
                      upRight={this.state.upRight}
                      upLeft={this.state.upLeft}
                      downRight={this.state.downRight}
                      downLeft={this.state.downLeft}
                      undo = {this.state.undo}
                      play = {this.state.play}
                      level = {this.state.level}
                      reset = {this.state.reset}
                      dummyVariable = {this.state.dummyVariable}
                      levelSegsFunc = {this.levelSegs.bind(this)}
                      usedSegsFunc = {this.usedSegs.bind(this)}
                      pointsFunc = {this.points}
                      levelFunc = {this.level.bind(this)}

                      
          />
          

          <div className="row">
          <LevelSelector levelFunc={this.level.bind(this)} />
          <GameController upFunc={this.up.bind(this)} 
                          downFunc={this.down.bind(this)}
                          rightFunc={this.right.bind(this)}
                          leftFunc={this.left.bind(this)}
                          upRightFunc={this.upRight.bind(this)}
                          upLeftFunc={this.upLeft.bind(this)}
                          downRightFunc={this.downRight.bind(this)}
                          downLeftFunc={this.downLeft.bind(this)}
                          undoFunc = {this.undo.bind(this)}
                          playFunc = {this.play.bind(this)}
                          resetFunc = {this.reset.bind(this)}
                          level = {this.state.level}
                          
          />
          </div>

         
          <PageEnd />
        
        
      </div>
    );
  }
}

export default App;

