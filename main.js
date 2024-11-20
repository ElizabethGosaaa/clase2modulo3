// VAR, LET, CONST
//js debil tipado

// let me deja reasignar el valor
let nombre = "andrea"
nombre = "andrea gomez"

// const se va a ocupar cuando el valor de
// la variable no cambie en el tiempo de ejecución del programa

const fecha = "25/07/99"

console.log(nombre)

//const 5 = 6 //no se pueden crear variables que inicien con números, a menos que tenga una letra u otro signo antes ni con &
const $4 = 7

const $$ = "😂"


// del porque no debemos usar var, porque podemos
// cometer el error de redeclarar una variable scope
// var direccion = "El pueblito"
// var direccion = "Pedro Escobedo"

//console.log(direccion)

const frutas = "uva,melon,fresa"

console.log(typeof fecha)
console.log(typeof nombre)

// temporal, Intl, Dayjs librerías de js +++ React +++ plugin del clima conectandonos a apis

const diaHoy = new Date()
console.log(typeof diaHoy)

const edad = 25
console.log(typeof edad)

//operadores matematicos

const suma = 4 + 4
console.log(suma)

const resta = 4 - 4
console.log(resta)

const multiplica = 4 * 4
console.log(multiplica)

//residuo de una división, total 0 porque no queda ningún residuo
const porcentaje = 4 % 4
console.log(porcentaje)

let alumnos = 25
console.log(alumnos, "antes")
alumnos = alumnos + 1
console.log(alumnos, "despues")

//esta es otra forma de ponerlo, usar el operador ++ dos veces incremnta, -- resta
let ropas = 5
console.log(ropas, "original")
ropas ++
console.log(ropas, "mas")
ropas --
console.log(ropas, "menos")

// OPERADORES DE COMPARACION
// igualdad

console.log("------Op igualdad------")
// dos == igualdad débil => error
console.log(1 == "1", "débil")
// igualdad estricta ***PARA TODO OCUPEMOS EL TRIPLE IGUAL PARA EVITARNOS ERRORES***
console.log(1 === "1", "estricta")

// desigualdad débil !=
// desigualdad fuerte !== ***este es mejor, compara valor y tipo de dato, es  más confiable
console.log("perro" !== "gato")

const userName = ""
// el valor de userName es diferente a espacio vacio?
console.log(userName !== "")

// >  >  >=  <=  mayor que y menor que 
console.log(4 > 6, ">")

// esta linea esta comparando si 4 es menor que 6
console.log(4 < 6, "<")

// esta linea esta comparando si 4 es menor o igual a 4
console.log(4 <= 4, "<")

// esta linea esta comparando si 4 es mayor o igual a 4
console.log(4 >= 4, ">")

