const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Sirve tus archivos estáticos HTML, CSS, JS

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


const oracledb = require('oracledb');

async function getData() {
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: "admin",
      password: "Fenerun3213",
      connectionString: "oracle.ccykckyxmqyd.us-east-1.rds.amazonaws.com:1521/orcl"
    });

    const result = await connection.execute(`SELECT sp.*, p.Imagen_URL 
    FROM Seguimiento_Productos sp
    JOIN Productos p ON sp.ID_Producto = p.ID_Producto`);
    return result.rows;
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

app.get('/productos', async (req, res) => {
    try {
      const data = await getData();
      res.json(data);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  