const getData: (url: string, data: any) => Promise<string> = (url, data) => {
    const urlWithParams = `${url}?${new URLSearchParams(data)}`
    return fetch(urlWithParams).then(res => {
        return res.text()
    })
}

export const getWord: (wordLength: string) => Promise<string> = (wordLength: string) => {
    const params = {
        word_length: wordLength
    }
    return getData("http://localhost:3000/random_word", params)
}

export const isWordExistence: (word: string) => Promise<string> = (word: string) => {
    const params = {
        word
    }
    return getData("http://localhost:3000/word_existence", params)
}