/*
Ejercicio 7

Hacer un programa con las tabla(s) de multiplicar
1.- Para el Numero Introducido ( Ventana Promt)
2.- PLUS: Para todas las tablas de Multiplicar del 1 hasta el Numero Introducido

*/

'use strict'
var n1 = parseInt(prompt("Ingrese un numero:")) 

document.write("*Ejercicio 7<br/>")
document.write("La tabla de multiplicacion de "+ n1 +" es:<br/>")

var multi
var i=1
for (i; i<=10;i++){
    multi=n1*i
    document.write(n1+"*"+i+"= " +multi+"<br/>")
}
