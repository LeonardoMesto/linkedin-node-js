const fs = require("fs")

console.log("Started reading files");
// const files = fs.readdirSync("./assets")

// console.log("Complete");
// console.log(files);


fs.readdir("./assets", (err, files) => {
    if (err) {
        throw err;
    }
    console.log("Complete");
    console.log(files);
})