let cartao = '1234123412341234';

let lastDigits = cartao.slice(-4);

let cartaoMascarado = lastDigits.padStart(16, '*');

console.log('Este é seu cartão com o final? '+cartaoMascarado);