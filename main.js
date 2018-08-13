/**
 * Copyright @ 2018 Teneocto Inc.
 * @description: Collect ranking words
 * @author: Brian Dhang
 * @candidate: ...
 * @dev Write all your magic here.
 * @dev Please try to have clear code, good performance.
 */

const fs = require('fs')
const fetch = require('node-fetch')
const queryString = require('query-string');

// Start
(async () => {
    const baseUrl = "http://www.wordcount.org/dbquery.php?method=SEARCH_BY_INDEX&toFind="
    const options = {
        method: 'GET'
    }
    const numWords = 86800
    const fileName = 'result.json'

    console.log('Loading...')
    const words = await getAllWords(baseUrl, options, numWords)
    console.log('Saving...')
    save(words, fileName)
    console.log('Finished.')
})();

// Get all words 
async function getAllWords(baseUrl, options, numWords) {
    let words = []
    while (words.length < numWords) {
        const segment = await getWords(baseUrl, options, words.length)
        if (segment.length === 0) {
            break
        }
        words = words.concat(segment)
        console.log(`Loaded ${words.length} words.`)
    }
    return words.slice(0, numWords)
}

// Get words
function getWords(baseUrl, options, fromRank) {
    const url = baseUrl + fromRank
    return fetch(url, options)
        .then(res => res.text())
        .then(res => {
            return queryString.parse(res)
        })
        .then((res) => {
            let i = 0
            let words = []
            while (res['word' + i]) {
                words.push({
                    'rank': fromRank + i + 1,
                    'word': res['word' + i],
                    'freq': res['freq' + i]
                })
                i++
            }
            return words
        })
}

// Save
function save(data, fileName) {
    return fs.writeFileSync(fileName, JSON.stringify(data))
}