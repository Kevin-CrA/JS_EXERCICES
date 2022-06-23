/*
Ejercicio 1
- Programa que pida dos numeros y que nos diga cual es mayor , cual menor y si son iguales
- PLUS: Si los numeros no son numeros o son menores o iguales a cero, nos los vuelva a pedir
*/
'use strict'

var n1=parseInt(prompt("Enter first number: "));
var n2=parseInt(prompt("Enter second number: "));
document.write("*Ejercicio 1<br/>")

if (n1>n2){
    document.write(n1+" is more than "+n2)
}
else if (n1 < n2){
    document.write(n1+" is less than "+n2)
}
else if(n1 == n2){
    document.write(n1 +" and "+n2+ " are equals")
}
