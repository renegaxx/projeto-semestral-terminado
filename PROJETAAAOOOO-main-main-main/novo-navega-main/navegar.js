// Adicione um evento de clique para o link "Esqueceu sua senha?"
document.querySelector("#forgot-link").addEventListener("click", function(event) {
    // Evite que o link atualize a página (comportamento padrão)
    event.preventDefault();

    // Oculte o form-1 e mostre o form-2
    document.querySelector("#form-1").style.display = "none";
    document.querySelector("#form-2").style.display = "block";
  });
    // Adicione um evento de clique para o link "Esqueceu sua senha?"
document.querySelector("#forgot-link-2").addEventListener("click", function(event) {
    // Evite que o link atualize a página (comportamento padrão)
    event.preventDefault();

    // Oculte o form-1 e mostre o form-2
    document.querySelector("#form-2").style.display = "none";
    document.querySelector("#form-1").style.display = "block";
});