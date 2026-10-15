function ligar(){
    console.log("maquina ligada")
}

function desligar(){
    console.log("Maquina desligada")
}

function maquina(acao){
    acao()
}

maquina(ligar)
maquina(desligar)
