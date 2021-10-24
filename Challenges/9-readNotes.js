// app.js
const yargs = require('yargs');
const { readNote } = require('./notes');
yargs.command({
  command: 'read',
  describe: 'read notes',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler() {
    readNote(argv.title);
  },
}).argv;

// notes.js
const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse('Note not found!'));
  }
};

module.exports = { readNote };
