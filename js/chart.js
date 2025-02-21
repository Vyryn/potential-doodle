function createChart(data) {
    // Sort data descending by benchmarkHigh and select the top 15
    const sortedData = data.slice().sort((a, b) => b.gpqa - a.gpqa);
    const top15 = sortedData.slice(0, 15);
    const labels = top15.map(item => item.modelName);
    const tableValues = top15.map(item => item.gpqa * 100);
  
    // Get the canvas context and create the chart
    const ctx = document.getElementById('leaderboardChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Top Models by GPQA (%)',
          data: tableValues,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
                callback: function(value) {
                  return value + '%';
          }
        }
      }
    });
  }
  