/**
 * Crear un vector aleatorio de  10000 numeros y ordenarlos
 * de menor a mayor
 */

 let vectorOrdenamiento = []

 const llenarArreglo = (tamanoArreglo, tamanoOriginal) => {
     if (tamanoArreglo == 0) {
         return vectorOrdenamiento
     }
     vectorOrdenamiento.push(parseInt(Math.random() * (tamanoOriginal*10)));
     return llenarArreglo(tamanoArreglo - 1, tamanoOriginal)
 }
 
 const mostrarArregloConsola = () => {
     vectorOrdenamiento.forEach(function (elemento, indice, array) {
         console.log("El valor del vector en la posicion: ", indice, " es: ", elemento)
     })
 }
 
 const ordenarMenorMayor = () => {
     for (let k = 0; k < vectorOrdenamiento.length; k++) {
         for (let f = 0; f < vectorOrdenamiento.length; f++) {  
             if (vectorOrdenamiento[f]< vectorOrdenamiento[f+1]) {
                 aux=vectorOrdenamiento[f];
                 vectorOrdenamiento[f]=vectorOrdenamiento[f+1];
                 vectorOrdenamiento[f+1]=aux;
             }
         }   
     }
 }
 
 console.log("Escriba el tamaño del arreglo: ");
 var stdin = process.openStdin();
 
 stdin.on("data", function (capturaNumero) {
     var numero = capturaNumero;
     numero = parseInt(numero, 10);
     console.time("TIEMPO")
     llenarArreglo(numero,numero);
     mostrarArregloConsola();
     console.log("----------------");
     ordenarMenorMayor()
     console.timeEnd("TIEMPO")
     mostrarArregloConsola();
     process.exit(0);
 });