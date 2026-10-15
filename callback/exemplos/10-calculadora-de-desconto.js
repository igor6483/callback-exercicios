function descontoDez(valor) {
    return valor * 0.90;
}

function descontoVinte(valor) {
    return valor * 0.80;
}

// Recebe o preço original e a função que aplicará o desconto.
function calcularPreco(preco, callback) {
    const resultado = callback(preco); // Guarda o valor retornado pelo callback.
    console.log("Preço final: R$", resultado.toFixed(2));
}

calcularPreco(100, descontoDez); 
calcularPreco(100, descontoVinte); 
