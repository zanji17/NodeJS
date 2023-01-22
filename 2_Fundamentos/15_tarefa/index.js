import chalk from "chalk"
import inquirer from 'inquirer'

inquirer.prompt([{
        name: 'nome',
        messege: 'Digite seu nome: ',
    },
    {
        name: 'idade',
        messege: 'Digite sua idade: ',
    }
]).then((answers) => {
    console.log(chalk.white.bgYellow(`Nome: ${answers.nome}`))
    console.log(chalk.white.bgYellow(`Idade: ${answers.idade} anos`))
}).catch(err => console.log(err))