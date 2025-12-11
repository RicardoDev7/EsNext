const state = [
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

const index = 1;
const newName = 'Green Lantern';

/**
 *Metodo antiguo para actualizar un elemento en un array
 */
const newState = state.map((x, i) => {
    if(i == index){
        x.name = newName;
    }
    return {...x};
})

console.table(newState);

/**
 * Array With -> Metodo moderno para actualizar un elemento en un array
 */

const newStateWith = state.with(index, {
    id: 100,
    name: newName
});

console.table(newStateWith);

/**
 * at: Metodo moderno para acceder a un elemento en un array
 */

const firstElement = state.at(0);
const lastElement = state.at(-1);

console.log({firstElement, lastElement});