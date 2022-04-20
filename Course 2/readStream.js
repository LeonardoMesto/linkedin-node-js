const fs = require ("fs")

const readStream = fs.createReadStream("./assets/Readme.md", "UTF-8")

let fileText = ""

console.log("Type something...");
readStream.on("data", data => {
    console.log(`I read ${data.length -2} characters of text`);
    fileText += data
})

readStream.once("data", data => {
    console.log(data);
})

readStream.on("end", () => {
    console.log("Finished reading file");
    console.log(`In total I read ${fileText.length -2} characters of text`);
})

// process.stdin.on("data", data => {
//     console.log(`I read ${data.length -2} characters of text`);
// })
