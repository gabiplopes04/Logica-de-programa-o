let numero = prompt ("Valor positivo ou negativo")

// numero > 0 
if (numero >=0 ) {
    alert (`o numero ${numero} é positivo `)
}else {
    alert (`o numero ${numero} é negativo `)
}

/*
if ((numero % 2) ==0 ) {
    alert (`o numero ${numero} é par`)
}else {
    alert(`o numero ${numero} é impar `)
}
*/

//
alert (`o numero ${numero} é ${((numero % 2) ==0 )? 'par' : 'impar'}  `)