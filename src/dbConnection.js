const sql = require('mssql');
const config = {
    user: 'balex',
    password: '123456',
    server: 'localhost',
    database: 'InventarioProyecciones',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

// Función para conectar a la base de datos
async function conectarDB() {
    try {
        await sql.connect(config);
        console.log('Conexión establecida');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

// Función para cerrar la conexión
async function cerrarConexion() {
    try {
        await sql.close();
        console.log('Conexión cerrada');
    } catch (error) {
        console.error('Error al cerrar la conexión:', error);
    }
}

// Ejemplo de uso
/*
conectarDB()
    .then(() => {
        // Realiza tu consulta aquí
        // Por ejemplo:
        return sql.query`SELECT * FROM MiTabla`;
    })
    .then((result) => {
        console.log('Resultado de la consulta:', result.recordset);
    })
    .catch((error) => {
        console.error('Error al ejecutar la consulta:', error);
    })
    .finally(() => {
        cerrarConexion();
    });
*/
module.exports = {
    conectarDB,
    cerrarConexion
};
