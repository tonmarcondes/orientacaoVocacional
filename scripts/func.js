// function starts when page is full loaded
window.onload = () => {
  console.log("Page loaded");

  const dados = document.getElementById("dados");
  dados.style.display = "block";

  const bloco1 = document.getElementById("bloco1");
  bloco1.style.display = "none";

  const bloco2 = document.getElementById("bloco2");
  bloco2.style.display = "none";

  const bloco3 = document.getElementById("bloco3");
  bloco3.style.display = "none";

  const result = document.getElementById("result");
}
const showDados = () => {
  dados.style.display = "block";
  bloco1.style.display = "none";
  bloco2.style.display = "none";
  bloco3.style.display = "none";
}

const showBloco1 = () => {
  // const bloco1 = document.getElementById("bloco1");
  dados.style.display = "none";
  bloco1.style.display = "block";
  bloco2.style.display = "none";
  bloco3.style.display = "none";
}

const showBloco2 = () => {
  // const bloco2 = document.getElementById("bloco2");
  dados.style.display = "none";
  bloco1.style.display = "none";
  bloco2.style.display = "block";
  bloco3.style.display = "none";
}

const showBloco3 = () => {
  // const bloco3 = document.getElementById("bloco3");
  dados.style.display = "none";
  bloco1.style.display = "none";
  bloco2.style.display = "none";
  bloco3.style.display = "block";
}

const showResult = () => {
  // const result = document.getElementById("result");
  result.style.display = "block";
  dados.style.display = "none";
  bloco1.style.display = "none";
  bloco2.style.display = "none";
  bloco3.style.display = "none";
}




// Pega o argumento passado na linha de comando
// const argumento = process.argv[2];

// Verifica se o argumento foi passado
// argumento
//   ? console.log("O argumento passado foi:", argumento)
//   : console.log("Nenhum argumento foi passado.")

const notaw = (nota) => {
  let notas = [0, 1, 2, 3, 4, 5];
  let notasrestantes = notas.splice(notas.indexOf(nota), 1)

  console.log("notas ", notas)
  console.log("notasrestantes ", notasrestantes)
}

// notaw(argumento);

// create a select element with options from array of notas and append to body
const notas = [0, 1, 2, 3, 4, 5];

notas.forEach((nota) => {
  const select = document.getElementById("select");
  const option = document.createElement("option");
  option.value = nota;
  option.innerHTML = nota;
  // select.appendChild(option)
});