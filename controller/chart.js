
// script.js

// Fazer a requisição AJAX para obter os dados (simulado aqui)
// Substitua esses valores pelos dados reais obtidos da requisição
const totalPF = 250;
const totalPJ = 50;
const totalGeral = totalPF + totalPJ;

// Dados do gráfico
const data = {
  labels: ['P.F', 'P.J', 'Total Geral'],
  datasets: [{
    data: [totalPF, totalPJ, totalGeral],
    backgroundColor: [' #8BC34A', '#689F38', '#33691E']
  }]
};

// Opções do gráfico
const options = {
  responsive: true,
  maintainAspectRatio: false
};

// Criar o gráfico de pizza
const ctx = document.getElementById('pieChart').getContext('2d');
const myPieChart = new Chart(ctx, {
  type: 'pie',
  data: data,
  options: options
});
