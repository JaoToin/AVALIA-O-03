import { valorAdcional } from "./script02.js"



// 1.CRIAR UM ARRAY DE OBJETO veiculo 

const imoveis = []

// 2.PEGANDO ELEMENTOS DO DOM

const formImovel = document.querySelector('#imovel')
const divResult = document.querySelector('#div-result')




// 3.CAPTURANDO O EVENTO DO SUBMIT DO FORMULARIO

formImovel.addEventListener('submit', (evt)=>{


    


    //4.interrompendo o efeito padrão do formulario

    evt.preventDefault()

   

    //5.criando e preenchendo o objeto literal pessoa 

    const dadosForm = new FormData(formImovel)

    const imovel = {
        descricao: dadosForm.get('descricao'),
        comprimento: dadosForm.get('comprimento'),
        largura: dadosForm.get('largura'),
        valores: (dadosForm.get('largura') * dadosForm.get('comprimento') * (550))
       
       

    }

    
    //6.chamando a função e passando o objeto literl
    addImovel(imovel)

    //7.limpando o formulario
    formImovel.reset()

})

//8.FUNÇÕES PARA CRUD
//9.FUNÇÃO PARA ADICIONAR veiculo

const addImovel = (addImovel)=>{

    //10.adicionando o objeto no array veiculo, vindo do parâmetro da função
    imoveis.push(addImovel)

    listImovel()
}

//11. função listar veiculos
const listImovel = () => {

    //12.limpando a div 
    divResult.innerHTML = ''

    //13.percorrendo o array com a estrutura de repetição foreach

    imoveis.forEach((elem, i)=>{
        divResult.innerHTML += `<div class='item-veiculos'> ${i + 1} - DESCRIÇÃO: ${elem.descricao} -- LARGURA:${elem.largura}  -- COMPRIMENTO: ${elem.comprimento} -- ÁREA: ${(elem.largura) * (elem.comprimento)}m² -- VALOR DO LOTE: R$ ${parseFloat(elem.valores).toFixed(2).replace('.',',')} -- ${valorAdcional(elem)} </div> <br>`
    })
}