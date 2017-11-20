import React, {Component} from "react";

// component that has all the arrows and reset and undo buttons with a props fnction that call the main function in app.js.

class Controllers extends Component{
    render(){
        return(
            <div className="col-md-4 col-sm-6" id="gameController">
       
                <div>
                    <a className="button button-border-highlight button-circle flipped" onClick={() => this.props.upLeftFunc()}><i className="fa fa-arrow-left" ></i></a>                
                    <a className="button button-border-highlight button-circle" onClick={() => this.props.upFunc()}><i className="fa fa-arrow-up" ></i></a>
                    <a className="button button-border-highlight button-circle flipped" onClick={() => this.props.upRightFunc()}><i className="fa fa-arrow-up" ></i></a>
                </div>
                <div>
                    <a className="button button-border-highlight button-circle" onClick={() => this.props.leftFunc()}><i className="fa fa-arrow-left" ></i></a>
                    <a  className="button button-border" onClick={() => this.props.playFunc()}>play</a>

                    <a className="button button-border-highlight button-circle" onClick={() => this.props.rightFunc()}><i className="fa fa-arrow-right" ></i></a>
                </div>
                <div>
                    <a className="button button-border-highlight button-circle flipped" onClick={() => this.props.downLeftFunc()}><i className="fa fa-arrow-down" ></i></a>
                    <a className="button button-border-highlight button-circle" onClick={() => this.props.downFunc()}><i className="fa fa-arrow-down" ></i></a>
                    <a className="button button-border-highlight button-circle flipped" onClick={() => this.props.downRightFunc()}><i className="fa fa-arrow-right" ></i></a>
                </div>
                
                <a className="button button-border" onClick={() => this.props.undoFunc()}>Undo </a>
                <a className="button button-border" onClick={() => this.props.resetFunc()}>Reset</a>
            </div>

        );
    }
}





export default Controllers;