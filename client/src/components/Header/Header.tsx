import React from "react"
import styled from "styled-components";
import {useAppStore} from "../../store/store";
import {observer} from "mobx-react-lite";

const Header = () => {
    const store = useAppStore()
    const Title = styled.h1`
        
    `

    return (
        <React.Fragment>
            <Title>
                {/*Hello wordle*/}
                {store.currentWord}
            </Title>
        </React.Fragment>
    )
}

export default observer(Header)