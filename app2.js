function contarCaracteres(cadena) {
    return cadena.length;
  }
  
 
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Ingrese una cadena: ', (cadena) => {
    const longitud = contarCaracteres(cadena);
    console.log(`La cadena "${cadena}" tiene ${longitud} caracteres.`);
    readline.close();
  });