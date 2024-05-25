// Elementos que vamos interagir: nome, altura, peso, botão calcular e resultado, todos precisam ter um id.

// Pega os elementos que serão utilizados, a variável vira o elemento HTML:

// const nome = document.getElementById('nome')
// const altura = document.getElementById('altura')
// const peso = document.getElementById('peso')
const calcular = document.getElementById('calcular')
// const resultado = document.getElementById('resultado')

function imc() {
    // É ideal evitar variáveis globais
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    // Tratamento de erro, caso o usuário não digite nada
    if (nome !== '' && altura != '' && peso != '') {
        // toFixed -->  quantidade de casas após a vírgula
        // Calculo do IMC
        const valorIMC = (peso/altura**2).toFixed(2)

        let classificação = '';

        if(valorIMC < 18.5) {
            classificação = 'abaixo do peso!'
        } else if (valorIMC < 25){
            classificação = 'no peso ideal!'
        } else if (valorIMC < 30) {
            classificação = 'acima do peso!"'
        } else if (valorIMC <35) {
            classificação = 'com obesidade de grau I!'
        } else if (valorIMC < 40) {
            classificação = 'com obesidade grau II!'
        } else {
            classificação = 'obesidade grau III. Cuidado!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificação}`;

    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }
}

// Quando clicar no botão calcular será disparado a função IMC
calcular.addEventListener('click', imc);
