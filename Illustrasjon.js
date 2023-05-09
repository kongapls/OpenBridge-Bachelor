ipcMain.on("raised flag", (event) => {
  client.doSomething(function (err, data) {
    if (err) {
      console.log("error : " + err);
      return;
    }
    event.reply("named-channel", data.data[information]);
  });
});

const { ipcRenderer } = require("electron");
const namedElement = document.getElementById("raised-flag");
ipcRenderer.on("raised-flag", (event, data) => {
  console.log("named-channel" + data);
  namedElement.innerHTML = data;
});
