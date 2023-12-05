// Desafio 1
console.log('Iniciando o desafio 1');
diaSemana = prompt('Qual é o dia da semana ?');


if (diaSemana == 'Sábado'){
    alert('Bom fim de semana!');
} else if (diaSemana == 'Domingo'){
        alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

// Desafio 2
console.log('Iniciando desafio 2');
numeroDigitado = prompt('Digite um número positivo ou negativo.');

if (numeroDigitado >= 0){
    alert('O número digitado é positivo');
} else {
    alert('O número digitado é negativo.');
}

// Desafio 3
console.log('Iniciando o desafio 3');
pontuacao = prompt('Digite sua pontuação');

if(pontuacao >= 100){
    alert('Parabéns, você venceu!')
} else {
    'Tente novamente para ganhar.'
}

// Desafio 4
console.log('Iniciando o desafio 4')
saldo = 15862000;
alert(`O valor do seu saldo é de R$ ${saldo}`);

//Desafio 5
usuario = prompt('Digite seu nome.')
alert(`Boas-vindas ${usuario}`);