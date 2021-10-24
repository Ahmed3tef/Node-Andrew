const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return loadNotes();
};
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
};
const loadNotes = () => {
  try {
    const notesJSON = fs.readFileSync('./notes.json').toString();
    return JSON.parse(notesJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync('./notes.json', notesJSON);
};
const removeNote = function (title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
};

module.exports = { getNotes, addNote, removeNote };
