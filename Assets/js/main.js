document.addEventListener("DOMContentLoaded", () => {
  // Carrega a página inicial
  loadPage("home.html");

  // Listener de navegação AJAX
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const page = this.getAttribute("data-page");
      loadPage(page);
    });
  });
});

// Função para carregar página via AJAX
function loadPage(page) {
  fetch("pages/" + page)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content").innerHTML = html;
    })
    .catch(() => {
      document.getElementById("content").innerHTML = "<h2>Página não encontrada!</h2>";
    });
}
