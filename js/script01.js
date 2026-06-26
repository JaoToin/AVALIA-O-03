



// 1.CRIAR UM ARRAY DE OBJETO veiculo 

const imoveis = []

// 2.PEGANDO ELEMENTOS DO DOM

const formImovel = document.querySelector('#imovel')
const divResult = document.querySelector('#div-result')




// 3.CAPTURANDO O EVENTO DO SUBMIT DO FORMULARIO

formImovel.addEventListener('submit', (evt)=>{


    //4.interrompendo o efeito padrão do formulario

    evt.preventDefault()

    let metros = ((elem.comprimento * elem.largura) * 550)

    //5.criando e preenchendo o objeto literal pessoa 

    const dadosForm = new FormData(formImovel)

    const imovel = {
        descricao: dadosForm.get('descricao'),
        comprimento: dadosForm.get('comprimento'),
        largura: dadosForm.get('largura')

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
        divResult.innerHTML += `<div class='item-veiculos'> ${i + 1} - MODELO DO CARRO: ${elem.modelos} -- MARCA DO CARRO:${elem.marcas}  -- PLACA DO CARRO: ${elem.placas} -- ANOS APOS A FABRICAÇÃO: ${elem.anos} -- VALOR DO CARRO:${parseFloat(elem.valores).toFixed(2).replace('.',',')} -- O VALOR DO SEGURO SERA R$ ${parseFloat(elem.valores * 0.10).toFixed(2).replace('.',',')} -- ${descontoIPVA(elem)} </div> <br>`
    })
}