// posición de disparo = firePosition --> Ponemos la bala en la posición 1.
// Esto quiere decir que si al disparar la posición es 1, adiós.
let firePosition = 1;

// spinChamber = girar la recámara.Aquí tendrán que salir números aleatorios del 1 al 6.
// Recuerda que si sale el 1 será donde está la bala.
const spinChamber = () => { // function spinChamber() {}
    let chamberPosition = Math.floor((Math.random() * 6) + 1);
    return chamberPosition; // chamberPosition = La posición de la bala.
};


const fireGun = (bulletPosition) => { // function fireGun(bulletPosition)
    if (bulletPosition === firePosition) {
        return ("You're dead!");
    }
    else return ("Keep playing!");
};


console.log(fireGun("Ainhoa")); //No entiendo por qué se imprime así
