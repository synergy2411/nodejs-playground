// EXTERNAL MODULES

// const colors = require("colors")
// const yargs = require("yargs");

// console.log("Arguments : ", yargs.argv);

// console.log("Hello World".green);
// console.log("Hello World".red);
// console.log("Hello World".inverse);
// console.log("Hello World".rainbow);


// NATIVE MODULES
// const path = require("path");

// let url = "http://www.example.com/public/index.html";

// console.log("File name : ", path.basename(url));

// console.log("Extension : ", path.extname(url));

// console.log("Static Directory : ", path.dirname(url));


// const os = require("os");

// console.log("Total Memory : ", os.totalmem())
// console.log("Free Memory : ", os.freemem())
// console.log("Architecture : ", os.arch());
// console.log("Processors : ", os.cpus().length);


// const fs = require("fs");

// Synchronous Mode
// const content = fs.readFileSync("./src/test.txt")

// console.log(content.toString());

// fs.writeFileSync("./src/test.txt", "The new content written by Node")

// Asynchronous Mode
// fs.readFile("./src/test.txt", (error, data) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log(data.toString())
// })

// const strMethod = () => "Changes made by Async Mode";

// fs.writeFile("./src/test.txt", strMethod(), (error) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log("SUCCESS");
// })




// FILE MODULE - COMMONJS Module Pattern

// DEFAULT IMPORT
// const fortune = require("./utils/fortune");
// console.log("Lucky Number today : ", fortune());

// NAMED IMPORT
const { getLuckyNumber } = require("./utils/fortune")
console.log("Lucky Number today : ", getLuckyNumber());