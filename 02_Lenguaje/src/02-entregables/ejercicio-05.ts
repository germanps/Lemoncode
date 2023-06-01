console.log("************** DELIVERABLE 05 *********************");
/*El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un **contador de monedas** que automáticamente se irá incrementando conforme vayamos jugando.
Cuando se llame al **método play** el número de monedas se debe incrementar de forma automática y debe generar **tres booleanos aleatorios** que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean `true`, y por tanto deberá mostrarse por consola el mensaje:
"Congratulations!!!. You won <número de monedas> coins!!";*/

class SlotMachine {
    money: number
    constructor () {
        this.money = 0;
    }
    play () {
        this.money += 1;
        let randomFlag: boolean;
        //como no se pide mostrar los boleanos he creado un bucle for que se repite 3 veces o se rompa si da de resultado un false y ya no sigue tirando. Si se pidiera mostrar los 3 resultados los guardaría en 3 variables y luego comprobaría que no hubiera ningún false.
        for( let i = 0; i < 3; i++) {
            randomFlag= Math.random() < 0.5;
            if (randomFlag === false) break;
        }
        if ( randomFlag ) {
            console.log ( `Congratulations!!!. You won ${this.money} coins!!`)
            this.money = 0;
        } else console.log ("Good luck next time!!");
    }
}

const machine1 =  new SlotMachine();
machine1.play ();
machine1.play ();
machine1.play ();
machine1.play ();
machine1.play ();
machine1.play ();
machine1.play ();
machine1.play ();
machine1.play ();
machine1.play ();
machine1.play ();
machine1.play ();

