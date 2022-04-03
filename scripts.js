
let valorPedido = 0;
let prato = "";
let valorPrato;
let bebida = "";
let valorBebida;
let sobremesa = "";
let valorSobremesa;
let btn = document.querySelector('button');

function selecionarPrato(nomePrato) {
    
    const pratoSelecionado = document.querySelector(".menu-pratos").querySelector(".selecionado");
    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado");
    }

    nomePrato.classList.add("selecionado");
    prato = document.querySelector(".selecionado > .nome-item").innerHTML;
    console.log(prato);
    valorPrato = document.querySelector(".selecionado > .preco > .preco-item").innerHTML.replace("R$","").replace(",",".");
    console.log(valorPrato);

    habilitaBotao();
}


function selecionarBebida(nomeBebida) {
  
    const bebidaSelecionada = document.querySelector(".menu-bebidas").querySelector(".selecionado");
    if (bebidaSelecionada !== null) {
      bebidaSelecionada.classList.remove("selecionado");
    }
  
    nomeBebida.classList.add("selecionado");
    bebida = document.querySelector(".menu-bebidas > .selecionado > .nome-item").innerHTML;
    console.log(bebida);
    valorBebida = document.querySelector(".menu-bebidas > .selecionado > .preco > .preco-item").innerHTML.replace("R$","").replace(",",".");
    console.log(valorBebida);
    habilitaBotao();
  }

function selecionarSobremesa(nomeSobremesa) {

    const sobremesaSelecionada = document.querySelector(".menu-sobremesas").querySelector(".selecionado");
    if(sobremesaSelecionada !==null){
        sobremesaSelecionada.classList.remove("selecionado");
    }

    nomeSobremesa.classList.add("selecionado");
    sobremesa = document.querySelector(".menu-sobremesas > .selecionado > .nome-item").innerHTML;
    console.log(sobremesa);
    valorSobremesa = document.querySelector(".menu-sobremesas > .selecionado > .preco > .preco-item").innerHTML.replace("R$","").replace(",",".");
    console.log(valorSobremesa);
    habilitaBotao();
}


function calculaValorPedido() {
    valorPedido = Number(valorPrato) + Number(valorBebida) + Number(valorSobremesa);
    console.log(valorPedido);
}


function habilitaBotao(){

    if((prato !== "") && (bebida !== "") && (sobremesa !== "")) {
        const habilitarBotao = document.querySelector(".confirm-order");
        habilitarBotao.classList.add("enabled");
        btn.disabled = false;
        const textoBotao = document.querySelector(".selection-text").innerHTML = "Fechar pedido";
    }
    
}


function confirmaPedido(){
    
    calculaValorPedido();

    const habilitarConfirma = document.querySelector(".escondido");
    habilitarConfirma.classList.remove("escondido"); 
    
    const confirmaPrato = document.querySelector(".confirma-prato").innerHTML = prato;
    const confirmaValorPrato = document.querySelector(".preco-prato").innerHTML = valorPrato.replace(".",",");

    const confirmaBebida = document.querySelector(".confirma-bebida").innerHTML = bebida;
    const confirmaValorBebida = document.querySelector(".preco-bebida").innerHTML = valorBebida.replace(".",",");

    const confirmaSobremesa = document.querySelector(".confirma-sobremesa").innerHTML = sobremesa;
    const confirmaValorSobremesa = document.querySelector(".preco-sobremesa").innerHTML = valorSobremesa.replace(".",",");

    const confirmaValorTotal = document.querySelector(".valor-total").innerHTML = valorPedido.toFixed(2).replace(".",",");
}


function finalizarPedido(){
    
    const nome = prompt("Informe o seu nome:");
    const endereco = prompt("Informe o seu endereço:");

    const uri = `Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${valorPedido.toFixed(2)}

    Nome: ${nome} 
    Endereço: ${endereco} 
    `

    const uriEncoded = encodeURIComponent(uri);
    window.open(`https://wa.me/5511982433560?text=${uriEncoded}`, '_blank');
}

function cancelaPedido(){
    const cancela = document.querySelector(".confirma");
    cancela.classList.add("escondido");
}