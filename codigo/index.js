// Contenedor Express - Dulce Hogar
// Laboratorio 2 GSW - Wendy Yessenia Flores Reyes
const express = require('express');
const app = express();
const PORT = 9090;

// Ruta de prueba: /api/saludo?nombre=Wendy
app.get('/api/saludo', (req, res) => {
  const nombre = req.query.nombre || 'mundo';
  res.json({ mensaje: `Hola, ${nombre}`, desde: 'dulcehogar:9090' });
});

// Reservación de pedidos: /api/pedido?producto=pastel&cantidad=2
app.get('/api/pedido', (req, res) => {
  const { producto, cantidad } = req.query;
  res.json({
    pedidoId: 'PED-' + Date.now(),
    producto,
    cantidad,
    estado: 'recibido'
  });
});

// Escucha en todas las interfaces (0.0.0.0) para que WSL2 pueda llegar
// desde la IP del host Windows, no solo desde localhost.
app.listen(PORT, '0.0.0.0', () => {
  console.log(`[dulcehogar.api] http://localhost:${PORT}`);
});
