// Importar as perguntas do arquivo "script/banco.js"
import { perguntas } from './banco.js';

export const generateGroups = () => {

// Função para embaralhar um array usando o algoritmo Fisher-Yates
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Embaralhar as perguntas
const perguntasEmbaralhadas = shuffleArray(perguntas);

// Dividir as perguntas em 7 grupos de 4 perguntas cada
const grupos = [];
for (let i = 0; i < perguntasEmbaralhadas.length; i += 4) {
  grupos.push(perguntasEmbaralhadas.slice(i, i + 4));
}

// Mostrar as perguntas em cada grupo
for (let i = 0; i < grupos.length; i++) {
  console.log(`Grupo ${i + 1}:`);
  grupos[i].forEach((pergunta, index) => {
    localStorage.setItem(`per${i + 1}${index + 1}`, pergunta.question);
    localStorage.setItem(`res${i + 1}${index + 1}`, pergunta.category);

    const per = document.getElementById(`per${i + 1}${index + 1}`);
    per.innerHTML = pergunta.question;

    console.log(`Pergunta ${index + 1}: ${pergunta.question} | Categoria: ${pergunta.category}`);
  });
  console.log('---------------------------');
  }
}