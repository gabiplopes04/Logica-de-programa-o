let operacao = prompt("Digite uma operação , 1-soma, 2 subtração, 3-multiplicação 4-divisão")

// operação está 1,2,3 e 4
// == igual
// && E 
//

// > maior
// < menor
// > maior e igual
// <= menor e igual

// (operacao >=1) && (operacao <=4)

let soma  =(v1,v2) => v1 + v2

if ((operacao >= 1) && (operacao <= 4)) {
    let numl1 = Number(prompt("Digite o primeiro valor da operaçaõ"))
    let num2 = Number(prompt("Digite o segundo valor da operação"))
    if (operacao == 1) {
        alert(`o valor é: ${num1 + num2} `)
    } else {
        // operação subtração 
        if (operacao == 2) {
            alert(`o valor é: ${num1 - num2} `)
        } else {
            // operação multiplicação
            if (operacao == 3) {
                alert(`o valor é: ${num1 * num2} `)
            } else {
                // operação divisão
                if (operacao == 4) {
                    alert(`o valor é: ${num1 / num2} `)
                }
            }

        }
    }
     
    switch (operacao) {
        case `1` :
        alert (`o total é: ${num1 + num2}`)
        break;
        case `2`:
            alert (`o total é: ${num1 - num2} `)
            break;
            case `3`:
                alert (`o total é: ${num1 * num2  }`)
                break;
                case `4`
                alert (`o total é: ${num1 / num2}`)
                break;
                default:
                    alert (`digite o valor entre 1 e 4!`)
                    break;
    }


} else {
    alert(`digite um valor entre 1 e 4 !`)
}

