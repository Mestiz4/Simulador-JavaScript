//variables

let nombreUsuario
let contrasena
let numeroPulpas
let precioPulpas

nombreUsuario= prompt ("Ingrese nombre de usuario")
contrasena= prompt ("Ingrese contraseña")

//funcion con condicional

function Formulario(){

if (nombreUsuario !="" && contrasena !="" && nombreUsuario !="null") {
    alert("Bienvenido, "+nombreUsuario+"a Majana!")
    numeroPulpas= parseInt(prompt("Ingrese el número de pulpas que desea comprar"))

alert(nombreUsuario+"El costo total de sus pulpas congeladas es de"+"$"+ precioTotal())

alert("Gracias por su compra")
}

else{
    alert("No debe haber campos vacíos")
}


}

//función invocada
Formulario();

function precioTotal(){
let suma=0
for (let i=1; i<=numeroPulpas; i++)
{
    precioPulpas=parseFloat(prompt("Ingrese el precio individual de cada pulpa"))
    suma = suma + precioPulpas
}
return suma
}

