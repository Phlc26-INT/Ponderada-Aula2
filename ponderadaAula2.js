// Nesse bloco estou definindo as variáveis a serem utilizadas.
var n1 = 10;
var n2 = 7;
var n3 = 2.9;
var notas = [n1, n2, n3];
var soma = 0;
var media = 0;
var i;
var erro = false;

// Aqui será verificado se a nota é válida.
while (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
    erro = true;
    break;
    
}

// Aqui é a condicional para saber se o código será executado ou não, de acordo com as notas inseridas.
if(erro === true){
    console.log('Você inseriu uma nota inválida!!! Realize a correção.');
}
else {
    // Aqui o programa irá somar todas as notas do vetor 'notas'.
    for (i=0; i < notas.length; i++){
        soma += notas [i];
    }
    // Aqui o programa irá calcular a média do aluno
    var media = (soma/3);

    // Essa última parte do código é o que será mostrado no console sobre a situação do aluno.

    console.log('Situação Final: ');
    console.log('Nota 1:', n1);
    console.log('Nota 2:', n2);
    console.log('Nota 3:', n3);

    if(media >= 7){
        console.log('SITUAÇÃO: APROVADO');
        console.log('Sua média é:', media.toFixed(2));
    }
    else{
        console.log('SITUAÇÃO: REPROVADO');
        console.log('Sua média é:', media)
    }
}