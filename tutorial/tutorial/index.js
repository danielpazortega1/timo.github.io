// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el elemento body y aplica estilos
    var body = document.querySelector("body");
    body.style.fontFamily = "Arial, sans-serif";
    body.style.backgroundColor = "#f0f0f0";

    // Selecciona los elementos h1 y aplica estilos
    var h1Elements = document.querySelectorAll("h1");
    h1Elements.forEach(function(h1) {
        h1.style.color = "#333";
        h1.style.textAlign = "center";
    });

    // Selecciona los elementos p y aplica estilos
    var pElements = document.querySelectorAll("p");
    pElements.forEach(function(p) {
        p.style.fontSize = "16px";
        p.style.lineHeight = "1.5";
    });

    // Puedes agregar más estilos para otros elementos aquí...
});
