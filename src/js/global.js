document.addEventListener("DOMContentLoaded", () => {
    const estaEmSubpasta = window.location.pathname.includes('/pages/');
    const caminhoBase = estaEmSubpasta ? '../../' : './';

    function resolverCaminho(url) {
        if (!url || /^(?:[a-z][a-z0-9+.-]*:|#)/i.test(url)) return url;

        const semPrefixo = url.replace(/^(?:\.\/|\.\.\/)+/, '');
        return `${estaEmSubpasta ? '../../' : ''}${semPrefixo}`;
    }

    function carregarComponente(caminhoArquivo, idDestino) {
        const container = document.getElementById(idDestino);
        if (!container) return;

        fetch(`${caminhoBase}${caminhoArquivo}`)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.text();
            })
            .then(html => {
                container.innerHTML = html;

                // Se estiver dentro de src/pages/, ajusta os caminhos relativos para voltar à raiz
                container.querySelectorAll('img').forEach(img => {
                    const srcAtual = img.getAttribute('src');
                    if (srcAtual) img.setAttribute('src', resolverCaminho(srcAtual));
                });

                container.querySelectorAll('a').forEach(link => {
                    const hrefAtual = link.getAttribute('href');
                    if (hrefAtual) link.setAttribute('href', resolverCaminho(hrefAtual));
                });
            })
            .catch(erro => console.error(`Erro ao carregar ${caminhoArquivo}:`, erro));
    }

    carregarComponente('src/components/header.html', 'header-placeholder');
    carregarComponente('src/components/footer.html', 'footer-placeholder');
});