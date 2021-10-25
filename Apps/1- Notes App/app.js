const chalk = require('chalk');
const yargs = require('yargs');
const { addNote, removeNote, listNotes, readNote } = require('./notes');

yargs
  .command({
    command: 'add',
    describe: 'add items',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string',
      },
      body: {
        describe: 'Note body',
        demandOption: true,
        type: 'string',
      },
    },
    handler({ title, body }) {
      addNote(title, body);
    },
  })
  .command({
    command: 'remove',
    describe: 'remove items',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      removeNote(argv.title);
    },
  })
  .command({
    command: 'list',
    describe: 'list notes',
    handler() {
      listNotes();
    },
  })
  .command({
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

console.log(yargs.parse());
