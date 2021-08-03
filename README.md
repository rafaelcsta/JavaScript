# JavaScript
## conteúdos do curso introdutório da Trybe e cusros fullstack offline

No console do chrome de uma index.html

##### Definindo uma variável. (podemos usar var ou let)
##### var tituloDoConteudo = "Variáveis e Constantes";
##### tituloDoConteudo (Exibirá o valor armazenado na variável)
##### para atribuir outro valor a uma variável existente:
##### tituloDoConteudo = "tipos primitivos";
###### var HubDaTrybe = "Santa Catarina";

JS define as variáveis usando Camel Case, que refere-se a forma
de alternar letras maiúsculas e minúsculas no nome da variável.
Que ao final apresenta semelhança com ondulações presentes nas costas de um camelo.
Além disso não podemos usar "_" entre_as_palavras ou iniciar com números o nome das variáveis.

##### const duracaoMaximaDoCurso = "12 Meses";
Ao tentar atribuir um novo valor a uma constante
receberemos um erro, porque uma constante armazena
um valor de forma insubstituível.

##### Tipos Primitivos

var nomeDoEstudante = "Rafael";

var status = true;

var hub = "SC";

var turma = 1;

string
bolean
number

###### typeof "dado"; ou typeof nomeDaVar;
typeof turma;

###### Comentarios JS:
###### // Use comentarios iniciando a linha com duas barras para comentario de uma linha.

###### /* para comentarios
###### que excedem uma linha,
###### use barra asterisco para
###### iniciar e asterisco barra
###### para encerrar*/

Operadores aritmeticos, Comparacao, Logicos e Estrutura Condicional:

###### + = adicao
###### - = subtracao
###### * = multiplicacao
###### / = divisao
###### ** = exponenciacao
###### % = resto

Operadores de Comparacao:

###### > maior que
###### < menor que
###### >= maior ou igual
###### <= menor ou igual
###### === comparador de igualdade
###### !== comparador de desigualdade
Ex: 1 === 1; retorno True ou 1 !== 1; retorno False

###### Operadores Logicos:
E e OU

###### No contexto de E:
###### E = &&
###### Se todas as afirmacoes anteriores forem verdadeiras a ultima tambem sera verdadeira.
###### Se uma das duas afirmacoes anteriores for falsa, a terceira tambem sera falsa.
###### Se as duas anteriores forem falsas a ultima tambem sera falsa.

var um = 1;
var dois = 2;
var DoisEhMaiorQueUm = dois > um;
DoisEhMaiorQueUm
...

###### No contexto de OU:

###### OU = ||, se uma das condicoes forem verdadeiras, o resultado sera verdadeiro, caso contrario a ultima sera falsa.

var um = 1;
var dois = 2;
var tres = 3;

var comparacao = um || dois !== tres; Retorna true
...

### Estrutura Condicional If/Else

###### var notaDesafio = 150;
###### undefined
###### if (notaDesafio >= 100) { console.log("Aprovado!"); } else { console.log("Reprovado!"); }
###### VM1652:1 Aprovado!
###### undefined
###### notaDesafio = 90;
###### 90
###### if (notaDesafio >= 100) { console.log("Aprovado!"); } else { console.log("Reprovado!"); }
###### VM1671:1 Reprovado!
###### undefined

###### var elementoA = 10;
###### if (elementoA % 2 == 0) { resultado = "Par"; } else if (elementoA % 2 == 1){ resultado = "Impar"; }

Teste com estrutura de condicoes encadeadas

var anoDeNascimento = 1800;

###### if (anoDeNascimento <= 1945){ resultado = console.log("Geração Silenciosa!"); }
###### else if (anoDeNascimento > 1945 && anoDeNascimento <= 1964){ resultado = console.log("Geração Booners!");}
###### else if (anoDeNascimento > 1964 && anoDeNascimento <= 1980){ resultado = console.log("Geração X!");}
###### else if (anoDeNascimento > 1980 && anoDeNascimento <= 1996){ resultado = console.log("Geração Millennials!");}
###### else if (anoDeNascimento > 1996){ resultado = console.log("Geração Z!");}
###### else { resultado = console.log("Algo deu errado, verifique e tente novamente!");}

anoDeNascimento 1981;

ver resultado...

Estrutura de Repeticao com for:

###### var numero = 7; for (var contador = 1; contador <= 9; contador ++) { console.log(numero * contador)};

###### var listaDeNomes = ["Janeiro", "Fevereiro", "Marco"];
###### for (var indice = 0; indice < listaDeNomes.length; indice ++) { mensagem = "Boas vindas, " + listaDeNomes[indice] + "!"; console.log(mensagem)};

Estrutura de repeticao varrendo array.

###### for (var indice = 0; indice < lista.length; indice++) {
###### var mensagem = lista[indice];
###### console.log(mensagem);
###### }

###### var mesDoNascimento = ["Janeiro", "Fevereiro", "Marco"]
###### var conCatenadas =  mesDeNascimento[0] + mesDeNascimento[1] + mesDeNascimento[2]
###### conCatenadas.length;

###### for (var indice = 0; indice < strings.length; indice ++) { saida = strings[indice]; console.log(saida)};

###### for (var indice = 0; indice < strings.length; strings[indice]++) { console.log(indice)}; //Nao usar!

Estrutura de repeticao com for para converter strings em arrays.

###### for(var contador = 0; contador < strings.length; contador++) {
######    resultado.push(strings[contador]);}
