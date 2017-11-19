import React, {Component} from "react";
import Hints from "./Hints.js";
import Controllers from "./Controllers.js";

class GameContorller extends Component{
    render(){
        return(
            <div  >
                        <Controllers    upFunc={this.props.upFunc}
                                        downFunc={this.props.downFunc} 
                                        rightFunc={this.props.rightFunc} 
                                        leftFunc={this.props.leftFunc} 
                                        upRightFunc={this.props.upRightFunc}
                                        upLeftFunc={this.props.upLeftFunc}
                                        downRightFunc={this.props.downRightFunc}
                                        downLeftFunc={this.props.downLeftFunc}
                                        undoFunc={this.props.undoFunc}
                                        playFunc = {this.props.playFunc}
                                        resetFunc={this.props.resetFunc}
                                        
                        />
                        <Hints  level={this.props.level}
                        />
            </div>
        );
    }
}

export default GameContorller;