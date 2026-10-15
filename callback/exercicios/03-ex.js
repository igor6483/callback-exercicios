function somar(a,b){
    return (a + b)
}

function multiplicar(a,b){
    return (a*b)
}

function calcular(a, b, operacao){
   console.log(operacao(a,b))
}


calcular(5,3,multiplicar)
calcular(5,3,somar)