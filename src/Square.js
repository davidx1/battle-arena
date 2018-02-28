import styled from "styled-components"

const Square = styled.div`
    height: 100px;
    width: 100px;
    background-color: ${(props) => (props.color ? props.color : "red")};
    border: 1px solid black;
    box-sizing: border-box;
`

export default Square
