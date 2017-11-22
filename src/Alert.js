import React, {Component} from "react";

class Alert extends Component {
    handleRemove(){
        var alert = document.getElementById(this.props.id);
        alert.className = "alert noOpacity "
        setTimeout(function(){
            alert.className = "alert noOpacity noDisplay"            
        },500)
    }
    render(){
        return(
            <div className="alert" id={this.props.id}>
                <a onClick={this.handleRemove.bind(this)} href="#" className="close"aria-label="close">&times;</a>
                {this.props.massege}
            </div>
        );
    }
}

export default Alert