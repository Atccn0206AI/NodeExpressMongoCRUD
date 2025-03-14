const express = require('express');
const mongoose = require('mongoose');
const Usuario = require('./models/Usuario');
const Producto = require('./models/Producto');
const usuarioRoutes = require('./routes/usuarioRoutes');
const productoRoutes = require('./routes/productoRoutes');
const app = express();
const PORT = 3000;


app.use(express.json());


let contadorOperaciones = 0;

app.use((req, res, next) => {
  contadorOperaciones++;
  console.log(`Operación número: ${contadorOperaciones}`);
  next();
});

const mongoURI = 'mongodb+srv://mfjm0265:bella1234@cluster0.c9am3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


mongoose.connect(mongoURI)
  .then(() => {
    console.log('Conectado a MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error conectando a MongoDB Atlas:', err);
  });

app.use('/usuarios', usuarioRoutes);
app.use('/productos', productoRoutes)

app.get('/', (req, res) => {
  res.send('¡Backend funcionando!');
});

app.get('/contadores', async (req, res) => {
  try {
    const totalUsuarios = await Usuario.countDocuments();
    const totalProductos = await Producto.countDocuments();
    res.status(200).json({ totalUsuarios, totalProductos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.get('/operaciones', (req, res) => {
  res.status(200).json({ totalOperaciones: contadorOperaciones });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});