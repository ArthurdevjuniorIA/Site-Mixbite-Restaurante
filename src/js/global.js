document.addEventListener("DOMContentLoaded", () => {
    const estaEmSubpasta = window.location.pathname.includes('/pages/');
    const caminhoBase = estaEmSubpasta ? '../../' : './';

    // Função auxiliar para carregar componentes e ajustar caminhos
    function carregarComponente(caminhoArquivo, idDestino) {
        const container = document.getElementById(idDestino);
        if (!container) return;

        fetch(`${caminhoBase}${caminhoArquivo}`)
            .then(res => res.text())
            .then(html => {
                container.innerHTML = html;

                // Se estiver dentro de src/pages/, corrige todos os src e href relativos
                if (estaEmSubpasta) {
                    container.querySelectorAll('img').forEach(img => {
                        const srcAtual = img.getAttribute('src');
                        if (srcAtual && !srcAtual.startsWith('http')) {
                            img.setAttribute('src', `../../${srcAtual}`);
                        }
                    });

                    container.querySelectorAll('a').forEach(link => {
                        const hrefAtual = link.getAttribute('href');
                        if (hrefAtual && !hrefAtual.startsWith('http') && !hrefAtual.startsWith('#')) {
                            link.setAttribute('href', `../../${hrefAtual}`);
                        }
                    });
                }
            })
            .catch(erro => console.error(`Erro ao carregar ${caminhoArquivo}:`, erro));
    }

    carregarComponente('src/components/header.html', 'header-placeholder');
    carregarComponente('src/components/footer.html', 'footer-placeholder');
});