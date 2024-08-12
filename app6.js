const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresar una frase: ', (frase) => {
  const palabras = frase.split(' ');
  const numeroPalabras = palabras.length;
  console.log(`La frase contiene ${numeroPalabras} palabras.`);
  rl.close();
});