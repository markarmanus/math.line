import React, {Component} from "react";
// component with all the  attributes in the game which have values being passed as props from app.js.
class GameAttributes extends Component {
    render(){
        return(
            <div>
                <div id="title-desc">
                    <h5 id="left"> Level: {this.props.level} </h5>
                    <h5 id="right"> Points: {this.props.points} </h5>
                </div>
    
                <div id="title-desc-2">
                    <h5 id="left">Level Uses: {this.props.levelSegs -1} </h5> 
                    <h5 id="right">You Used : {this.props.usedSegs -1}</h5> 
                </div>
            </div>
  
        );

    }
}



export default GameAttributes