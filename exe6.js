/*
Ejercicio 6

Hacer un programa que nos diga si es Par e Inpar
1.- Ventana Promt
2.- Si no es valido que nos pida de nuevo el Numero

*/

'use strict'

var n1 = parseInt(prompt("Ingrese un numero:")) 

document.write("*Ejercicio 6<br/>")

while (isNaN(n1)){
    n1=parseInt(prompt("El caracter introducido no es un numero"))
}
if (n1%2==0){
    document.write(n1+" es un numero Par")
}else{
    document.write(n1+" es un numero Impar")
}
