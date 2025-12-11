//ejemplos de modulos fs

const fs = require('fs');
const colors = require('colors')


try {
const data = fs.readFileSync('./canciones.txt', 'utf8'); //readFileSync es sincrono sirve para leer archivos de texto
console.log('Contenido del archivo:', data);

} catch (error) {
 console.error(`${'ocurrio un error al leer el archivo:'.bgRed.white} \n ${error}`)
    

}