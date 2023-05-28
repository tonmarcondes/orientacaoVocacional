export const estruturaHTML = () => {
  for (let i = 1; i <= 4; i++) {
    const div = document.createElement("div");
    console.log(`GRUPO ${i + 1}:`);
    div.id = `div${i + 1}`;
    div.style.backgroundColor = "#f00";
    div.style.height = "100px";
    div.innerHTML = `Bloco ${i + 1}`;
    // div.classList.add("mb-3");
    const bloco = document.getElementById(`"bloco${i}"`);
    bloco.appendChild(div);
  }
};
