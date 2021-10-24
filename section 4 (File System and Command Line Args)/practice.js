// vid 2

// const fs = require('fs');

// challenge 1

// fs.writeFileSync('notes.txt', 'Hi it is Ahmed');

// fs.appendFileSync(
//   'notes.txt',
//   `I'm 25 and I'm not the first person in the world. :)`
// );

/////////////////////////////
//vid 3

// Challenge 2

// => in notes.js file

// function getNotes() {
//   return '...notes';
// }

// module.exports = getNotes;

// => in app.js file

// const getNotes = require('./notes/');

// const notes = getNotes();

// console.log(notes);

/////////////////////////////
// vid 4

// const validator = require('validator');

// console.log(validator.isEmail('o@gmail.com'));

/////////////////////////////
// vid 5

// challenge 3

// const chalk = require('chalk');
// console.log(chalk.green('Success!'));
////
// console.log(chalk.red.bold.inverse('Error!'));

/////////////////////////////
/////////////////////////////
// Section 4
//vid 3

// challenge 4
// const yargs = require('yargs');

// yargs
//   .command({
//     command: 'list',
//     direction: 'list items',
//     handler: function () {
//       console.log('list some items');
//     },
//   })
//   .command({
//     command: 'read',
//     direction: 'read items',
//     handler: () => {
//       console.log('read some items');
//     },
//   }).argv;

/////////////////////////////

// challenge 5

// const fs = require('fs');

// const data = JSON.parse(fs.readFileSync('./1-json.json').toString());
// console.log(data);

// const newData = {
//   name: 'Ahmed',
//   planet: data.planet,
//   age: 25,
// };
// const newDataJSON = JSON.stringify(newData);
// fs.writeFileSync('./1-json.json', newDataJSON);

// this what appears in the json file
// {"name":"Ahmed","planet":"Earth","age":25}

/////////////////////////////

// Arrow Functions challenge

// const tasks = {
//   tasks: [
//     {
//       text: 'Grocery shopping',
//       completed: true,
//     },
//     {
//       text: 'Clean yard',
//       completed: false,
//     },
//     {
//       text: 'Film course',
//       completed: false,
//     },
//   ],
//   getTasksToDo() {
//     return this.tasks.filter(task => task.completed === false);
//   },
// };

// console.log(tasks.getTasksToDo());
