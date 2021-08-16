
---------------------------------------------------------------------------
1

/*
 * Declare na linha 37 a variável `nomeCompleto` e atribua a ela o seu nome completo
 */
var nomeCompleto = "Rafael Almeida";

---------------------------------------------------------------------------
2

/*
 * Na linha 33, crie a variável `minhaIdade` e atribua
 * sua idade a ela
 */

var minhaIdade = 24;

---------------------------------------------------------------------------
3

/*
 * Na linha 32, crie a constante NATURALIDADE e atribua
 * o nome do país em que você nasceu a ela
 */

const NATURALIDADE = "Brasil";

---------------------------------------------------------------------------
5

/*
 * Declare e atribua o valor de cada váriável a partir da linha 34.
 * Variáveis: meuTamanho, corDaMinhaCamisa, queroEstudarNaTrybe, computadorLigado
 * e a constante PI
 */
  // fim do seu código
var meuTamanho = 182;
const PI = 3.14;
var corDaMinhaCamisa = "Azul";
var queroEstudarNaTrybe = true;

---------------------------------------------------------------------------
7

/*
 * Nas linhas abaixo, crie as variáveis `multiplicador` e `multiplicando` e atribua a elas
 * os valores 4 e 10, respectivamente.
 *
 * Em seguida, crie a variável `resultadoDaMultiplicacao` e atribua a ela a multiplicação 
 * das variáveis criadas acima
 */

var multiplicador = 4;
var multiplicando = 10;
var resultadoDaMultiplicacao = multiplicador * multiplicando;
resultadoDaMultiplicacao;


  // fim do seu código

---------------------------------------------------------------------------
8

/*
 * Nas linhas abaixo, crie as variáveis `dividendo` e `divisor` e atribua a elas
 * os valores 100 e 4, respectivamente.
 *
 * Em seguida, crie a variável `resultadoDaDivisao` e atribua a ela a divisão 
 * da variável dividendo pela variável divisor
 */

var dividendo = 100;
var divisor = 4;
var resultadoDaDivisao = dividendo / divisor;
resultadoDaDivisao;

---------------------------------------------------------------------------
9

function soma(elementoA, elementoB) {
//não altere a linha acima
    
/*
 * Atribua a soma da variável `elementoA` com a variável `elementoB`
 * na váriavel `resultadoSoma` (já criada abaixo)
 */

var resultadoSoma = elementoA + elementoB;

//não altere as linhas abaixo
  return resultadoSoma;
}

---------------------------------------------------------------------------
10

function subtracao(elementoA, elementoB) {
//não altere a linha acima
    
/*
 * Atribua a subtração da variável `elementoB` pela variável `elementoA`
 * na váriavel `resultadoSubtracao` (já criada abaixo)
 */
  
  var resultadoSubtracao = elementoB - elementoA;

//não altere as linhas abaixo
  return resultadoSubtracao;
}

---------------------------------------------------------------------------
11

function exponencial(base, expoente) {
//não altere a linha acima
    
/*
 * Na linha 36, declare uma variável chamada `potencia`
 * e atribua a ela o valor da variável `base` elevada a variável
 * `expoente`
 */
  
    var potencia = base ** expoente;
    



//não altere as linhas abaixo
  return potencia;
}

---------------------------------------------------------------------------
12

function moduloPorDois(elementoA) {
// não altere a linha acima

/*
 * Complete o código deste exercício, atribuindo na 
 * variável `resultado`, o resto da divisão da variável 
 * `elementoA` por 2.
 */
  
    
  var resultado = elementoA % 2;

    
// não altere as linhas abaixo
  return resultado;
}

---------------------------------------------------------------------------
14

function comparacaoEntreElementos(elementoA, elementoB) {
// não altere a linha acima
    
/*
 * Atribua como valor da variável `resultado` a verificação:
 * `elementoA` maior que `elementoB`?
 */
  
  var resultado = elementoA > elementoB;

// não altere as linhas abaixo
  return resultado;
}

---------------------------------------------------------------------------
15

function comparacaoEntreElementos(elementoA, elementoB) {
// não altere a linha acima
    
/*
 * Atribua como valor da variável `resultado` a verificação:
 * `elementoA` menor que `elementoB`?
 */
  
  var resultado = elementoA < elementoB;

// não altere as linhas abaixo
  return resultado;
}

---------------------------------------------------------------------------
16

function comparacaoEntreElementos(elementoA, elementoB) {
// não altere a linha acima
    
/*
 * Atribua como valor da variável `resultado` a verificação:
 * `elementoA` igual a `elementoB`?
 */
  
  var resultado = elementoA === elementoB;

// não altere as linhas abaixo
  return resultado;
}

