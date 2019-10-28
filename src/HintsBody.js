import React, { Component } from "react"
import { createPointsList } from "./levels.js"
var paper = require("paper")
var scalingFactor = 0.5
var startingPoint = [100, 100]

class HintsBody extends Component {
  // creat  a state value that holds the papper.js path to draw with
  // and calls createLevel with the level int passed to the function.
  componentDidMount() {
    this.setState({ path: this.createPath() })
    this.creatLevel(parseInt(this.props.level, 10))
  }
  // function to create papper.js path and setting the starting point of that path.
  createPath() {
    var canvas = document.getElementById("hintsBody")
    paper.setup(canvas)
    var path = new paper.Path()
    path.strokeColor = "black"
    var start = new paper.Point(
      startingPoint[0] * scalingFactor,
      startingPoint[1] * scalingFactor
    )
    path.moveTo(start)
    paper.view.draw()
    return path
  }
  // function that takes level number and adds the points from that level to the path to redraw it.
  creatLevel(level) {
    var speed = 10
    // function called on everyframe
    paper.view.onFrame = function(event) {
      // makes sure we are not doing anything after drawing the level.
      if (event.count < this.state.level.length * speed) {
        //controls the speed of drawing the level.
        if (event.count % speed === 0) {
          var point = this.state.level[event.count / speed]
          this.state.path.add(point[0], point[1])
        }
      }
    }.bind(this)
  }

  constructor(props) {
    super(props)
    this.state = {
      //creates a list of level points (each point is a list with x and y values).
      level: createPointsList(startingPoint, this.props.level, scalingFactor),
      path: ""
    }
  }

  render() {
    return (
      <div>
        <canvas id="hintsBody" width="400px" height="100px"></canvas>
      </div>
    )
  }
}

export default HintsBody
