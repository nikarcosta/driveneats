
let valorPedido = 0;
let prato;
let valorPrato;
let bebida;
let valorBebida;
let sobremesa;
let valorSobremesa;

function selecionarPrato(nomePrato) {
    
    const pratoSelecionado = document.querySelector(".menu-pratos").querySelector(".selecionado");
    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado");
    }

    nomePrato.classList.add("selecionado");
    prato = document.querySelector(".selecionado > .nome-item").innerHTML;
    console.log(prato);
    valorPrato = document.querySelector(".selecionado > .preco-item").innerHTML;
    console.log(valorPrato);
}


function selecionarBebida(nomeBebida) {
  
    const bebidaSelecionada = document.querySelector(".menu-bebidas").querySelector(".selecionado");
    if (bebidaSelecionada !== null) {
      bebidaSelecionada.classList.remove("selecionado");
    }
  
    nomeBebida.classList.add("selecionado");
    bebida = document.querySelector(".menu-bebidas > .selecionado > .nome-item").innerHTML;
    console.log(bebida);
    valorBebida = document.querySelector(".menu-bebidas > .selecionado > .preco-item").innerHTML;
    console.log(valorBebida);
  }

function selecionarSobremesa(nomeSobremesa) {

    const sobremesaSelecionada = document.querySelector(".menu-sobremesas").querySelector(".selecionado");
    if(sobremesaSelecionada !==null){
        sobremesaSelecionada.classList.remove("selecionado");
    }

    nomeSobremesa.classList.add("selecionado");
    sobremesa = document.querySelector(".menu-sobremesas > .selecionado > .nome-item").innerHTML;
    console.log(sobremesa);
    valorSobremesa = document.querySelector(".menu-sobremesas > .selecionado > .preco-item").innerHTML;
    console.log(valorSobremesa);
}
