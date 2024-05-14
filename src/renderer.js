function cargarPagina(pagina) {
    document.getElementById('content').innerHTML = '';
    fetch(`${pagina}`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        });
}
