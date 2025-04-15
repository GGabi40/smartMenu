import express from 'express';
import cors from 'cors';
import sequelize from './config/connection.js'; // centraliza la conexión

import Order from './models/Order.js';
import orderRoutes from './routes/orderRoutes.js';

const app = express();
const port = 3000;


// Middlewares
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json());

// RUTAS
app.use('/api/orders', orderRoutes);


// Conexión:
sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos exitosa.');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });


// Sincroniza modelos (crea tablas si no existen)
sequelize.sync({ force: false}) // ⚠️ cambiar a true solo si querés borrar y recrear tablas
    .then(() => {
        console.log('Modelos Sincronizados con la BBDD.');
    })
    .catch((err) => {
        console.error(`Error al sincronizar modelos: ${err}`);
    });


// Endpoint de prueba:
app.get('/ping', (req, res) => {
    res.send('Backend de SmartMenu está funcionando!');
});


// endpoint de prueba para utilizar en thunder:
app.post('/pedidos', async(req, res) => {
    try {
        const { cliente, mesa, detalle } = req.body;
        const nuevoPedido = await Order.create({ cliente, mesa, detalle });
        res.status(201).json(nuevoPedido);
    } catch (e) {
        res.status(500).json({ message: 'Error al crear pedido ', e});
    }
});

// servidor corre:
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});