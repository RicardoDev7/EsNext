const heroes = ['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Aquaman'];
const heroesCopy =  heroes;

//! Ordenar un arreglo y sus copias
//heroes.sort();

//! Si queremos evitar que el arreglo original se modifique, podemos usar el método toSorted()
let sortedHeroes = heroes.toSorted();

//! Revertir un arreglo y sus copias
let reversedHeroes = sortedHeroes.toReversed();

console.table(heroes);
console.table(heroesCopy);
//Arreglo ordenado
console.table(sortedHeroes);
//Arreglo invertido
console.table(reversedHeroes);

//! Splice
let splicedHeroes = heroes.toSpliced(0, 1, 'Green Lantern');
//Elimina a Batman y agrega a Green Lantern al inicio del arreglo
console.table(splicedHeroes);
console.table(heroes);

let splicedHeroes2 = heroes.toSpliced(0, 2, 'Cyborg');
//Elimina a Batman y Superman y agrega a Cyborg al inicio del arreglo
console.table(splicedHeroes2);
console.table(heroes);