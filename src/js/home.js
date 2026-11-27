const imagens = [
    'assets/imgs/home/Foto1-loop.png',
    'assets/imgs/home/Foto2-loop.png',
    'assets/imgs/home/Foto3-loop.png'
];

const imagemBanner = document.querySelector('.imagem-loop');
const botoes = document.querySelectorAll('.indicadores-loop .button');

if (!imagemBanner || botoes.length === 0) {
    // A página não tem carrossel; o restante do script não deve rodar.
} else {

let indiceAtual = 0;

// Pré-carrega as imagens para a troca ser instantânea
imagens.forEach((caminho) => {
    const img = new Image();
    img.src = caminho;
});

function mostrarSlide(indice) {
    if (indice === indiceAtual) return;

    indiceAtual = indice;

    // Atualiza o botão amarelo
    botoes.forEach(botao => botao.removeAttribute('id'));
    botoes[indiceAtual].id = 'ativo';

    // Suaviza levemente sem apagar a imagem (vai só até 0.65)
    imagemBanner.style.opacity = '0.65';

    // Troca a imagem rapidamente (180ms) e retorna ao brilho normal
    setTimeout(() => {
        imagemBanner.src = imagens[indiceAtual];
        imagemBanner.style.opacity = '1';
    }, 180);
}

function proximoSlide() {
    const proximoIndice = (indiceAtual + 1) % imagens.length;
    mostrarSlide(proximoIndice);
}

let intervalo = setInterval(proximoSlide, 7000);

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        mostrarSlide(index);

        clearInterval(intervalo);
        intervalo = setInterval(proximoSlide, 7000);
    });
});

}