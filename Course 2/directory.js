const fs = require("fs")

if (fs.existsSync("storage-files")) {
    console.log("Directory already there");
} else {
    fs.mkdir("storage-files", err => {
        if (err) {
            throw err
        }
        console.log("Directory created");
    })
}