console.log("************** DELIVERABLE 01 *********************");
//------------------------HEAD------------------------
console.log("HEAD");
/*Implementa una función `head` (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.*/

//DESTRUCTURING
const head = ([...array]) => {
    const[ first ] = array;
    return first;
} 
const array: any = ["Greetings!!", 1, 2, 3, 1500]
console.log(`El array: `, array);
console.log(`Primer elemento del array con destructuring: ${head( array)}`);
console.log(`El array original no se ha modificado:`, array);
//REST
const headRest = ([first]) => first;
console.log((`Primer elemento del array con rest: ${headRest(array)}`));
console.log(`El array original no se ha modificado:`, array);

//-------------------------TAIL------------------------
console.log("TAIL");
/*Implementa una función `tail` (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator*/

const tail = ([, ...array]) => array; 
console.log(`El array sin su primer elemento: ${tail(array)}`);
console.log(`El array original no se ha modificado:`, array);

//-------------------------INIT------------------------
console.log("INIT");
/*Implementa una función `init` (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.*/

const init = ([...array]) => array.slice(0, -1);
console.log (`El array sin su último elemento: ${init(array)}`);
console.log(`El array original no se ha modificado:`, array);

//-------------------------LAST------------------------
console.log("LAST")
/*Implementa una función `last` (inmutable), tal que, dado un array como entrada devuelva el último elemento.*/

const last = ([...array]) => array.pop(); 
console.log (`El último elemento del array: ${last(array)}`);
console.log(`El array original no se ha modificado:`, array);