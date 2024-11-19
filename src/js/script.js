const imagens = [
  { src: "./src/images/img1.jpg", descricao: "Blocos geométricos" },
  { src: "./src/images/img2.jpg", descricao: "Arte espacial" },
  { src: "./src/images/img3.jpg", descricao: "O som da arte" },
];

let indiceAtual = 0;

const imagem = document.getElementById("imagem");
const descricao = document.getElementById("descricao");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Função para atualizar a imagem e a descrição.
function atualizarCarrocel() {
  imagem.src = imagens[indiceAtual].src;
  descricao.textContent = imagens[indiceAtual].descricao;
}

// Evento para botão anterior
prevButton.addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  atualizarCarrocel();
});

// Evento para botão próximo

nextButton.addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  atualizarCarrocel();
});

// Inicializar o carrocel com a primeira imagem.
atualizarCarrocel();
