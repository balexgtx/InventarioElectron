const { BrowserWindow } = require('electron');
let window;
function createWindow() {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    window.loadFile('src/ui/login/login.html');
}

module.exports = {
    createWindow
}