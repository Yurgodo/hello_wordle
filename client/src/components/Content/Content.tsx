import React from "react"
import GameField from "./GameField";
import Keyboard from "./Keyboard";
import styled from "styled-components";
import {GlobalStyles} from "../GlobalStyles";
import Header from "../Header/Header";
import {useAppStore} from "../../store/store";
import {darkTheme, lightTheme} from "../Themes";

const Content = () => {
    const store = useAppStore()
    const {theme} = store
    const Container = styled.div`
      display: flex;
    `

    return (
        <Container>
            <GlobalStyles theme={theme === "light" ? lightTheme : darkTheme}/>
            <Header/>
            <GameField/>
            <Keyboard/>
        </Container>
    );
}

export default Content