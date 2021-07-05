const readline = require('readline-sync');
const userName = readline.question('Hello, may I have your name? ');

function nextTask() {
  const tasks = ['Walk', 'View Inventory'];
  let task = readline.keyInSelect(
    tasks,
    `What would you like to do next ${userName}?`
  );
  if (tasks[task] === 'Walk') {
    walking();
  } else if (tasks[task] === 'View Inventory') {
    printInventory();
  }
}

function walking() {
  let encounter = Math.floor(Math.random() * 4) + 1;
  if (encounter === 2) {
    console.log('Oh no you were attacked');
    attacked();
  } else {
    console.log('You began walking with no issues');
    nextTask();
  }
}



nextTask();
