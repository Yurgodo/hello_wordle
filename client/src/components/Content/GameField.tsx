import React, {useState} from "react"
import {useAppStore} from "../../store/store";

const gameFieldContent = (colCount: number, rowCount: number, wordState: string, gameState: Array<string>) => {
    const resultArr = [];
    for (let i = 1; i <= colCount; i++) {
        let wordComponent = (
            <Word size={colCount} wordState={gameState[i] || ""}/>
        )
        if (i === gameState.length + 1) {
            wordComponent = (
                <Word wordState={wordState} size={colCount}/>
            )
        }
        resultArr.push(wordComponent)
    }
    return resultArr.map(component => component)
}

const GameField = () => {
    const [wordState, setWordState] = useState("")
    const {gameState, currentWord} = useAppStore()
    const colCount = currentWord.length
    const rowCount = colCount + 1

    return (
        <React.Fragment>
            {gameFieldContent(colCount, rowCount, wordState, gameState)}
        </React.Fragment>
    )
}

export default GameField