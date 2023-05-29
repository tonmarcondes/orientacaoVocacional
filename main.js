import { perguntas } from "./scripts/banco.js";
import { generateGroups } from "./scripts/embaralha.js";
import { bt1, bt2, bt3, bt4, bt5, bt6, bt7, result } from "./scripts/func.js";


generateGroups();

document.onload = () => {
  localStorage.clear();
  estruturaHTML();
};

const b1 = document.getElementById("b1");
b1.addEventListener("click", bt1);

const b2 = document.getElementById("b2");
b2.addEventListener("click", bt2);

const b3 = document.getElementById("b3");
b3.addEventListener("click", bt3);

const b4 = document.getElementById("b4");
b4.addEventListener("click", bt4);

const b5 = document.getElementById("b5");
b5.addEventListener("click", bt5);

const b6 = document.getElementById("b6");
b6.addEventListener("click", bt6);

const b7 = document.getElementById("b7");
b7.addEventListener("click", bt7);

const btResult = document.getElementById("btResult");
btResult.addEventListener("click", result);

const nomeDoUsuario = document.getElementById("nomeDoUsuario");
nomeDoUsuario.innerHTML = `Parabéns <b>${localStorage.getItem("name")}</b>, ao término de suas respostas, este é o seu resultado:`;