/* ==========================================================
   SCRIPT DO PORTFÓLIO
   Aqui fica a parte "inteligente" da página: a lista de projetos.
   Para adicionar um projeto, copie um bloco { ... } da lista abaixo,
   cole logo depois (não esqueça da vírgula!) e mude os textos.
   ========================================================== */

// 1) SEUS PROJETOS -------------------------------------------------
// Cada projeto é um "objeto" dentro de uma lista (array).
const projetos = [
  {
    titulo: "Lista de tarefas",
    descricao:
      "App para adicionar, concluir e apagar tarefas. Guarda tudo no navegador, então as tarefas não somem ao recarregar a página.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    codigo: "https://github.com/seu-usuario/lista-de-tarefas",
    demo: "https://seu-usuario.github.io/lista-de-tarefas"
  },
  {
    titulo: "Calculadora de gorjeta",
    descricao:
      "Calcula quanto cada pessoa paga na conta do restaurante, com a gorjeta escolhida. Meu primeiro projeto usando eventos e formulários.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    codigo: "https://github.com/seu-usuario/calculadora-gorjeta",
    demo: "" // deixe vazio se não tiver link para o site funcionando
  },
  {
    titulo: "Página de receitas",
    descricao:
      "Site com receitas da família, feito para praticar layout responsivo, que se adapta ao celular e ao computador.",
    tecnologias: ["HTML", "CSS"],
    codigo: "https://github.com/seu-usuario/receitas",
    demo: "https://seu-usuario.github.io/receitas"
  }
];

// 2) MONTAR A LISTA NA PÁGINA -------------------------------------
const listaProjetos = document.getElementById("lista-projetos");

// Função que cria um link (<a>) já configurado
function criarLink(texto, endereco) {
  const link = document.createElement("a");
  link.textContent = texto;
  link.href = endereco;
  link.target = "_blank";
  link.rel = "noopener";
  return link;
}

// Para cada projeto da lista, criamos os elementos HTML e colocamos na página
projetos.forEach(function (projeto) {
  const item = document.createElement("li");
  item.className = "projeto";

  const titulo = document.createElement("h3");
  titulo.textContent = projeto.titulo;

  const descricao = document.createElement("p");
  descricao.textContent = projeto.descricao;

  const tags = document.createElement("ul");
  tags.className = "tags tags--pequenas";
  projeto.tecnologias.forEach(function (tec) {
    const tag = document.createElement("li");
    tag.textContent = tec;
    tags.appendChild(tag);
  });

  const links = document.createElement("p");
  links.className = "projeto__links";
  if (projeto.codigo) links.appendChild(criarLink("Ver código", projeto.codigo));
  if (projeto.demo) links.appendChild(criarLink("Abrir projeto", projeto.demo));

  item.append(titulo, descricao, tags, links);
  listaProjetos.appendChild(item);
});

// 3) ANO ATUAL NO RODAPÉ -------------------------------------------
document.getElementById("ano").textContent = new Date().getFullYear();
