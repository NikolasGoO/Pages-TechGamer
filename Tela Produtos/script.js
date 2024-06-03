function filtrarProdutos(categoria) {
    var produtos = document.querySelectorAll('.produto');
    produtos.forEach(function(produto) {
        produto.style.display = 'none';
    });

    if (categoria === 'Tudo') {
        produtos.forEach(function(produto) {
            produto.style.display = 'block';
        });
    } else {
        var produtosFiltrados = document.querySelectorAll('.produto[data-category="' + categoria + '"]');
        produtosFiltrados.forEach(function(produto) {
            produto.style.display = 'block';
        });
    }
}

document.querySelectorAll('.produto').forEach(function(produto) {
    produto.addEventListener('click', function() {
        var url = produto.getAttribute('data-url');
        window.location.href = url;
    });
});

window.onload = function() {
    filtrarProdutos('Tudo'); 
}