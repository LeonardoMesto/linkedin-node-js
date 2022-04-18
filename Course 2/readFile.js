const fs = require("fs")

// const text = fs.readFileSync("./assets/Readme.md", "UTF-8")

// console.log(text);

fs.readFile("./assets/alex.jpg", "UTF-8", (err, text) => {
    if (err) {
        console.log(`An error has occured: ${err.message}`);
        process.exit()
    }
    console.log("File contents read");
    console.log(text);
})