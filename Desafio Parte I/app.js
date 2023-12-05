alert('Boass vindas ao nosso site!');

let nome = prompt('Qual seu nome ?');
let idade = prompt('Qual sua idade ?');
let numeroDeVendas = 50;
let saldoDisponivel = 10000;

let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

if (idade >= 18){
    alert('Pode tirar a habilitação!');
}