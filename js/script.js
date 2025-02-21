
function loadTableData() {
    fetch('data/data.json')
      .then(response => response.json())
      .then(data => {
        const tbody = document.querySelector('#benchmarkTable tbody');
        tbody.innerHTML = ''; // Clear any existing data
        data.forEach(row => {
          const tr = document.createElement('tr');
          const gpqaPercent = (row.gpqa * 100).toFixed(0) + '%';
          const size =extractInt(row.size)
          const sizeperf = ((row.gpqa * 100 - 25) / (4 * size)).toFixed(3);
          tr.innerHTML = `
            <td>${row.modelTitle}</td>
            <td>${row.company}</td>
            <td>${gpqaPercent}</td>
            <td>${size}</td>
            <td>${sizeperf}</td>
          `;
          tbody.appendChild(tr);
        });
      })
      .catch(error => console.error('Error loading data:', error));
  }

function extractInt(str) {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
}
  
  // Load table data when the table is loaded
  document.addEventListener("DOMContentLoaded", loadTableData);
