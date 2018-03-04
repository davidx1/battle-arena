import styled from "styled-components"
import React from 'react';

export default class Square extends React.Component {
    render() {
        const color = (path, i) => {
            if (this.props.terrain === "blocked") {
                return "black"
            } else if (this.props.selected) {
                return "blue"
            } else if (this.props.highlight) {
                return "green"
            } else {
                return "#c0c0c0"
            }
        }

        return (
            <SquareOnly onClick={this.props.onClick} color={color}>{this.props.character}</SquareOnly>
        )
    }
}

const SquareOnly = styled.div`
    height: 100px;
    width: 100px;
    background-color: ${(props) => (props.color ? props.color : "#404040")};
    border: 1px solid black;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`    
