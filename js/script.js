
function loadTableData() {
    fetch('data/data.json')
      .then(response => response.json())
      .then(data => {
        const tbody = document.querySelector('#benchmarkTable tbody');
        tbody.innerHTML = ''; // Clear any existing data
        data.forEach(row => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${row.modelTitle}</td>
            <td>${row.company}</td>
            <td>${row.gpqa}</td>
          `;
          tbody.appendChild(tr);
        });
      })
      .catch(error => console.error('Error loading data:', error));
  }
  
  // Load table data when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", loadTableData);
  