---------------------------------------------------------------------------
18

function comparacaoEntreElementos(elementoA, elementoB) {
// não altere a linha acima
    
/*
 * Complete a função atribuindo na 
 * variável `resultado` a comparação 
 * `elementoA` E `elementoB`.
 */
  
  var resultado = elementoA && elementoB;

// não altere as linhas abaixo
  return resultado;
}
---------------------------------------------------------------------------
19

function comparacaoEntreElementos(elementoA, elementoB) {
// não altere a linha acima
    
/*
 * Complete a função atribuindo na 
 * variável `resultado` a comparação 
 * `elementoA` OU `elementoB`.
 */
  
  var resultado = elementoA || elementoB;

// não altere as linhas abaixo
  return resultado;
}

---------------------------------------------------------------------------
21

function verificaParOuImpar(elementoA) {
// não altere a linha acima
    
/* 
 * Atribua um dos seguintes valores na variável `resultado`
 *
 * par: se o valor da variável `elementoA` for par;
 * impar: se o valor da variável `elementoA` for ímpar;
 */
    var resultado;
    // Não altere a linha acima e responda na linha abaixo
    
    if(elementoA % 2 === 0){ resultado = console.log("par"); }
    else if(elementoA % 2 !== 0){ resultado = console.log("ímpar");}
    else{ resultado = console.log("Algo deu errado, verifique e tente novamente!");}

    // Não altere a linha abaixo
    return resultado;
}


---------------------------------------------------------------------------
22

/* 
 * Atribua um dos seguintes valores na variável `resultado`
 *
 * Geração silenciosa: para os nascidos até o ano de 1945;
 * Boomers: para os que nasceram depois de 1945 até 1964;
 * Geração X: para os que nasceram depois de 1964 até 1980;
 * Millennials: para os que nasceram depois de 1980 até 1996;
 * Geração Z: para os que nasceram depois de 1996;
 */
var resultado;
  if (anoDeNascimento <= 1945) {
    resultado = "Geração silenciosa";
} else if (anoDeNascimento > 1945 && anoDeNascimento <= 1964) {
    resultado = "Boomers";
} else if (anoDeNascimento > 1964 && anoDeNascimento <= 1980) {
    resultado = "Geração X";
} else if (anoDeNascimento > 1980 && anoDeNascimento <= 1996) {
    resultado = "Millennials";
} else {
    resultado = "Geração Z";}
  
// não altere as linhas abaixo
  return resultado;
}

---------------------------------------------------------------------------
24

function retornaPrimeiroElemento(lista) {
// não altere a linha acima
   
/*
 * Complete o código atribuindo na variável `resultado`
 * o primeiro elemento do array `lista` se o array não estiver vazio,
 * ou a string "array vazio" se o array `lista` estiver vazio.
 */
 
 var resultado = lista.length;
 if (resultado > 1) {
    resultado = lista[0];
 } else {
     resultado = "array vazio";
 }

// não altere as linhas abaixo
  return resultado;
}


---------------------------------------------------------------------------
25

function comparaStrings(primeiraString, segundaString) {
// não altere a linha acima

/*
 * Complete o código abaixo atribuindo na variável resultado
 * a concatenação das strings `primeiraString` e 
 * `segundaString` de acordo com as regras do exercício
 */
var resultado;
 
var s1 = primeiraString.length;
var s2 = segundaString.length;
 
if (s1 < s2){
    resultado = primeiraString + segundaString;
} else if (s2 <= s1){
    resultado = segundaString + primeiraString;
}
// não altere as linhas abaixo
  return resultado;
}

---------------------------------------------------------------------------
28

function imprimirLista(lista) {
// não altere a linha acima
    
/*
 * Nas linhas a seguir, escreva um código que imprima usando 
 * console.log() todos os elementos do array `lista`
 */
for (var indice = 0; indice < lista.length; indice++) {
    var mensagem = lista[indice];
    console.log(mensagem);
}
// não altere a linha abaixo
}

---------------------------------------------------------------------------
29

function converteStringParaArray(frase) {
// não altere a linha acima

 /*
 * Complete o código abaixo atribuindo na variável resultado
 * o valor de acordo com as regras do exercício
 */
    var resultado = [];
// escreva aqui seu código:
for(var contador = 0; contador < frase.length; contador++) {
    resultado.push(frase[contador]);
}

// não altere as linhas abaixo
  return resultado;
}


---------------------------------------------------------------------------
31

