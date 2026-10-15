function verificarTeperatura(temperatura) {
    if(temperatura >= 30){
        console.log("esta muito quente")
    }else {
        console.log("temperatura agradavel")
    }
}

function analisar(valor,callback) {
    callback(valor)
}

analisar(35, verificarTeperatura)
analisar(22, verificarTeperatura)