function dizerOla (){
    console.log("Ola, turma!")
}

//o nome da função n precisa ser callback!
function executar(funcaoRecebida){
    funcaoRecebida()
}

executar(dizerOla)