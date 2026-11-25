// 1. Lista com o caminho das 3 imagens (confira se os nomes na pasta assets/imgs estão iguais)
const imagens = [
    '../../assets/imgs/Foto1-loop.png',
    '../../assets/imgs/Foto2-loop.png',
    '../../assets/imgs/Foto3-loop.png'
];

const imagemBanner = document.querySelector('.imagem-loop');
const botoes = document.querySelectorAll('.indicadores-loop .button');

let indiceAtual = 0;

// 2. Função que troca a foto e move o id="ativo" para o botão certo
function mostrarSlide(indice) {
    indiceAtual = indice;
    imagemBanner.src = imagens[indiceAtual];

    // Remove o destaque amarelo de todos os botões
    botoes.forEach(botao => botao.removeAttribute('id'));

    // Aplica o destaque amarelo apenas no botão da imagem atual
    botoes[indiceAtual].id = 'ativo';
}

// 3. Função para avançar para a próxima imagem (volta para a 0 após a última)
function proximoSlide() {
    const proximoIndice = (indiceAtual + 1) % imagens.length;
    mostrarSlide(proximoIndice);
}

// 4. Inicia a troca automática a cada 7 segundos (7000 milissegundos)
let intervalo = setInterval(proximoSlide, 7000);

// 5. Evento de clique em cada bolinha
botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        mostrarSlide(index);

        // Reinicia o tempo de 7s para a imagem não pular logo depois do clique
        clearInterval(intervalo);
        intervalo = setInterval(proximoSlide, 7000);
    });
});
