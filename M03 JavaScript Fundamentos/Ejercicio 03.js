/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if (x == y) 
      return true;
   else (x == y) 
      return false;
   // para tener en cuenta: ( ctrl + k + c) comando para comentario
   // (ctrl + k + u) deshace lo que agregamos como comentario aqui en el VSC.
}

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   if (str1.length === str2.length) 
      return true;
   else (str1.length === str2.length)
      return false;
}

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if (num < 90)
      return true;
   else (num < 90)
      return false
}

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if (num > 50)
      return true;
   else (num > 50)
      return false;
}

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 2 === 0)
      return true;
   else 
      return false;
}
// debo tener en cuenta la lógica que pide cada línea de código 
//(usar los operadores de comparación para el caso de estricta igualdad (===))
// se dice que un numero es par cuando el número que se divida x 2, da como resto (%) 0
function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 3 === 1)
      return true;
   else
      return false;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
