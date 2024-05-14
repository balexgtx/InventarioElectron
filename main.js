const { app, BrowserWindow } = require('electron');
const path = require('path'); // Agrega esta línea
require('electron-reload')(__dirname);
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');
}
app.whenReady().then(createWindow);
