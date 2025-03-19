// Função para carregar vídeos do diretório
function loadVideos() {
    const videoPaths = [
        'videos/video1.mp4',
        'videos/video2.mp4',
        'videos/video3.mp4',
        'videos/video4.mp4',
        'videos/video5.MOV',
        'videos/video6.mp4',
        'videos/video7.mp4',
        // Adicione mais vídeos conforme necessário
    ];

    const videos = document.querySelectorAll('.video video');
    let currentIndex = 0;

    // Função para atualizar os vídeos
    function updateVideos() {
        const videoElements = document.querySelectorAll('.video video');
        for (let i = 0; i < videoElements.length; i++) {
            videoElements[i].src = videoPaths[currentIndex + i]; // Atualiza o caminho do vídeo
        }
    }

    // Atualiza os vídeos ao carregar
    updateVideos();

    // Função para mudar os vídeos ao clicar nos indicadores
    function changeVideos(index) {
        currentIndex = index * 3; // Muda o índice dos vídeos a partir do indicador clicado
        updateVideos();
        updateIndicators();
    }

    // Função para atualizar os indicadores (marcar o ativo)
    function updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[Math.floor(currentIndex / 3)].classList.add('active');
    }

    // Adicionar evento de clique nos indicadores
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            changeVideos(index);
        });
    });
}

// Chama a função para carregar vídeos ao carregar a página
document.addEventListener('DOMContentLoaded', loadVideos);
