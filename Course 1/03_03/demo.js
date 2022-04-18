// Write to a file

var fs = require('fs')

var data = {
    name: 'Leo'
}

fs.writeFile('data.json', JSON.stringify(data), (err) => {
    console.log('write finished', err)
})