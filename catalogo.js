const catalogo = document.getElementById('catalogo');

// Função para carregar produtos do JSON
async function carregarProdutos() {
    try {
        const response = await fetch('produtos.json');
        const produtos = await response.json();

        catalogo.innerHTML = '';

        produtos.forEach(produto => {
            const div = document.createElement('div');
            div.className = 'produto';
            div.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco}</p>
            `;
            catalogo.appendChild(div);
        });
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
        catalogo.innerHTML = "<p>Não foi possível carregar os produtos.</p>";
    }
}

// Carrega produtos ao abrir a página
carregarProdutos();
