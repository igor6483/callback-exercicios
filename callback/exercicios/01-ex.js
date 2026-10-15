function saudacoes (){
    console.log("saudações")
}

//o nome da função n precisa ser callback!
function executar(funcaoRecebida){
    funcaoRecebida()
}

executar(saudacoes)