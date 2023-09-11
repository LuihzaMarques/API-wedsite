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


/*
function fetchDataAndUpdateChart() {
  fetch('URL_DA_API_COM_OS_DADOS', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao obter os dados');
      }
      return response.json();
    })
    .then(newData => {
      // Atualizar os dados do gráfico com os novos dados recebidos
      updateChart(newData);
    })
    .catch(error => {
      console.error('Erro ao buscar os dados:', error);
    });
}

//novos dados
function updateChart(newData) {
  // Atualize os valores do gráfico com os novos dados
  myPieChart.data.datasets[0].data = [newData.totalPF, newData.totalPJ, newData.totalGeral];

  // Atualize o gráfico
  myPieChart.update();
}

// Chame a função fetchDataAndUpdateChart() para buscar os dados e atualizar o gráfico
fetchDataAndUpdateChart();
*/