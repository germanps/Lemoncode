console.log("************** DELIVERABLE 02 *********************");
/*Implementa una función `concat` (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.*/
const concat = (a:number[], b: number[]) => [...a, ...b]; 
console.log(concat([ 1, 2, 3 ] , [ 1, 2, 3]));

/*Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).*/
const concatMultiple = (...arrayMultiple: any[]): any[] => {
    let arrayConcated = [];
    for(let item of arrayMultiple){
        arrayConcated = [...arrayConcated, ...item]
    }
    return arrayConcated;
}; 
console.log(concatMultiple([ 1, false, 'House' ], [ 150, 0.25, 'index.html'], [ 'a', 'b', 'c'])); 