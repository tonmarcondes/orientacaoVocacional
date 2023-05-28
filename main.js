import { perguntas } from "./scripts/banco.js";
import { generateGroups } from "./scripts/embaralha.js";
import { estruturaHTML } from "./scripts/func.js";
import { grafico } from "./scripts/grafico.js";

localStorage.clear();

generateGroups();

document.onload = () => {
  estruturaHTML();
};

const soma = () => {
  for (let i = 0; i < grupos.length; i++) {
    // console.log(`Grupo ${i + 1}:`);
    grupos[i].forEach((pergunta, index) => {
      const inteligencia = ["ling", "mat", "esp", "mus", "corp", "interp", "intra"]
      const res = document.getElementById(`res${i + 1}${index + 1}`).value;
      inteligencia.forEach(element => {
        (pergunta.category == element)? (element = res):'';
      });

      console.log(
        `Pergunta ${index + 1}: ${pergunta.question} | Categoria: ${
          pergunta.category
        }`
      );
    });
    console.log("---------------------------");
  }
};
