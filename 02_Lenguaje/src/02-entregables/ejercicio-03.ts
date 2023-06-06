console.log("************** DELIVERABLE 03 *********************");
//-------------------------CLONE------------------------
/*Implementa una función `clone` que, a partir de un objeto de entrada `source` devuelva un nuevo objeto con las propiedades de `source`:*/
function clone(source: Object) {
    return { ...source };
};
//-------------------------MERGE------------------------
/*Implementa una función `merge` que, dados dos objetos de entrada `source` y `target`, devuelva un nuevo objeto con todas las propiedades de `target` y de `source`, y en caso de propiedades con el mismo nombre, `source` sobreescribe a `target`.*/
interface Person {
    name: string;
    surname?: string;
    country?: string;
    age?: number;
    married?: boolean;
}
//Usando la función clone
function merge(source: Person, target: Person) {
    return Object.assign(clone(target), source); 
};
//Usando Spread Operator
const mergeSpread = (source: Person, target: Person): Person => ({ ...target, ...source});
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
console.log(a);
console.log(b);
console.log(`Usando la función clone: `, merge(a, b));
console.log(`Usando Spread Operator: `, mergeSpread(a, b)); 
/*Resultado esperado:
{name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}*/