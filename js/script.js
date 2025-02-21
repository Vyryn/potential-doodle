
function loadTableData() {
    fetch('data/data.json')
      .then(response => response.json())
      .then(data => {
        const tbody = document.querySelector('#benchmarkTable tbody');
        tbody.innerHTML = ''; // Clear any existing data
        data.forEach(row => {
          const tr = document.createElement('tr');
          const gpqaPercent = (row.gpqa * 100).toFixed(0) + '%';
          const sizeperf = row.gpqa * 50 / row.size
          tr.innerHTML = `
            <td>${row.modelTitle}</td>
            <td>${row.company}</td>
            <td>${gpqaPercent}</td>
            <td>${row.size}</td>
            <td>${sizeperf}</td>
          `;
          tbody.appendChild(tr);
        });
      })
      .catch(error => console.error('Error loading data:', error));
  }
  
  // Load table data when the table is loaded
  document.addEventListener("DOMContentLoaded", loadTableData);
