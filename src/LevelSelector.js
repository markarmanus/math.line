import React, {Component} from "react";


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
{/*                 
                    <select className="selectpicker" data-style="btn-primary" onChange={(event) => {this.props.levelFunc(event.target.value)}}>
                        <option value="1">Level 1</option>
                        <option value="2">Level 2</option>
                        <option value="3">Level 3</option>
                        <option value="4">Level 4</option>
                        <option value="5">Level 5</option>
                        <option value="6">Level 6</option>
                        <option value="7">Level 7</option>
                    </select> */}
                
            </div>
        );
    }
} 




export default  LevelSelector;