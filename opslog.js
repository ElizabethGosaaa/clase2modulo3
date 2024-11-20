// Va a comparar que dos condiciones sean verdaderas
// operador logico AND && // todas

const mayores = 3 >= 3 //verdadero
const menores = 2 <= 2 //verdadero

console.log(mayores, "mayores")
console.log(menores, "menores")
console.log(mayores && menores && 20 > 16)

// operador logico OR ||   evalua dos condiciones, si alguna es verdadera retorna true, va a tomar el valor verdadero
// si alguna condición es true => retorna un true

//la condición 1 dice que el cuatro es igual a 4
const cond1 = 4 === 4
console.log(cond1, "cond1")
// la condicion 2 dice que 8 es menor que 16
const cond2 = 8 < 16
console.log(cond2, "cond2")

console.log(cond1 || cond2)

// el valor que se asignará a la variable, es la condición verdadera
const saldo = 0 || "No tienes suficiente saldo"
console.log(Boolean(0), "Es cero")
console.log(saldo)

const calificacion = 8 || "Reprobado"
console.log(calificacion)

// ! Operador logico NOT
// contradiccio 
// Devuelve el valor opuesto , funciona con booleanos

const isRainning = false
console.log(!isRainning, "isRainning")
/// caso de uso completamente con if




