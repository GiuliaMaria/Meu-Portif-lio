// ================================
// Atualiza automaticamente o ano no rodapé
// ================================
document.getElementById("ano").textContent = new Date().getFullYear();

// ================================
// Exibe uma mensagem ao enviar o formulário de contato
// ================================
document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita o recarregamento da página

  const nome = document.getElementById("nome").value;

  alert("Obrigada por entrar em contato, " + nome + "! Retornarei em breve.");

  this.reset(); // Limpa os campos do formulário
});
