const valorAdcional = (objImovel) => {

    let resposta = ''

   

    if ((objImovel.metros <= 20000)) {
        resposta = "ISENTO DE DESCONTO"
    } else if ((objImovel.metros > 20000) && (objImovel.metros <= 100000)) {
        resposta = "DESCONTO ADICIONAL DE :"(objImovel.metros * 0.05)

    } else if ((objImovel.metros >= 100000) && (objImovel.metros <= 500000)) {
        resposta = "DESCONTO ADICIONAL DE :" (objImovel.metros * 0.10)

    } else if ((objImovel.metros >= 500000) && (objImovel.metros <= 1000000)) {
        resposta = "DESCONTO ADICIONAL DE :" (objImovel.metros * 0.15)

    } else if ((objImovel.metros > 1000000)) {
        resposta = "DESCONTO ADICIONAL DE :" (objImovel.metros * 0.20)

    }

   
    return resposta

}

export { valorAdcional }