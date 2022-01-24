import React from "react"
import {useLocalObservable} from "mobx-react-lite"

export interface IAppStore {
    currentWord: string
    setCurrentWord: (word: string) => void
    theme: string
    toggleTheme: () => void
    gameState: Array<any>
    pushWordToState: (word: string) => void
}

export function createStore(): IAppStore {
    const theme = localStorage.getItem("theme") || "light"
    const gameState = JSON.parse(localStorage.getItem("gameState")) || []
    return {
        currentWord: "",
        setCurrentWord(word) {
            this.currentWord = word
        },
        theme: theme,
        toggleTheme() {
            const newTheme = this.theme === "light" ? "dark" : "light"
            localStorage.setItem("theme", newTheme)
            this.theme = newTheme
        },
        gameState: gameState,
        pushWordToState(word) {
            let gameState = this.gameState
            gameState.push(word)
            localStorage.setItem("gameState", JSON.stringify(gameState))
        }
    }
}

const StoreContext = React.createContext<IAppStore | null>(null);

export const AppStoreProvider = ({ children }: any) => {
    const store = useLocalObservable(createStore)
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    )
};

export const useAppStore: () => IAppStore = () => {
    const store = React.useContext(StoreContext)
    if (!store) {
        throw new Error('useStore must be used within a StoreProvider.')
    }
    return store
};