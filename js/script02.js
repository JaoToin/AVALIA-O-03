const valorAdcional = (objAdicional) => {

    let resposta = ''


    if (( objAdicional.valores <= 20000)) {
       resposta =  "ISENTO DE DESCONTO"
    } else if ((objAdicional.valores > 20000) && (objAdicional.valores <= 100000)) {
        resposta = "DESCONTO ADICIONAL DE :" + ((objAdicional.valores) * 0.05)

    } else if ((objAdicional.valores >= 100000) && (objAdicional.valores<= 500000)) {
         resposta = "DESCONTO ADICIONAL DE :" + ((objAdicional.valores) * 0.10)

    } else if ((objAdicional.valores >= 500000) && (objAdicional.valores <= 1000000)) {
        resposta = "DESCONTO ADICIONAL DE :" + ((objAdicional.valores) * 0.15)

    } else if ((objAdicional.valores > 1000000)) {
       resposta = "DESCONTO ADICIONAL DE : R$ " + (objAdicional.valores * (0.20)) + ",00"

    }

   
    return resposta

}

export { valorAdcional }