import React, { Component } from "react"
import HintsBody from "./HintsBody.js"

class Hints extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      lst: []
    }
  }
  //function check if the hintsBody is visible if not adds the component to an empty array in the state and re renders Hints Component.
  help() {
    if (!this.state.isVisible) {
      this.setState({
        lst: [<HintsBody key="item.id" level={this.props.level} />],
        isVisible: true
      })
    } else {
      this.setState({ lst: [], isVisible: false })
    }
  }
  //function that closes the removes the HintsBody component from the ( lst  ) state to make sure when user changed level HintsBody is not visible.
  componentWillReceiveProps(nextProps) {
    this.setState({ lst: [], isVisible: false })
  }

  render() {
    return (
      <div className="center col-md-4 col-sm-6">
        <a
          className="button button-border"
          id="hintButton"
          onClick={() => this.help()}
        >
          {" "}
          Help Me!{" "}
        </a>
        {this.state.lst}
      </div>
    )
  }
}

export default Hints
