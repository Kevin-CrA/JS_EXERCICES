/*
Ejercicio 4

- Mostrar todos los numeros IMPARES Que esten entre dos numeros introducidos por el usuario
*/

'use strict'
var n1 = parseInt(prompt("Ingrese el numero menor:")) 
var n2 = parseInt(prompt("Ingrese el numero mayor:")) 

var i=n1
document.write("*Ejercicio 4<br/>")
document.write("Los impares entre "+n1+" y "+n2+" son:<br/>")
for (i; i<=n2;i++){
    if(i%2 !=0){
    document.write(i+"<br/>")
}
}