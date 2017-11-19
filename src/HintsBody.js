import React, {Component} from "react";
var paper = require("paper");
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
        var start = new paper.Point(100*0.5, 100*0.5);
        path.moveTo(start);
        paper.view.draw();
        return path;
    }
    creatLevel(level){
        var speed = 10;
        if(this.state.levels[level-1]){
        paper.view.onFrame = function(event) {
            if(event.count < this.state.levels[level-1].length*speed){
                if(event.count % speed ===0){
            var point = this.state.levels[level-1][event.count/speed];
            this.state.path.add(point[0],point[1]);
                }
            }
            
            
            }.bind(this);

        }
    }

    constructor(props){
        super(props);
        this.state={
            levels: [
                [
                    [100*0.5,108*0.5],
                    [100*0.5,116*0.5],
                    [100*0.5,124*0.5],
                    [100*0.5,132*0.5],
                    [100*0.5,140*0.5],
                ],
                [
                    [80,118],
                    [90,136],
                    [80,154],
                    [80,122],
                    [80,180],

                ],
            ],
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
