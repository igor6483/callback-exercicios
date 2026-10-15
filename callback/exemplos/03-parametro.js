function mostrarDobro(valor){
    console.log(valor *2)
}


function processar(valor,acao){
    acao(valor)
}

processar(5,mostrarDobro)