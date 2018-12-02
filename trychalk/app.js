const chalk = require('chalk');

function helloBlue(str) {
  console.log(chalk.blue('Hello world'))
}
// helloBlue()

function helloRed(str) {
  console.log(chalk.red('Hello world'));
}
// helloRed()

function stringToColor(str, color) {
  console.log(chalk[color](str));
}
// stringToColor('this is a test', 'red')

function evensBlueOddsYellow(str) {
  let output = []
  let split = str.split(" ")
    for(let i = 0; i < split.length; i++) {
      if(i % 2 === 0) {
        output.push(chalk.blue(split[i]))
      }else {
        output.push(chalk.yellow(split[i]));
      }
  }
  return output.join(" ")
}

// console.log(evensBlueOddsYellow('this is a test'))

function angryText(str) {
  console.log(chalk.red.underline.bold(str.toUpperCase()));
}

// angryText('hello')

function backgroundCyan(str) {
  console.log(chalk.bgCyan(str));
}

// backgroundCyan('is it working')

function boldFirstUnderlineLast(str) {
  let output = []
  let newStr = str.split(" ")
  for(let i = 0; i < newStr.length; i++) {
    if(i === 0) {
      output.push(chalk.bold(newStr[i]))
    }else if(i === newStr.length - 1)
    output.push(chalk.underline(newStr[i]))
  }
  return output.join(" ")
}

// console.log(boldFirstUnderlineLast('lets see'))

function commandLineChalk()
