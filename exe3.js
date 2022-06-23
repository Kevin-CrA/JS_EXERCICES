/*
Ejercicio 3

- Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

'use strict'

var n1 = parseInt(prompt("Ingrese el numero menor:")) 
var n2 = parseInt(prompt("Ingrese el numero mayor:")) 
document.write("*Ejercicio 3<br/>")

var i=n1
document.write("Los numeros entre "+n1+" y "+n2+" son:<br/>")
for (i; i<=n2;i++){
    document.write(i+"<br/>")
}