/*
 * Nas linhas abaixo, escreva uma função chamada `imprimeSaudacao``
 * que receba um parâmentro chamado `nome` e imprima:
 * "Olá, ", seguido do valor do parâmetro `nome`, seguido de exclamação (!)
 */
function imprimeSaudacao(nome) {
    console.log("Olá, " + nome + "!");
}

---------------------------------------------------------------------------
32

/*
 * Crie aqui uma função `somaDoisElementos`, que irá 
 * receber dois parâmetros, `elementoA` e `elementoB` 
 * e que retorne a soma desses dois números.
 */
function somaDoisElementos(elementoA, elementoB) {
    return elementoA + elementoB;
}

---------------------------------------------------------------------------
33

/*
 * Nas linhas abaixo, escreva uma função chamada `calculaIMC``
 * que receba dois parametros: `altura` e `peso`
 * e retorne o resultado do calculo de IMC
 */

function calculaIMC(altura, peso) {
    return peso / (altura * altura);
}

---------------------------------------------------------------------------
34

function multiplicaPorDois(numeros) {
var resultado = [];
for(var indice = 0; indice < numeros.length; indice ++) { 
resultado.push(numeros[indice] * 2)};

return resultado;
/*
 * Complete a função multiplicando todos os elementos
 * do array `numeros` por dois e retornando um array
 * com esses resultados
 */

}

---------------------------------------------------------------------------

Codigos aleatorios

