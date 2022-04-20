const fs = require("fs")

const writeStream = fs.createWriteStream("./assets/myFile.txt", "utf-8")
const readStream = fs.createReadStream("./assets/Readme.md", "utf-8")
// process.stdout.write("Hello")
// process.stdout.write(" World\n")

// writeStream.write("Hello")
// writeStream.write(" world\n")

// process.stdin.on("data", data => {
//     writeStream.write(data)
// })

// readStream.on("data", data => {
//     writeStream.write(data)
// })

// readStream.pipe(writeStream)

process.stdin.pipe(writeStream)
