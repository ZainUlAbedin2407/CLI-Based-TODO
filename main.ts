import inquirer from "inquirer"

let todos : string[] = [];

async function createTodo(todos:string[]){
    let ans = await inquirer.prompt({
        type:"list",
        message:"Select an Operation",
        name:"todo",
        choices:["Add","Update","View","Delete"]
    })
     console.log(ans);
}
