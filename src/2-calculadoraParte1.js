function sumar(num1, num2){
    return num1 + num2
} 

const restar = (num1, num2) =>{
    return num1 - num2
}

module.exports ={
    sumar, 
    restar
}

//module.exports.sumar = sumar sirve para exportar una sola función
//module.exports.restar = restar sirve para exportar una sola función
//module.exports = {sumar, restar} sirve para exportar varias funciones a la vez