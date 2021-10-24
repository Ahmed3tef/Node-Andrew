// in notes.js

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse('Your notes'));

  notes.forEach(note => {
    console.log(note.title);
  });
};

module.exports = { getNotes, addNote, removeNote, listNotes };

// in app.js

const yargs = require('yargs');
const { listNotes } = require('./notes');

yargs.command({
  command: 'list',
  describe: 'list items',
  handler() {
    listNotes();
  },
}).argv;
