const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question('Ingresar una cadena: ', (cadena) => {
  const mayusculas = cadena.toUpperCase();
  console.log(mayusculas);
  rl.close();
});