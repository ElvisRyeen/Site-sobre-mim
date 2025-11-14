// ===============================
// script.js — versão dinâmica
// ===============================

// Lista de projetos (adicione aqui os seus)
const projetos = [
  {
    titulo: "🌐 Site Pessoal",
    descricao: "Meu primeiro site completo feito com HTML, CSS e JavaScript, apresentando minha biografia, sonhos e projetos.",
    link: "index.html"
  },
  {
    titulo: "💻 Calculadora em JavaScript",
    descricao: "Uma calculadora funcional desenvolvida para praticar lógica e manipulação do DOM.",
    link: "#"
  },
  {
    titulo: "📊 Sistema de Tarefas",
    descricao: "Projeto em desenvolvimento — um sistema web para organizar tarefas com banco de dados e login.",
    link: "#"
  },
  {
    titulo: "🎮 Jogo de Adivinhação",
    descricao: "Um mini game divertido feito em JavaScript puro, com contagem de tentativas e feedback ao jogador.",
    link: "#"
  },
  {
    titulo: "🧠 Quiz Interativo",
    descricao: "Aplicativo web com perguntas de múltipla escolha sobre tecnologia e programação.",
    link: "#"
  }
];

// Função que monta os cards
function carregarProjetos() {
  const container = document.getElementById('projetos-container');
  
  projetos.forEach(projeto => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <a href="${projeto.link}" class="btn">Ver Projeto</a>
    `;

    container.appendChild(card);
  });
}

// Executa a função ao carregar a página
document.addEventListener('DOMContentLoaded', carregarProjetos);
