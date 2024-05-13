const {createWindow} = require('./main');
const {app} = require('electron');
const {conectardb,cerrarConexion} = require('./dbConnection');

require('electron-reload')(__dirname)

//conectardb();
//cerrarConexion();

app.allowRenderProcessReuse = false;
app.whenReady().then(createWindow);