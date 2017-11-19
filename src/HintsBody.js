import React, {Component} from "react";
import {createPointsList} from "./levels.js";
var paper = require("paper");
var scalingFactor = 0.5;
var startingPoint= [100,100];

class HintsBody extends Component{
    componentDidMount(){
        this.setState({path : this.createPath()});
        this.creatLevel(parseInt(this.props.level,10));
    }
    createPath(){
        var canvas = document.getElementById('hintsBody');
        paper.setup(canvas);
        var path = new paper.Path();
        path.strokeColor = 'black';
        var start = new paper.Point(startingPoint[0]*scalingFactor, startingPoint[1]*scalingFactor);
        path.moveTo(start);
        paper.view.draw();
        return path;
    }
    creatLevel(level){
        var speed = 10;
        if(this.state.level){
        paper.view.onFrame = function(event) {
            if(event.count < this.state.level.length*speed){
                if(event.count % speed ===0){
            var point = this.state.level[event.count/speed];
            this.state.path.add(point[0],point[1]);
                }
            }
            
            
            }.bind(this);

        }
    }

    constructor(props){
        super(props);
        this.state={
            level: createPointsList(startingPoint,this.props.level,scalingFactor),
            path: "",
        }
    }

    render(){
        
        return(
            <div>
                <canvas id="hintsBody" width="400px" height="100px"></canvas>
            </div>

        );
    }
}


export default HintsBody;
