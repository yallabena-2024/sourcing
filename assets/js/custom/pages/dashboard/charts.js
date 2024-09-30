var ctx = document.getElementById('myBarChart').getContext('2d');
var myHorizontalBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mail-Orders', 'Online', 'In-Store'],
    datasets: [{
      label: 'Sales',
      data: [470, 420, 560], // Example sales data -- here you can make it dynamically
      backgroundColor: [
        'rgb(161, 28, 123)',
        'rgb(199, 120, 178)',
        'rgba(224, 64, 46)'
      ],
      borderWidth: 1,
      borderRadius: {
        topRight: 10,
        bottomRight: 10,
        topLeft: 0,
        bottomLeft: 0
      }
    }]
  },
  options: {
    indexAxis: 'y', // Make the bar chart horizontal
    scales: {
      x: {
        beginAtZero: true
      },
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.dataset.label + ': ' + tooltipItem.raw + ' Sales';
          }
        }
      }
    },
  }
});