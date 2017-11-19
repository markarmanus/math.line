import React, {Component} from "react";
import HintsBody from "./HintsBody.js";



class Hints extends Component{
    constructor(props){
        super(props);
        this.state ={
            isVisible :false,
            lst:[],
        }
    }
    help(){
        if(!this.state.isVisible){
        this.setState({lst:[<HintsBody key="item.id" level={this.props.level} />],isVisible:true});
        }else{
            this.setState({lst:[],isVisible:false});
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({lst:[],isVisible:false})
    }
    render(){

        return(
            <div className="center col-md-4 col-sm-6">
                <a className="button button-border" id="hintButton" onClick={() => this.help()}>
                    Help Me!
                    
                </a>
            {this.state.lst}
            </div>
        );
    }
}



export default Hints;