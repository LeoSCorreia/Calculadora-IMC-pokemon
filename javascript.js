var valorAltura = document.getElementById("valueA");
var valorPeso = document.getElementById("valueP");

function calc() {
  var altura = valueA.value;
  var peso = valueP.value;
  imc = peso / Math.pow(altura, 2);
  var image = document.getElementById("image");
  var resultado = document.getElementById("resultado");
  var hidden = document.getElementById("resultado").classList.remove("hidden");

  // Possiveis resultados baseados no calculo IMC//
  if (imc < 18.5) {
    resultado.textContent =
      "Você está abaixo do peso ideal. Pode ser um sinal de desnutrição ou de algum problema de saúde.";
    image.src = "/Assets/image/Baixo.png";
  }
  if (imc >= 18.5 && imc <= 24.9) {
    resultado.textContent =
      "Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia.";
    image.src = "/Assets/image/Normal.png";
  }
  if (imc >= 25 && imc <= 29.9) {
    resultado.textContent =
      "Você está com sobrepeso, alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos.";
    image.src = "/Assets/image/Sobrepeso.png";
  }
  if (imc >= 30 && imc <= 34.9) {
    resultado.textContent =
      "Você está com Obesidade grau I, o excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde.";
    image.src = "/Assets/image/ObesidadeI.png";
  }
  if (imc >= 35 && imc <= 39.9) {
    resultado.textContent =
      "Você está com Obesidade grau II, ao atingir este nível de IMC, o risco de doenças associadas está entre alto e muito alto. Busque ajuda de um profissional de saúde.";
    image.src = "/Assets/image/ObesidadeGrauII.png";
  }
  if (imc >= 40) {
    resultado.textContent =
      "Você está com Obesidade grau III, atingir este nível de IMC, o risco de doenças associadas é muito alto. Busque ajuda de um profissional de saúde.";
    image.src = "/Assets/image/ObesidadeMórbida.png";
  }
}
