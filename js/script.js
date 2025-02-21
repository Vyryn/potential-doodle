
function loadTableData() {
    fetch('data/data.json')
      .then(response => response.json())
      .then(data => {
        const tbody = document.querySelector('#benchmarkTable tbody');
        tbody.innerHTML = ''; // Clear any existing data
        data.forEach(row => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${row.modelName}</td>
            <td>${row.company}</td>
            <td>${row.benchmarkLow}</td>
            <td>${row.benchmarkDiff}</td>
            <td>${row.benchmarkHigh}</td>
          `;
          tbody.appendChild(tr);
        });
      })
      .catch(error => console.error('Error loading data:', error));
  }
  
  // Load table data when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", loadTableData);
  