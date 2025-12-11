const fs = require('fs');
const textNuevo = `\n #Nuevas canciones# \n 3-Skillet - Legendary \n 4-Linkin Park - One Step Closer \n`;

try {
    fs.appendFileSync('canciones.txt', textNuevo, 'utf-8');
console.info('El archivo fue actualizado correctamente');

}catch (error) {
   
    console.log('ocurrio un error al escribir el archivo: ', error);
}