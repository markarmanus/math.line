import React, { Component } from "react"
import GameBody from "./GameBody.js"
import GameController from "./GameController.js"
import GameTitle from "./GameTitle.js"
import LevelSelector from "./LevelSelector.js"
import PageEnd from "./PageEnd.js"
import "./App.css"
import GameAttributes from "./GameAttributes.js"
import Alert from "./Alert.js"
var paper = require("paper")
var points = 0

class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState()
    this.setUpKeyboarListener()
  }

  getInitialState() {
    return {
      level: "1",
      up: 0,
      down: 0,
      right: 0,
      left: 0,
      upRight: 0,
      upLeft: 0,
      downRight: 0,
      downLeft: 0,
      undo: 0,
      play: false,
      reset: false,
      status: "Click on Play To Start",
      usedSegs: 1,
      levelSegs: 30,
      dummyVariable: true,
      firstClickPlay: true,
      alertList: [
        <Alert
          id={Math.random()}
          key={Math.random()}
          massege="You can draw with the Numpad or with[ Q, W, E, A, S, D, Z, C, ]."
        />,
        <Alert
          id={Math.random()}
          key={Math.random()}
          massege="Click on Reset if you change the window size to resize the Grid."
        />
      ]
    }
  }
  setUpKeyboarListener() {
    window.onload = function() {
      paper.view.onKeyDown = function(event) {
        switch (event.key) {
          case "w":
          case "8":
            this.up()
            break
          case "s":
          case "2":
            this.down()
            break
          case "a":
          case "4":
            this.left()
            break
          case "d":
          case "6":
            this.right()
            break
          case "q":
          case "7":
            this.upLeft()
            break
          case "e":
          case "9":
            this.upRight()
            break
          case "z":
          case "1":
            this.downLeft()
            break
          case "c":
          case "3":
            this.downRight()
            break
          case "backspace":
            this.undo()
            break
          default:
            break
        }
      }.bind(this)
    }.bind(this)
  }
  createAlert(massege, key) {
    this.setState({
      dummyVariable: !this.dummyVariable,
      alertList: [
        <Alert id={Math.random()} key={Math.random()} massege={massege} />
      ]
    })
  }

  // function to update number of segments user used.
  usedSegs(value) {
    this.setState({ usedSegs: value, dummyVariable: !this.state.dummyVariable })
  }
  // function to update the points user gain from wining levels.
  points(value) {
    points += value
  }
  // function to update numbe of segments this level uses.
  levelSegs(value) {
    this.setState({
      levelSegs: value,
      dummyVariable: !this.state.dummyVariable
    })
  }
  // function to reset everything.
  reset() {
    points = 0
    this.setState(this.getInitialState())
    this.setState({ reset: !this.state.reset })
  }
  // function to change level and status.
  level(levelNum) {
    this.setState({
      level: levelNum,
      status: "remember this shape and redraw it witht the arrows"
    })
  }
  //function to set a boolean of starting to play to true.
  play() {
    if (this.state.firstClickPlay === true) {
      this.setState({
        play: !this.state.play,
        status: "Chose Any Level",
        firstClickPlay: false
      })
    } else {
      this.setState({ play: !this.state.play })
    }
  }
  // functions to change the value of different direction states and rerender the game body.
  up() {
    if (this.state.firstClickPlay === false) {
      this.setState({
        status: "Try to Redraw the Shape",
        up: this.state.up + 1
      })
    }
  }
  upRight() {
    if (this.state.firstClickPlay === false) {
      this.setState({
        status: "Try to Redraw the Shape",
        upRight: this.state.upRight + 1
      })
    }
  }
  upLeft() {
    if (this.state.firstClickPlay === false) {
      this.setState({
        status: "Try to Redraw the Shape",
        upLeft: this.state.upLeft + 1
      })
    }
  }
  down() {
    if (this.state.firstClickPlay === false) {
      this.setState({
        status: "Try to Redraw the Shape",
        down: this.state.down + 1
      })
    }
  }
  downRight() {
    if (this.state.firstClickPlay === false) {
      this.setState({
        status: "Try to Redraw the Shape",
        downRight: this.state.downRight + 1
      })
    }
  }
  downLeft() {
    if (this.state.firstClickPlay === false) {
      this.setState({
        status: "Try to Redraw the Shape",
        downLeft: this.state.downLeft + 1
      })
    }
  }
  right() {
    if (this.state.firstClickPlay === false) {
      this.setState({
        status: "Try to Redraw the Shape",
        right: this.state.right + 1
      })
    }
  }
  left() {
    if (this.state.firstClickPlay === false) {
      this.setState({
        status: "Try to Redraw the Shape",
        left: this.state.left + 1
      })
    }
  }
  //function to change undo value and rerender game body.
  undo() {
    this.setState({ undo: this.state.undo + 1 })
  }
  render() {
    return (
      <div className="App">
        {this.state.alertList}
        <div id="header">
          <GameTitle />
          <h5 id="status">{this.state.status} </h5>
          <GameAttributes
            points={points}
            levelSegs={this.state.levelSegs}
            usedSegs={this.state.usedSegs}
            level={this.state.level}
          />
        </div>
        <GameBody
          up={this.state.up}
          down={this.state.down}
          right={this.state.right}
          left={this.state.left}
          upRight={this.state.upRight}
          upLeft={this.state.upLeft}
          downRight={this.state.downRight}
          downLeft={this.state.downLeft}
          undo={this.state.undo}
          play={this.state.play}
          level={this.state.level}
          reset={this.state.reset}
          dummyVariable={this.state.dummyVariable}
          levelSegsFunc={this.levelSegs.bind(this)}
          usedSegsFunc={this.usedSegs.bind(this)}
          pointsFunc={this.points}
          levelFunc={this.level.bind(this)}
          createAlertFunc={this.createAlert.bind(this)}
        />

        <div className="row">
          <LevelSelector levelFunc={this.level.bind(this)} />
          <GameController
            upFunc={this.up.bind(this)}
            downFunc={this.down.bind(this)}
            rightFunc={this.right.bind(this)}
            leftFunc={this.left.bind(this)}
            upRightFunc={this.upRight.bind(this)}
            upLeftFunc={this.upLeft.bind(this)}
            downRightFunc={this.downRight.bind(this)}
            downLeftFunc={this.downLeft.bind(this)}
            undoFunc={this.undo.bind(this)}
            playFunc={this.play.bind(this)}
            resetFunc={this.reset.bind(this)}
            level={this.state.level}
          />
        </div>

        <PageEnd />
      </div>
    )
  }
}

export default App
