// here is the bar chart

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

// here is the line chart
var ctx = document.getElementById('lineChart').getContext('2d');
var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['01-07', '08-14', '08-14', '08-14', '15-21', '22-30'],
    datasets: [
      {
        label: 'Spicy variants',
        data: [4, 3, 4, 3, 5, 4],
        borderColor: '#FF5733',  // orange color
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        pointBackgroundColor: '#FF5733',
        pointBorderColor: '#FF5733',
        fill: false,
        tension: 0 // controls the curvature of the lines
      },
      {
        label: 'Original variants',
        data: [1, 2, 1, 2, 3, 2],
        borderColor: '#9C27B0',  // purple color
        backgroundColor: 'rgba(156, 39, 176, 0.2)',
        pointBackgroundColor: '#9C27B0',
        pointBorderColor: '#9C27B0',
        fill: false,
        tension: 0
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});