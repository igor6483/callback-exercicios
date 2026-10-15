function mostrarPasso(numero) {
    console.log("Passo:", numero);
}

// A função repetir sabe quantas vezes deve chamar o callback.
function repetir(quantidade, callback) {
    // O laço começa em 1 e vai até a quantidade desejada.
    for (let i = 1; i <= quantidade; i++) {
        callback(i);
    }
}

repetir(3, mostrarPasso);

