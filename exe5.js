/*
Ejercicio 5
- Un programa que muestre todos los numeros DIVISORES de un numero que proporcione el usuario
- Los divisores son los números que se consiguen al dividir a otro de manera exacta, es decir, el residuo de la division es CERO
*/

'use strict'
var n1 = parseInt(prompt("Ingrese un numero:")) 



document.write("*Ejercicio 5<br/>")
document.write(n1+" Tiene los divisores:<br/>")
var i=0
for (i; i<=n1;i++){
    if(n1%i ==0){
    document.write("> "+i+"<br/>")
}
}