import express from 'express';
import { 
    createOrder, 
    deleteOrder, 
    getAllOrders, 
    getOrderById, 
    updateOrder
} from '../controller/orderController.js';

const router = express.Router();

// Crea un nuevo pedido:
router.post('/', createOrder);

// Obtiene todos los pedidos:
router.get('/', getAllOrders);

// Obtiene pedidos especificos:
router.get('/:id', getOrderById);

// Elimina un pedido especifico:
router.delete('/:id', deleteOrder);

// Actualiza ruta:
router.put('/:id', updateOrder);

export default router;