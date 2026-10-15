function mostrarBoasVindas(){
    console.log("Boas vindas")
}

function mostrarDespedida(){
    console.log("Adeus")
}

function executar(acao){
    acao()
}

executar(mostrarBoasVindas)
executar(mostrarDespedida)