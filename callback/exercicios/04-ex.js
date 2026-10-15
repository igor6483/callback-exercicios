function verificarNota(nota){
   if (nota>=6){
        console.log("Aprovado")
    } else {
        console.log("Reprovado")
    }
}


function callback(valor,callback){
  callback(valor)
}

callback(7,verificarNota)
callback(5,verificarNota)