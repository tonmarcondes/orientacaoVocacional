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
  select.appendChild(option)
});