function fetchFoxImage() {
    fetch('https://randomfox.ca/floof/')
        .then(response => response.json())
        .then(data => exibir_imagem(data))

}

function exibir_imagem(data) {
    document.getElementById("img").src = data.image;
}