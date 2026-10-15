
function processarNumero(numero){
  console.log (numero * 3) 

}

function executar(acao){
    acao();
}


executar(() =>{
   processarNumero(5)
})

