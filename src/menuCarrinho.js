import { catalogo } from "./utilidades";

function abrirCarrinho() {
    document.getElementById("carrinho").classList.add("right-[0px]");
    document.getElementById("carrinho").classList.remove("right-[-360px]");
}

function fecharCarrinho() {
    document.getElementById("carrinho").classList.remove("right-[0px]");
    document.getElementById("carrinho").classList.add("right-[-360px]");
}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}

export function adicionarAoCarrinho(idProduto) {
    const produto = catalogo.find(p => p.id === idProduto);
    const containerProdutosCarrinho = document.getElementById("produtos-carrinho");
    const cartaoProdutoCarrinho = `<article class="flex bg-slate-200 rounded-lg relative">
    <button class="absolute top-0 right-2" id="apagar-produto">
      <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
    </button>
    <img src="assets/img/product-1.jpg" alt="Carrinho: Camisa Larga com Bolsos" class="h-24 rounded-lg p-1">
    <div class="py-2">   
      <p class="text-slate-900 text-sm">Camisa Larga com Bolsos</p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$70</p>
    </div>
  </article>` ;
  containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
}