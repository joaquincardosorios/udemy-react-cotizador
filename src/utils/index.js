const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
    })
    return formatter.format(valor)
}

const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    // Mientras mayor es la cantidad solicitada, menor es el interes
    if (cantidad < 1000000){
        total = cantidad * 1.5;
    } else if( cantidad >= 1000000 && cantidad <2000000) {
        total = cantidad * 1.4;
    } else if( cantidad >= 2000000 && cantidad <3000000) {
        total = cantidad * 1.3;
    } else {
        total = cantidad * 1.2;
    }

    // Plazo, + plazo > interes
    if (plazo===6){
        total *= 1.1;
    }else if (plazo === 12) {
        total *= 1.2;
    } else {
        total *= 1.3;
    }

    return total
}

export {
    formatearDinero,
    calcularTotalPagar
}