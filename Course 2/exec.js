const cp = require("child_process")

// cp.exec("start http://www.linkedin.com/learning")

cp.exec("node readStream", (err, data, stderr) => {
    if (err) {
        // throw err
        console.log(stderr);
    }
    console.log(data);
})
