import React, {Component} from "react";
// fucntion that has all the level buttons and pass the chose one to app.js.

class LevelSelector extends Component{

    constructor(props){
        super(props);
        this.state={
            value:1,
        }
    }
    render(){
        return(
            <div className="center col-md-4 col-sm-6">
                <div className="center  row">
                    <div className="center col-sm-6">
                        <a onClick={() =>this.props.levelFunc("1") } className="button button-border">Level 1</a>
                        <a onClick={() =>this.props.levelFunc("2") } className="button button-border">Level 2</a>
                        <a onClick={() =>this.props.levelFunc("3") } className="button button-border">Level 3</a>
                        <a onClick={() =>this.props.levelFunc("4") } className="button button-border">Level 4</a>
                    </div>
                    <div className="center col-sm-6">
                        <a onClick={() =>this.props.levelFunc("5") } className="button button-border">Level 5</a>
                        <a onClick={() =>this.props.levelFunc("6") } className="button button-border">Level 6</a>
                        <a onClick={() =>this.props.levelFunc("7") } className="button button-border">Level 7</a>
                        <a onClick={() =>this.props.levelFunc("8") } className="button button-border">Level 8</a>

                    </div>    
                
                
                </div>

                
            </div>
        );
    }
} 




export default  LevelSelector;