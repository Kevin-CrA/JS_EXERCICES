/*
Ejercicio 8

Programar una Calculadora:
-Que pida dos numeros por pantalla
-Si se captura un numero mal ( algo no numerico ), que lo vuelva a pedir
- el resultado de Sumar, Restar, multiplicar y dividir esas dos cifras
- se debe mostrar en el cuerpo de la pagina , en una alerta y en la consola

*/

'use strict'


var n1 = parseInt(prompt("Ingresar primer numero: "));
var n2 = parseInt(prompt("Ingresar segundo numero: "));
while (isNaN(n1)){
    nu1 = parseInt(prompt("Caracter no numerico, reingrese primer numero:"));
}
while (isNaN(n2)){
    n2 = parseInt(prompt("Caracter no numerico, reingrese segundo numero:"));
}
document.write("*Ejercicio 8<br/>")

var suma = n1+n2;
var resta = n1-n2; 
var mult = n1*n2;
var div = n1/n2;

alert("Suma: "+n1+"+"+n2+" = "+suma+"\n" + "Resta: "+n1+"-"+n2+" = "+resta  +
     "\n" +"Multiplicacion: "+n1+"*"+n2+" = "+mult+"\n"  +"Division: "+n1+"/"+n2+" = "+div)

console.log("Suma: "+n1+"+"+n2+" = "+suma)
console.log("Resta: "+n1+"-"+n2+" = "+resta)
console.log("Multiplicacion: "+n1+"*"+n2+" = "+mult)
console.log("Division: "+n1+"/"+n2+" = "+div)

document.write("Suma: "+n1+"+"+n2+" = "+suma+"<br/>")
document.write("Resta: "+n1+"-"+n2+" = "+resta+"<br/>")
document.write("Multiplicacion: "+n1+"*"+n2+" = "+mult+"<br/>")
document.write("Division: "+n1+"/"+n2+" = "+div)



