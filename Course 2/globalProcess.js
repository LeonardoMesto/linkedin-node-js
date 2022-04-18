// console.log(process.pid);
// console.log(process.versions.node);

// node globalProcess.js Leonardo Myung
// console.log(process.argv);

// const [,,firstName, lastName] = process.argv;
// console.log(`Your name is ${firstName} ${lastName}`)

// -----
// node globalProcess --greeting "Hello" --user "Leo"
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag]
}

const greeting = grab("--greeting")
const user = grab("--user")

console.log(`${greeting} ${user}`);