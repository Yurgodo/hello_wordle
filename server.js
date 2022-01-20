const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.get("/random_word", (req, res) => {
    const wordLength = req.query["word_length"]
    if (["4","5","6","7"].indexOf(wordLength) === -1) {
        res.send("Unexpected length")
        return
    }
    fs.readFile(`./res_dict/${wordLength}.txt`, "utf8", (err, data) => {
        if (err) throw err
        const dictArr = data.split("\n")
        const dictLength = dictArr.length
        const randomWord = dictArr[getRandomInt(dictLength)]
        res.send(randomWord)
    })
})

app.get("/word_existence", (req, res) => {
    const word = req.query["word"]
    if (!word) return
    const wordLength = word && word.length.toString()
    if (["4","5","6","7"].indexOf(wordLength) === -1) {
        res.send("Unexpected length")
        return
    }
    fs.readFile(`./res_dict/${wordLength}.txt`, "utf8", (err, data) => {
        if (err) throw err
        if (data.indexOf(word) > -1) {
            res.send(true)
        } else {
            res.send(false)
        }
    })
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// app.get('/dict_to_words', (req, res) => {
//     fs.readFile('russian.txt', 'utf8', function(err, data) {
//         if (err) throw err;
//         let words = {};
//         const wordsArr = data.split("\n");
//         wordsArr.forEach(word => {
//             if (word.indexOf("-") > -1) {
//                 return;
//             }
//             const wordLength = word.length;
//             if (words[wordLength]) {
//                 words[wordLength].push(word);
//             } else {
//                 words[wordLength] = [word];
//             }
//         });
//         Object.keys(words).forEach(dictName => {
//             const dict = words[dictName].join("\n");
//             fs.writeFile(`./res_dict/${dictName -1}.txt`,dict, (err) => {
//                 if (err) throw err;
//                 console.log(`${dictName}.txt saved`);
//             })
//         })
//     });
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})