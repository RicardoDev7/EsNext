/**
 * Los objetos en JavaScript se asignan por referencia,
 * por lo que al copiar un array de objetos, se copia la referencia
 * y no una copia independiente de los objetos.
 */

const superHeroes = [
    {
    id: 1,
    name: 'Batman'
}, 
{
    id: 2,
    name: 'Superman'
}, 
{
    id: 3,
    name: 'Flash'
},
{
    id: 4,
    name: 'Aquaman'
}
];

const superHeroesCopy = [ ...superHeroes ];
/**
 * Se usa el map para crear un nuevo array de objetos independientes
 * usando el spread operator para copiar cada objeto.
 * !No se recomienda usarlo porque es menos eficiente cuando el objeto tiene 
 * !objetos anidados.
 * 
 */
const superHeroesCopy1 = [ ...superHeroes.map(x => ({...x})) ];

superHeroesCopy[0].name = 'Wonder Woman';

console.table( superHeroes );
console.table( superHeroesCopy );
console.table( superHeroesCopy1 );

//!Structured Clone
const superHeroesCopy2 = structuredClone( superHeroes );
superHeroesCopy2[0].name = 'Green Lantern';
console.table( superHeroesCopy2 );