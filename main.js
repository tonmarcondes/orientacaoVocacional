import { perguntas } from "./scripts/banco.js";
import { generateGroups } from "./scripts/embaralha.js";
import { estruturaHTML } from "./scripts/func.js";
import { grafico } from "./scripts/grafico.js";

localStorage.clear();

generateGroups();

document.onload = () => {
  estruturaHTML();
  grafico(12, 2, 37, 4, 15, 6, 7);
};

const soma = () => {
    let ling = 0;
    let mat = 0;
    let esp = 0;
    let mus = 0;
    let corp = 0;
    let interp = 0;
    let intra = 0;
    
    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 4; j++) {
        const res = localStorage.getItem(`res${i}${j}`);
        if (res === "ling") {
            ling += document.getElementById(`res${i}${j}`).value;
        } else if (res === "mat") {
            mat += document.getElementById(`res${i}${j}`).value;
        } else if (res === "esp") {
            esp += document.getElementById(`res${i}${j}`).value;
        } else if (res === "mus") {
            mus += document.getElementById(`res${i}${j}`).value;
        } else if (res === "corp") {
            corp += document.getElementById(`res${i}${j}`).value;
        } else if (res === "interp") {
            interp += document.getElementById(`res${i}${j}`).value;
        } else if (res === "intra") {
            intra += document.getElementById(`res${i}${j}`).value;
        }
        }
    }
    
    grafico(ling, mat, esp, mus, corp, interp, intra);
};

const btn = document.getElementById("btn");
btn.addEventListener("click", soma);
