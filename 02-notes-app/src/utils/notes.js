const fs = require("fs");
require("colors");

const loadNotes = () => {
    try {
        const bufferNotes = fs.readFileSync("./src/my-notes.json")
        return JSON.parse(bufferNotes.toString())
    } catch (err) {
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync("./src/my-notes.json", JSON.stringify(notes));
    console.log("Notes Saved".green);
}

const addNote = (title, body) => {
    const allNotes = loadNotes();
    const foundNote = allNotes.find(note => note.title === title)
    if (!foundNote) {
        allNotes.push({ title, body });
        saveNotes(allNotes);
    } else {
        console.log("Duplicate title. Try Again!".red);
    }
}

const readNote = (title) => {

}

module.exports = {
    addNote,
    readNote
}