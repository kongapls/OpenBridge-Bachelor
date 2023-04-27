const {ipcRenderer} = require('electron');
// const Chart = require('chart.js');

const modbusDataElement = document.getElementById('modbus-data');
const modbusDataElementknapp1 = document.getElementById('knapp1-data');
const modbusDataElementknapp2 = document.getElementById('knapp2-data');
const modbusDataElementsine = document.getElementById('sine-raw-data');
const modbusDataElementsinescaled = document.getElementById('sine-scaled-big-data');



ipcRenderer.on('modbus-data', (event, data) => {
  console.log("Received Modbus data: " + data);
  modbusDataElement.innerHTML = data;
});

ipcRenderer.on('knapp1-data', (event, data) => {
  console.log("Received Knapp 1 data: " + data);
  modbusDataElementknapp1.innerHTML = data;
});

ipcRenderer.on('knapp2-data', (event, data) => {
  console.log("Received Knapp 2 data: " + data);
  modbusDataElementknapp2.innerHTML = data;
});

ipcRenderer.on('sine-raw-data', (event, data) => {
  console.log("Received Sine raw data: " + data);
  modbusDataElementsine.innerHTML = data;
});

ipcRenderer.on('sine-scaled-big-data', (event, data) => {
  console.log("Received Sine scaled big data: " + data);
  modbusDataElementsinescaled.innerHTML = data;
});


function getModbusData() {
  ipcRenderer.send('get-modbus-data');
}
/* 
function createTrend() {
  const trendData = [];
  let scaleMax = 1; // initialize the scale maximum to 1
  let scaleMin = 0; // initialize the scale minimum to 0
  
  const chartElement = document.getElementById('chart');
  const chart = new Chart(chartElement, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Trend',
        data: [],
        borderColor: 'blue',
        fill: false
      }]
    },
    options: {
      animation: false,
      scales: {
        xAxes: [{
          type: 'realtime',
          realtime: {
            duration: 30000,
            refresh: 1000,
            delay: 1000,
            onRefresh: function(chart) {
              const value = 'sine-raw-data'; // Replace this with your actual data source
              trendData.push(value);
              
              // Only keep the past 30 seconds of data
              if (trendData.length > 30) {
                trendData.shift();
              }
              
              // Update the scale maximum and minimum
              scaleMax = Math.max(scaleMax, ...trendData);
              scaleMin = Math.min(scaleMin, ...trendData);
              
              chart.data.datasets[0].data.push({
                x: Date.now(),
                y: value
              });
            }
          }
        }],
        yAxes: [{
          ticks: {
            min: scaleMin, // Use the updated scale minimum
            max: scaleMax // Use the updated scale maximum
          }
        }]
      }
    }
  });
 */
  setInterval(() => {
    getModbusData();
    // chart.update();
  }, 100);

/* document.addEventListener("DOMContentLoaded", () => {
  createTrend();
}); */