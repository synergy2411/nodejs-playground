const yargs = require("yargs");
const { addNote } = require("./utils/notes");

yargs.command({
    command: "add",
    description: "to add new note",
    builder: {
        title: {
            type: "string",
            description: "title for new note",
            demandOption: true
        },
        body: {
            type: "string",
            description: "body to add new note",
            demandOption: true
        }
    },
    handler: (args) => {
        const { title, body } = args;
        addNote(title, body);
    }
})


yargs.command({
    command: "read",
    description: "to read a single note",
    builder: {
        title: {
            type: "string",
            demandOption: true,
            description: "title to read a note"
        }
    },
    handler: () => {
        console.log("READ Command works")
    }
})

yargs.parse();