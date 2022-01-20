const getData: (url: string, data: any) => Promise<string> = (url, data) => {
    const urlWithParams = `${url}?${new URLSearchParams(data)}`
    return fetch(urlWithParams).then(res => {
        return res.text()
    })
}

export const getWord: (wordLength: string) => void = (wordLength: string) => {
    const params = {
        word_length: wordLength
    }
    getData("http://localhost:3000/random_word", params).then(data => {
        console.log(data)
    }).catch((error) => {
        console.log(error)
    })
}
