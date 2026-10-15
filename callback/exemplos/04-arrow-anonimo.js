function executar(acao){
    acao()
}

executar(function() {
    console.log("funcionou com função anonima")
})

executar(() =>{
    console.log("funcionou com arrow function")
})
//nos dois casos a função so executa pois executar() chama acao()
