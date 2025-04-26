function moverBotaoNao() {
  var nao = document.getElementById("nao");
  var x = Math.random() * (window.innerWidth - 100);
  var y = Math.random() * (window.innerHeight - 50);
  nao.style.left = x + "px";
  nao.style.top = y + "px";
}

document.getElementById("nao").addEventListener("mouseover", moverBotaoNao);

document.getElementById("nao").addEventListener("touchstart", function(e) {
  e.preventDefault();
  moverBotaoNao();
});

document.getElementById("sim").addEventListener("click", function() {
  document.getElementById("bolo").style.display = "none";
  document.getElementById("pergunta").style.display = "none";
  document.querySelector(".botoes").style.display = "none";
  document.getElementById("surpresa").style.display = "block";
});

document.getElementById("simButton").addEventListener("click", function() {
  window.location.href = "surpresa.html"; 
});