function multiplicaPorDois(numeros) {
    for (var indice = 0; indice < numeros.length; indice ++) { 
    var saida = numeros[indice]; console.log(numeros)* 2};
    
    
function multiplicaPorDois(numeros) {
for (var indice = 0; indice < numeros.length; indice ++) { 
resultado.push(numeros[indice]);

--------------------------------------------------------------------
35     

function converteStringParaArray(frase) {
// não altere a linha acima

 /*
 * Complete o código abaixo atribuindo na variável resultado
 * o valor de acordo com as regras do exercício
 */
    var resultado = [];
// escreva aqui seu código:
for(var contador = 0; contador < frase.length; contador++) {
    resultado.push(frase[contador]);
}

// não altere as linhas abaixo
  return resultado;
  
  
function multiplicaPorDois(numeros, mul) {
var resultado = [];
for(var indice = 0; indice < numeros.length; indice ++) { 
resultado.push(numeros[indice])};

return resultado;

------------------------------------------------------------
34 editado

function multiplicaPorDois(numeros) {
var resultado = [];
for(var indice = 0; indice < numeros.length; indice ++) { 
resultado.push(numeros[indice] * 2)};

return resultado;

-----------------------------------------------------
36


function imprimaQuadradoAsterisco(n) {
// não altere a linha acima
/*
 * Escreva nas linhas a seguir um código que 
 * imprima um quadrado de asteríscos
 * de altura e largura igual ao valor de n
 */
for(var a = 0; a < n; a++) {
var ast = '';

for(var i = 0; i < n; i++) {
ast = ast + '*';}
console.log(ast);}
// não altere a linha abaixo
}

// fim do seu código
--------------------------------------------------------
37

function buscaNumeroPrimos(n) {
//não altere a linha acima

/*
 * Nas linhas a seguir, escreva um código que encontre todos
 * os números primos entre 0 e n e coloque-os num array chamado
 * `numerosPrimos`(você deve criar esse array)
 */
var numerosPrimos = [];
for (var numeroAtual = 2; numeroAtual < n; numeroAtual++) {
var quantidadeDeDivisores = 0;

for(var numeroMenor = 2; numeroMenor < numeroAtual; numeroMenor++) {
if (numeroAtual % numeroMenor == 0) {
      quantidadeDeDivisores ++;
    }
}
      
if (quantidadeDeDivisores == 0) {
    numerosPrimos.push(numeroAtual);
    }
}
//não altere as linhas abaixo
  return numerosPrimos;
}

----------------------------------------------------------------
38

function ehPalindromo(palavra) {
// não altere a linha acima

 /*
 * Complete o código abaixo para verificar se 
 * varíavel `palavra` é um palíndromo ou não.
 * Caso seja um palíndromo, a função deve retornar
 * `SIM, SOU UM PALÍNDROMO`, se não é um palídromo
 * a função deve retornar 
 * `INFELIZMENTE, NÃO SOU UM PALÍNDROMO`
 */
// escreva aqui seu código:    
var palindromo = "";

for(var index = palavra.length - 1; index >= 0; index--) {
  palindromo += palavra[index]
}

if (palavra == palindromo) {
  return "SIM, SOU UM PALÍNDROMO"
} else {
  return "INFELIZMENTE, NÃO SOU UM PALÍNDROMO"
}


// não altere as linhas abaixo
}
----------------------------------------------------------------
38 segunda versao

function ehPalindromo(palavra) {
// não altere a linha acima

 /*
 * Complete o código abaixo para verificar se 
 * varíavel `palavra` é um palíndromo ou não.
 * Caso seja um palíndromo, a função deve retornar
 * `SIM, SOU UM PALÍNDROMO`, se não é um palídromo
 * a função deve retornar 
 * `INFELIZMENTE, NÃO SOU UM PALÍNDROMO`
 */
// escreva aqui seu código:    
    for(var i = 0; i < palavra.length / 2; i++) {
    if (palavra[i] != palavra[palavra.length - i - 1]) {
    return "INFELIZMENTE, NÃO SOU UM PALÍNDROMO"; // True
    }
}
    return "SIM, SOU UM PALÍNDROMO"; // False

    


// não altere as linhas abaixo
}
  
  
------------------------------------------------------------------------------------


/*
 * Complete a função 'converteTemperatura' abaixo.
 *
 * O retorno da função é uma variável do tipo FLOAT.
 * Os parâmetros da função são os seguintes:
 *  1. FLOAT temperatura
 *  2. STRING escalaOrigem
 *  3. STRING escalaDesejada
 */

function converteTemperatura(temperatura, escalaOrigem, escalaDesejada) {
    // Escreva seu código aqui
const celsiusToKelvin = temperatura + 273.15;
const kelvinToCelsius = temperatura - 273.15;
const celsToFahrenheit = (temperatura * 1.8) + 32;
const fahrenheintToCelsius = (temperatura - 32) / 1.8;
const fahrenheintToKelvin = (temperatura - 32) * 5/9 + 273.15;
const kelvinTofahrenheint = (temperatura - 273.15) * 9/5 + 32;

if (escalaOrigem == "celsius" && escalaDesejada == "kelvin") {
return celsiusToKelvin;
}
else if (escalaOrigem == "kelvin" && escalaDesejada == "celsius") {
return kelvinToCelsius;
}
else if (escalaOrigem == "celsius" && escalaDesejada == "fahrenheit") {
return celsToFahrenheit;
}
else if (escalaOrigem == "fahrenheit" && escalaDesejada == "celsius") {
return fahrenheintToCelsius;
}
else if (escalaOrigem == "fahrenheit" && escalaDesejada == "kelvin") {
return fahrenheintToKelvin;
}
else if (escalaOrigem == "kelvin" && escalaDesejada == "fahrenheit") {
return kelvinTofahrenheint;
}
}
--------------------------------------------------------------------------------
  
/*
 * Complete a função 'tripleTheChances' abaixo.
 *
 * O retorno da função é uma variável do tipo INTEGER_ARRAY.
 * A função aceita o parâmetro chances do tipo INTEGER_ARRAY.
 */

function tripleTheChances(chances) {
    // Write your code here
var resultado = [];
for(var indice = 0; indice < chances.length; indice ++) { 
resultado.push(chances[indice] * 3)};
return resultado;
}
  
---------------------------------------------------------------------------------

Urna
  
/*
 * Complete a função 'urna' abaixo.
 *
 * O retorno da função é uma variável do tipo CHARACTER.
 * O parâmetro da função é a variável votos, do tipo CHARACTER_ARRAY.
 */

function urna(votos) {
    // Escreva seu código aqui
var quantidaDeElementosA = votos.filter (a => a === "A").length;
console.log("Votos A = " + quantidaDeElementosA);
var quantidaDeElementosB = votos.filter (b => b === "B").length;
console.log("Votos B = " + quantidaDeElementosB);
var quantidaDeElementosC = votos.filter (c => c === "C").length;
console.log("Votos C = " + quantidaDeElementosC);

if (quantidaDeElementosA > quantidaDeElementosB && quantidaDeElementosC < quantidaDeElementosA) {
    return "A"
}
else if (quantidaDeElementosB > quantidaDeElementosA && quantidaDeElementosC < quantidaDeElementosB) {
    return "B"
} 
else if (quantidaDeElementosC > quantidaDeElementosA && quantidaDeElementosB < quantidaDeElementosC) {
    return "C"
}
else {
    return;
}
}
  


---------------------------------------------------------------
// https://www.hackerrank.com/interview/interview-preparation-kit?h_l=domains&h_r=hrw&utm_source=hrwCandidateFeedback
// https://www.hackerrank.com/skills-verification
