const cp = require("child_process")

const questionApp = cp.spawn("node", ["questions2.js"])

questionApp.stdin.write("Alex \n")
questionApp.stdin.write("Tahoe \n")
questionApp.stdin.write("Change the world \n")

questionApp.stdout.on("data", data => {
    console.log(`From the question app: ${data}`)
})

questionApp.on("close", () => {
    console.log("Question App process exited");
})