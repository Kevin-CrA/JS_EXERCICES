/*
Ejercicio 2

- Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
- hasta introducir un numero negativo y ahi mostrar el resultado
*/

'use strict'
var num=0
var total=0 
var sum=0

document.write("*Ejercicio 2<br/>")

while(num>=0){
    num=parseInt(prompt("Ingrese un numero"));
    total++;
    sum+=num;
}
document.write("La suma total es: "+sum+"<br/>")

var media= (sum/total)
document.write("La media es: "+media)
