/*
  Dada una lista de strings, devuelve las palabras que aparecen más de una vez con su cantidad, ordenadas de mayor a menor frecuencia, ignorando mayúsculas.
*/

//LISTA PARA PRUEBA EJERCICIO
const listaStrings = [
    "JavaScript", 
    "git", 
    "javascript", 
    "code", 
    "frontend", 
    "CODE", 
    "GIT", 
    "backend", 
    "code", 
    "react"
];

//Convertimos todas la letras a minusculas con el metodo map()

const nuevaLista = listaStrings.map(text => text.toLocaleLowerCase());

console.log(nuevaLista)

const repe = [];

for (let i = 0; i < nuevaLista.length; i++) {
  repetidas(nuevaLista[i])
}

console.log(Object.values(repe))

function repetidas(text){
  let cont = 0
  for (let i = 0; i < nuevaLista.length; i++) {
    if (text === nuevaLista[i]) {
      cont += 1;
    }   
  }
  repe.push({palabra: text}, {cantidad: cont})
}