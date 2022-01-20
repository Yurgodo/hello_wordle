import React from "react"
import GameField from "./GameField";
import Keyboard from "./Keyboard";
import styled from "styled-components";

const Content = () => {
    const Container = styled.div`
      display: flex;
    `

    return (
        <Container>
            <GameField/>
            <Keyboard/>
        </Container>
    )
}

export default Content