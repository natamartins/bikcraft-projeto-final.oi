const links = document.querySelectorAll(".header-menu a");

function ativarlink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarlink);
// ativar items do orçamento
const parametros = new URLSearchParams(location.search);

function ativarproduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }

  console.log(parametro);
}

parametros.forEach(ativarproduto);
// perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", "true");
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventosPerguntas);

// galeria de bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const midia = matchMedia("(min-width: 1000px)").matches;
  if (midia) {
    galeriContainer.prepend(img);
  }
}

function eventoGAleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventoGAleria);

// animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
