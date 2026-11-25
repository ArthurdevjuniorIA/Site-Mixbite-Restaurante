// Lista com o caminho das 3 imagens do banner
const imagens = [
    '../../assets/imgs/Foto1-loop.png',
    '../../assets/imgs/Foto2-loop.png',
    '../../assets/imgs/Foto3-loop.png'
];

const imagemBanner = document.querySelector('.imagem-loop');
const botoes = document.querySelectorAll('.indicadores-loop .button');

let indiceAtual = 0;

// Pré-carrega as imagens em segundo plano para a transição não engasgar na primeira vez
imagens.forEach((caminho) => {
    const img = new Image();
    img.src = caminho;
});

// Troca a imagem com efeito suave e atualiza o botão amarelo (#ativo)
function mostrarSlide(indice) {
    if (indice === indiceAtual) return;

    indiceAtual = indice;

    // Atualiza a cor amarela para o botão correspondente
    botoes.forEach(botao => botao.removeAttribute('id'));
    botoes[indiceAtual].id = 'ativo';

    // Inicia o desaparecimento suave (fade-out)
    imagemBanner.style.opacity = '0';

    // Aguarda 350ms, troca o arquivo da imagem e faz reaparecer (fade-in)
    setTimeout(() => {
        imagemBanner.src = imagens[indiceAtual];
        imagemBanner.style.opacity = '1';
    }, 350);
}

// Avança para a próxima imagem em loop
function proximoSlide() {
    const proximoIndice = (indiceAtual + 1) % imagens.length;
    mostrarSlide(proximoIndice);
}

// Inicia a troca automática a cada 7 segundos
let intervalo = setInterval(proximoSlide, 7000);

// Configura o clique em cada uma das 3 bolinhas
botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        mostrarSlide(index);

        // Reinicia o cronômetro de 7 segundos após o clique manual
        clearInterval(intervalo);
        intervalo = setInterval(proximoSlide, 7000);
    });
});