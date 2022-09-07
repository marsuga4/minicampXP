function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;

  imcResult.addEventListener('input', faixaIMC);
  faixaIMC();
}

function faixaIMC() {
  //var imcResult = Number.parseFloat('#imc-result');
  var inputIMC = document.querySelector('#imc-result');
  var imcResult = Number(inputIMC.value);
  console.log(imcResult);
  var imcResultFaixa = '';

  if (imcResult >= 16 && imcResult <= 16.9) {
    var faixa = 'Muito abaixo do peso';
    imcFaixa.textContent = faixa;
  } else if (imcResult >= 17 && imcResult <= 18.4) {
    var faixa = 'Abaixo do peso';
    imcResultFaixa.textContent = faixa;
  } else if (imcResult >= 18.5 && imcResult <= 24.9) {
    var faixa = 'Peso normal';
    imcResultFaixa.textContent = faixa;
  } else if (imcResult >= 25 && imcResult <= 29.9) {
    var faixa = 'Acima do peso cececec';
    imcResultFaixa.textContent = faixa;
  } else if (imcResult >= 30 && imcResult <= 34.9) {
    var faixa = 'Obsedidade grau I';
    imcResultFaixa.textContent = faixa;
  } else if (imcResult >= 34 && imcResult <= 40) {
    var faixa = 'Obsedidade grau II';
    imcResultFaixa.textContent = faixa;
  } else if (imcResult > 40) {
    var faixa = 'Obsedidade grau III';
    imcResultFaixa.textContent = faixa;
  } else if (imcResult < 16) {
    var faixa = 'Valor inválido';
    imcFaixa.textContent = faixa;
  }
}

start();
faixaIMC();
