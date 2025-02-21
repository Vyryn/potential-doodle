let chart = false;

function loadTableData() {
    fetch('data/data.json')
      .then(response => response.json())
      .then(data => {
        const tbody = document.querySelector('#benchmarkTable tbody');
        tbody.innerHTML = ''; // Clear any existing data
        data.forEach(row => {
          const tr = document.createElement('tr');
          const gpqaPercent = (row.gpqa * 100).toFixed(0) + '%';
          tr.innerHTML = `
            <td>${row.modelTitle}</td>
            <td>${row.company}</td>
            <td>${gpqaPercent}</td>
          `;
          tbody.appendChild(tr);
        });
        return data;
      })
      .then(data =>{
        if (!chart) {
            createChart(data);
            chart = true;
        }
    })
    .catch(error => console.error('Error loading data:', error));
  }
  
  // Load table data when DOM is ready
  document.addEventListener("DOMContentLoaded", loadTableData);
