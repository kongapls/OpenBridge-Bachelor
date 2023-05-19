const { ipcRenderer } = require("electron");

const modbusDataElement = document.getElementById("modbus-data");
const modbusDataElementknapp1 = document.getElementById("knapp1-data");
const modbusDataElementknapp2 = document.getElementById("knapp2-data");
const modbusDataElementsine = document.getElementById("sine-raw-data");
const modbusDataElementsinescaled = document.getElementById(
  "sine-scaled-big-data"
);

ipcRenderer.on("modbus-data", (event, data) => {
  console.log("Received Modbus data: " + data);
  modbusDataElement.innerHTML = data;
});

ipcRenderer.on("knapp1-data", (event, data) => {
  console.log("Received Knapp 1 data: " + data);
  modbusDataElementknapp1.innerHTML = data;
});

ipcRenderer.on("knapp2-data", (event, data) => {
  console.log("Received Knapp 2 data: " + data);
  modbusDataElementknapp2.innerHTML = data;
});

ipcRenderer.on("sine-raw-data", (event, data) => {
  console.log("Received Sine raw data: " + data);
  modbusDataElementsine.innerHTML = data;
});

ipcRenderer.on("sine-scaled-big-data", (event, data) => {
  console.log("Received Sine scaled big data: " + data);
  modbusDataElementsinescaled.innerHTML = data;
});

function getModbusData() {
  ipcRenderer.send("get-modbus-data");
}

setInterval(() => {
  getModbusData();
}, 100);
