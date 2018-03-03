import React from "react"
import Square from "./Square"
import styled from "styled-components"
import calcPath from "./functions/pathfinder"
import * as _ from "lodash"

const defaultSquaresState = [
    { color: "#c0c0c0" },
    { color: "#c0c0c0", blocked: true },
    { color: "#c0c0c0", blocked: true },
    { color: "#c0c0c0" },
    { color: "#c0c0c0" },
    { color: "#c0c0c0", blocked: true },
    { color: "#c0c0c0" },
    { color: "#c0c0c0" },
    { color: "#c0c0c0" },
    { color: "#c0c0c0" },
    { color: "#c0c0c0" },
    { color: "#c0c0c0", blocked: true },
    { color: "#c0c0c0" },
    { color: "#c0c0c0" },
    { color: "#c0c0c0" },
    { color: "#c0c0c0" },
    { color: "#c0c0c0", blocked: true },
    { color: "#c0c0c0" },
    { color: "#c0c0c0" },
    { color: "#c0c0c0" },
    { color: "#c0c0c0" },
    { color: "#c0c0c0" },
    { color: "#c0c0c0" },
    { color: "#c0c0c0" },
    { color: "#c0c0c0" }
]

export default class Maze extends React.Component {
    state = {
        squares: _.cloneDeep(defaultSquaresState),
        startSquare: undefined,
        endSquare: undefined
    }

    selectSquare = (i) => {
        console.log(defaultSquaresState)
        if (this.state.startSquare === undefined) {
            this.setState({ startSquare: i })
        } else if (this.state.endSquare === undefined) {
            this.setState({ endSquare: i })
        } else {
            this.setState({
                squares: _.cloneDeep(defaultSquaresState),
                startSquare: i,
                endSquare: undefined
            })
        }
    }

    resetSelection = () => {
        this.setState({
            startSquare: undefined,
            endSquare: undefined
        })
    }

    setColor = (path, i) => {
        if (this.state.squares[i].blocked) {
            return "black"
        } else if (i === this.state.startSquare) {
            return "yellow"
        } else if (i === this.state.endSquare) {
            return "blue"
        } else if (path.includes(i)) {
            return "green"
        } else {
            return "#c0c0c0"
        }
    }

    render() {
        const path = calcPath(
            this.state.squares,
            5,
            this.state.startSquare,
            this.state.endSquare
        )
        return (
            <div>
                <SquaresWrapper>
                    {this.state.squares.map((s, i) => (
                        <Square
                            key={i}
                            onClick={() => this.selectSquare(i)}
                            color={() => this.setColor(path, i)}
                        />
                    ))}
                </SquaresWrapper>
                <button onClick={this.resetSelection}>Reset</button>
            </div>
        )
    }
}

const SquaresWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    height: 500px;
    width: 500px;
    margin: auto;
    border: dotted 5px black;
    transform: scaleY(0.7) rotate(45deg) ;
`
