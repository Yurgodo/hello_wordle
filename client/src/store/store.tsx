import React from "react"
import {useLocalObservable} from "mobx-react-lite"

export interface IAppStore {
    currentWord: string
    setCurrentWord: (word: string) => void
    theme: string
    toggleTheme: () => void
}

export function createStore(): IAppStore {
    const theme = localStorage.getItem("theme") || "light"
    return {
        currentWord: "",
        theme: theme,
        toggleTheme() {
            const newTheme = this.theme === "light" ? "dark" : "light"
            localStorage.setItem("theme", newTheme)
            this.theme = newTheme
        },
        setCurrentWord(word) {
            this.currentWord = word
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