import React, {useEffect} from "react"
import GameField from "./GameField";
import Keyboard from "./Keyboard";
import styled from "styled-components";
import {GlobalStyles} from "../GlobalStyles";
import Header from "../Header/Header";
import {useAppStore} from "../../store/store";
import {darkTheme, lightTheme} from "../Themes";
import {getWord} from "../../api/Api";

const Content = () => {
    const store = useAppStore()
    const {theme} = store

    useEffect(() => {
        getWord("5");
    }, [])

    const Container = styled.div`
      display: flex;
      justify-content: center;
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