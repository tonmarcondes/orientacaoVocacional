export const grafico = (ling, mat, esp, mus, corp, interp, intra) => {
    // Obtenha a referência para o elemento canvas
    const canvas = document.getElementById("meuGraficoPizza");
   
    // Crie o contexto do gráfico
    const ctx = canvas.getContext("2d");
   
    // Defina os dados do gráfico de pizza
   
    const data = {
      labels: ["Linguística", "Lógico-Matemática", "Espacial", "Musical", "Corporal-Cinestésica", "Interpessoal", "Intrapessoal"],
      datasets: [
        {
          data: [ling, mat, esp, mus, corp, interp, intra],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#33FF99", "#9933FF", "#FFA500", "#A9A9A9"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#33FF99", "#9933FF", "#FFA500", "#A9A9A9"],
        },
      ],
    };
   
    // Crie uma instância do gráfico de pizza
    const meuGraficoPizza = new Chart(ctx, {
      type: "pie",
      data,
    });
}