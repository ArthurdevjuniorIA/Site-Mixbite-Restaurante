'use strict';

'use strict';

/// Para os ícones da navegação do cardápio mudarem de cor

function mudar_cor(elemento, caminho) {
    elemento.src = caminho;
}

// Configuração para o link de pizza
const link_pizza = document.getElementById('link-pizza');
const icone_pizza = document.getElementById('icone_pizza');
const caminho_original_pizza = '../../assets/imgs/icons/iconpizza.svg';

link_pizza.addEventListener('mouseover', function() {
    mudar_cor(icone_pizza, '../../assets/imgs/icons/iconpizzavermelho.svg');
});
link_pizza.addEventListener('mouseout', function() {
    mudar_cor(icone_pizza, caminho_original_pizza);
});
link_pizza.addEventListener('click', function() {
    mudar_cor(icone_pizza, '../../assets/imgs/icons/iconpizzavermelho.svg');
    setTimeout(() => mudar_cor(icone_pizza, caminho_original_pizza), 200); // Retorna ao original após o clique
});

// Configuração para o link de hambúrguer
const link_burguer = document.getElementById('link-burguer');
const icone_burguer = document.getElementById('icone_burguer');
const caminho_original_burguer = '../../assets/imgs/icons/iconhamburguer.svg';

link_burguer.addEventListener('mouseover', function() {
    mudar_cor(icone_burguer, '../../assets/imgs/icons/iconhamburguervermelho.svg');
});
link_burguer.addEventListener('mouseout', function() {
    mudar_cor(icone_burguer, caminho_original_burguer);
});
link_burguer.addEventListener('click', function() {
    mudar_cor(icone_burguer, '../../assets/imgs/icons/iconhamburguervermelho.svg');
    setTimeout(() => mudar_cor(icone_burguer, caminho_original_burguer), 200);
});

// Configuração para o link de pastel
const link_pastel = document.getElementById('link-pastel');
const icone_pastel = document.getElementById('icone_pastel');
const caminho_original_pastel = '../../assets/imgs/icons/iconpastel.svg';

link_pastel.addEventListener('mouseover', function() {
    mudar_cor(icone_pastel, '../../assets/imgs/icons/iconpastelvermelho.svg');
});
link_pastel.addEventListener('mouseout', function() {
    mudar_cor(icone_pastel, caminho_original_pastel);
});
link_pastel.addEventListener('click', function() {
    mudar_cor(icone_pastel, '../../assets/imgs/icons/iconpastelvermelho.svg');
    setTimeout(() => mudar_cor(icone_pastel, caminho_original_pastel), 200);
});

// Configuração para o link de milk-shake
const link_shake = document.getElementById('link-shake');
const icone_shake = document.getElementById('icone_shake');
const caminho_original_shake = '../../assets/imgs/icons/iconbebida.svg';

link_shake.addEventListener('mouseover', function() {
    mudar_cor(icone_shake, '../../assets/imgs/icons/iconbebidavermelho.svg');
});
link_shake.addEventListener('mouseout', function() {
    mudar_cor(icone_shake, caminho_original_shake);
});
link_shake.addEventListener('click', function() {
    mudar_cor(icone_shake, '../../assets/imgs/icons/iconbebidavermelho.svg');
    setTimeout(() => mudar_cor(icone_shake, caminho_original_shake), 200);
});

// Configuração para o link de bebidas
const link_bebidas = document.getElementById('link-bebidas');
const icone_bebida = document.getElementById('icone_bebida');
const caminho_original_bebida = '../../assets/imgs/icons/iconbebida.svg';

link_bebidas.addEventListener('mouseover', function() {
    mudar_cor(icone_bebida, '../../assets/imgs/icons/iconbebidavermelho.svg');
});
link_bebidas.addEventListener('mouseout', function() {
    mudar_cor(icone_bebida, caminho_original_bebida);
});
link_bebidas.addEventListener('click', function() {
    mudar_cor(icone_bebida, '../../assets/imgs/icons/iconbebidavermelho.svg');
    setTimeout(() => mudar_cor(icone_bebida, caminho_original_bebida), 200);
});

// Configuração para o link de combos
const link_combos = document.getElementById('link-combos');
const icone_combo = document.getElementById('icone_combo');
const caminho_original_combo = '../../assets/imgs/icons/iconcombo.svg';

link_combos.addEventListener('mouseover', function() {
    mudar_cor(icone_combo, '../../assets/imgs/icons/iconcombovermelho.svg');
});
link_combos.addEventListener('mouseout', function() {
    mudar_cor(icone_combo, caminho_original_combo);
});
link_combos.addEventListener('click', function() {
    mudar_cor(icone_combo, '../../assets/imgs/icons/iconcombovermelho.svg');
    setTimeout(() => mudar_cor(icone_combo, caminho_original_combo), 200);
});