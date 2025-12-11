//ejemplos de modulos fs

const fs = require('fs');

try {
const data = fs.readFileSync('./canciones.txt', 'utf8'); //readFileSync es sincrono sirve para leer archivos de texto
console.log('Contenido del archivo:', data);

} catch (error) {
console.error('Error al leer el archivo:', error);
    

}