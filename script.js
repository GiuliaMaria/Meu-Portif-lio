
document.getElementById("ano").textContent = new Date().getFullYear();


document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;

  alert("Obrigada por entrar em contato, " + nome + "! Retornarei em breve.");

  this.reset(); 
});
