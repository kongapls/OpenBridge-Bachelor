const { app, BrowserWindow, ipcMain } = require('electron');

const ModbusRTU = require('modbus-serial');
const client = new ModbusRTU();

const RANDOMCOUNT = 0;
const SINRAW = 2;
const SWITCHONE = 4;
const SWITCHTWO = 5;

const FREQUENCY = 1; // Hz
const AMPLITUDE = 1000;
const OFFSET = 1000;
const NUMSAMPLES = 100;
const REGISTERADDRESS = 32000; // The input register to write to

const DEBUG = true;

const DELAY = 100;

let mainWindow;

function createWindow() {
  const { screen } = require('electron')
  const primaryDisplay = screen.getPrimaryDisplay()
  const { width, height } = primaryDisplay.workAreaSize
  mainWindow = new BrowserWindow({
    fullscreen: true,
    width,
    height,
    autoHideMenuBar: true,
    restoreIdentifier: 'mainWindow',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  mainWindow.loadFile('./IndexNew.html');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', () => {
  createWindow();
  connectModbus();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


function connectModbus() {
  client.connectTCP("158.38.140.60", { port: 502 })
    .then(() => {
      console.log("Connected to Modbus PLC");
      startReadingModbus();
      sendData();
     })
     .catch(error => {
      console.error(error);
    });
  }

// Generate and write the sine wave values continuously
function sendData() { 
      let i = 0
      setInterval(() => {
      if (i < NUMSAMPLES) {
        value = Math.sin(2 * Math.PI * FREQUENCY * i / NUMSAMPLES) * AMPLITUDE + OFFSET;
        i++;
        value = value.toFixed(3); //Restrict the decimals
        // highBits = value >> 16;
        // lowBits = value & 0xFFFF;
        client.writeRegisters(REGISTERADDRESS, [value]) //send values
        .catch(error => {
          console.error(error);
        });
        if(DEBUG){
        console.log('OUT: Values written to input register : '+ value);
        }
      } else {
        i=0;
      }
    }, DELAY);
  }

//Receive signals
function startReadingModbus() {
  setInterval(() => {
    client.readInputRegisters(0, 7, function (err, data) {
      if (err) {
        console.log("Modbus error: " + err);
        return;
      }
      SINVALUE = data.data[SINRAW];
      SINSCALED = ((data.data[SINRAW]/10) - 100).toFixed(3); //scale signal to fit format

      if(DEBUG){
      console.log("IN: Sine Scaled Big data: " + SINSCALED,"Sine Raw data: " + SINVALUE,"Knapp 2 Verdi: " + data.data[SWITCHTWO], "Knapp 1 Verdi: " + data.data[SWITCHONE], "Modbus data: " + data.data[RANDOMCOUNT] );
      }
      mainWindow.webContents.send('modbus-data', data.data[RANDOMCOUNT]);
      mainWindow.webContents.send('knapp1-data', data.data[SWITCHONE]);
      mainWindow.webContents.send('knapp2-data', data.data[SWITCHTWO]);
      mainWindow.webContents.send('sine-raw-data', SINVALUE);
      mainWindow.webContents.send('sine-scaled-big-data', SINSCALED);
    });
  }, DELAY);
}


ipcMain.on('get-modbus-data', (event) => {
  client.readInputRegisters(0, 7, function (err, data) {
    if (err) {
      console.log("Modbus error: " + err);
      return;
    }

    SINVALUE = data.data[SINRAW];
    SINSCALED = ((data.data[SINRAW]/1000) - 1).toFixed(3); //scale signal to fit format

    if(DEBUG){
    console.log("PUSHED: Sine Scaled Big data: " + SINSCALED,"Sine Raw data: " + SINVALUE,"Knapp 2 Verdi: " + data.data[SWITCHTWO], "Knapp 1 Verdi: " + data.data[SWITCHONE], "Modbus data: " + data.data[RANDOMCOUNT] );
    }
    event.reply('modbus-data', data.data[RANDOMCOUNT]);
    event.reply('knapp1-data', data.data[SWITCHONE]);
    event.reply('knapp2-data', data.data[SWITCHTWO]);
    event.reply('sine-raw-data', SINVALUE);
    event.reply('sine-scaled-big-data', SINSCALED);
  });
});
