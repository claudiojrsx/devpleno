// callback hell
const fs = require('fs');

/* Esse algoritmo que faz a cópia dos arquivos index.js
fs.readFile('index.js', (err, data) => {
    fs.writeFile('index-copy.js', data, (err) => {
        console.log('Arquivo copiado')
    })
})
*/

// promises + async/await
const readFile = path => new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

const writeFile = (path, data) => new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
        if (err) {
            reject(err)
        } else {
            resolve()
        }
    })
})

module.exports = {
    readFile, writeFile
}
