function repetirAcao(vezes){
    console.log("execução numero:", vezes)
}

function repitir (quantidade,callback){
    for (let i = 1;i<quantidade;i++){
        callback(i)
    }
}

repitir(4,repetirAcao)