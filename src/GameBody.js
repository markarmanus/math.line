import React, { Component } from 'react';
import {addLevelPoints} from "./levels.js";
var paper = require("paper");
var first = true;






class GameBody extends Component{ 
    createStartingPoint(){
        var numOfSquaresWide = Math.floor(window.innerWidth / 40 ) + 1;
        var lst =[];
        var startingSquare = Math.floor(numOfSquaresWide * 0.45);
        lst[0] = startingSquare *40
        lst[1] = 240
        return lst;
    }
    componentDidMount(){

        var canvas = document.getElementById('myCanvas');
        paper.setup(canvas);
    }

    getInitialState(){
        var lst = this.createStartingPoint();
        return ({
            path: "",
            clicked: "",
            x: lst[0],
            y: lst[1],
            winPath: "",
            clickedPlay: false,
            currentLevel: "1",
            
        });

    }
    createWinPath(){
        this.makeGrid();
        var path = new paper.Path();
        path.strokeColor = 'black';
        var lst = this.createStartingPoint();
        path.moveTo(lst[0],lst[1]);    
        paper.view.draw();
        return path;
    }
    createPath(){
      
        this.makeGrid();
        var path = new paper.Path();
        path.strokeColor = 'black';
        var lst = this.createStartingPoint();
        path.moveTo(lst[0],lst[1]);
        paper.view.draw();
        return path;
    }    
    makeGrid(){
        var numOfSquaresWide = Math.floor(window.innerWidth / 40) + 1;
        var numOfSquaresHeight = (360 / 40 )+1;
            for (var i = 0;i <= numOfSquaresHeight;i++){
                var newPath = new paper.Path();
                newPath.strokeColor= "rgba(0,0,0,0.25)";
                newPath.moveTo(new paper.Point(0,i*40));
                newPath.add(window.innerWidth,i*40);
        
                
            }
            for (var x = 0;x <= numOfSquaresWide;x++){
                newPath = new paper.Path();
                newPath.strokeColor= "rgba(0,0,0,0.25)";
                newPath.moveTo(new paper.Point(40*x,0));
                newPath.add(40*x,400);
                
            
            
            }
        
        
        
        
    }
    checkIfWin(){
        var found = false;
        var winSegments = this.state.winPath.segments;
        var segments = this.state.path.segments;

        for (var i = 0; i<winSegments.length;i++ ){
            for (var j =0;j<segments.length;j++){
                if(winSegments[i].point.x === segments[j].point.x && winSegments[i].point.y === segments[j].point.y){
                    found = true;
                    break;
                }else{
                    found =false;
                }
            }
            if(!found){
                break;
            }
        }
        if(found && segments.length <= winSegments.length){
            this.state.clicked = "win";        
            first= true;
            var lst = this.createStartingPoint();
            this.state.x = lst[0];
            this.state.y = lst[1];
            this.state.path ="";
            this.state.winPath = "";
            this.componentDidMount();
            this.state.winPath = this.createWinPath();
            var nextLevel = (parseInt(this.state.currentLevel,10)+1).toString();
            this.createLevel(nextLevel);
            this.props.pointsFunc(parseInt(this.state.currentLevel,10));
            this.state.currentLevel = nextLevel;
            this.props.levelSegsFunc(this.state.winPath.segments.length);
            this.props.levelFunc(nextLevel);
            this.props.usedSegsFunc(1);
            alert("YOU GOT IT!");
            

        }
       
    }
    createLevel(num){
        var lst = this.createStartingPoint();
        addLevelPoints(this.state.winPath,lst,num,1);
           


        
    }
    addSegment(){

        this.state.path.add(this.state.x,this.state.y); 
        
        this.props.usedSegsFunc(this.state.path.segments.length); 
        this.checkIfWin();       
        
    }
    removeLastSegment(){
            
        this.state.path.removeSegment(this.state.path.segments.length - 1);                  
        this.state.x = this.state.path.segments[this.state.path.segments.length -1].point.x;
        this.state.y = this.state.path.segments[this.state.path.segments.length -1].point.y;
        this.props.usedSegsFunc(this.state.path.segments.length);        
        
        
    }
    Compare(path){
        if (path.segments.length <= 1){
            return "";
        }else{
        var segment1 = path.segments[path.segments.length -2];
        var segment2 = path.segments[path.segments.length -1];
        if (segment1.point.x < segment2.point.x && segment1.point.y > segment2.point.y){
            return "deleteDownLeft"
        }
        else if (segment1.point.x > segment2.point.x && segment1.point.y < segment2.point.y){
            return "deleteUpRight"
        }
        else if (segment1.point.x > segment2.point.x && segment1.point.y > segment2.point.y){
            return "deleteDownRight"
        }
        else if (segment1.point.x < segment2.point.x && segment1.point.y < segment2.point.y){
            return "deleteUpLeft"
        }
        else if (segment1.point.x < segment2.point.x){
            return "deleteLeft";
        }else if(segment1.point.x > segment2.point.x){
            return "deleteRight";
        }else if(segment1.point.y < segment2.point.y){
            return "deleteUp";

        }else if (segment1.point.y > segment2.point.y){
            return "deleteDown";
        }else{
            return "";
        }
    }
    
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.reset !== this.props.reset){
            this.setState(this.getInitialState());           
            first= true;
            this.componentDidMount();
            this.componentDidMount();

        }else if(this.props.dummyVariable !== nextProps.dummyVariable){
            this.state.clicked = "";
        
        
        }else if (nextProps.play !== this.props.play){
            this.state.clicked = "play";            
            if(this.state.clickedPlay === true){
                alert("you are playing");
            }else{
            this.state.clickedPlay = true;
            this.state.winPath = this.createWinPath();
            this.createLevel(nextProps.level);
            }

        }else{
            if(this.state.clickedPlay){
                if (first){
                    this.componentDidMount();
                    this.state.path = this.createPath();
                    
            
                    first = false;
                }
                if(nextProps.up  !== this.props.up){
                    this.state.clicked= "up";
                }else if(nextProps.down  !== this.props.down){
                    this.state.clicked= "down";
                }else if(nextProps.right  !== this.props.right){
                    this.state.clicked= "right";
                }else if(nextProps.left  !== this.props.left){
                    this.state.clicked= "left";
                }else if(nextProps.upRight  !== this.props.upRight){    
                    this.state.clicked= "upRight";
                }else if(nextProps.upLeft  !== this.props.upLeft){
                    this.state.clicked= "upLeft";
                }else if(nextProps.downLeft  !== this.props.downLeft){
                    this.state.clicked= "downLeft";
                }else if(nextProps.undo !== this.props.undo){
                    this.state.clicked = "undo";
                }else if(nextProps.downRight !== this.props.downRight){
                    this.state.clicked = "downRight";
                }else if(nextProps.level !== this.props.level || this.state.currentLevel === nextProps.level){
                    var lst = this.createStartingPoint();
                    this.state.x = lst[0];
                    this.state.y = lst[1];
                    this.state.clicked = "level";
                    this.state.path ="";
                    this.state.winPath = "";
                    first= true;
                    this.componentDidMount();
                    this.state.winPath = this.createWinPath();
                    this.createLevel(nextProps.level);
                    this.state.currentLevel = nextProps.level;
                    this.props.levelSegsFunc(this.state.winPath.segments.length);
                }else{
                    alert("Stopp!");
        
                }
            }else{
                alert("Press Play First!");
            }
        }
        
    }
    componentDidUpdate(){
        if(this.state.clicked ==="up"){
            if (this.Compare(this.state.path) ==="deleteUp" ) {
                this.removeLastSegment();
            }else{
                this.state.y= this.state.y - 10;
                this.addSegment();
            }
        }
        if(this.state.clicked ==="down"){
            if (this.Compare(this.state.path)==="deleteDown"){
                this.removeLastSegment();
                
            }else{
                this.state.y= this.state.y + 10;
                this.addSegment();              
            }
        }

        if(this.state.clicked ==="right"){
            if(this.Compare(this.state.path)==="deleteRight"){
                this.removeLastSegment();
            }else{
                this.state.x= this.state.x + 10;
                this.addSegment();          
            }
            
        }
        if(this.state.clicked ==="left"){
            if(this.Compare(this.state.path)==="deleteLeft"){
                this.removeLastSegment();
            }else{
                this.state.x= this.state.x - 10;
                this.addSegment();          
            }
        }
        if(this.state.clicked ==="upRight"){
            if(this.Compare(this.state.path)==="deleteUpRight"){
                this.removeLastSegment();
            }else{
                this.state.x= this.state.x + 10;
                this.state.y= this.state.y - 10;
                this.addSegment();          
            }
        }
        if(this.state.clicked ==="upLeft"){
            if(this.Compare(this.state.path)==="deleteUpLeft"){
                this.removeLastSegment();
            }else{
                this.state.x= this.state.x - 10;
                this.state.y= this.state.y - 10;
                this.addSegment();          
            }
        }
        if(this.state.clicked ==="downRight"){
            if(this.Compare(this.state.path)==="deleteDownRight"){
                this.removeLastSegment();
            }else{

                this.state.x= this.state.x + 10;
                this.state.y= this.state.y + 10;
                this.addSegment();          
            }
        }
        if(this.state.clicked ==="downLeft"){
            if(this.Compare(this.state.path)==="deleteDownLeft"){
                this.removeLastSegment();
            }else{
                this.state.x= this.state.x - 10;
                this.state.y= this.state.y + 10;
                this.addSegment();          
            }
        }
        if(this.state.clicked ==="undo"){
            if (this.state.path.segments.length <= 1){
                alert("cant undo nothing, Stop it!");
            }else{
                this.removeLastSegment();
                
            }
        }

    }
    constructor(props){
        super(props);
        this.state = this.getInitialState();
        
    }
    render(){
        return (
            <div>                
                <canvas id="myCanvas" height="360px" width={window.innerWidth+100}  ></canvas>

                
            </div>

        );
    }
}




export default GameBody;