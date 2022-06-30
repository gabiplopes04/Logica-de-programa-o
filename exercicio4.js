let numero  = prompt ("Valor par ou ímpar")

// numero % 2 = 0 É Par (==0)
// numero % 2 > 0 É impar (> 0)

// let resultado = numero % 2

if ((numero % 2) == 0) {
    alert (`o nu´mero ${numero} é par`)
}else {
    alert (`o número ${numero} é impar`)
}

/*
if ((numero % 2) ==0)
     alert (o n´´´´umero $ {numero} é par)
     {else{
        alert (`o numero $ {numero} é impar`)
     }
     */

     //                                condição
     alert (`o numero ${numero} é ${ ((numero % 2 ) == 0) ? 'par' : 'impar'  }`)