const comentariosData = [
    { nome: "Dr. Cristiano Alberto", imagem: "img/c1.jpeg", comentario: "Minha clínica após as edições de Pedro e alguns ajustes, aumentou de 20 mil para 34 mil, de faturamento recorrente mensal. Sempre muito pontual e com edições incrível!" },
    { nome: "Dr. Marcos Fernandes", imagem: "img/c2.jpeg", comentario: "Pedro entendeu bem a ideia que eu queria, nunca atrasou um vídeo sequer, com edições dinâmicas e impactantes." },
    { nome: "Psicóloga Maria Helena", imagem: "img/c3.jpeg", comentario: "As edições de Pedro são excelente, gostei muito da forma que ele trabalha, sempre com muito profissionalismo e entrega." },
    { nome: "Nutricionista Anaclara", imagem: "img/c5.jpeg", comentario: "Sempre tive problemas com editores, não entregava no prazo e com a edição com muitos erros. Com Pedro nunca tive isso, as edições sempre muito profissional e nunca errou um prazo, trabalho de excelência." },
    { nome: "Carla Maria", imagem: "img/c4.jpeg", comentario: "As edições de Pedro, modificou meu perfil do instagram, ganhei mais de 6 mil seguidores, sempre muito pontual, um editor excelente." },
    { nome: "advogado AFernando", imagem: "img/c6.jpeg", comentario: "Pedro foi um achado no digital, em meio a tantos profissionais preguiçosos, pedro modificou meu olhar para esse mercado, nunca faltou com um único compromisso, e os vídeos muito bem editados." }
  ];
  
  let currentIndex = 0;
  
  const comentariosContainer = document.getElementById("comentarios");
  
  function renderComentarios() {
    comentariosContainer.innerHTML = "";
    
    for (let i = currentIndex; i < currentIndex + 3 && i < comentariosData.length; i++) {
      const comentario = comentariosData[i];
      const divComentario = document.createElement("div");
      divComentario.classList.add("comentario");
      divComentario.innerHTML = `
        <img src="${comentario.imagem}" alt="${comentario.nome}">
        <div class="info">
          <div class="nome">${comentario.nome}</div>
          <div class="comentario-texto">${comentario.comentario}</div>
        </div>
      `;
      comentariosContainer.appendChild(divComentario);
    }
  }
  
  function nextComentarios() {
    if (currentIndex + 3 < comentariosData.length) {
      currentIndex += 3;
      renderComentarios();
    }
  }
  
  function prevComentarios() {
    if (currentIndex - 3 >= 0) {
      currentIndex -= 3;
      renderComentarios();
    }
  }
  
  document.getElementById("nextBtn").addEventListener("click", nextComentarios);
  document.getElementById("prevBtn").addEventListener("click", prevComentarios);
  
  renderComentarios(); // Inicializa a renderização dos comentários
  