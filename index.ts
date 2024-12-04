import Arvore from "./arvore/Arvore";
import Aluno from "./models/Aluno";

let aluno1 = new Aluno("João", 20);
let aluno2 = new Aluno("Maria", 22);
let aluno3 = new Aluno("José", 21);
let aluno4 = new Aluno("Ana", 19);
let aluno5 = new Aluno("Pedro", 23);
let aluno6 = new Aluno("Paulo", 24);
let aluno7 = new Aluno("Carla", 25);
let aluno8 = new Aluno("Mariana", 26);
let aluno9 = new Aluno("Lucas", 27);
let aluno10 = new Aluno("Luana", 28);

let arvore = new Arvore<Aluno>();

arvore.adicionar(aluno1);
arvore.adicionar(aluno2);
arvore.adicionar(aluno3);
arvore.adicionar(aluno4);
arvore.adicionar(aluno5);
arvore.adicionar(aluno6);
arvore.adicionar(aluno7);
arvore.adicionar(aluno8);
arvore.adicionar(aluno9);
arvore.adicionar(aluno10);

console.log(arvore.raiz?.elemento);
console.log(arvore.tamanho);

console.log(arvore.raiz?.esquerda?.elemento);
console.log(arvore.raiz?.direita?.elemento);
console.log(arvore.raiz?.esquerda?.esquerda?.elemento);
