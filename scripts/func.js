import { grafico } from "./grafico.js";

export const bt1 = () => {
  localStorage.setItem("name", document.getElementById("nameInput").value);
  const dados = document.getElementById("dados");
  const b1 = document.getElementById("bloco1");
  dados.style.display = "none";
  b1.style.display = "block";
};

export const bt2 = () => {
  const b1 = document.getElementById("bloco1");
  const b2 = document.getElementById("bloco2");
  b1.style.display = "none";
  b2.style.display = "block";
};

export const bt3 = () => {
  const b2 = document.getElementById("bloco2");
  const b3 = document.getElementById("bloco3");
  b2.style.display = "none";
  b3.style.display = "block";
};

export const bt4 = () => {
  const b3 = document.getElementById("bloco3");
  const b4 = document.getElementById("bloco4");
  b3.style.display = "none";
  b4.style.display = "block";
};

export const bt5 = () => {
  const b4 = document.getElementById("bloco4");
  const b5 = document.getElementById("bloco5");
  b4.style.display = "none";
  b5.style.display = "block";
};

export const bt6 = () => {
  const b5 = document.getElementById("bloco5");
  const b6 = document.getElementById("bloco6");
  b5.style.display = "none";
  b6.style.display = "block";
};

export const bt7 = () => {
  const b6 = document.getElementById("bloco6");
  const b7 = document.getElementById("bloco7");
  b6.style.display = "none";
  b7.style.display = "block";
};

export const result = () => {
  const b7 = document.getElementById("bloco7");
  const result = document.getElementById("result");
  b7.style.display = "none";
  result.style.display = "block";
  
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